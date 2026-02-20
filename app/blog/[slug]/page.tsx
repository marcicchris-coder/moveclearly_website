import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/metadata';
import { articleJsonLd, breadcrumbJsonLd } from '@/lib/seo/json-ld';
import { JsonLdScript } from '@/components/sections/json-ld-script';
import { getAllPosts, getPostBySlug } from '@/lib/content/blog';
import { MarkdownContent } from '@/components/sections/markdown-content';
import { imageMap } from '@/src/content/images';
import { TagPills } from '@/components/portal/TagPills';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return buildMetadata({
      title: 'Post Not Found | Move Clearly',
      description: 'Blog post not found.',
      canonicalPath: `/blog/${params.slug}`,
      noIndex: true
    });
  }

  return buildMetadata({
    title: `${post.title} | Move Clearly`,
    description: post.description,
    canonicalPath: `/blog/${post.slug}`
  });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();
  const fallbackImage = imageMap.homeRoadmap;
  const heroImage = post.heroImage || fallbackImage.url;
  const heroAlt = post.heroAlt || fallbackImage.alt;

  const jsonLd = articleJsonLd({
    title: post.title,
    description: post.description,
    slug: post.slug,
    datePublished: post.date,
    dateModified: post.date
  });
  const breadcrumb = breadcrumbJsonLd([
    { name: 'Home', item: 'https://moveclearly.com/' },
    { name: 'Blog', item: 'https://moveclearly.com/blog' },
    { name: post.title, item: `https://moveclearly.com/blog/${post.slug}` }
  ]);

  return (
    <div className='mx-auto max-w-4xl px-4 py-12 md:px-6'>
      <JsonLdScript data={[jsonLd, breadcrumb]} />
      <p className='text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700'>
        {post.category} | {new Date(post.date).toLocaleDateString()}
      </p>
      <h1 className='mt-2 text-4xl font-semibold tracking-tight text-slate-900'>{post.title}</h1>
      <p className='mt-3 text-base text-slate-600'>{post.description}</p>
      {post.tags.length > 0 ? <div className='mt-4'><TagPills tags={post.tags} /></div> : null}

      <div className='relative mt-6 h-72 overflow-hidden rounded-2xl border border-slate-200 md:h-96'>
        <Image src={heroImage} alt={heroAlt} fill sizes='(min-width: 768px) 66vw, 100vw' className='object-cover' priority />
      </div>

      <article className='prose prose-slate mt-8 max-w-none rounded-2xl border border-slate-200 bg-white p-7 prose-headings:font-semibold prose-a:text-cyan-700'>
        <MarkdownContent source={post.content} />
      </article>

      <div className='mt-10 rounded-2xl border border-slate-200 bg-cyan-50 p-6'>
        <h2 className='text-xl font-semibold text-slate-900'>Continue exploring</h2>
        <div className='mt-3 flex flex-wrap gap-3'>
          <Link href='/blog' className='text-sm font-semibold text-cyan-700 hover:text-cyan-800'>More articles</Link>
          <Link href='/communities' className='text-sm font-semibold text-cyan-700 hover:text-cyan-800'>Explore communities</Link>
          <Link href='/buy' className='text-sm font-semibold text-cyan-700 hover:text-cyan-800'>Buyer roadmap</Link>
          <Link href='/sell' className='text-sm font-semibold text-cyan-700 hover:text-cyan-800'>Seller roadmap</Link>
        </div>
      </div>
    </div>
  );
}
