"use client";

import Link from "next/link";
import { useCookieConsent } from "./CookieConsentProvider";

export function CookieBanner() {
  const { acceptAll, rejectNonEssential, openPreferences } = useCookieConsent();

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      aria-modal="false"
      className="fixed inset-x-0 bottom-0 z-[100] animate-[slideUp_0.35s_ease-out] px-4 pb-4 sm:px-6"
    >
      <div className="mx-auto max-w-4xl rounded-lg border border-border bg-white p-5 shadow-[0_-4px_24px_rgba(10,46,74,0.12)] sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex-1">
            <h2 id="cookie-banner-title" className="text-lg font-bold text-primary">
              We value your privacy
            </h2>
            <p id="cookie-banner-desc" className="mt-2 text-sm leading-relaxed text-body">
              We use cookies to run this website, understand how it is used, and support our
              marketing. You can accept all cookies, reject non-essential cookies, or customise your
              choices. Read our{" "}
              <Link href="/cookies" className="font-semibold text-accent underline">
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="font-semibold text-accent underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:shrink-0 lg:justify-end">
            <button
              type="button"
              onClick={rejectNonEssential}
              className="min-h-11 rounded border border-border px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-section-alt focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Reject Non-Essential
            </button>
            <button
              type="button"
              onClick={openPreferences}
              className="min-h-11 rounded border border-accent px-4 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-section-alt focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Customize Preferences
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="min-h-11 rounded bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
