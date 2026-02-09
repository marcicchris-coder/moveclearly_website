# Move Clearly Real Estate Website

Production-grade Next.js 14 real estate site for **Move Clearly** focused on technical SEO, conversion funneling, and IDX-ready architecture.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + reusable UI components
- Framer Motion (subtle UX motion)
- Supabase (lead storage)
- Zod validation + honeypot + in-memory rate limiting
- MDX blog (file-based content)

## Features Implemented

- SEO foundation
  - Route-level metadata helper (title, description, canonical, OG/Twitter)
  - JSON-LD helpers (RealEstateAgent, LocalBusiness, Article, BreadcrumbList)
  - Dynamic metadata for blog posts, listings, and communities
  - `sitemap.xml` + `robots.txt`
  - Canonical/host redirect middleware for `moveclearlyfl.com -> moveclearly.com`
- Conversion system
  - Sticky header CTAs
  - Sticky mobile bottom CTA bar
  - Exit-intent modal (desktop, frequency capped via `localStorage`)
  - Multi-step seller form (`/home-value`)
  - Buyer guide gated capture (`/buyer-guide`)
  - Thank-you routing (`/thank-you?type=...`)
- IDX-ready architecture
  - `lib/idx` interface-first provider layer
  - Mock provider with realistic listing records
  - Search/listing pages designed for future StellarMLS integration
- Lead API
  - `POST /api/leads`
  - Zod validation
  - Honeypot field (`website`)
  - Basic in-memory rate limiting
  - Supabase insert to `leads` table
  - Optional Zapier webhook forward

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
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ZAPIER_WEBHOOK_URL=
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_GTM_ID=
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Supabase Setup

1. Create a Supabase project.
2. Run SQL from `supabase/schema.sql` in the SQL editor.
3. Add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to `.env.local`.
4. (Optional) Add `ZAPIER_WEBHOOK_URL` for forwarding lead payloads.

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

## IDX Integration Notes (StellarMLS Vendor Agnostic)

Current IDX abstraction lives in:

- `lib/idx/types.ts`
- `lib/idx/provider.ts`
- `lib/idx/index.ts`

To integrate a live vendor later:

1. Replace mock provider internals in `lib/idx/provider.ts` with vendor API calls.
2. Map vendor payload fields to the `Listing` interface.
3. Keep route/UI layer unchanged (`/search`, `/listings`, `/listings/[id]`).
4. If vendor requires embed/widgets, mount it in `/search` placeholder panel and listing map placeholder.

## Performance Notes

- Server Components by default; client usage only where needed (forms, motion, modal, gallery)
- `next/image` used for listings
- `next/font` used for optimized font loading
- Minimal dependency footprint and route-level rendering
