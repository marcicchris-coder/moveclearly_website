# Move Clearly Website (v1.1.0)

Education-first real estate portal for Citrus County and nearby Florida communities.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Content locations

- Community data: `/Users/chris/Projects/Domains/moveclearly_website/src/content/communities.ts`
- Shared copy blocks and roadmap text: `/Users/chris/Projects/Domains/moveclearly_website/src/content/siteCopy.ts`
- Centralized image map (URLs, alt text, attribution): `/Users/chris/Projects/Domains/moveclearly_website/src/content/images.ts`

## Replace placeholder photography

1. Open `/Users/chris/Projects/Domains/moveclearly_website/src/content/images.ts`.
2. Replace each `url` with your owned or licensed image URL.
3. Update `alt` text to match the new photo content.
4. Keep the same keys so pages keep working without code changes.

## Key routes

- `/` homepage
- `/communities` community hub
- `/communities/[slug]` community guides
- `/buy` buyer roadmap
- `/sell` seller roadmap

## Compliance review checklist

Before public launch, complete a broker and legal review:

1. Confirm Florida advertising compliance details are complete on every public page.
2. Ensure licensed brokerage name appears near contact information site-wide.
3. Verify license numbers and office identifiers match brokerage records.
4. Review all copy for fair-housing-safe, property-focused language.
5. Validate REALTOR mark usage only if active membership and trademark rules are met.
6. Confirm Equal Housing Opportunity disclosure placement and logo usage with broker policy.
7. Approve privacy policy, consent language, and lead form disclosures before enabling forms.
