/**
 * Registry of third-party scripts gated by cookie category.
 * Add new vendors here; loaders run only after consent is granted.
 */

import type { CategoryConsent, CookieCategory } from "./types";

export type ScriptDefinition = {
  id: string;
  category: Exclude<CookieCategory, "necessary">;
  description: string;
  load: () => void;
  unload?: () => void;
};

const loadedIds = new Set<string>();

/** Google Analytics 4 via gtag.js */
function loadGoogleAnalytics(): void {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!measurementId || measurementId.trim() === "") return;

  if (document.getElementById("ele-gtag-js")) return;

  const script = document.createElement("script");
  script.id = "ele-gtag-js";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.gtag?.("js", new Date());
  window.gtag?.("config", measurementId, { anonymize_ip: true });
}

/** Google Tag Manager container */
function loadGoogleTagManager(): void {
  const containerId = process.env.NEXT_PUBLIC_GTM_ID;
  if (!containerId || containerId.trim() === "") return;
  if (document.getElementById("ele-gtm-script")) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  const script = document.createElement("script");
  script.id = "ele-gtm-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
  document.head.appendChild(script);
}

/** Meta (Facebook) Pixel */
function loadMetaPixel(): void {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (!pixelId || pixelId.trim() === "") return;
  if (window.fbq) return;

  type FbqFn = ((...args: unknown[]) => void) & {
    callMethod?: (...args: unknown[]) => void;
    queue: unknown[];
    loaded?: boolean;
    version?: string;
    push?: typeof Array.prototype.push;
  };

  const n: FbqFn = function fbq(...args: unknown[]) {
    if (n.callMethod) {
      n.callMethod(...args);
    } else {
      n.queue.push(args);
    }
  };

  if (!window._fbq) window._fbq = n;
  window.fbq = n;
  n.push = n.push || Array.prototype.push;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  window.fbq("init", pixelId);
  window.fbq("track", "PageView");

  const script = document.createElement("script");
  script.id = "ele-meta-pixel";
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
}

/** LinkedIn Insight Tag */
function loadLinkedInInsight(): void {
  const partnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
  if (!partnerId || partnerId.trim() === "") return;
  if (document.getElementById("ele-linkedin-insight")) return;

  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(partnerId);

  const script = document.createElement("script");
  script.id = "ele-linkedin-insight";
  script.type = "text/javascript";
  script.async = true;
  script.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
  document.head.appendChild(script);
}

/** Hotjar */
function loadHotjar(): void {
  const hjid = process.env.NEXT_PUBLIC_HOTJAR_ID;
  const hjsv = process.env.NEXT_PUBLIC_HOTJAR_SV || "6";
  if (!hjid || hjid.trim() === "") return;
  if (window.hj) return;

  const hjStub: { (...args: unknown[]): void; q: unknown[] } = function hj(...args: unknown[]) {
    hjStub.q.push(args);
  };
  hjStub.q = [];
  window.hj = hjStub;
  window._hjSettings = { hjid: Number(hjid), hjsv: Number(hjsv) };

  const script = document.createElement("script");
  script.id = "ele-hotjar";
  script.async = true;
  script.src = `https://static.hotjar.com/c/hotjar-${hjid}.js?sv=${hjsv}`;
  document.head.appendChild(script);
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
    _linkedin_data_partner_ids?: string[];
    hj?: { (...args: unknown[]): void; q?: unknown[] };
    _hjSettings?: { hjid: number; hjsv: number };
  }
}

export const SCRIPT_REGISTRY: ScriptDefinition[] = [
  {
    id: "google-analytics",
    category: "analytics",
    description: "Google Analytics 4",
    load: loadGoogleAnalytics,
  },
  {
    id: "google-tag-manager",
    category: "analytics",
    description: "Google Tag Manager",
    load: loadGoogleTagManager,
  },
  {
    id: "hotjar",
    category: "analytics",
    description: "Hotjar session analytics",
    load: loadHotjar,
  },
  {
    id: "meta-pixel",
    category: "marketing",
    description: "Meta (Facebook) Pixel",
    load: loadMetaPixel,
  },
  {
    id: "linkedin-insight",
    category: "marketing",
    description: "LinkedIn Insight Tag",
    load: loadLinkedInInsight,
  },
];

/**
 * Load all scripts permitted by the current consent snapshot.
 * Idempotent per script id for the page session.
 */
export function applyScriptConsent(categories: CategoryConsent): void {
  for (const script of SCRIPT_REGISTRY) {
    const allowed = categories[script.category];
    if (allowed && !loadedIds.has(script.id)) {
      try {
        script.load();
        loadedIds.add(script.id);
      } catch (error) {
        console.error(`[cookies] Failed to load ${script.id}`, error);
      }
    }
  }
}

/** Reset loaded state (e.g. testing only). */
export function resetScriptRegistry(): void {
  loadedIds.clear();
}
