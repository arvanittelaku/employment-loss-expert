# EmploymentLossExpert.com

SEO-optimized lead-generation website for UK employment loss expert witness services.

## Tech Stack

- Next.js (App Router) with TypeScript
- Tailwind CSS v4
- Formspree contact forms
- Static export compatible architecture

## Setup

```bash
npm install
cp .env.example .env.local
# Set Lead_notification_url (webhook) and other env vars
npm run dev
```

## Build

```bash
npm run build
npm start
```

`npm run build` runs `seo:generate` first to refresh `public/sitemap.xml` and `public/robots.txt`.

## SEO scripts

```bash
npm run seo:generate   # Regenerate public/sitemap.xml + public/robots.txt
npm run seo:verify     # Fail if sitemap drifts from lib/seo/publicUrlInventory.ts
npm run seo:verify:ssr # Check key pages export metadata
```

Add new static routes to `APP_STATIC_PATHS` in `lib/seo/publicUrlInventory.ts`, then regenerate.

## Contact form / lead webhook

On submit, the contact form POSTs `{ fullName, email, phone }` to `/api/submit-lead`. The Netlify function forwards to `Lead_notification_url` with brand name `EmploymentLossExpert`.

Set in Netlify environment variables (and local `.env` for `netlify dev`):

```bash
Lead_notification_url=https://your-n8n-webhook-url
```

Local testing: `netlify dev` (often `http://localhost:8888`) so `/api/submit-lead` hits the function. `next dev` uses `app/api/submit-lead/route.ts` with the same logic.

## Cookie consent

GDPR cookie banner with Accept All, Reject Non-Essential, and Customize Preferences. Consent is stored in `localStorage` for 365 days. Tracking scripts (GA, GTM, Meta, LinkedIn, Hotjar) load only after consent. Configure IDs in `.env.local` (see `.env.example`).

## Environment Variables

See `.env.example` for required variables.

## Domain

Production URL: https://www.employmentlossexpert.com

Middleware redirects apex domain to www.
