import { NextResponse } from "next/server";
import { processLeadSubmission } from "@/lib/leads/processLeadSubmission";
import type { LeadPayload } from "@/lib/leads/types";

export async function POST(request: Request) {
  let body: LeadPayload;

  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = await processLeadSubmission(body);

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  return NextResponse.json({ ok: true });
}
