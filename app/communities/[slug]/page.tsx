import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo/metadata';
import { communities, getCommunityBySlug } from '@/src/content/communities';
import { imageMap } from '@/src/content/images';
import { FAQAccordion } from '@/components/portal/FAQAccordion';
import { CTASection } from '@/components/portal/CTASection';
import { TagPills } from '@/components/portal/TagPills';
import { JsonLdScript } from '@/components/sections/json-ld-script';
import { breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from '@/lib/seo/json-ld';

export function generateStaticParams() {
  return communities.map((community) => ({ slug: community.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const community = getCommunityBySlug(params.slug);

  if (!community) {
    return buildMetadata({
      title: 'Community Not Found | Move Clearly',
      description: 'The requested community guide was not found.',
      canonicalPath: `/communities/${params.slug}`,
      noIndex: true
    });
  }

  return buildMetadata({
    title: `${community.name} Community Guide | Move Clearly`,
    description: `${community.shortDescription} Learn about lifestyle fit, housing style, and next steps for buying or selling in ${community.name}, Florida.`,
    canonicalPath: `/communities/${community.slug}`
  });
}

export default function CommunityPage({ params }: { params: { slug: string } }) {
  const community = getCommunityBySlug(params.slug);
  if (!community) notFound();

  const heroImage = imageMap[community.heroImage];

  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd([
            { name: 'Home', item: 'https://moveclearly.com/' },
            { name: 'Explore Communities', item: 'https://moveclearly.com/communities' },
            { name: community.name, item: `https://moveclearly.com/communities/${community.slug}` }
          ]),
          faqJsonLd(community.faq),
          webPageJsonLd({
            name: `${community.name} Community Guide`,
            url: `https://moveclearly.com/communities/${community.slug}`,
            description: community.shortDescription
          })
        ]}
      />

      <div className='mx-auto max-w-7xl space-y-10 px-4 py-12 md:px-6'>
        <section className='grid gap-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:grid-cols-2'>
          <div className='p-7 md:p-8'>
            <p className='text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700'>Community Guide</p>
            <h1 className='mt-2 text-4xl font-semibold tracking-tight text-slate-900'>{community.name}, Florida</h1>
            <p className='mt-3 text-base leading-7 text-slate-600'>{community.vibe}</p>
            <p className='mt-3 text-sm leading-6 text-slate-600'>{community.shortDescription}</p>
            <div className='mt-5'>
              <TagPills tags={community.tags} />
            </div>
          </div>
          <div className='relative h-72 md:h-full'>
            <Image src={heroImage.url} alt={heroImage.alt} fill sizes='(min-width: 768px) 50vw, 100vw' className='object-cover' priority />
          </div>
        </section>

        <section className='rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:p-8'>
          <h2 className='text-2xl font-semibold text-slate-900'>Snapshot</h2>
          <div className='mt-5 grid gap-4 md:grid-cols-2'>
            <article className='rounded-xl bg-slate-50 p-4'>
              <h3 className='font-semibold text-slate-900'>Best match when</h3>
              <ul className='mt-2 space-y-1 text-sm text-slate-600'>
                {community.idealFor.map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </article>
            <article className='rounded-xl bg-slate-50 p-4'>
              <h3 className='font-semibold text-slate-900'>May feel limiting when</h3>
              <ul className='mt-2 space-y-1 text-sm text-slate-600'>
                {community.notIdealFor.map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </article>
            <article className='rounded-xl bg-slate-50 p-4 md:col-span-2'>
              <h3 className='font-semibold text-slate-900'>Housing style overview</h3>
              <p className='mt-2 text-sm leading-6 text-slate-600'>{community.housingNotes}</p>
            </article>
            <article className='rounded-xl bg-slate-50 p-4 md:col-span-2'>
              <h3 className='font-semibold text-slate-900'>General price range guidance</h3>
              <p className='mt-2 text-sm leading-6 text-slate-600'>{community.priceRangeDisclaimer}</p>
            </article>
            <article className='rounded-xl bg-slate-50 p-4 md:col-span-2'>
              <h3 className='font-semibold text-slate-900'>Commute and access notes</h3>
              <p className='mt-2 text-sm leading-6 text-slate-600'>{community.commuteNotes}</p>
            </article>
          </div>
        </section>

        <section className='grid gap-5 md:grid-cols-2'>
          <article className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h2 className='text-2xl font-semibold text-slate-900'>Daily life and feel</h2>
            <p className='mt-3 text-sm leading-6 text-slate-600'>{community.dailyLife}</p>
          </article>
          <article className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h2 className='text-2xl font-semibold text-slate-900'>Amenities and recreation</h2>
            <ul className='mt-3 space-y-2 text-sm text-slate-600'>
              {community.amenities.map((item) => <li key={item}>- {item}</li>)}
            </ul>
          </article>
        </section>

        <section className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
          <h2 className='text-2xl font-semibold text-slate-900'>Schools overview</h2>
          <p className='mt-3 text-sm leading-6 text-slate-600'>{community.schoolsNotes}</p>
        </section>

        <section className='grid gap-4 md:grid-cols-2'>
          {community.galleryImages.map((imageKey) => {
            const image = imageMap[imageKey];
            return (
              <figure key={imageKey} className='overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm'>
                <div className='relative h-56'>
                  <Image src={image.url} alt={image.alt} fill sizes='(min-width: 768px) 50vw, 100vw' className='object-cover' />
                </div>
                {image.photographer ? (
                  <figcaption className='px-4 py-2 text-xs text-slate-500'>Photo: {image.photographer}</figcaption>
                ) : null}
              </figure>
            );
          })}
        </section>

        <section className='rounded-2xl border border-cyan-200 bg-cyan-50 p-6'>
          <h2 className='text-2xl font-semibold text-slate-900'>Move Clearly take</h2>
          <p className='mt-3 text-sm leading-6 text-slate-700'>{community.moveClearlyTake}</p>
        </section>

        <section className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
          <h2 className='text-2xl font-semibold text-slate-900'>Frequently asked questions about {community.name}</h2>
          <div className='mt-4'>
            <FAQAccordion items={community.faq} />
          </div>
        </section>

        <CTASection
          title='Ready for next steps?'
          description='Continue with a structured plan so your move stays organized and low-stress.'
          primary={{ label: 'Go to Buyer Roadmap', href: '/buy' }}
          secondary={{ label: 'Talk to a local guide', href: '/contact' }}
        />

        <p className='text-xs text-slate-500'>Community information is educational and updated periodically. Always verify current property details, school assignments, and insurance requirements during active transactions.</p>

        <div>
          <Link href='/communities' className='text-sm font-semibold text-cyan-700 hover:text-cyan-800'>
            Back to all community guides
          </Link>
        </div>
      </div>
    </>
  );
}
