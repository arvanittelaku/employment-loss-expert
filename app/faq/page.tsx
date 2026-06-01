import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { faqSchema } from "@/lib/schema/faq";
import { siteFaqs } from "@/lib/data/faq";
import { faqHubLinks } from "@/lib/data/seo-related-links";
import { RelatedLinks } from "@/components/seo/RelatedLinks";

export const metadata: Metadata = createMetadata({
  title: "Employment Loss Expert Witness FAQ UK | Common Questions Answered",
  description:
    "Answers to common questions about employment loss expert witnesses: Ogden Tables, Smith v Manchester, Polkey, ERA 2025, fees, and CPR Part 35.",
  path: "/faq",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
];

export default function FAQPage() {
  return (
    <PageLayout>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(siteFaqs)]} />
      <PageHero
        title="Employment Loss Expert Witness FAQ"
        subtitle="Answers to common questions from UK solicitors about employment loss expert witnesses."
        breadcrumbs={breadcrumbs}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <FAQSection faqs={siteFaqs} title="Common Questions" />
        <RelatedLinks title="Related pages" links={faqHubLinks} />
      </div>
    </PageLayout>
  );
}
