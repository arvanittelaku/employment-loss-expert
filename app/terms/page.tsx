import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { SITE_EMAIL } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Terms of Use | EmploymentLossExpert.com",
  description: "Terms of use for EmploymentLossExpert.com referral service.",
  path: "/terms",
  noindex: true,
});

export default function TermsPage() {
  return (
    <PageLayout showCTA={false}>
      <PageHero title="Terms of Use" />
      <article className="prose-content mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p>Last updated: June 2025</p>

        <h2>About This Service</h2>
        <p>
          EmploymentLossExpert.com is a referral service connecting UK solicitors with qualified
          employment loss expert witnesses for proceedings in England and Wales. We are not a law
          firm and do not provide legal advice. Nothing on this website constitutes legal advice.
        </p>

        <h2>Service Area</h2>
        <p>
          This website and our referral service are intended for solicitors and law firms with cases
          in England and Wales. We do not accept enquiries for proceedings outside the United
          Kingdom.
        </p>

        <h2>No Client Relationship</h2>
        <p>
          Submitting an enquiry does not create a solicitor-client relationship with us. Any expert
          witness instructed through our service is engaged directly by you or your firm under
          separate terms.
        </p>

        <h2>Accuracy of Information</h2>
        <p>
          We endeavour to keep legal and procedural information accurate and current, including ERA
          2025 developments. However, law changes frequently. You must verify all information
          independently before relying on it in proceedings.
        </p>

        <h2>Expert Witness Referrals</h2>
        <p>
          We introduce solicitors to employment loss experts based on case requirements. We do not
          guarantee tribunal or court acceptance of any expert. You are responsible for conducting
          conflict checks and ensuring CPR Part 35 / FPR Part 25 compliance.
        </p>

        <h2>Fees</h2>
        <p>
          Expert witness fees are agreed directly between you and the instructed expert. Fee
          estimates on this website are indicative only.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, we exclude liability for any loss arising from
          reliance on website content or from the conduct of any expert witness introduced through
          our service.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms are governed by the laws of England and Wales. Disputes are subject to the
          exclusive jurisdiction of the courts of England and Wales.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-accent">
            {SITE_EMAIL}
          </a>
        </p>
      </article>
    </PageLayout>
  );
}
