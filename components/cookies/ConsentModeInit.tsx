"use client";

import { useEffect } from "react";
import { setDefaultConsent } from "@/lib/cookies/consentMode";

/**
 * Inline consent defaults before interactive hydration.
 * CookieConsentProvider re-applies stored consent on mount.
 */
export function ConsentModeInit() {
  useEffect(() => {
    setDefaultConsent();
  }, []);

  return null;
}
