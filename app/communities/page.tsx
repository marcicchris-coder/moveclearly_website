import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/metadata';
import { communities } from '@/src/content/communities';
import { HeroSection } from '@/components/portal/HeroSection';
import { SectionHeader } from '@/components/portal/SectionHeader';
import { CommunitiesClient } from '@/app/communities/communities-client';
import { JsonLdScript } from '@/components/sections/json-ld-script';
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/seo/json-ld';

export const metadata = buildMetadata({
  title: 'Explore Communities with Clarity | Move Clearly',
  description:
    'Search and filter Citrus County community guides by lifestyle fit. Compare neighborhoods, housing style, and next steps with confidence.',
  canonicalPath: '/communities'
});

export default function CommunitiesPage() {
  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd([
            { name: 'Home', item: 'https://moveclearly.com/' },
            { name: 'Explore Communities', item: 'https://moveclearly.com/communities' }
          ]),
          webPageJsonLd({
            name: 'Explore Communities with Clarity',
            url: 'https://moveclearly.com/communities',
            description: 'Community hub for comparing lifestyle fit in Citrus County and surrounding Florida areas.'
          })
        ]}
      />

      <HeroSection
        title='Explore Communities with Clarity'
        description='Use this hub to compare lifestyle fit, housing patterns, and practical tradeoffs before you commit to a location.'
        imageKey='communityHubHero'
        primaryCta={{ label: 'Start exploring guides', href: '#community-grid' }}
        secondaryCta={{ label: 'Talk to a local guide', href: '/contact' }}
      />

      <div className='mx-auto max-w-7xl px-4 py-14 md:px-6'>
        <section className='rounded-2xl border border-slate-200 bg-white p-8 shadow-sm'>
          <SectionHeader
            title='How to use these community guides'
            description='Every guide is structured to make side-by-side decisions easier, especially when multiple neighborhoods look similar on listing photos.'
          />
          <div className='mt-5 space-y-4 text-sm leading-7 text-slate-600 md:text-base'>
            <p>
              Start with the community snapshot to see who each area usually fits best and who may feel limited there. This helps you avoid chasing homes that look attractive online but do not align with daily routines. Then review housing style and price-range guidance so you can set realistic expectations before tours or listing decisions.
            </p>
            <p>
              After that, use lifestyle notes and amenities to compare pace, convenience, and recreation access. In Citrus County, the difference between a waterfront-centered community and an inland convenience-centered community can change your ownership experience more than square footage alone. School notes are intentionally general so you can verify the latest district details directly.
            </p>
            <p>
              Once you narrow your shortlist, move into the structured next step. Buyers should continue with the <Link href='/buy' className='font-semibold text-cyan-700 hover:text-cyan-800'>Buyer Roadmap</Link>. Sellers can align timeline and prep through the <Link href='/sell' className='font-semibold text-cyan-700 hover:text-cyan-800'>Seller Roadmap</Link>. The goal is simple: compare clearly, decide calmly, and move forward with fewer surprises.
            </p>
          </div>
        </section>

        <div id='community-grid' className='mt-8'>
          <CommunitiesClient allCommunities={communities} />
        </div>
      </div>
    </>
  );
}
