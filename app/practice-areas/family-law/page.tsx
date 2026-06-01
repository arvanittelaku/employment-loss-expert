import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { faqSchema } from "@/lib/schema/faq";
import { getPracticeAreaRelatedLinks } from "@/lib/data/seo-related-links";
import { RelatedLinks } from "@/components/seo/RelatedLinks";

export const metadata: Metadata = createMetadata({
  title: "Family Law Employment Loss Expert Witness UK | Divorce & Loss of Career",
  description:
    "Employment loss expert witnesses for UK family solicitors. Loss of career in divorce, financial remedy proceedings, matrimonial employment reports, and FPR Part 25 compliance.",
  path: "/practice-areas/family-law",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Practice Areas", path: "/practice-areas" },
  { name: "Family Law", path: "/practice-areas/family-law" },
];

const faqs = [
  {
    question: "When is an employment expert needed in divorce proceedings?",
    answer:
      "Employment experts are needed in financial remedy proceedings where the earning capacity of either party is a significant issue, typically where one party has sacrificed career progression, where self-employment income is disputed, or where retraining costs are part of the settlement discussion.",
  },
  {
    question: 'What is a "career gap" in matrimonial employment reports?',
    answer:
      "A career gap analysis establishes the financial difference between what a party would have earned had they continued their career uninterrupted versus what they actually earned following a break for family responsibilities. This figure represents the economic cost of the career sacrifice made during the marriage.",
  },
];

export default function FamilyLawPage() {
  return (
    <PageLayout>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(faqs)]} />
      <PageHero title="Family Law Employment Loss Expert Witness UK" breadcrumbs={breadcrumbs} />
      <article className="prose-content mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2>Employment Reports in Financial Remedy Proceedings</h2>
        <p>
          In financial remedy proceedings, employment loss experts assess the employment prospects
          and earnings capacity of both parties, particularly where one spouse has sacrificed career
          progression for family responsibilities (career gap analysis), or where the other
          spouse&apos;s earning capacity is in dispute.
        </p>

        <h2>FPR Part 25 Compliance</h2>
        <p>
          Family court expert evidence is governed by FPR Part 25. Court permission is required
          before an expert can be instructed in some cases. Employment loss experts prepare FPR Part
          25 compliant reports on loss of career, current and future earning capacity, and labour
          market prospects.
        </p>

        <h2>Loss of Career Analysis</h2>
        <p>
          Where a party has taken a career break for childcare or family reasons, an expert assesses:
          the earnings they would have achieved absent the break; the actual earnings trajectory
          following return to work; and the ongoing financial impact of the career interruption,
          the &quot;loss of career&quot; figure.
        </p>

        <h2>Economic Disadvantage</h2>
        <p>
          Economic disadvantage quantifies the financial impact of relationship breakdown on a
          party&apos;s long-term earnings, particularly relevant in Scotland (where the principle of
          economic disadvantage is a statutory factor under Family Law (Scotland) Act 1985).
        </p>

        <FAQSection faqs={faqs} />

        <RelatedLinks links={getPracticeAreaRelatedLinks("family-law")} />
      </article>
    </PageLayout>
  );
}
