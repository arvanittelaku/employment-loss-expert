import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { practiceAreasHubLinks } from "@/lib/data/seo-related-links";
import { RelatedLinks } from "@/components/seo/RelatedLinks";

export const metadata: Metadata = createMetadata({
  title: "Employment Loss Expert Witnesses by Practice Area | PI, ET & Family UK",
  description:
    "Employment loss expert witnesses for UK personal injury, employment tribunal, and family law solicitors. Find the right expert for your practice area.",
  path: "/practice-areas",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Practice Areas", path: "/practice-areas" },
];

const areas = [
  {
    title: "Personal Injury & Clinical Negligence",
    description:
      "Loss of earnings past and future, Ogden Tables, Smith v Manchester, pension loss, residual earning capacity, and Fatal Accidents Act dependency claims.",
    href: "/practice-areas/personal-injury",
  },
  {
    title: "Employment Tribunal",
    description:
      "ET Schedule of Loss, Polkey reductions, discrimination compensation, whistleblowing, wrongful dismissal, and uncapped ERA 2025 awards.",
    href: "/practice-areas/employment-tribunal",
  },
  {
    title: "Family Law",
    description:
      "Loss of career in divorce, financial remedy proceedings, FPR Part 25 employment reports, career gap analysis, and SJE appointments.",
    href: "/practice-areas/family-law",
  },
];

export default function PracticeAreasHubPage() {
  return (
    <PageLayout>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        title="Employment Loss Expert Witnesses by Practice Area"
        subtitle="Three distinct audiences, one specialist service. Find employment loss expert witnesses tailored to your practice area."
        breadcrumbs={breadcrumbs}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {areas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="rounded-lg border border-border bg-white p-6 card-shadow transition-shadow hover:shadow-md"
            >
              <h2 className="mb-3 text-xl font-bold text-primary">{area.title}</h2>
              <p className="text-body">{area.description}</p>
              <span className="mt-4 inline-block font-semibold text-accent">Learn more →</span>
            </Link>
          ))}
        </div>
        <RelatedLinks title="Explore employment loss expert evidence" links={practiceAreasHubLinks} />
      </div>
    </PageLayout>
  );
}
