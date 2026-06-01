import { BRAND_NAME, type LeadSubmission } from "./types";

/** Column order for Google Sheet row (match header row in Sheet14). */
export function formatLeadRow(lead: LeadSubmission): (string | number)[] {
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

export const SHEET_HEADER_ROW = [
  "Timestamp",
  "Brand name",
  "Full Name",
  "Email",
  "Phone Number",
  "Law Firm",
  "Practice Area",
  "Case Type",
  "Expert Need",
  "SJE or Party-appointed",
  "Claimant Earnings",
  "Hearing / Deadline",
  "ERA 2025 Relevant",
  "Urgency",
  "Case Description",
];
