import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { EraBanner } from "@/components/EraBanner";
import { DataTable } from "@/components/DataTable";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema/organization";
import { homepageServices } from "@/lib/data/services";

export const metadata: Metadata = createMetadata({
  title: "Employment Loss Expert Witness UK | Loss of Earnings & ET Compensation",
  description:
    "Find a qualified employment loss expert witness in the UK. Loss of earnings reports for personal injury, ET compensation, discrimination, wrongful dismissal, and divorce. ERA 2025 ready.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageLayout>
      <JsonLd data={organizationSchema()} />
      <PageHero
        title="Employment Loss Expert Witness Services for UK Solicitors"
        subtitle="Whether your case involves a catastrophic injury, an unfair dismissal, a discrimination award, or a matrimonial dispute, you need employment loss evidence that is precise, defensible, and tailored to your proceedings. EmploymentLossExpert.com connects UK solicitors with qualified employment loss expert witnesses, specialists in loss of earnings, residual earning capacity, labour market analysis, and ET compensation schedules."
      />
      <EraBanner />

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/practice-areas/personal-injury"
              className="inline-flex min-h-11 flex-1 items-center justify-center rounded bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent sm:min-w-[200px]"
            >
              Personal Injury
            </Link>
            <Link
              href="/practice-areas/employment-tribunal"
              className="inline-flex min-h-11 flex-1 items-center justify-center rounded bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent sm:min-w-[200px]"
            >
              Employment Tribunal
            </Link>
            <Link
              href="/practice-areas/family-law"
              className="inline-flex min-h-11 flex-1 items-center justify-center rounded bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent sm:min-w-[200px]"
            >
              Family Law
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-section-alt py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-primary md:text-3xl">
            What Our Employment Loss Expert Witnesses Cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homepageServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-lg border border-border bg-white p-5 card-shadow transition-colors hover:shadow-md"
              >
                <h3 className="font-semibold text-primary">{service.title}</h3>
              </Link>
            ))}
          </div>
          <p className="mt-6">
            <Link href="/services" className="font-semibold text-accent hover:text-primary">
              View all services →
            </Link>
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-primary md:text-3xl">
            Employment Loss Expert Evidence: Key UK Facts
          </h2>
          <DataTable
            caption="Key UK employment loss facts"
            headers={["Fact", "Figure", "Source"]}
            rows={[
              [
                "ET compensatory award cap (to Jan 2027)",
                "£118,223 or 52 weeks gross",
                "ERA 2025",
              ],
              [
                "ET compensatory award from Jan 2027",
                "Uncapped, actual loss",
                "Employment Rights Act 2025",
              ],
              [
                "Unfair dismissal qualifying period from Jan 2027",
                "6 months (down from 2 years)",
                "Employment Rights Act 2025",
              ],
              ["Discrimination awards", "Uncapped (already)", "Equality Act 2010"],
              [
                "Injury to feelings, upper Vento band",
                "£33,700 to £56,200",
                "Vento 2025 update",
              ],
              ["PI discount rate", "-0.25%", "Civil Liability Act 2018"],
              ["Protective award (from April 2026)", "180 days pay (doubled)", "ERA 2025"],
            ]}
            footnote="Sources: Employment Rights Act 2025; Equality Act 2010; Civil Liability Act 2018; Ogden Tables 8th Edition."
          />
        </div>
      </section>

      <section className="bg-section-alt py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-primary md:text-3xl">
            Which Practice Area Are You In?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-white p-6 card-shadow">
              <h3 className="mb-3 text-lg font-bold text-primary">Personal Injury</h3>
              <p className="mb-4 text-body">
                Loss of earnings past and future, Ogden Tables, Smith v Manchester, pension loss,
                residual earning capacity.
              </p>
              <Link href="/practice-areas/personal-injury" className="font-semibold text-accent">
                Personal injury experts →
              </Link>
            </div>
            <div className="rounded-lg border border-border bg-white p-6 card-shadow">
              <h3 className="mb-3 text-lg font-bold text-primary">Employment Tribunal</h3>
              <p className="mb-4 text-body">
                ET Schedule of Loss, Polkey reductions, discrimination compensation, uncapped ERA 2025
                awards.
              </p>
              <Link href="/practice-areas/employment-tribunal" className="font-semibold text-accent">
                ET loss experts →
              </Link>
            </div>
            <div className="rounded-lg border border-border bg-white p-6 card-shadow">
              <h3 className="mb-3 text-lg font-bold text-primary">Family Law</h3>
              <p className="mb-4 text-body">
                Loss of career in divorce, financial remedy proceedings, FPR Part 25 employment
                reports.
              </p>
              <Link href="/practice-areas/family-law" className="font-semibold text-accent">
                Family law experts →
              </Link>
            </div>
          </div>
          <p className="mt-8 text-body">
            Not sure what an employment loss expert witness does?{" "}
            <Link href="/what-is-an-employment-loss-expert" className="font-semibold text-accent">
              Read our definition guide
            </Link>
            .
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/how-loss-is-calculated" className="font-semibold text-accent">
              How loss is calculated →
            </Link>
            <Link href="/guides" className="font-semibold text-accent">
              Solicitor guides →
            </Link>
            <Link href="/faq" className="font-semibold text-accent">
              FAQ →
            </Link>
            <Link href="/contact" className="font-semibold text-accent">
              Instruct an expert →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
