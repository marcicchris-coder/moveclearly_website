import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo/metadata';
import { communities, getCommunityBySlug } from '@/lib/content/communities';
import { breadcrumbJsonLd } from '@/lib/seo/json-ld';
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

  return buildMetadata({
    title: `${community.name}, FL Real Estate Guide | Move Clearly`,
    description: `${community.hero} Learn if ${community.name} fits your lifestyle and browse homes with confidence.`,
    canonicalPath: `/communities/${community.slug}`
  });
}

export default function CommunityPage({ params }: { params: { slug: string } }) {
  const community = getCommunityBySlug(params.slug);
  if (!community) notFound();

  const related = community.related
    .map((slug) => getCommunityBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Home', item: 'https://moveclearly.com' },
    { name: 'Communities', item: 'https://moveclearly.com/communities' },
    { name: community.name, item: `https://moveclearly.com/communities/${community.slug}` }
  ]);

  return (
    <>
      <JsonLdScript data={breadcrumb} />
      <div className='mx-auto max-w-6xl space-y-10 px-4 py-12 md:px-6'>
        <section className='rounded-2xl border bg-gradient-to-br from-cyan-50 to-white p-8'>
          <p className='text-xs font-semibold uppercase tracking-[0.14em] text-primary'>Community Guide</p>
          <h1 className='mt-2 text-4xl font-bold tracking-tight'>{community.name}, Florida</h1>
          <p className='mt-4 max-w-3xl text-muted-foreground'>{community.hero}</p>
          <div className='mt-6'>
            <Button asChild>
              <Link href={`/search?area=${encodeURIComponent(community.name)}`}>Browse listings in this area</Link>
            </Button>
          </div>
        </section>

        <section className='grid gap-6 md:grid-cols-2'>
          <div className='rounded-xl border p-6'>
            <h2 className='text-xl font-semibold'>Market snapshot (placeholder)</h2>
            <ul className='mt-4 space-y-2 text-sm text-muted-foreground'>
              <li>Median list price trend: placeholder</li>
              <li>Average days on market: placeholder</li>
              <li>Inventory level: placeholder</li>
            </ul>
          </div>
          <div className='rounded-xl border p-6'>
            <h2 className='text-xl font-semibold'>Lifestyle highlights</h2>
            <ul className='mt-4 space-y-2 text-sm text-muted-foreground'>
              {community.lifestyle.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </section>

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
