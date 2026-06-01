import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { SITE_EMAIL } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Thank You | EmploymentLossExpert.com",
  description: "Your enquiry has been received.",
  path: "/thank-you",
  noindex: true,
  nofollow: true,
});

const nextSteps = [
  {
    title: "We review your case details",
    text: "A member of our team reads your instruction enquiry and matches the right expert discipline.",
  },
  {
    title: "Response within 1 business day",
    text: "We aim to reply by email with availability, scope, and next steps for instruction.",
  },
  {
    title: "Urgent matters",
    text: "If your hearing or deadline is within 48 hours, call or email us directly so we can prioritise.",
  },
];

export default function ThankYouPage() {
  return (
    <PageLayout showCTA={false}>
      <section className="bg-primary py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 sm:h-20 sm:w-20"
            aria-hidden
          >
            <svg
              className="h-8 w-8 text-accent sm:h-10 sm:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">Thank You</h1>
          <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
            Your instruction enquiry has been received. We will respond within 1 business day.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h2 className="text-center text-lg font-semibold text-primary sm:text-xl">What happens next</h2>
        <ol className="mt-8 space-y-4">
          {nextSteps.map((step, index) => (
            <li
              key={step.title}
              className="card-shadow flex gap-4 rounded-lg border border-border bg-white p-4 sm:p-5"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white sm:h-10 sm:w-10"
                aria-hidden
              >
                {index + 1}
              </span>
              <div className="min-w-0 text-left">
                <h3 className="font-semibold text-primary">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-body sm:text-base">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded bg-accent px-8 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary"
          >
            Return to Homepage
          </Link>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="inline-flex min-h-11 items-center justify-center rounded border border-border bg-white px-8 py-3 text-center text-sm font-semibold text-primary transition-colors hover:bg-section-alt"
          >
            Email {SITE_EMAIL}
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
