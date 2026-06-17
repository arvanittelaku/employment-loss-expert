import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { SITE_EMAIL } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Instruct an Employment Loss Expert Witness | EmploymentLossExpert.com UK",
  description:
    "Submit your case details to be matched with a qualified employment loss expert witness for PI, ET, or family law proceedings in England and Wales. Response within 1 business day.",
  path: "/contact",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

const intakePaths = [
  {
    title: "Personal Injury",
    description: "Loss of earnings, Ogden Tables, Smith v Manchester, residual earning capacity.",
    href: "/practice-areas/personal-injury",
  },
  {
    title: "Employment Tribunal",
    description: "ET Schedule of Loss, discrimination, Polkey, ERA 2025 uncapped awards.",
    href: "/practice-areas/employment-tribunal",
  },
  {
    title: "Family Law",
    description: "Loss of career, financial remedy, FPR Part 25 employment reports.",
    href: "/practice-areas/family-law",
  },
];

const trustPoints = [
  "Personal injury, ET, and family law covered",
  "CPR Part 35 and FPR Part 25 compliant",
  "ERA 2025 ready: uncapped award calculations",
  "Response within 1 business day",
];

export default function ContactPage() {
  return (
    <PageLayout>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        title="Instruct an Employment Loss Expert Witness"
        subtitle="Submit your case details to be matched with a qualified employment loss expert witness for proceedings in England and Wales."
        breadcrumbs={breadcrumbs}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {intakePaths.map((path) => (
            <div key={path.title} className="rounded-lg border border-border bg-section-alt p-5">
              <h2 className="font-bold text-primary">{path.title}</h2>
              <p className="mt-2 text-sm text-body">{path.description}</p>
              <Link href={path.href} className="mt-3 inline-block text-sm font-semibold text-accent">
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <aside className="rounded-lg border border-border bg-primary p-6 text-white">
            <h2 className="text-lg font-bold">Why instruct through us?</h2>
            <ul className="mt-4 space-y-3">
              {trustPoints.map((point) => (
                <li key={point} className="flex gap-2 text-sm text-white/90">
                  <span className="text-accent" aria-hidden>
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-white/20 pt-6">
              <p className="text-sm font-semibold text-white/90">Email us directly</p>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="mt-2 block text-sm font-medium text-accent hover:text-white"
              >
                {SITE_EMAIL}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </PageLayout>
  );
}
