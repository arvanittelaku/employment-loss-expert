import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { GlossaryTerm } from "@/components/seo/GlossaryTerm";
import { GlossarySearchForm } from "@/components/seo/GlossarySearchForm";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { faqSchema } from "@/lib/schema/faq";
import { glossaryTerms } from "@/lib/data/glossary";
import { glossaryHubLinks } from "@/lib/data/seo-related-links";

export const metadata: Metadata = createMetadata({
  title: "Employment Loss Expert Witness Glossary | Key UK Legal Terms",
  description:
    "Definitions of key employment loss and expert witness terms for UK proceedings: from Ogden Tables to Polkey, Smith v Manchester, Vento bands, and ERA 2025.",
  path: "/glossary",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Glossary", path: "/glossary" },
];

function filterTerms(query?: string) {
  if (!query?.trim()) return glossaryTerms;
  const q = query.trim().toLowerCase();
  return glossaryTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(q) ||
      t.summary.toLowerCase().includes(q) ||
      t.definition.toLowerCase().includes(q) ||
      t.fragmentId.includes(q)
  );
}

type PageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function GlossaryPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const visibleTerms = filterTerms(q);

  const glossaryFaqs = visibleTerms.map((t) => ({
    question: t.term,
    answer: `${t.summary} ${t.definition}`,
  }));

  return (
    <PageLayout>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(glossaryFaqs)]} />
      <PageHero
        title="Employment Loss Expert Witness Glossary"
        subtitle="Key UK legal and financial terms for employment loss expert evidence. Each term links to detailed guides where relevant."
        breadcrumbs={breadcrumbs}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <GlossarySearchForm query={q} resultCount={visibleTerms.length} />
        <p className="mb-8 text-body">
          Jump to a term below or explore our{" "}
          <Link href="/how-loss-is-calculated" className="font-semibold text-accent">
            complete loss calculation guide
          </Link>
          .
        </p>
        {visibleTerms.length === 0 ? (
          <p className="text-body">No glossary terms match your search. Try a different keyword.</p>
        ) : (
          <div className="space-y-6">
            {visibleTerms.map((term) => (
              <GlossaryTerm key={term.fragmentId} term={term} />
            ))}
          </div>
        )}
        <RelatedLinks title="Explore further" links={glossaryHubLinks} />
      </div>
    </PageLayout>
  );
}
