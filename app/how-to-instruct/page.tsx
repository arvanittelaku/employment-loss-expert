import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = createMetadata({
  title: "How to Instruct an Employment Loss Expert Witness UK | Step-by-Step Guide",
  description:
    "Step-by-step guide for UK solicitors on instructing the right employment loss expert witness for PI, ET, or family law cases.",
  path: "/how-to-instruct",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "How to Instruct", path: "/how-to-instruct" },
];

export default function HowToInstructPage() {
  return (
    <PageLayout>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        title="How to Instruct an Employment Loss Expert Witness"
        breadcrumbs={breadcrumbs}
      />
      <article className="prose-content mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2>For PI Solicitors</h2>
        <ol>
          <li>Identify loss type (future loss vs Smith v Manchester)</li>
          <li>Decide: vocational expert + forensic accountant, or forensic accountant alone?</li>
          <li>Obtain medical evidence on functional capacity first</li>
          <li>Provide earnings history (5 years tax returns / P60s)</li>
          <li>Letter of instruction with specific questions</li>
        </ol>

        <h2>For ET Solicitors</h2>
        <ol>
          <li>Identify ERA 2025 impact (dismissal date after Jan 2027?)</li>
          <li>Build Schedule of Loss with expert support</li>
          <li>Address Polkey and mitigation</li>
          <li>Provide employment history and earnings evidence</li>
        </ol>

        <h2>For Family Solicitors</h2>
        <ol>
          <li>Identify whether court permission needed (FPR Part 25)</li>
          <li>Career gap or earning capacity in dispute?</li>
          <li>Consider SJE appointment for both parties</li>
        </ol>

        <h2>Matching Timeline</h2>
        <ol>
          <li>Submit case details via our contact form</li>
          <li>Initial review within 1 business day</li>
          <li>Expert profile and availability provided</li>
          <li>Conflict check completed</li>
          <li>Letter of instruction agreed</li>
          <li>Expert accepts instruction</li>
          <li>Report delivered to agreed deadline</li>
        </ol>

        <h2>Red Flags When Selecting an Expert</h2>
        <ul>
          <li>Cannot explain the applicable calculation methodology for your case type</li>
          <li>No ERA 2025 awareness for ET instructions</li>
          <li>Unwilling to comply with CPR Part 35 or FPR Part 25 requirements</li>
          <li>No professional indemnity insurance</li>
        </ul>
      </article>
    </PageLayout>
  );
}
