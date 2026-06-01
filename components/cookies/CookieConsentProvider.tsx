"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { applyScriptConsent } from "@/lib/cookies/scriptRegistry";
import { setDefaultConsent, updateConsent } from "@/lib/cookies/consentMode";
import {
  ACCEPT_ALL,
  DEFAULT_DENIED,
  categoriesFromStorage,
  writeStoredConsent,
} from "@/lib/cookies/consentStorage";
import type { CategoryConsent, ConsentContextValue } from "@/lib/cookies/types";
import { CookieBanner } from "./CookieBanner";
import { CookiePreferencesModal } from "./CookiePreferencesModal";

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function useCookieConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}

function applyConsent(categories: CategoryConsent): void {
  updateConsent(categories);
  applyScriptConsent(categories);
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [hasChoice, setHasChoice] = useState(false);
  const [categories, setCategories] = useState<CategoryConsent>(DEFAULT_DENIED);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    setDefaultConsent();

    const stored = categoriesFromStorage();
    if (stored) {
      setCategories(stored);
      setHasChoice(true);
      setBannerOpen(false);
      applyConsent(stored);
    } else {
      setBannerOpen(true);
    }

    setReady(true);
  }, []);

  const persist = useCallback((next: CategoryConsent) => {
    const normalized = { ...next, necessary: true as const };
    writeStoredConsent(normalized);
    setCategories(normalized);
    setHasChoice(true);
    setBannerOpen(false);
    setPreferencesOpen(false);
    applyConsent(normalized);
  }, []);

  const acceptAll = useCallback(() => persist(ACCEPT_ALL), [persist]);

  const rejectNonEssential = useCallback(() => persist(DEFAULT_DENIED), [persist]);

  const savePreferences = useCallback(
    (prefs: Omit<CategoryConsent, "necessary">) => {
      persist({ necessary: true, ...prefs });
    },
    [persist]
  );

  const openPreferences = useCallback(() => {
    setPreferencesOpen(true);
    setBannerOpen(false);
  }, []);

  const closePreferences = useCallback(() => setPreferencesOpen(false), []);

  const openSettings = useCallback(() => {
    setPreferencesOpen(true);
    setBannerOpen(false);
  }, []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      ready,
      hasChoice,
      categories,
      bannerOpen,
      preferencesOpen,
      acceptAll,
      rejectNonEssential,
      openPreferences,
      closePreferences,
      savePreferences,
      openSettings,
    }),
    [
      ready,
      hasChoice,
      categories,
      bannerOpen,
      preferencesOpen,
      acceptAll,
      rejectNonEssential,
      openPreferences,
      closePreferences,
      savePreferences,
      openSettings,
    ]
  );

  return (
    <ConsentContext.Provider value={value}>
      {children}
      {ready && bannerOpen && <CookieBanner />}
      {ready && preferencesOpen && <CookiePreferencesModal />}
    </ConsentContext.Provider>
  );
}
