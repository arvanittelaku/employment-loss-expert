"use client";

import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";

export function FooterLegalLinks() {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/60">
      <Link href="/privacy" className="hover:text-white">
        Privacy Policy
      </Link>
      <Link href="/cookies" className="hover:text-white">
        Cookie Policy
      </Link>
      <Link href="/terms" className="hover:text-white">
        Terms of Use
      </Link>
      <CookieSettingsButton />
    </div>
  );
}
