export const BRAND_NAME = "EmploymentLossExpert";

export type LeadSubmission = {
  fullName: string;
  email: string;
  phone: string;
  lawFirm: string;
  practiceArea: string;
  caseType: string;
  expertNeed: string;
  expertAppointment: string;
  earnings: string;
  deadline: string;
  era2025: string;
  urgency: string;
  description: string;
};

export type LeadPayload = Partial<LeadSubmission> & {
  fullName?: string;
  email?: string;
  phone?: string;
};
