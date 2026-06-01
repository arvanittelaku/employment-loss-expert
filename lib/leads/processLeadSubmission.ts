import { appendRow, isGoogleSheetsConfigured } from "@/lib/google-sheets";
import { formatLeadRow } from "./formatLeadRow";
import { parseLeadPayload } from "./parseLeadPayload";
import { BRAND_NAME, type LeadPayload } from "./types";

async function postToWebhook(lead: {
  fullName: string;
  email: string;
  phone: string;
}): Promise<boolean> {
  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

  if (!webhookUrl) return false;

  const outbound = {
    "Full Name": lead.fullName,
    Email: lead.email,
    "Phone Number": lead.phone,
    "Brand name": BRAND_NAME,
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(outbound),
  });

  return response.ok;
}

async function writeToGoogleSheets(
  lead: ReturnType<typeof parseLeadPayload> & object
): Promise<boolean> {
  if (!isGoogleSheetsConfigured()) return false;

  try {
    await appendRow(formatLeadRow(lead));
    return true;
  } catch (error) {
    console.error("Google Sheets write failed:", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return false;
  }
}

export type ProcessLeadResult =
  | { ok: true }
  | { ok: false; status: number; error: string };

export async function processLeadSubmission(body: LeadPayload): Promise<ProcessLeadResult> {
  const lead = parseLeadPayload(body);

  if (!lead) {
    return { ok: false, status: 400, error: "fullName and email are required" };
  }

  if (!lead.lawFirm || !lead.practiceArea || !lead.caseType || !lead.description) {
    return { ok: false, status: 400, error: "Please complete all required fields" };
  }

  const sheetsOk = await writeToGoogleSheets(lead);
  let webhookOk = false;

  try {
    webhookOk = await postToWebhook(lead);
  } catch (error) {
    console.error("Webhook delivery failed:", error);
  }

  if (!sheetsOk && !webhookOk) {
    const hasWebhook = Boolean(
      process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL
    );
    const hasSheets = isGoogleSheetsConfigured();

    if (!hasWebhook && !hasSheets) {
      return { ok: false, status: 500, error: "Lead storage is not configured" };
    }

    return { ok: false, status: 502, error: "Failed to save your enquiry" };
  }

  return { ok: true };
}
