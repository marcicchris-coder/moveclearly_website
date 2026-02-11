import { Hero } from '@/components/sections/hero';
import { SectionReveal } from '@/components/layout/section-reveal';
import { CtaBand } from '@/components/sections/cta-band';
import { JsonLdScript } from '@/components/sections/json-ld-script';
import { localBusinessJsonLd, organizationJsonLd } from '@/lib/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { TopAreas } from '@/components/sections/top-areas';
import { TestimonialCarousel } from '@/components/sections/testimonial-carousel';
import { CrystalRiverGallery } from '@/components/sections/crystal-river-gallery';
import { getFeaturedListings } from '@/lib/idx';
import { ListingCard } from '@/components/sections/listing-card';

export default async function HomePage() {
  const featuredListings = await getFeaturedListings();

  return (
    <>
      <JsonLdScript data={[organizationJsonLd(), localBusinessJsonLd()]} />
      <Hero />
      <div className='mx-auto max-w-7xl space-y-20 px-4 py-16 md:px-6'>
        <SectionReveal>
          <TopAreas />
        </SectionReveal>

        <SectionReveal>
          <CrystalRiverGallery />
        </SectionReveal>

        <SectionReveal>
          <section>
            <div className='mb-8'>
              <Badge>Featured Listings</Badge>
              <h2 className='mt-3 text-3xl font-semibold'>Highlighted homes</h2>
              <p className='mt-2 text-muted-foreground'>
                Explore featured homes for sale in Crystal River, Dunnellon, Inverness, and nearby Citrus County and Ocala
                communities. This live MLS feed updates through IDX Broker so buyers can view current pricing, photos, and
                property details in one place.
              </p>
            </div>
            {featuredListings.length > 0 ? (
              <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {featuredListings.map((listing) => {
                  const searchParams = new URLSearchParams({
                    highlight: listing.id,
                    q: listing.id
                  });

                  return (
                    <ListingCard
                      key={listing.id}
                      listing={listing}
                      href={`/search?${searchParams.toString()}`}
                    />
                  );
                })}
              </div>
            ) : (
              <div className='rounded-xl border bg-white p-6 text-sm text-muted-foreground'>
                Featured listings are loading. Please check back shortly.
              </div>
            )}
          </section>
        </SectionReveal>

        <SectionReveal>
          <TestimonialCarousel />
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

        <SectionReveal>
          <section className='rounded-2xl border bg-white p-8'>
            <h2 className='text-3xl font-semibold'>How We Help Buyers and Sellers</h2>
            <div className='mt-6 grid gap-6 md:grid-cols-2'>
              <div className='rounded-xl border bg-slate-50/70 p-6'>
                <h3 className='text-xl font-semibold'>For Buyers</h3>
                <p className='mt-3 text-sm leading-relaxed text-muted-foreground md:text-base'>
                  We help buyers narrow their search, avoid wasted time, and focus on homes that actually fit their goals — whether that’s single-family residences, manufactured homes, or specific lifestyle needs. Our search tools and guidance are designed to simplify decisions, not overwhelm you.
                </p>
              </div>
              <div className='rounded-xl border bg-slate-50/70 p-6'>
                <h3 className='text-xl font-semibold'>For Sellers</h3>
                <p className='mt-3 text-sm leading-relaxed text-muted-foreground md:text-base'>
                  Sellers benefit from clear pricing strategy, honest feedback, and modern marketing that attracts serious buyers. We focus on positioning your home correctly from day one to reduce time on market and maximize value.
                </p>
              </div>
            </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section className='rounded-2xl border bg-white p-8'>
            <h2 className='text-3xl font-semibold'>Why Work With Move Clearly?</h2>
            <div className='mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base'>
              <p>
                Buying or selling a home doesn’t need to feel overwhelming. We focus on clear communication, realistic expectations, and smart strategy so you can make confident decisions at every step.
              </p>
              <p>
                As a husband-and-wife team with deep local knowledge of Citrus County and surrounding areas, we combine hands-on service with modern tools to help you move efficiently and with less stress.
              </p>
              <p>
                Whether you’re searching for your next home, selling a property, or just need honest guidance, our goal is simple: make the process clear and keep your best interests front and center.
              </p>
            </div>
          </section>
        </SectionReveal>

        <CtaBand />
      </div>
    </>
  );
}
