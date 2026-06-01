import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { guides } from "@/lib/data/guides";
import { guidesHubLinks } from "@/lib/data/seo-related-links";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { itemListSchema } from "@/lib/schema/itemList";

export const metadata: Metadata = createMetadata({
  title: "Solicitor Guides: Employment Loss Expert Witnesses UK | PI, ET & Family Law",
  description:
    "In-depth guides for UK solicitors on employment loss expert witnesses: loss of earnings, ET compensation, discrimination, and ERA 2025 uncapped awards.",
  path: "/guides",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Guides", path: "/guides" },
];

export default function GuidesHubPage() {
  return (
    <PageLayout>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          itemListSchema({
            name: "Solicitor guides on employment loss expert witnesses",
            items: guides.map((g) => ({ name: g.h1, path: `/guides/${g.slug}` })),
          }),
        ]}
      />
      <PageHero
        title="Solicitor Guides: Employment Loss Expert Witnesses UK"
        subtitle="In-depth guides for UK solicitors on employment loss expert evidence across PI, ET, and family law."
        breadcrumbs={breadcrumbs}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="rounded-lg border border-border bg-white p-6 card-shadow transition-shadow hover:shadow-md"
            >
              <h2 className="font-bold text-primary">{guide.h1}</h2>
              <p className="mt-2 text-sm text-body">{guide.sections[0].content.slice(0, 120)}...</p>
              <span className="mt-4 inline-block text-sm font-semibold text-accent">
                Read guide →
              </span>
            </Link>
          ))}
        </div>
        <RelatedLinks title="Related employment loss resources" links={guidesHubLinks} />
      </div>
    </PageLayout>
  );
}
