import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo/metadata';
import { communities, getCommunityBySlug } from '@/lib/content/communities';
import { breadcrumbJsonLd, communityGuideJsonLd, faqJsonLd } from '@/lib/seo/json-ld';
import { JsonLdScript } from '@/components/sections/json-ld-script';
import { Button } from '@/components/ui/button';

export function generateStaticParams() {
  return communities.map((community) => ({ slug: community.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const community = getCommunityBySlug(params.slug);

  if (!community) {
    return buildMetadata({
      title: 'Community Not Found | Move Clearly',
      description: 'Community page not found.',
      canonicalPath: `/communities/${params.slug}`,
      noIndex: true
    });
  }

  const description =
    community.slug === 'dunnellon'
      ? 'Dunnellon FL real estate community guide with current market stats, Rainbow River and Withlacoochee attractions, neighborhood insights, and homes for sale.'
      : community.slug === 'crystal-river'
        ? 'Crystal River FL real estate guide with current market snapshot, Kings Bay and springs attractions, neighborhood insights, and local lifestyle details.'
        : community.slug === 'inverness'
          ? 'Inverness FL real estate guide with current market snapshot, downtown history, trail and park highlights, and neighborhood planning insights.'
          : `${community.hero} Learn if ${community.name} fits your lifestyle and browse homes with confidence.`;

  return buildMetadata({
    title: `${community.name}, FL Real Estate Guide | Move Clearly`,
    description,
    canonicalPath: `/communities/${community.slug}`
  });
}

export default function CommunityPage({ params }: { params: { slug: string } }) {
  const community = getCommunityBySlug(params.slug);
  if (!community) notFound();
  const market = community.marketReport;

  const related = community.related
    .map((slug) => getCommunityBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Home', item: 'https://moveclearly.com' },
    { name: 'Communities', item: 'https://moveclearly.com/communities' },
    { name: community.name, item: `https://moveclearly.com/communities/${community.slug}` }
  ]);
  const pageUrl = `https://moveclearly.com/communities/${community.slug}`;
  const faq = faqJsonLd(community.faq);
  const guide = community.attractions
    ? communityGuideJsonLd({
        name: community.name,
        url: pageUrl,
        description: community.summary,
        attractions: community.attractions
      })
    : null;

  return (
    <>
      <JsonLdScript data={guide ? [breadcrumb, faq, guide] : [breadcrumb, faq]} />
      <div className='mx-auto max-w-6xl space-y-10 px-4 py-12 md:px-6'>
        <section className='rounded-2xl border bg-gradient-to-br from-cyan-50 to-white p-8'>
          <p className='text-xs font-semibold uppercase tracking-[0.14em] text-primary'>Community Guide</p>
          <h1 className='mt-2 text-4xl font-bold tracking-tight'>{community.name}, Florida</h1>
          <p className='mt-4 max-w-3xl text-muted-foreground'>{community.hero}</p>
          <p className='mt-3 max-w-3xl text-sm text-muted-foreground'>{community.summary}</p>
          <div className='mt-6'>
            <Button asChild>
              <Link href='/listings'>Browse listings</Link>
            </Button>
          </div>
        </section>

        {community.gallery && community.gallery.length > 0 ? (
          <section className='space-y-4'>
            <div>
              <h2 className='text-2xl font-semibold'>Photo highlights</h2>
              <p className='text-sm text-muted-foreground'>
                Local scenes that help you visualize daily life in {community.name}.
              </p>
            </div>
            <div className='grid gap-4 md:grid-cols-3'>
              {community.gallery.map((item) => (
                <article key={item.title} className='overflow-hidden rounded-xl border bg-background'>
                  <div className='relative h-48 w-full'>
                    <Image src={item.image} alt={item.title} fill sizes='(min-width: 768px) 33vw, 100vw' className='object-cover' />
                  </div>
                  <div className='space-y-2 p-4'>
                    <h3 className='font-semibold'>{item.title}</h3>
                    <p className='text-xs text-muted-foreground'>{item.credit}</p>
                    <Link href={item.source} target='_blank' rel='noopener noreferrer' className='text-xs text-primary underline-offset-4 hover:underline'>
                      View source
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className='grid gap-6 md:grid-cols-2'>
          <div className='rounded-xl border p-6'>
            <h2 className='text-xl font-semibold'>Lifestyle highlights</h2>
            <ul className='mt-4 space-y-2 text-sm text-muted-foreground'>
              {community.lifestyle.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          {market ? (
            <div className='rounded-xl border p-6'>
              <h2 className='text-xl font-semibold'>Market snapshot</h2>
              <p className='mt-2 text-xs text-muted-foreground'>
                {market.reportName} | {market.period}
              </p>
              <ul className='mt-4 space-y-3 text-sm text-muted-foreground'>
                {market.stats.map((stat) => (
                  <li key={stat.label}>
                    <span className='font-semibold text-foreground'>{stat.label}:</span> {stat.value}
                    {stat.note ? <span className='block text-xs'>{stat.note}</span> : null}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>

        {market ? (
          <section className='rounded-xl border p-6'>
            <h2 className='text-xl font-semibold'>What the data says</h2>
            <ul className='mt-4 space-y-2 text-sm text-muted-foreground'>
              {market.highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {community.history ? (
          <section className='rounded-xl border p-6'>
            <h2 className='text-xl font-semibold'>{community.history.title}</h2>
            <div className='mt-4 space-y-3 text-sm text-muted-foreground'>
              {community.history.narrative.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className='mt-4 flex flex-wrap gap-3'>
              {community.history.sources.map((source) => (
                <Button key={source.link} asChild variant='outline'>
                  <Link href={source.link} target='_blank' rel='noopener noreferrer'>
                    {source.label}
                  </Link>
                </Button>
              ))}
            </div>
          </section>
        ) : null}

        {community.attractions && community.attractions.length > 0 ? (
          <section className='rounded-xl border p-6'>
            <h2 className='text-xl font-semibold'>Top attractions in and around {community.name}</h2>
            <div className='mt-4 grid gap-4 md:grid-cols-2'>
              {community.attractions.map((item) => (
                <article key={item.name} className='rounded-lg border p-4'>
                  <h3 className='font-semibold'>{item.name}</h3>
                  <p className='mt-2 text-sm text-muted-foreground'>{item.description}</p>
                  <Link href={item.link} target='_blank' rel='noopener noreferrer' className='mt-3 inline-block text-sm text-primary underline-offset-4 hover:underline'>
                    Learn more
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {community.featuredDining && community.featuredDining.length > 0 ? (
          <section className='rounded-xl border p-6'>
            <h2 className='text-xl font-semibold'>Popular local restaurants</h2>
            <div className='mt-4 grid gap-4 md:grid-cols-3'>
              {community.featuredDining.map((item) => (
                <article key={item.name} className='rounded-lg border p-4'>
                  <h3 className='font-semibold'>{item.name}</h3>
                  <p className='mt-2 text-sm text-muted-foreground'>{item.description}</p>
                  <Link href={item.link} target='_blank' rel='noopener noreferrer' className='mt-3 inline-block text-sm text-primary underline-offset-4 hover:underline'>
                    View details
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className='rounded-xl border p-6'>
          <h2 className='text-xl font-semibold'>Who this area is for</h2>
          <ul className='mt-4 space-y-2 text-sm text-muted-foreground'>
            {community.bestFor.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className='rounded-xl border p-6'>
          <h2 className='text-xl font-semibold'>FAQs about {community.name}</h2>
          <div className='mt-4 space-y-4'>
            {community.faq.map((entry) => (
              <div key={entry.question}>
                <h3 className='font-semibold'>{entry.question}</h3>
                <p className='text-sm text-muted-foreground'>{entry.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='rounded-xl border p-6'>
          <h2 className='text-xl font-semibold'>Explore more resources</h2>
          <div className='mt-4 flex flex-wrap gap-3'>
            <Button asChild variant='outline'>
              <Link href='/blog'>Read local blog insights</Link>
            </Button>
            <Button asChild variant='outline'>
              <Link href='/communities'>Explore all Florida communities</Link>
            </Button>
            {related.map((item) => (
              <Button key={item.slug} asChild variant='secondary'>
                <Link href={`/communities/${item.slug}`}>{item.name}</Link>
              </Button>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
