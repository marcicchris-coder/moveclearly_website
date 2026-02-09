import { buildMetadata } from '@/lib/seo/metadata';
import { LeadForm } from '@/components/forms/lead-form';

export const metadata = buildMetadata({
  title: 'Schedule a Call | Move Clearly',
  description: 'Book a strategy call and share your goals in advance.',
  canonicalPath: '/schedule'
});

export default function SchedulePage() {
  return (
    <div className='mx-auto max-w-6xl px-4 py-12 md:px-6'>
      <h1 className='text-4xl font-bold tracking-tight'>Schedule a Call</h1>
      <p className='mt-3 max-w-2xl text-muted-foreground'>
        Use the calendar placeholder for scheduling integration and submit your priorities below.
      </p>

      <div className='mt-8 grid gap-8 lg:grid-cols-[1fr_400px]'>
        <div className='rounded-xl border border-dashed p-6'>
          <h2 className='text-xl font-semibold'>Calendar Embed Placeholder</h2>
          <p className='mt-2 text-sm text-muted-foreground'>
            Replace this section with your booking widget (Calendly, etc.) in production.
          </p>
          <div className='mt-4 h-64 rounded-lg bg-secondary/60' />
        </div>
        <LeadForm type='schedule-call' source='/schedule' submitLabel='Request Callback' />
      </div>
    </div>
  );
}
