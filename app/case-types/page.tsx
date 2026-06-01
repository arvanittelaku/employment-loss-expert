import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { caseTypes } from "@/lib/data/case-types";
import { caseTypesHubLinks } from "@/lib/data/seo-related-links";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { itemListSchema } from "@/lib/schema/itemList";

export const metadata: Metadata = createMetadata({
  title: "Case Types Requiring an Employment Loss Expert Witness | UK Guide",
  description:
    "Which UK cases need an employment loss expert witness? Personal injury, discrimination, wrongful dismissal, whistleblowing, divorce, and more explained.",
  path: "/case-types",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Case Types", path: "/case-types" },
];

export default function CaseTypesHubPage() {
  return (
    <PageLayout>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          itemListSchema({
            name: "UK case types requiring employment loss expert witnesses",
            items: caseTypes.map((ct) => ({
              name: ct.title,
              path: `/case-types/${ct.slug}`,
            })),
          }),
        ]}
      />
      <PageHero
        title="Case Types Requiring an Employment Loss Expert Witness"
        subtitle="Explore the UK case types where employment loss expert evidence is essential."
        breadcrumbs={breadcrumbs}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {caseTypes.map((ct) => (
            <Link
              key={ct.slug}
              href={`/case-types/${ct.slug}`}
              className="rounded-lg border border-border bg-white p-5 card-shadow transition-shadow hover:shadow-md"
            >
              <h2 className="font-bold text-primary">{ct.title}</h2>
              <p className="mt-2 line-clamp-2 text-sm text-body">{ct.paragraphs[0]}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-accent">
                Read guide →
              </span>
            </Link>
          ))}
        </div>
        <RelatedLinks title="Related employment loss resources" links={caseTypesHubLinks} />
      </div>
    </PageLayout>
  );
}
