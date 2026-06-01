import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { DataTable } from "@/components/DataTable";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = createMetadata({
  title: "Employment Loss Expert Witness Fees UK | 2025 Report Costs & Hourly Rates",
  description:
    "UK employment loss expert witnesses typically charge £150 to £400/hour. Learn about report fees, Legal Aid rates, and what affects total costs.",
  path: "/fees",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Fees", path: "/fees" },
];

export default function FeesPage() {
  return (
    <PageLayout>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        title="Employment Loss Expert Witness Fees UK"
        breadcrumbs={breadcrumbs}
      />
      <article className="prose-content mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2>Employment Consultant Rates</h2>
        <DataTable
          headers={["Service", "Typical Fee"]}
          rows={[
            ["Hourly rate (standard)", "£100 to £200/hour"],
            ["Hourly rate (senior/specialist)", "£150 to £300/hour"],
            ["Standard employment report", "£800 to £2,500"],
            ["Complex career model report", "£2,000 to £6,000"],
          ]}
        />

        <h2>Forensic Accountant Rates</h2>
        <DataTable
          headers={["Service", "Typical Fee"]}
          rows={[
            ["Hourly rate (general)", "£150 to £350/hour"],
            ["Hourly rate (senior specialist)", "£300 to £500/hour"],
            ["Standard loss of earnings schedule", "£1,500 to £5,000"],
            ["Complex Ogden/multi-head report", "£3,000 to £10,000+"],
          ]}
        />

        <h2>Legal Aid</h2>
        <p>
          Many employment loss reports in PI and some ET cases are Legal Aid compatible. Experts can
          confirm applicable rates at instruction.
        </p>

        <h2>Shared SJE Costs</h2>
        <p>
          In SJE cases (common in family and some ET proceedings), costs are shared between the
          parties, typically 50% each.
        </p>

        <h2>What Affects Cost</h2>
        <ul>
          <li>Complexity of employment history</li>
          <li>Self-employment or business ownership issues</li>
          <li>ERA 2025 uncapped calculation complexity</li>
          <li>Multiple heads of loss</li>
          <li>Whether oral evidence is needed</li>
        </ul>
      </article>
    </PageLayout>
  );
}
