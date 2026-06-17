import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import { CookieConsentProvider } from "@/components/cookies/CookieConsentProvider";
import { ConsentModeInit } from "@/components/cookies/ConsentModeInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Employment Loss Expert Witness UK | EmploymentLossExpert.com",
  description:
    "UK-only employment loss expert witness referral service for solicitors in England and Wales. Loss of earnings, ET compensation, and family law expert evidence.",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <ConsentModeInit />
        <CookieConsentProvider>{children}</CookieConsentProvider>
      </body>
    </html>
  );
}
