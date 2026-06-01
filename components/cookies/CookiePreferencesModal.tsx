"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useCookieConsent } from "./CookieConsentProvider";
import type { CategoryConsent } from "@/lib/cookies/types";

type ToggleCategory = "analytics" | "marketing" | "preferences";

const CATEGORY_COPY: {
  id: ToggleCategory;
  title: string;
  description: string;
}[] = [
  {
    id: "analytics",
    title: "Analytics",
    description:
      "Help us understand how visitors use our site (e.g. Google Analytics, Google Tag Manager, Hotjar).",
  },
  {
    id: "marketing",
    title: "Marketing",
    description:
      "Used to measure ad performance and reach relevant audiences (e.g. Meta Pixel, LinkedIn Insight Tag).",
  },
  {
    id: "preferences",
    title: "Preferences",
    description: "Remember your settings and choices to improve your experience on future visits.",
  },
];

export function CookiePreferencesModal() {
  const { categories, closePreferences, savePreferences, acceptAll } = useCookieConsent();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [draft, setDraft] = useState({
    analytics: categories.analytics,
    marketing: categories.marketing,
    preferences: categories.preferences,
  });

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreferences();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [closePreferences]);

  const handleSave = () => {
    savePreferences(draft);
  };

  return (
    <div
      className="fixed inset-0 z-[110] flex items-end justify-center bg-primary/60 p-4 sm:items-center"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) closePreferences();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-labelledby="cookie-prefs-title"
        aria-modal="true"
        tabIndex={-1}
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg border border-border bg-white shadow-xl animate-[fadeIn_0.25s_ease-out]"
      >
        <div className="border-b border-border bg-primary px-5 py-4">
          <h2 id="cookie-prefs-title" className="text-lg font-bold text-white">
            Cookie Preferences
          </h2>
          <p className="mt-1 text-sm text-white/80">
            Manage how we use cookies. Necessary cookies are always active.
          </p>
        </div>

        <div className="space-y-4 p-5">
          <div className="rounded-lg border border-border bg-section-alt p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-primary">Necessary Cookies</p>
                <p className="mt-1 text-sm text-body">
                  Required for security, consent storage, and core site functionality. Always
                  enabled.
                </p>
              </div>
              <span className="shrink-0 rounded bg-primary px-2 py-1 text-xs font-semibold text-white">
                Always on
              </span>
            </div>
          </div>

          {CATEGORY_COPY.map((cat) => (
            <div key={cat.id} className="rounded-lg border border-border p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-primary">{cat.title}</p>
                  <p className="mt-1 text-sm text-body">{cat.description}</p>
                </div>
                <label className="relative inline-flex shrink-0 cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={draft[cat.id]}
                    onChange={(e) =>
                      setDraft((d) => ({ ...d, [cat.id]: e.target.checked }))
                    }
                  />
                  <span className="h-7 w-12 rounded-full bg-border transition-colors peer-checked:bg-accent peer-focus:ring-2 peer-focus:ring-accent peer-focus:ring-offset-2" />
                  <span className="pointer-events-none absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
                </label>
              </div>
            </div>
          ))}

          <p className="text-xs text-body">
            See our{" "}
            <Link href="/cookies" className="font-semibold text-accent underline">
              Cookie Policy
            </Link>{" "}
            for full details.
          </p>
        </div>

        <div className="flex flex-col gap-2 border-t border-border p-5 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={closePreferences}
            className="min-h-11 rounded border border-border px-4 py-2.5 text-sm font-semibold text-primary hover:bg-section-alt focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              const all: Omit<CategoryConsent, "necessary"> = {
                analytics: true,
                marketing: true,
                preferences: true,
              };
              setDraft(all);
              acceptAll();
            }}
            className="min-h-11 rounded border border-accent px-4 py-2.5 text-sm font-semibold text-accent hover:bg-section-alt focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="min-h-11 rounded bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
