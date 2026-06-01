import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb";
import { SITE_EMAIL } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Cookie Policy | EmploymentLossExpert.com",
  description:
    "How EmploymentLossExpert.com uses cookies, your choices under UK GDPR and the ePrivacy Directive, and how to manage consent.",
  path: "/cookies",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Cookie Policy", path: "/cookies" },
];

export default function CookiesPage() {
  return (
    <PageLayout showCTA={false}>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero title="Cookie Policy" breadcrumbs={breadcrumbs} />
      <article className="prose-content mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p>Last updated: June 2025</p>

        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. We also use
          similar technologies such as local storage for your cookie consent preferences.
        </p>

        <h2>How We Use Cookies</h2>
        <p>We group cookies into four categories:</p>
        <ul>
          <li>
            <strong>Necessary</strong>: Required for the site to function, including storing your
            consent choices. These cannot be switched off.
          </li>
          <li>
            <strong>Analytics</strong>: Help us understand how visitors use our site (e.g. Google
            Analytics, Google Tag Manager, Hotjar). Loaded only if you consent.
          </li>
          <li>
            <strong>Marketing</strong>: Used to measure advertising and reach relevant audiences
            (e.g. Meta Pixel, LinkedIn Insight Tag). Loaded only if you consent.
          </li>
          <li>
            <strong>Preferences</strong>: Remember settings to improve your experience. Loaded only
            if you consent.
          </li>
        </ul>

        <h2>Your Choices (GDPR & ePrivacy)</h2>
        <p>
          On your first visit, we ask for your consent before loading non-essential cookies. You may
          accept all, reject non-essential, or customise categories. You can change your mind at any
          time using <strong>Cookie Settings</strong> in the footer.
        </p>
        <p>
          We store your consent in local storage for up to 365 days, after which we will ask again.
        </p>

        <h2>Google Consent Mode</h2>
        <p>
          Where Google services are enabled, we use Google Consent Mode v2 so that tags respect your
          choices before and after you interact with the banner. Analytics and advertising storage
          remain denied until you grant the relevant category.
        </p>

        <h2>Third-Party Cookies</h2>
        <p>
          Third-party providers may set their own cookies when their scripts load. We only activate
          those scripts after consent. Please refer to each provider&apos;s privacy policy for
          details.
        </p>

        <h2>California Residents (CCPA)</h2>
        <p>
          If you are a California resident, you may have rights to know what personal information is
          collected and to opt out of certain sharing. Rejecting marketing and analytics cookies
          limits related tracking on this site.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about cookies:{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-accent">
            {SITE_EMAIL}
          </a>
          . See also our{" "}
          <Link href="/privacy" className="font-semibold text-accent">
            Privacy Policy
          </Link>
          .
        </p>
      </article>
    </PageLayout>
  );
}
