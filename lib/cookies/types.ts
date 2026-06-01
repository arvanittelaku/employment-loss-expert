export const CONSENT_STORAGE_KEY = "ele_cookie_consent";
export const CONSENT_VERSION = 1;
/** Consent record expires after 365 days (GDPR re-consent best practice). */
export const CONSENT_MAX_AGE_DAYS = 365;

export type CookieCategory = "necessary" | "analytics" | "marketing" | "preferences";

export type CategoryConsent = Record<CookieCategory, boolean>;

export type StoredConsent = {
  version: number;
  timestamp: string;
  expiresAt: string;
  categories: CategoryConsent;
};

export const DEFAULT_DENIED: CategoryConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

export const ACCEPT_ALL: CategoryConsent = {
  necessary: true,
  analytics: true,
  marketing: true,
  preferences: true,
};

export type ConsentContextValue = {
  /** False until client has read storage (prevents hydration flash). */
  ready: boolean;
  hasChoice: boolean;
  categories: CategoryConsent;
  bannerOpen: boolean;
  preferencesOpen: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  openPreferences: () => void;
  closePreferences: () => void;
  savePreferences: (categories: Omit<CategoryConsent, "necessary">) => void;
  openSettings: () => void;
};
