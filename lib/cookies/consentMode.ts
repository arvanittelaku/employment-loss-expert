/**
 * Google Consent Mode v2 helpers.
 * Call setDefaultConsent before any Google tag loads; call updateConsent when the user chooses.
 */

import type { CategoryConsent } from "./types";

type GtagConsentParams = Record<string, "granted" | "denied">;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function ensureGtagStub(): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }
}

function categoriesToGtagConsent(categories: CategoryConsent): GtagConsentParams {
  const analytics = categories.analytics ? "granted" : "denied";
  const marketing = categories.marketing ? "granted" : "denied";
  const preferences = categories.preferences ? "granted" : "denied";

  return {
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
    analytics_storage: analytics,
    functionality_storage: preferences,
    personalization_storage: preferences,
    security_storage: "granted",
  };
}

/** Apply denied-by-default Consent Mode before tags load. */
export function setDefaultConsent(): void {
  ensureGtagStub();
  window.gtag?.("consent", "default", {
    ...categoriesToGtagConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    }),
    wait_for_update: 500,
  });
}

/** Update Consent Mode when the user changes preferences. */
export function updateConsent(categories: CategoryConsent): void {
  ensureGtagStub();
  window.gtag?.("consent", "update", categoriesToGtagConsent(categories));
}
