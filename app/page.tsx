import Link from 'next/link';
import { getFeaturedListings } from '@/lib/idx';
import { communities } from '@/lib/content/communities';
import { Hero } from '@/components/sections/hero';
import { ListingCard } from '@/components/sections/listing-card';
import { CommunityCard } from '@/components/sections/community-card';
import { SectionReveal } from '@/components/layout/section-reveal';
import { CtaBand } from '@/components/sections/cta-band';
import { Card, CardContent } from '@/components/ui/card';
import { JsonLdScript } from '@/components/sections/json-ld-script';
import { localBusinessJsonLd, organizationJsonLd } from '@/lib/seo/json-ld';
import { Badge } from '@/components/ui/badge';

export default async function HomePage() {
  const featured = await getFeaturedListings();

  return (
    <>
      <JsonLdScript data={[organizationJsonLd(), localBusinessJsonLd()]} />
      <Hero />
      <div className='mx-auto max-w-7xl space-y-20 px-4 py-16 md:px-6'>
        <SectionReveal>
          <section>
            <div className='mb-8 flex items-center justify-between'>
              <div>
                <Badge>Featured Communities</Badge>
                <h2 className='mt-3 text-3xl font-semibold'>Find the right Florida fit</h2>
              </div>
              <Link href='/search' className='text-sm font-semibold text-primary'>
                Start search
              </Link>
            </div>
            <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
              {communities.slice(0, 4).map((community) => (
                <CommunityCard key={community.slug} community={community} />
              ))}
            </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section>
            <div className='mb-8'>
              <Badge>Featured Listings</Badge>
              <h2 className='mt-3 text-3xl font-semibold'>Highlighted homes</h2>
              <p className='mt-2 text-muted-foreground'>
                Mock IDX feed is active now. Swap the provider later without changing page templates.
              </p>
            </div>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {featured.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section className='grid gap-6 lg:grid-cols-3'>
            {[
              'They answered every question quickly and gave us a clear strategy from day one.',
              'Communication was consistent, direct, and never pushy. We always knew our next step.',
              'They helped us price, prepare, and negotiate with confidence.'
            ].map((quote, i) => (
              <Card key={i}>
                <CardContent className='p-6'>
                  <p className='text-sm leading-relaxed text-muted-foreground'>“{quote}”</p>
                  <p className='mt-4 text-sm font-semibold'>Client testimonial placeholder</p>
                </CardContent>
              </Card>
            ))}
          </section>
        </SectionReveal>

        <SectionReveal>
          <section className='grid gap-8 rounded-2xl border bg-grid p-8 lg:grid-cols-2'>
            <div>
              <h2 className='text-3xl font-semibold'>Trust signals</h2>
              <ul className='mt-4 space-y-2 text-sm text-muted-foreground'>
                <li>• Responsive communication and defined process milestones</li>
                <li>• Market-informed pricing and offer strategy</li>
                <li>• Local expertise across Citrus and Marion County communities</li>
              </ul>
            </div>
            <div>
              <h3 className='text-xl font-semibold'>FAQ</h3>
              <div className='mt-4 space-y-3 text-sm'>
                <p><strong>Do you help with both buying and selling?</strong><br />Yes, including coordinated move-up plans.</p>
                <p><strong>Can I start with a quick strategy call?</strong><br />Yes, use the schedule page to pick a time.</p>
                <p><strong>Do you cover multiple communities?</strong><br />Yes, including Dunnellon, Ocala, Inverness, and nearby areas.</p>
              </div>
            </div>
          </section>
        </SectionReveal>

        <CtaBand />
      </div>
    </>
  );
}
