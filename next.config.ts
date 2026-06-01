import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/experts",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/case-types/clinical-negligence",
        destination: "/case-types/clinical-negligence-employment-loss",
        permanent: true,
      },
      {
        source: "/case-types/personal-injury-loss",
        destination: "/case-types/personal-injury-loss-of-earnings",
        permanent: true,
      },
      {
        source: "/guides/ogden-tables-loss-of-earnings",
        destination: "/guides/ogden-tables-loss-of-earnings-guide",
        permanent: true,
      },
      {
        source: "/guides/era-2025-loss-guide",
        destination: "/guides/era-2025-et-loss-guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
