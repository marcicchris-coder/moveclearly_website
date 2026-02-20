import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
  title: 'How We Work | Move Clearly',
  description: 'Overview of process and planning flow for Move Clearly.',
  canonicalPath: '/schedule'
});

export default function SchedulePage() {
  return (
    <div className='mx-auto max-w-6xl px-4 py-12 md:px-6'>
      <h1 className='text-4xl font-bold tracking-tight'>How We Work</h1>
      <p className='mt-3 max-w-2xl text-muted-foreground'>
        Learn the process we use to help buyers and sellers move confidently through each stage of a transaction.
      </p>

      <div className='mt-8 grid gap-8 lg:grid-cols-2'>
        <div className='rounded-xl border p-6'>
          <h2 className='text-xl font-semibold'>Typical Process</h2>
          <ol className='mt-4 list-decimal space-y-2 pl-5 text-sm text-muted-foreground'>
            <li>Define target areas, property type, and budget.</li>
            <li>Review listings and narrow options.</li>
            <li>Tour, evaluate, and decide based on fit and timing.</li>
            <li>Coordinate offer and closing milestones.</li>
          </ol>
        </div>
        <div className='rounded-xl border p-6'>
          <h2 className='text-xl font-semibold'>Contact Details</h2>
          <p className='mt-3 text-sm text-muted-foreground'>
            Public contact information is intentionally hidden during construction. Full details will be published at launch.
          </p>
        </div>
      </div>
    </div>
  );
}
