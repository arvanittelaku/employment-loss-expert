/**
 * Netlify serverless handler: webhook + Google Sheets.
 * Logic mirrors lib/leads/processLeadSubmission.ts
 */
const { google } = require("googleapis");

const BRAND_NAME = "EmploymentLossExpert";

function sanitize(value) {
  if (value == null) return "";
  return String(value).replace(/<[^>]*>/g, "").trim();
}

function parseLead(body) {
  const fullName = sanitize(body.fullName);
  const email = sanitize(body.email).toLowerCase();
  const phone = sanitize(body.phone);

  if (!fullName || !email) return null;

  return {
    fullName,
    email,
    phone,
    lawFirm: sanitize(body.lawFirm),
    practiceArea: sanitize(body.practiceArea),
    caseType: sanitize(body.caseType),
    expertNeed: sanitize(body.expertNeed),
    expertAppointment: sanitize(body.expertAppointment) || "Not decided",
    earnings: sanitize(body.earnings) || "Unknown",
    deadline: sanitize(body.deadline),
    era2025: sanitize(body.era2025) || "Not sure",
    urgency: sanitize(body.urgency) || "Standard",
    description: sanitize(body.description),
  };
}

function formatRow(lead) {
  return [
    new Date().toISOString(),
    BRAND_NAME,
    lead.fullName,
    lead.email,
    lead.phone,
    lead.lawFirm,
    lead.practiceArea,
    lead.caseType,
    lead.expertNeed,
    lead.expertAppointment,
    lead.earnings,
    lead.deadline,
    lead.era2025,
    lead.urgency,
    lead.description,
  ];
}

function normalizePrivateKey(raw) {
  if (!raw) return undefined;
  let key = String(raw).trim();
  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    key = key.slice(1, -1);
  }
  return key.replace(/\\n/g, "\n");
}

function sheetsConfigured() {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY &&
      process.env.GOOGLE_SHEET_ID
  );
}

async function writeToSheets(lead) {
  if (!sheetsConfigured()) return false;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const sheetName = process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `${sheetName}!A:A`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [formatRow(lead)] },
    });

    return true;
  } catch (err) {
    console.error("Google Sheets write failed:", err.message);
    return false;
  }
}

async function postWebhook(lead) {
  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

  if (!webhookUrl) return false;

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "Full Name": lead.fullName,
        Email: lead.email,
        "Phone Number": lead.phone,
        "Brand name": BRAND_NAME,
      }),
    });
    return response.ok;
  } catch (err) {
    console.error("Webhook failed:", err.message);
    return false;
  }
}

exports.handler = async (event) => {
  const json = (statusCode, body) => ({
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Invalid JSON body" });
  }

  const lead = parseLead(body);
  if (!lead) {
    return json(400, { error: "fullName and email are required" });
  }

  if (!lead.lawFirm || !lead.practiceArea || !lead.caseType || !lead.description) {
    return json(400, { error: "Please complete all required fields" });
  }

  const sheetsOk = await writeToSheets(lead);
  const webhookOk = await postWebhook(lead);

  if (!sheetsOk && !webhookOk) {
    const configured = sheetsConfigured() || Boolean(process.env.Lead_notification_url);
    if (!configured) {
      return json(500, { error: "Lead storage is not configured" });
    }
    return json(502, { error: "Failed to save your enquiry" });
  }

  return json(200, { ok: true });
};
