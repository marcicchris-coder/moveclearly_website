import { buildMetadata } from '@/lib/seo/metadata';
import { HomeValueMultiStepForm } from '@/components/forms/home-value-multistep-form';

export const metadata = buildMetadata({
  title: 'Get Home Value | Move Clearly',
  description: 'Seller lead funnel to request a strategic home value analysis.',
  canonicalPath: '/home-value'
});

export default function HomeValuePage() {
  return (
    <div className='mx-auto max-w-5xl space-y-8 px-4 py-12 md:px-6'>
      <section>
        <h1 className='text-4xl font-bold tracking-tight'>Get Your Home Value Strategy</h1>
        <p className='mt-3 max-w-2xl text-muted-foreground'>
          Complete this short two-step form and we will provide a pricing range with clear next steps.
        </p>
      </section>
      <HomeValueMultiStepForm />
    </div>
  );
}
