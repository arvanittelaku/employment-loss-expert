import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Personal Injury Employment Loss Expert Witness UK | Loss of Earnings & Ogden Tables",
  description:
    "Employment loss expert witnesses for UK personal injury solicitors. Loss of earnings, residual earning capacity, Smith v Manchester, pension loss, and Ogden Tables reports.",
  path: "/practice-areas/personal-injury",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Practice Areas", path: "/practice-areas" },
  { name: "Personal Injury", path: "/practice-areas/personal-injury" },
];

const faqs = [
  {
    question: "When is an employment loss expert needed in a PI claim?",
    answer:
      "An employment loss expert is needed whenever loss of earnings is a significant head of damage, including where the claimant is self-employed, is a business owner, has an unusual earnings history, faces a career change due to injury, or where a Smith v Manchester award is in issue. For straightforward claims with regular employment, the forensic accountant may be sufficient without a vocational expert.",
  },
  {
    question: "What is the Ogden 8 disability discount?",
    answer:
      "The Ogden Tables 8th Edition introduced reduction factors for contingencies other than mortality, applied differently for disabled and not disabled claimants (using the Equality Act 2010 definition). The disability reduction factor significantly reduces the multiplier for claimants who are disabled post-injury, reducing the future loss award. Experts must address whether the Ogden 8 disabled or non-disabled table applies and justify the choice.",
  },
];

export default function PersonalInjuryPage() {
  return (
    <PageLayout>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(faqs)]} />
      <PageHero
        title="Personal Injury Employment Loss Expert Witness UK"
        breadcrumbs={breadcrumbs}
      />
      <article className="prose-content mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2>What PI Solicitors Need</h2>
        <p>
          Expert evidence on: pre-accident earnings baseline; residual earning capacity post-injury;
          labour market analysis; Ogden Tables multiplier; Smith v Manchester awards; pension loss.
        </p>

        <h2>The Multiplier/Multiplicand Method</h2>
        <p>
          The multiplicand is the annual net earnings loss. The multiplier is derived from the Ogden
          Tables using the claimant&apos;s age, sex, employment status, and whether they are
          &quot;disabled&quot; under the Ogden definition, adjusted for the discount rate of -0.25% (Civil
          Liability Act 2018).
        </p>

        <h2>What Is a Smith v Manchester Award?</h2>
        <p>
          A Smith v Manchester award is made where a claimant with an established career is at risk
          on the open labour market following their injury but conventional future loss of earnings
          cannot be precisely calculated, typically awarded at up to 2 years&apos; net earnings as a
          lump sum for handicap on the open labour market.
        </p>

        <h2>Residual Earning Capacity</h2>
        <p>
          The expert assesses what the claimant can earn post-injury, considering medical evidence,
          transferable skills, labour market conditions, and the realistic availability of suitable
          work within their functional capacity.
        </p>

        <h2>Self-Employed and Business Owner Claims</h2>
        <p>
          Pre-accident earnings established from tax returns and accounts; business disruption
          losses; partnership or directorship income; forensic accountant often instructed alongside
          vocational expert.
        </p>

        <h2>Fatal Accident Act 1976: Dependency Loss</h2>
        <p>
          Employment expert calculates the deceased&apos;s likely future earnings trajectory using
          career model analysis and labour market data to establish the dependency capitalised by
          the Ogden multiplier.{" "}
          <Link href="/case-types/fatal-accident-dependency">Fatal accident dependency</Link>.
        </p>

        <FAQSection faqs={faqs} />

        <RelatedLinks links={getPracticeAreaRelatedLinks("personal-injury")} />
      </article>
    </PageLayout>
  );
}
