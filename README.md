# Move Clearly Real Estate Website

Production-grade Next.js 14 real estate site for **Move Clearly** focused on technical SEO and IDX-ready architecture.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + reusable UI components
- Framer Motion (subtle UX motion)
- MDX blog (file-based content)

## Features Implemented

- SEO foundation
  - Route-level metadata helper (title, description, canonical, OG/Twitter)
  - JSON-LD helpers (RealEstateAgent, LocalBusiness, Article, BreadcrumbList)
  - Dynamic metadata for blog posts, listings, and communities
  - `sitemap.xml` + `robots.txt`
  - Canonical/host redirect middleware for `moveclearlyfl.com -> moveclearly.com`
- Site structure
  - Informational pages and listing browsing
  - Direct phone/email contact details with no lead-capture forms
- IDX-ready architecture
  - `lib/idx` interface-first provider layer
  - Mock provider with realistic listing records
  - Search/listing pages designed for future StellarMLS integration
## Pages

- `/` Home
- `/search`
- `/listings`
- `/listings/[id]`
- `/communities`
- `/communities/dunnellon`
- `/communities/citrus-springs`
- `/communities/crystal-river`
- `/communities/lecanto`
- `/communities/beverly-hills`
- `/communities/hernando`
- `/communities/inverness`
- `/communities/ocala`
- `/about`
- `/contact`
- `/blog`
- `/blog/[slug]`
- `/home-value`
- `/buyer-guide`
- `/schedule`
- `/thank-you?type=...`

## Environment Variables

Copy `.env.example` to `.env.local` and set values:

```bash
NEXT_PUBLIC_SITE_URL=https://moveclearly.com
IDX_PROVIDER=idxbroker
IDX_SEARCH_MODE=api
IDXBROKER_API_KEY=
IDXBROKER_API_BASE_URL=https://api.idxbroker.com
IDXBROKER_OUTPUT_TYPE=json
IDXBROKER_API_VERSION=
IDXBROKER_ANCILLARY_KEY=
IDXBROKER_API_SEARCH_PATH=/clients/search
IDXBROKER_API_FEATURED_PATH=/clients/featured
IDXBROKER_API_LISTING_PATH_TEMPLATE=/clients/listing/{id}
NEXT_PUBLIC_IDXBROKER_LISTING_URL_TEMPLATE=
NEXT_PUBLIC_IDXBROKER_SEARCH_URL=
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_GTM_ID=
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, click **Add New > Project** and import the GitHub repo.
3. Set framework preset to Next.js (auto-detected).
4. Add all env vars from `.env.example` in Project Settings.
5. Deploy.

## Connect GitHub to Vercel

1. In Vercel dashboard, open your project.
2. Go to **Settings > Git**.
3. Ensure the GitHub repo is connected and production branch is selected.
4. Enable preview deployments for pull requests.

## IDX Integration Notes (IDX Broker)

Current IDX abstraction lives in:

- `lib/idx/types.ts`
- `lib/idx/provider.ts`
- `lib/idx/index.ts`

Current support:

1. `/search`, `/listings`, and `/listings/[id]` render server-side from IDX Broker API data.
2. `IDX_PROVIDER=idxbroker` + `IDXBROKER_API_KEY` enables live inventory data.
3. `NEXT_PUBLIC_IDXBROKER_LISTING_URL_TEMPLATE` optionally adds outbound links to the vendor-hosted listing detail page (format: `https://yourdomain.com/idx/details/listing/XXX/{id}`).
4. Filtered `/search` result URLs are `noindex` to reduce duplicate-index pages and preserve crawl budget.
5. Listing pages are automatically `noindex` when API data is unavailable and the site falls back to mock data.

### Recommended Production Pattern (Engage)

For most Engage setups, a hybrid integration is the safest and most effective:

1. Use IDX-hosted search pages (saved links / widgets) for full MLS search UX + compliance.
2. Keep API usage for curated sections (featured inventory, custom cards, selective landing pages).
3. Keep your site branding and SEO pages native in Next.js.

This project now supports that model:

1. Set `IDX_SEARCH_MODE=hosted`.
2. Set `NEXT_PUBLIC_IDXBROKER_SEARCH_URL` to your IDX-hosted search URL.
3. `/search` will server-redirect to the hosted IDX search page.
4. Set `IDX_SEARCH_MODE=api` to keep native API-driven `/search`.

Recommended setup checklist:

1. Add `IDXBROKER_API_KEY` only as a server env var (never expose in public runtime vars).
2. If your account or partner process requires a fixed version, set `IDXBROKER_API_VERSION` so responses stay stable over time.
3. If you are a development partner calling on behalf of clients, set `IDXBROKER_ANCILLARY_KEY` to unlock partner overrides and higher hourly limits.
4. Keep `IDXBROKER_OUTPUT_TYPE=json` unless you intentionally consume XML.
5. Set API paths to your approved IDX Broker endpoints in staging first.
6. Confirm API payload field names and adjust mapping in `lib/idx/provider.ts` if your account response differs.
7. Validate MLS-required attribution/disclaimer language before production cutover.

## Performance Notes

- Server Components by default; client usage only where needed (motion, gallery)
- `next/image` used for listings
- `next/font` used for optimized font loading
- Minimal dependency footprint and route-level rendering
