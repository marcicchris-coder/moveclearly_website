import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
  title: 'Contact | Move Clearly',
  description: 'Contact Move Clearly for local real estate guidance and next-step planning in Citrus County, Florida.',
  canonicalPath: '/contact'
});

export default function ContactPage({ searchParams }: { searchParams?: { subject?: string } }) {
  const subject = searchParams?.subject;

  return (
    <div className='mx-auto max-w-5xl px-4 py-12 md:px-6'>
      <h1 className='text-4xl font-semibold tracking-tight text-slate-900'>Talk to a local guide</h1>
      <p className='mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base'>
        Move Clearly is currently publishing contact details in phases. Use this page as your starting point and we will route your request based on your goal.
      </p>

      <div className='mt-8 grid gap-6 md:grid-cols-2'>
        <article className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
          <h2 className='text-xl font-semibold text-slate-900'>Contact placeholders</h2>
          <ul className='mt-4 space-y-2 text-sm text-slate-600'>
            <li>Phone: Placeholder</li>
            <li>Email: Placeholder</li>
            <li>Office location: Placeholder</li>
            <li>Hours: Placeholder</li>
          </ul>
        </article>

        <article className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
          <h2 className='text-xl font-semibold text-slate-900'>Preferred request</h2>
          <p className='mt-3 text-sm text-slate-600'>
            {subject ? `Request topic: ${subject}` : 'No topic selected. You can still reach out and describe your next step.'}
          </p>
          <p className='mt-3 text-sm text-slate-600'>
            For now, continue with self-guided resources while contact channels are finalized.
          </p>
          <div className='mt-4 space-y-2 text-sm'>
            <p><Link href='/communities' className='font-semibold text-cyan-700 hover:text-cyan-800'>Explore Communities</Link></p>
            <p><Link href='/buy' className='font-semibold text-cyan-700 hover:text-cyan-800'>Buyer Roadmap</Link></p>
            <p><Link href='/sell' className='font-semibold text-cyan-700 hover:text-cyan-800'>Seller Roadmap</Link></p>
          </div>
        </article>
      </div>
    </div>
  );
}
