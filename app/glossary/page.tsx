import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { GlossaryTerm } from "@/components/seo/GlossaryTerm";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { faqSchema } from "@/lib/schema/faq";
import { glossaryTerms } from "@/lib/data/glossary";

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

const glossaryFaqs = glossaryTerms.map((t) => ({
  question: t.term,
  answer: `${t.summary} ${t.definition}`,
}));

const glossaryHubLinks = [
  { href: "/how-loss-is-calculated", label: "How employment loss is calculated" },
  { href: "/era-2025", label: "ERA 2025 guide" },
  { href: "/guides", label: "Solicitor guides" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Instruct an expert witness" },
];

export default function GlossaryPage() {
  return (
    <PageLayout>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(glossaryFaqs)]} />
      <PageHero
        title="Employment Loss Expert Witness Glossary"
        subtitle="Key UK legal and financial terms for employment loss expert evidence. Each term links to detailed guides where relevant."
        breadcrumbs={breadcrumbs}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="mb-8 text-body">
          Jump to a term below or explore our{" "}
          <Link href="/how-loss-is-calculated" className="font-semibold text-accent">
            complete loss calculation guide
          </Link>
          .
        </p>
        <div className="space-y-6">
          {glossaryTerms.map((term) => (
            <GlossaryTerm key={term.fragmentId} term={term} />
          ))}
        </div>
        <RelatedLinks title="Explore further" links={glossaryHubLinks} />
      </div>
    </PageLayout>
  );
}
