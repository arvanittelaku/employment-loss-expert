import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { DataTable } from "@/components/DataTable";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { articleSchema } from "@/lib/schema/organization";
import { howLossCalculatedRelatedLinks } from "@/lib/data/seo-related-links";
import { RelatedLinks } from "@/components/seo/RelatedLinks";

const PAGE_TITLE = "How Employment Loss Is Calculated UK | Multiplier, Ogden Tables & ET Method";
const PAGE_DESCRIPTION =
  "The complete guide to how employment loss is calculated in UK courts and tribunals: multiplier/multiplicand, Ogden Tables, ET Schedules of Loss, Smith v Manchester, Polkey reductions, and more.";

export const metadata: Metadata = createMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/how-loss-is-calculated",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "How Loss Is Calculated", path: "/how-loss-is-calculated" },
];

export default function HowLossCalculatedPage() {
  return (
    <PageLayout>
      <JsonLd
        data={[
          articleSchema({
            title: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            path: "/how-loss-is-calculated",
            aboutServiceId: "loss-of-earnings-pi",
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <PageHero
        title="How Employment Loss Is Calculated in UK Proceedings: The Complete Guide"
        subtitle="The definitive reference for UK solicitors on calculating employment loss across personal injury, employment tribunal, and family court proceedings."
        breadcrumbs={breadcrumbs}
      />
      <article className="prose-content mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <p>
          Employment loss is calculated differently depending on the forum. Personal injury claims
          use the multiplier/multiplicand method with Ogden Tables. Employment tribunal claims
          assess actual financial loss with immediate and future components. Family court proceedings
          focus on earning capacity and loss of career. This guide explains each framework, the key
          variables, and when employment loss expert witnesses are required.
        </p>

        <h2>The Three Frameworks</h2>
        <DataTable
          caption="Three frameworks for employment loss calculation"
          headers={["Framework", "Court/Tribunal", "Method", "Key Variables"]}
          rows={[
            [
              "Personal Injury",
              "County Court / High Court",
              "Multiplier x Multiplicand + Ogden Tables",
              "Discount rate, Ogden factors, disability definition",
            ],
            [
              "Employment Tribunal",
              "ET",
              "Actual loss (immediate + future)",
              "Polkey, mitigation, cap (until Jan 2027)",
            ],
            [
              "Family Law",
              "Family Court / High Court",
              "Career model / loss of career",
              "FPR Part 25, earning capacity",
            ],
          ]}
        />

        <h2>1. Personal Injury Method: Multiplier/Multiplicand</h2>
        <p>
          The multiplicand is the annual net earnings loss (pre-accident earnings minus post-injury
          residual earnings). The multiplier, derived from Ogden Tables 8th Edition, capitalises
          future loss into a present value lump sum. The discount rate of -0.25% under the Civil
          Liability Act 2018 adjusts the multiplier upward.
        </p>
        <DataTable
          caption="PI loss calculation steps"
          headers={["Step", "Description", "Tool"]}
          rows={[
            ["1. Multiplicand", "Annual net earnings loss (pre minus post)", "Earnings evidence + tax calculation"],
            ["2. Past loss", "Net earnings x period to trial", "Simple arithmetic"],
            ["3. Ogden multiplier", "Life expectancy + employment factors", "Ogden Tables 8th Edition"],
            ["4. Discount rate", "-0.25% (Civil Liability Act 2018)", "Applied to multiplier"],
            ["5. Future loss", "Multiplicand x adjusted multiplier", "Expert calculation"],
            ["6. Pension loss", "Additional Ogden calculation", "Ogden Tables H"],
            ["7. Smith v Manchester", "Where applicable", "Up to 2 years net earnings"],
          ]}
        />

        <h2>2. Ogden Tables Explained</h2>
        <p>
          The Ogden Tables are actuarial tables published by the Government Actuary&apos;s Department
          for capitalising future losses in personal injury. The 8th Edition (2020) is mandatory for
          all new claims. Tables 1 to 8 provide working life multipliers by age and sex. Tables 9
          to 26 cover various life scenarios. Table H addresses pension loss.
        </p>
        <p>
          Ogden 8 introduced reduction factors for contingencies other than mortality, applied
          differently for &quot;disabled&quot; and &quot;not disabled&quot; claimants using the Equality Act 2010
          definition. The disability reduction factor significantly reduces the multiplier for
          claimants who are disabled post-injury. Experts must justify table selection. See our{" "}
          <Link href="/guides/ogden-tables-loss-of-earnings-guide">Ogden Tables guide</Link>.
        </p>

        <h2>3. Smith v Manchester Awards</h2>
        <p>
          Where a claimant with an established career faces risk on the open labour market
          post-injury but future loss cannot be precisely calculated, a Smith v Manchester award
          applies. Typically up to 2 years&apos; net earnings as a lump sum. The multiplier method is
          preferred where reliable data exists.{" "}
          <Link href="/guides/smith-v-manchester-guide">Read our Smith v Manchester guide</Link>.
        </p>

        <h2>4. Employment Tribunal Method</h2>
        <p>
          ET compensatory awards cover immediate loss (dismissal to hearing or new employment),
          future loss (time to find comparable work), pension loss, and loss of statutory rights
          (£500 conventional). Polkey reductions and contributory fault may reduce the award.
          Mitigation credit applies where the claimant unreasonably failed to seek alternative
          employment.
        </p>
        <p>
          From 1 January 2027, ERA 2025 removes the compensatory award cap.{" "}
          <Link href="/era-2025">Learn about ERA 2025</Link>.
        </p>
        <DataTable
          caption="ET Schedule of Loss structure"
          headers={["Head", "Calculation"]}
          rows={[
            ["Basic award", "Age x service x weekly pay (capped at £719/week)"],
            ["Immediate loss of earnings", "Net weekly loss x weeks unemployed"],
            ["Future loss", "Net weekly loss x weeks to find comparable work"],
            ["Pension loss", "Weekly pension loss x period"],
            ["Loss of statutory rights", "£500 (conventional)"],
            ["Injury to feelings", "Vento bands"],
            ["Total", "Sum of above (subject to cap to Jan 2027)"],
          ]}
        />

        <h2>5. Family Law Method</h2>
        <p>
          Family court employment experts conduct career model analysis, earning capacity assessment,
          and loss of career calculation. Economic disadvantage may be relevant in Scottish
          proceedings. Reports must comply with FPR Part 25.{" "}
          <Link href="/practice-areas/family-law">Family law practice area</Link>.
        </p>

        <h2>The Discount Rate (-0.25%)</h2>
        <p>
          The discount rate reflects the assumed real return on investment of a lump sum award. Set
          at -0.25% by the Lord Chancellor under the Civil Liability Act 2018, it reflects the
          low interest rate environment and the Insurance (Liabilities to Third Parties) Act 1996.
          A negative discount rate increases multipliers and therefore increases future loss awards
          in PI claims. The rate is reviewed periodically.
        </p>

        <h2>Mitigation</h2>
        <p>
          In all proceedings, claimants must take reasonable steps to mitigate their loss by finding
          alternative employment, retraining, or accepting comparable work. Employment experts assess
          whether mitigation was reasonable and what loss would have been avoided by proper
          mitigation. Failure to mitigate may reduce awards in both PI and ET claims.
        </p>

        <RelatedLinks links={howLossCalculatedRelatedLinks} />
      </article>
    </PageLayout>
  );
}
