import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = createMetadata({
  title: "What Is an Employment Loss Expert Witness? | UK Role & Definition",
  description:
    "An employment loss expert witness quantifies financial losses from employment disputes for UK courts and tribunals. Loss of earnings, residual earning capacity, and labour market analysis explained.",
  path: "/what-is-an-employment-loss-expert",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "What Is an Employment Loss Expert?", path: "/what-is-an-employment-loss-expert" },
];

export default function WhatIsPage() {
  return (
    <PageLayout>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        title="What Is an Employment Loss Expert Witness?"
        breadcrumbs={breadcrumbs}
      />
      <article className="prose-content mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2>Definition</h2>
        <p>
          An employment loss expert witness is a specialist, typically an employment consultant,
          vocational rehabilitation expert, or forensic accountant, retained to provide independent
          expert evidence on the financial losses arising from employment-related disputes. Their
          role is to quantify past and future earnings losses, assess residual earning capacity,
          analyse labour market conditions, and present findings in a court-admissible expert
          report.
        </p>

        <h2>Two Types of Employment Loss Expert</h2>
        <h3>Employment Consultant / Vocational Expert</h3>
        <p>
          Provides evidence on employability, labour market conditions, residual earning capacity,
          and retraining timescales. Typically instructed in personal injury, clinical negligence,
          and some ET cases. Credentials: background in career guidance, vocational rehabilitation,
          HR, or occupational psychology.
        </p>
        <h3>Forensic Accountant</h3>
        <p>
          Provides evidence on the financial quantum of employment losses, calculating past and
          future earnings using Ogden Tables, discount rates, and ET methodology. Often instructed
          alongside a vocational expert.
        </p>

        <h2>What Employment Loss Experts Do</h2>
        <ul>
          <li>Assess the claimant&apos;s pre-accident or pre-dismissal employment and earnings position</li>
          <li>Analyse residual earning capacity post-injury or post-dismissal</li>
          <li>Conduct labour market analysis (availability of suitable work, earning potential in open market)</li>
          <li>Calculate past loss of earnings (net of tax and NI)</li>
          <li>Calculate future loss using Ogden Tables and discount rate (PI) or ET methodology</li>
          <li>Assess pension loss</li>
          <li>Prepare Smith v Manchester reports</li>
          <li>Prepare ET Schedules of Loss</li>
          <li>Provide oral evidence at PI trial, ET hearing, or family court</li>
        </ul>

        <h2>Three Courts, Three Frameworks</h2>
        <h3>Personal Injury / Clinical Negligence (CPR Part 35)</h3>
        <p>
          Multiplier/multiplicand method with Ogden Tables. Discount rate -0.25%. Future losses
          capitalised to lump sum or PPO.
        </p>
        <h3>Employment Tribunal</h3>
        <p>
          Compensatory award based on actual financial loss. Polkey reductions. Mitigation duty.
          Immediate and future loss. Currently capped at £118,223 (ordinary unfair dismissal),
          uncapped from January 2027 under ERA 2025 for all unfair dismissal claims.
        </p>
        <h3>Family Court (FPR Part 25)</h3>
        <p>
          Loss of career in financial remedy proceedings. Expert evidence on employment prospects
          and earnings capacity of both parties.
        </p>

        <h2>CPR Part 35 & Expert Duties</h2>
        <p>
          Expert witnesses owe an overriding duty to the court to help on matters within their
          expertise. This duty overrides any obligation to the instructing party. Experts must
          provide objective, unbiased opinions based on sufficient data. The principles established
          in <em>Ikarian Reefer</em> [1993] require experts to state the facts on which their
          opinions are based, distinguish between fact and opinion, and not omit material facts
          that could detract from their conclusions.
        </p>
        <p>
          In most cases, a Single Joint Expert (SJE) is preferred to reduce costs and conflicting
          evidence. Where party-appointed experts (PAEs) are instructed, their reports must still
          comply with CPR Part 35 or FPR Part 25 as applicable.
        </p>

        <h2>The Employment Rights Act 2025: Why It Matters Now</h2>
        <p>
          From 1 January 2027, employment tribunals will no longer be subject to a statutory cap on
          unfair dismissal compensation, and the qualifying period will reduce from two years to
          six months.
        </p>
        <p>
          This means precise expert evidence of actual financial loss will be essential in virtually
          every significant ET case, replacing the rough-and-ready estimates that sufficed under
          the capped regime. Employment loss expert witnesses will be central to ET proceedings in
          a way they have never been before.{" "}
          <Link href="/era-2025">Read our ERA 2025 guide</Link>.
        </p>
      </article>
    </PageLayout>
  );
}
