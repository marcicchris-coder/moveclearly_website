import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/metadata';
import { communities } from '@/src/content/communities';
import { siteCopy } from '@/src/content/siteCopy';
import { HeroSection } from '@/components/portal/HeroSection';
import { SectionHeader } from '@/components/portal/SectionHeader';
import { CardGrid } from '@/components/portal/CardGrid';
import { CommunityCard } from '@/components/portal/CommunityCard';
import { CTASection } from '@/components/portal/CTASection';
import { JsonLdScript } from '@/components/sections/json-ld-script';
import { localBusinessJsonLd, organizationJsonLd, webPageJsonLd } from '@/lib/seo/json-ld';

export const metadata = buildMetadata({
  title: 'Move Clearly | Education-First Real Estate Portal in Citrus County, Florida',
  description:
    'Explore Citrus County communities, buyer and seller roadmaps, and practical local guidance for confident Florida real estate decisions.',
  canonicalPath: '/'
});

export default function HomePage() {
  const featuredCommunities = communities.slice(0, 6);

  return (
    <>
      <JsonLdScript
        data={[
          organizationJsonLd(),
          localBusinessJsonLd(),
          webPageJsonLd({
            name: 'Move Clearly Home',
            url: 'https://moveclearly.com/',
            description: 'Education-first real estate portal for Citrus County and nearby Florida communities.'
          })
        ]}
      />

      <HeroSection
        title={siteCopy.home.headline}
        description={siteCopy.home.subheadline}
        imageKey='homeHero'
        primaryCta={{ label: 'Explore Communities', href: '/communities' }}
        secondaryCta={{ label: 'Start the Buyer Roadmap', href: '/buy' }}
      />

      <div className='mx-auto max-w-7xl space-y-16 px-4 py-14 md:px-6 md:py-16'>
        <section>
          <SectionHeader
            eyebrow='What Move Clearly Does'
            title='Guidance built for calm, informed decisions'
            description='Every section is designed to help you make progress with less uncertainty and clearer expectations.'
          />
          <div className='mt-8'>
            <CardGrid columns={4}>
              {siteCopy.home.trustCards.map((card) => (
                <article key={card.title} className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold text-slate-900'>{card.title}</h3>
                  <p className='mt-3 text-sm leading-6 text-slate-600'>{card.description}</p>
                </article>
              ))}
            </CardGrid>
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow='Choose Your Path'
            title='Pick the roadmap that matches your next move'
            description='Start with buying or selling, then follow a clear sequence of steps so you know what comes next.'
          />
          <div className='mt-8'>
            <CardGrid columns={2}>
              {siteCopy.home.pathTiles.map((tile) => (
                <article key={tile.title} className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
                  <h3 className='text-2xl font-semibold text-slate-900'>{tile.title}</h3>
                  <p className='mt-3 text-sm leading-6 text-slate-600'>{tile.description}</p>
                  <Link href={tile.href} className='mt-5 inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-800'>
                    {tile.cta}
                  </Link>
                </article>
              ))}
            </CardGrid>
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow='Featured Communities'
            title='Start comparing places with confidence'
            description='These guides come from the same community data source used across the portal and stay easy to update as content grows.'
          />
          <div className='mt-8'>
            <CardGrid>
              {featuredCommunities.map((community) => (
                <CommunityCard key={community.slug} community={community} />
              ))}
            </CardGrid>
          </div>
        </section>

        <section className='grid gap-6 md:grid-cols-2'>
          <article className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h2 className='text-2xl font-semibold text-slate-900'>Buying process preview</h2>
            <ol className='mt-4 space-y-2 text-sm text-slate-600'>
              {siteCopy.home.buyPreview.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ol>
            <Link href='/buy' className='mt-5 inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-800'>
              Open full buyer roadmap
            </Link>
          </article>

          <article className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h2 className='text-2xl font-semibold text-slate-900'>Selling process preview</h2>
            <ol className='mt-4 space-y-2 text-sm text-slate-600'>
              {siteCopy.home.sellPreview.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ol>
            <Link href='/sell' className='mt-5 inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-800'>
              Open full seller roadmap
            </Link>
          </article>
        </section>

        <section className='rounded-2xl border border-slate-200 bg-white p-8 shadow-sm'>
          <SectionHeader
            eyebrow='Local Perspective'
            title='How to use this portal in Citrus County and nearby Florida communities'
            description={
              <span>
                If you are deciding where to live or how to plan your next move, start with{' '}
                <Link href='/communities' className='font-semibold text-cyan-700 hover:text-cyan-800'>Explore Communities</Link>, then continue with the{' '}
                <Link href='/buy' className='font-semibold text-cyan-700 hover:text-cyan-800'>Buyer Roadmap</Link> or{' '}
                <Link href='/sell' className='font-semibold text-cyan-700 hover:text-cyan-800'>Seller Roadmap</Link>.
              </span>
            }
          />
          <div className='mt-6 space-y-4 text-sm leading-7 text-slate-600 md:text-base'>
            {siteCopy.home.seoBlock.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <CTASection
          title='Need tailored help after reviewing the guides?'
          description='Talk through your goals, timeline, and next best step with a local guide who can help you plan with clarity.'
          primary={{ label: 'Talk to a local guide', href: '/contact' }}
          secondary={{ label: 'Explore communities first', href: '/communities' }}
        />
      </div>
    </>
  );
}
