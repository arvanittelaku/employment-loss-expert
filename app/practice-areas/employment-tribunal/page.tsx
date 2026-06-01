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
  title: "Employment Tribunal Loss Expert Witness UK | ET Compensation & ERA 2025",
  description:
    "Employment loss expert witnesses for UK employment solicitors. ET Schedule of Loss, discrimination compensation, Polkey reductions, and uncapped ERA 2025 awards.",
  path: "/practice-areas/employment-tribunal",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Practice Areas", path: "/practice-areas" },
  { name: "Employment Tribunal", path: "/practice-areas/employment-tribunal" },
];

const faqs = [
  {
    question: "How is future loss of earnings calculated in the Employment Tribunal?",
    answer:
      "ET loss of earnings calculations require net income assessment minus tax and National Insurance multiplied by absence periods for past loss, with future loss assessed based on how long it will realistically take the claimant to find comparable employment, typically 6 to 12 months though extended periods may apply where career change is necessitated or exceptional circumstances are demonstrated.",
  },
  {
    question: "What changes does ERA 2025 make to ET compensation?",
    answer:
      "From 1 January 2027, the statutory cap on unfair dismissal compensation (currently £118,223 or 52 weeks gross pay) will be abolished. Tribunals will assess compensation based solely on the employee's actual financial loss. The qualifying period will simultaneously reduce from two years to six months. Expert evidence of actual loss will therefore be essential in every significant ET case.",
  },
];

export default function EmploymentTribunalPage() {
  return (
    <PageLayout>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(faqs)]} />
      <PageHero
        title="Employment Tribunal Loss Expert Witness UK"
        breadcrumbs={breadcrumbs}
      />
      <article className="prose-content mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2>The ET Schedule of Loss</h2>
        <p>
          The Schedule of Loss is the document setting out all financial heads of claim in an ET
          case: basic award, compensatory award (immediate loss, future loss, pension loss, loss of
          statutory rights), and injury to feelings. Employment loss experts prepare or review
          Schedules of Loss for complex or high-value cases.
        </p>

        <h2>ERA 2025: Uncapped Awards from January 2027</h2>
        <div className="my-6 rounded-lg border border-highlight/30 bg-highlight/10 p-5">
          <p>
            The Employment Rights Act 2025 removes the current cap on unfair dismissal
            compensation, increasing potential exposure particularly for senior employees and high
            earners, with changes coming into force 1 January 2027.
          </p>
          <p>
            Any employee recruited on or before 1 July 2026 will immediately gain unfair dismissal
            protection on 1 January 2027, meaning decisions being made by employers right now will
            be subject to uncapped compensation in any resulting tribunal claim.
          </p>
          <p>
            With uncapped awards, employment loss experts will be required in virtually every
            significant ET case to provide precise financial evidence of actual loss.{" "}
            <Link href="/era-2025">Read our ERA 2025 guide</Link>.
          </p>
        </div>

        <h2>Polkey Reductions</h2>
        <p>
          Polkey reductions allow tribunals to reduce compensation where the employer can show that
          dismissal would have occurred anyway even if a fair procedure had been followed. With
          uncapped awards, Polkey deductions become a crucial tool for employers facing significant
          financial exposure. Employment loss experts assist by modelling the financial impact of
          different Polkey percentage reductions on the total award.
        </p>

        <h2>Discrimination Claims: Uncapped Already</h2>
        <p>
          Discrimination, whistleblowing, and automatically unfair dismissal claims already carry
          unlimited compensation. Discrimination claims carry uncapped compensation potential for
          genuine financial losses, psychological injury, and career disruption throughout ET
          proceedings.
        </p>

        <h2>Vento Bands: Injury to Feelings</h2>
        <p>
          Vento bands for injury to feelings awards: lower band £1,100 to £11,200; middle band
          £11,200 to £33,700; upper band £33,700 to £56,200 (2025 update). Employment loss experts
          address the financial heads of loss; the Vento award is assessed separately by the
          tribunal.
        </p>

        <FAQSection faqs={faqs} />

        <RelatedLinks links={getPracticeAreaRelatedLinks("employment-tribunal")} />
      </article>
    </PageLayout>
  );
}
