import type { LeadPayload, LeadSubmission } from "./types";

function sanitize(value: unknown): string {
  if (value == null) return "";
  return String(value).replace(/<[^>]*>/g, "").trim();
}

export function parseLeadPayload(body: LeadPayload): LeadSubmission | null {
  const fullName = sanitize(body.fullName);
  const email = sanitize(body.email).toLowerCase();
  const phone = sanitize(body.phone);

  if (!fullName || !email) {
    return null;
  }

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
