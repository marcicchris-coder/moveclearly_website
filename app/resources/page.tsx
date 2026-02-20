import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
  title: 'Resources | Move Clearly',
  description: 'Educational resources from Move Clearly. More downloadable guides are coming soon.',
  canonicalPath: '/resources'
});

export default function ResourcesPage() {
  return (
    <div className='mx-auto max-w-4xl px-4 py-14 md:px-6'>
      <h1 className='text-4xl font-semibold tracking-tight text-slate-900'>Resources</h1>
      <p className='mt-4 text-sm leading-7 text-slate-600'>
        This section will grow with checklists, local explainers, and planning tools. For now, start with the structured guides below.
      </p>
      <ul className='mt-6 space-y-2 text-sm text-slate-600'>
        <li><Link href='/buy' className='font-semibold text-cyan-700 hover:text-cyan-800'>Buyer Roadmap</Link></li>
        <li><Link href='/sell' className='font-semibold text-cyan-700 hover:text-cyan-800'>Seller Roadmap</Link></li>
        <li><Link href='/communities' className='font-semibold text-cyan-700 hover:text-cyan-800'>Explore Communities</Link></li>
      </ul>
    </div>
  );
}
