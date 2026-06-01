import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = createMetadata({
  title: "Employment Loss Expert Witness Qualifications UK | Credentials & Standards",
  description:
    "What credentials should a UK employment loss expert witness hold? Employment consultancy, vocational rehabilitation, labour market expertise, and CPR Part 35 compliance explained.",
  path: "/qualifications",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Qualifications", path: "/qualifications" },
];

export default function QualificationsPage() {
  return (
    <PageLayout>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        title="Employment Loss Expert Witness Qualifications & Credentials"
        breadcrumbs={breadcrumbs}
      />
      <article className="prose-content mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2>Two Expert Profiles</h2>
        <h3>Employment Consultant / Vocational Expert</h3>
        <ul>
          <li>Background in career guidance, vocational rehabilitation, HR, or occupational psychology</li>
          <li>CDEIAP (Career Development Institute) membership</li>
          <li>NAPIER (National Association of Professional Employment Experts in Rehabilitation) membership or equivalent</li>
          <li>Prior court/tribunal acceptance history</li>
          <li>CPR Part 35 / FPR Part 25 compliant report experience</li>
          <li>Specific experience in PI, ET, or family law as appropriate</li>
        </ul>

        <h3>Forensic Accountant (for financial quantum)</h3>
        <ul>
          <li>ACA / FCA (ICAEW)</li>
          <li>ACCA / FCCA</li>
          <li>Experience in employment loss calculations (Ogden Tables, discount rate, ET methodology)</li>
          <li>CPR Part 35 / FPR Part 25 report history</li>
        </ul>

        <h2>Experience Requirements</h2>
        <p>
          Active professional practice; prior court or tribunal testimony; knowledge of Ogden Tables
          8th Edition; familiarity with ERA 2025 changes for ET cases; professional indemnity
          insurance.
        </p>

        <h2>CPR Part 35 & FPR Part 25</h2>
        <p>
          Experts owe an overriding duty to the court. Reports must state the expert&apos;s
          qualifications, instructions received, documents relied upon, methodology, and conclusions.
          Experts must distinguish facts from opinion and comply with Practice Direction 35 (civil)
          or FPR Part 25 (family) as applicable.
        </p>

        <h2>Red Flags</h2>
        <ul>
          <li>Expert who quotes outdated Ogden Tables (not 8th edition)</li>
          <li>No knowledge of ERA 2025 implications for ET cases</li>
          <li>Cannot explain Smith v Manchester vs multiplier/multiplicand distinction</li>
          <li>No prior court acceptance</li>
          <li>Full-time expert with no active practice</li>
        </ul>
      </article>
    </PageLayout>
  );
}
