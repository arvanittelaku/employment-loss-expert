import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { DataTable } from "@/components/DataTable";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { articleSchema } from "@/lib/schema/organization";
import { era2025RelatedLinks } from "@/lib/data/seo-related-links";
import { RelatedLinks } from "@/components/seo/RelatedLinks";

const PAGE_TITLE =
  "Employment Rights Act 2025: Impact on Employment Loss Expert Evidence UK";
const PAGE_DESCRIPTION =
  "The Employment Rights Act 2025 removes the unfair dismissal compensation cap from January 2027. What this means for employment loss expert evidence, Polkey reductions, and ET compensation schedules.";

export const metadata: Metadata = createMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/era-2025",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "ERA 2025", path: "/era-2025" },
];

export default function Era2025Page() {
  return (
    <PageLayout>
      <JsonLd
        data={[
          articleSchema({
            title: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            path: "/era-2025",
            aboutServiceId: "et-schedule-of-loss",
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <PageHero
        title="Employment Rights Act 2025: What It Means for Employment Loss Expert Evidence"
        breadcrumbs={breadcrumbs}
      />
      <article className="prose-content mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2>The Most Significant Change to ET Compensation in a Decade</h2>
        <p>
          The Employment Rights Act 2025 removes both statutory caps on unfair dismissal
          compensation (the lower of 52 weeks&apos; gross pay or £118,223) from 1 January 2027.
          Tribunals will assess compensation based solely on the employee&apos;s actual financial
          loss.
        </p>

        <h2>Key Changes at a Glance</h2>
        <DataTable
          caption="ERA 2025 key changes"
          headers={["Change", "When", "Impact on Expert Evidence"]}
          rows={[
            [
              "Unfair dismissal cap removed",
              "1 January 2027",
              "Precise loss quantification essential for every significant case",
            ],
            [
              "Qualifying period: 2 years to 6 months",
              "1 January 2027",
              "More claimants eligible; higher volume of expert evidence needed",
            ],
            [
              "Protective award doubled to 180 days",
              "April 2026",
              "Higher collective redundancy exposure",
            ],
            [
              "Whistleblowing: sexual harassment added as qualifying disclosure",
              "6 April 2026",
              "More uncapped whistleblowing claims",
            ],
            [
              "SSP: waiting days removed, lower earnings limit removed",
              "6 April 2026",
              "Wider SSP entitlement, relevant to loss calculations",
            ],
          ]}
        />

        <h2>Why Uncapped Awards Mean Expert Evidence Is Now Essential</h2>
        <p>
          Under the current capped regime, many ET cases settle with rough estimates of future loss
          because the cap limits exposure. From January 2027, for senior employees and high earners,
          uncapped awards mean the financial stakes are far higher. Tribunals will scrutinise actual
          loss evidence carefully, requiring the same rigour as High Court personal injury or
          commercial litigation.
        </p>

        <h2>The Polkey Question: More Important Than Ever</h2>
        <p>
          With the cap removed, Polkey deductions may become a crucial tool in an employer&apos;s
          arsenal when a tribunal is considering remedy for ordinary unfair dismissal, particularly
          when dealing with senior exits. Employment loss experts model the financial impact of
          different Polkey percentage outcomes, giving solicitors the data they need to advise
          clients on realistic exposure and settlement strategy.
        </p>

        <h2>What Solicitors Need to Do Now</h2>
        <ol>
          <li>
            Review existing ET cases where dismissal date falls after 1 January 2027: uncapped rules
            will apply
          </li>
          <li>
            Instruct employment loss experts early in significant cases to establish baseline loss
            figures
          </li>
          <li>
            Consider Polkey arguments: document performance issues, process steps, and business case
            now
          </li>
          <li>Update standard Schedule of Loss templates for uncapped methodology</li>
        </ol>

        <h2>Employees Recruited Before 1 July 2026: Already Affected</h2>
        <p>
          Any employee recruited on or before 1 July 2026 will immediately gain the right to claim
          unfair dismissal on 1 January 2027, meaning the new law already impacts on recruiting
          decisions being made now.
        </p>

        <RelatedLinks links={era2025RelatedLinks} />
      </article>
    </PageLayout>
  );
}
