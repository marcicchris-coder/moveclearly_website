import Image from 'next/image';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/metadata';
import { getAllPosts } from '@/lib/content/blog';
import { SectionHeader } from '@/components/portal/SectionHeader';
import { TagPills } from '@/components/portal/TagPills';
import { imageMap } from '@/src/content/images';
import { JsonLdScript } from '@/components/sections/json-ld-script';
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/seo/json-ld';

export const metadata = buildMetadata({
  title: 'Blog | Move Clearly Education Center',
  description: 'Clear, practical real estate education articles for Citrus County and surrounding Florida communities.',
  canonicalPath: '/blog'
});

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  const fallbackImage = imageMap.homeCommunities;

  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd([
            { name: 'Home', item: 'https://moveclearly.com/' },
            { name: 'Blog', item: 'https://moveclearly.com/blog' }
          ]),
          webPageJsonLd({
            name: 'Move Clearly Blog',
            url: 'https://moveclearly.com/blog',
            description: 'Real estate education articles for clearer buy and sell decisions in Florida.'
          })
        ]}
      />
      <div className='mx-auto max-w-7xl px-4 py-12 md:px-6'>
        <section className='rounded-2xl border border-slate-200 bg-white p-8 shadow-sm'>
          <SectionHeader
            eyebrow='Education Center'
            title='Real estate clarity articles'
            description='Read practical guidance on buying, selling, inspections, and Florida community planning. Use these resources alongside the Buy and Sell roadmaps.'
          />
          <div className='mt-4 flex flex-wrap gap-3 text-sm'>
            <Link href='/buy' className='font-semibold text-cyan-700 hover:text-cyan-800'>Buyer Roadmap</Link>
            <Link href='/sell' className='font-semibold text-cyan-700 hover:text-cyan-800'>Seller Roadmap</Link>
            <Link href='/communities' className='font-semibold text-cyan-700 hover:text-cyan-800'>Explore Communities</Link>
          </div>
        </section>

        <section className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post) => {
            const imageSrc = post.heroImage || fallbackImage.url;
            const imageAlt = post.heroAlt || fallbackImage.alt;

            return (
              <article key={post.slug} className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm'>
                <div className='relative h-48'>
                  <Image src={imageSrc} alt={imageAlt} fill sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw' className='object-cover' />
                </div>
                <div className='space-y-4 p-5'>
                  <p className='text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700'>
                    {post.category} | {new Date(post.date).toLocaleDateString()}
                  </p>
                  <h2 className='text-xl font-semibold tracking-tight text-slate-900'>
                    <Link href={`/blog/${post.slug}`} className='hover:text-cyan-800'>
                      {post.title}
                    </Link>
                  </h2>
                  <p className='text-sm leading-6 text-slate-600'>{post.description}</p>
                  {post.tags.length > 0 ? <TagPills tags={post.tags} /> : null}
                  <Link href={`/blog/${post.slug}`} className='inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-800'>
                    Read article
                  </Link>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </>
  );
}
