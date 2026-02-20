import { buildMetadata } from '@/lib/seo/metadata';
import { TrackedLink } from '@/components/analytics/tracked-link';

export const metadata = buildMetadata({
  title: 'Market Snapshot | Move Clearly',
  description: 'General guidance on evaluating your home in the current Florida market.',
  canonicalPath: '/home-value'
});

export default function HomeValuePage() {
  return (
    <div className='mx-auto max-w-5xl space-y-8 px-4 py-12 md:px-6'>
      <section>
        <h1 className='text-4xl font-bold tracking-tight'>Florida Market Snapshot</h1>
        <p className='mt-3 max-w-2xl text-muted-foreground'>
          Use this overview to understand local pricing trends and the key factors that influence home value in Florida.
        </p>
      </section>
      <section className='rounded-xl border p-6'>
        <h2 className='text-xl font-semibold'>What influences value</h2>
        <ul className='mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground'>
          <li>Recent comparable sales in the same neighborhood.</li>
          <li>Condition, updates, and lot characteristics.</li>
          <li>Current inventory levels and buyer demand.</li>
          <li>Seasonality and local financing conditions.</li>
        </ul>
      </section>
      <section className='rounded-xl border p-6'>
        <h2 className='text-xl font-semibold'>Keep exploring</h2>
        <p className='mt-2 text-sm text-muted-foreground'>
          Browse current inventory and community pages for local context.
        </p>
        <div className='mt-4 flex flex-wrap gap-3 text-sm'>
          <TrackedLink
            href='/listings'
            className='underline underline-offset-4'
            eventName='cta_click'
            eventParams={{ location: 'home_value_page', cta: 'view_listings', href: '/listings' }}
          >
            View Listings
          </TrackedLink>
          <TrackedLink
            href='/communities'
            className='underline underline-offset-4'
            eventName='cta_click'
            eventParams={{ location: 'home_value_page', cta: 'browse_communities', href: '/communities' }}
          >
            Browse Communities
          </TrackedLink>
        </div>
      </section>
    </div>
  );
}
