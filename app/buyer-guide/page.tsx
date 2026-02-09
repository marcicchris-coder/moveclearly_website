import { buildMetadata } from '@/lib/seo/metadata';
import { BuyerGuideGateForm } from '@/components/forms/buyer-guide-gate-form';

export const metadata = buildMetadata({
  title: 'Buyer Guide | Move Clearly',
  description: 'Gated buyer guide download to support informed home search planning.',
  canonicalPath: '/buyer-guide'
});

export default function BuyerGuidePage() {
  return (
    <div className='mx-auto max-w-5xl space-y-8 px-4 py-12 md:px-6'>
      <section>
        <h1 className='text-4xl font-bold tracking-tight'>Florida Buyer Guide</h1>
        <p className='mt-3 max-w-2xl text-muted-foreground'>
          Get the concise framework we use to help buyers evaluate neighborhoods, financing, and offer timing.
        </p>
      </section>
      <BuyerGuideGateForm />
    </div>
  );
}
