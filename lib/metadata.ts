import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "./site";

export function createMetadata({
  title,
  description,
  path = "",
  noindex = false,
  nofollow = false,
}: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
  nofollow?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        "en-GB": url,
        "x-default": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noindex
      ? { index: false, follow: !nofollow, googleBot: { index: false, follow: !nofollow } }
      : { index: true, follow: true },
  };
}
