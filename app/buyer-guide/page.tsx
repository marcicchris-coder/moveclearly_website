import { buildMetadata } from '@/lib/seo/metadata';
import { TrackedLink } from '@/components/analytics/tracked-link';

export const metadata = buildMetadata({
  title: 'Buyer Guide | Move Clearly',
  description: 'Buyer guide and planning resources.',
  canonicalPath: '/buyer-guide'
});

export default function BuyerGuidePage() {
  return (
    <div className='mx-auto max-w-5xl space-y-8 px-4 py-12 md:px-6'>
      <section>
        <h1 className='text-4xl font-bold tracking-tight'>Florida Buyer Guide</h1>
        <p className='mt-3 max-w-2xl text-muted-foreground'>
          Download the buyer guide directly. No form submission is required.
        </p>
      </section>
      <section className='rounded-xl border p-6'>
        <h2 className='text-xl font-semibold'>Download</h2>
        <p className='mt-2 text-sm text-muted-foreground'>
          Access the PDF guide with a direct link.
        </p>
        <TrackedLink
          href='/buyer-guide.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='mt-4 inline-block underline underline-offset-4'
          eventName='download_click'
          eventParams={{ location: 'buyer_guide_page', asset: 'buyer-guide.pdf' }}
        >
          Open Buyer Guide PDF
        </TrackedLink>
      </section>
    </div>
  );
}
