"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      lawFirm: String(formData.get("lawFirm") ?? "").trim(),
      practiceArea: String(formData.get("practiceArea") ?? "").trim(),
      caseType: String(formData.get("caseType") ?? "").trim(),
      expertNeed: String(formData.get("expertNeed") ?? "").trim(),
      expertAppointment: String(formData.get("expertAppointment") ?? "").trim(),
      earnings: String(formData.get("earnings") ?? "").trim(),
      deadline: String(formData.get("deadline") ?? "").trim(),
      era2025: String(formData.get("era2025") ?? "").trim(),
      urgency: String(formData.get("urgency") ?? "").trim(),
      description: String(formData.get("description") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        router.push("/thank-you");
        return;
      }

      let message = "There was a problem submitting your enquiry.";
      try {
        const data = (await res.json()) as { error?: string };
        if (data.error) message = data.error;
      } catch {
        /* ignore */
      }
      setErrorMessage(message);
      setStatus("error");
    } catch {
      setErrorMessage("Network error. Please try again or email us directly.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full min-h-11 rounded border border-border px-3 py-2 text-body focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";
  const labelClass = "mb-1 block text-sm font-medium text-primary";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name *
          </label>
          <input type="text" id="name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="lawFirm" className={labelClass}>
            Law Firm *
          </label>
          <input type="text" id="lawFirm" name="lawFirm" required className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input type="email" id="email" name="email" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input type="tel" id="phone" name="phone" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="practiceArea" className={labelClass}>
          Practice Area *
        </label>
        <select id="practiceArea" name="practiceArea" required className={inputClass}>
          <option value="">Select practice area</option>
          <option value="Personal Injury / Clinical Negligence">
            Personal Injury / Clinical Negligence
          </option>
          <option value="Employment Tribunal">Employment Tribunal</option>
          <option value="Family Law / Financial Remedy">Family Law / Financial Remedy</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="caseType" className={labelClass}>
          Case Type *
        </label>
        <select id="caseType" name="caseType" required className={inputClass}>
          <option value="">Select case type</option>
          <option value="Loss of Earnings (PI)">Loss of Earnings (PI)</option>
          <option value="Residual Earning Capacity">Residual Earning Capacity</option>
          <option value="Unfair Dismissal ET">Unfair Dismissal ET</option>
          <option value="Discrimination">Discrimination</option>
          <option value="Whistleblowing">Whistleblowing</option>
          <option value="Wrongful Dismissal">Wrongful Dismissal</option>
          <option value="Divorce / Loss of Career">Divorce / Loss of Career</option>
          <option value="Fatal Accident">Fatal Accident</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="expertNeed" className={labelClass}>
          Specific Need *
        </label>
        <select id="expertNeed" name="expertNeed" required className={inputClass}>
          <option value="">Select expert type</option>
          <option value="Employment Consultant / Vocational Expert">
            Employment Consultant / Vocational Expert
          </option>
          <option value="Forensic Accountant (financial quantum)">
            Forensic Accountant (financial quantum)
          </option>
          <option value="Both">Both</option>
          <option value="Not Sure">Not Sure</option>
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="expertAppointment" className={labelClass}>
            SJE or party-appointed
          </label>
          <select id="expertAppointment" name="expertAppointment" className={inputClass}>
            <option value="Not decided">Not decided</option>
            <option value="SJE">SJE</option>
            <option value="Party-appointed">Party-appointed</option>
          </select>
        </div>
        <div>
          <label htmlFor="earnings" className={labelClass}>
            Approximate annual earnings of claimant
          </label>
          <select id="earnings" name="earnings" className={inputClass}>
            <option value="Unknown">Unknown</option>
            <option value="Under £30k">Under £30k</option>
            <option value="£30k to £60k">£30k to £60k</option>
            <option value="£60k to £100k">£60k to £100k</option>
            <option value="Over £100k">Over £100k</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="deadline" className={labelClass}>
            Hearing / deadline date
          </label>
          <input type="date" id="deadline" name="deadline" className={inputClass} />
        </div>
        <div>
          <label htmlFor="era2025" className={labelClass}>
            ERA 2025 relevant? (dismissal after Jan 2027)
          </label>
          <select id="era2025" name="era2025" className={inputClass}>
            <option value="Not sure">Not sure</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="urgency" className={labelClass}>
          Urgency
        </label>
        <select id="urgency" name="urgency" className={inputClass}>
          <option value="Standard">Standard</option>
          <option value="Urgent (within 1 week)">Urgent (within 1 week)</option>
          <option value="Very urgent (within 48 hours)">Very urgent (within 48 hours)</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>
          Brief case description *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className={`${inputClass} min-h-[120px]`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-highlight" role="alert">
          {errorMessage ?? "There was a problem submitting your enquiry."} Please email us
          directly at info@employmentlossexpert.com
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-11 w-full items-center justify-center rounded bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Submitting..." : "Instruct an Expert Witness"}
      </button>
    </form>
  );
}
