import {
  ACCEPT_ALL,
  CONSENT_MAX_AGE_DAYS,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  DEFAULT_DENIED,
  type CategoryConsent,
  type StoredConsent,
} from "./types";

function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

export function isConsentExpired(record: StoredConsent): boolean {
  return new Date(record.expiresAt).getTime() <= Date.now();
}

export function readStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== CONSENT_VERSION) return null;
    if (isConsentExpired(parsed)) {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function writeStoredConsent(categories: CategoryConsent): StoredConsent {
  const now = new Date();
  const record: StoredConsent = {
    version: CONSENT_VERSION,
    timestamp: now.toISOString(),
    expiresAt: addDays(now, CONSENT_MAX_AGE_DAYS).toISOString(),
    categories: { ...categories, necessary: true },
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  return record;
}

export function categoriesFromStorage(): CategoryConsent | null {
  const stored = readStoredConsent();
  return stored?.categories ?? null;
}

export function clearStoredConsent(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CONSENT_STORAGE_KEY);
}

export { DEFAULT_DENIED, ACCEPT_ALL };
