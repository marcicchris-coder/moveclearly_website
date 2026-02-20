import { buildMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/lib/constants';
import { TrackedAnchor } from '@/components/analytics/tracked-anchor';

export const metadata = buildMetadata({
  title: 'Contact | Move Clearly',
  description: 'Contact Move Clearly for buying, selling, and strategy support.',
  canonicalPath: '/contact'
});

export default function ContactPage() {
  return (
    <div className='mx-auto max-w-5xl px-4 py-12 md:px-6'>
      <h1 className='text-4xl font-bold tracking-tight'>Contact Move Clearly</h1>
      <p className='mt-3 max-w-2xl text-muted-foreground'>
        Reach us directly by phone or email.
      </p>

      <div className='mt-8 space-y-6'>
        <div className='rounded-xl border p-6'>
          <h2 className='text-xl font-semibold'>Direct Contact</h2>
          <ul className='mt-4 space-y-2 text-sm text-muted-foreground'>
            <li>
              Chris Marcic:{' '}
              <TrackedAnchor
                href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                className='underline underline-offset-4'
                eventName='contact_click'
                eventParams={{ location: 'contact_page', method: 'phone', contact: 'chris' }}
              >
                {siteConfig.phone}
              </TrackedAnchor>
            </li>
            <li>
              <TrackedAnchor
                href={`mailto:${siteConfig.email}`}
                className='underline underline-offset-4'
                eventName='contact_click'
                eventParams={{ location: 'contact_page', method: 'email', contact: 'chris' }}
              >
                {siteConfig.email}
              </TrackedAnchor>
            </li>
            <li className='pt-2'>
              Michelle Marcic:{' '}
              <TrackedAnchor
                href={`tel:${siteConfig.secondaryPhone.replace(/\D/g, '')}`}
                className='underline underline-offset-4'
                eventName='contact_click'
                eventParams={{ location: 'contact_page', method: 'phone', contact: 'michelle' }}
              >
                {siteConfig.secondaryPhone}
              </TrackedAnchor>
            </li>
            <li>
              <TrackedAnchor
                href={`mailto:${siteConfig.secondaryEmail}`}
                className='underline underline-offset-4'
                eventName='contact_click'
                eventParams={{ location: 'contact_page', method: 'email', contact: 'michelle' }}
              >
                {siteConfig.secondaryEmail}
              </TrackedAnchor>
            </li>
            <li className='pt-2'>Brokerage: {siteConfig.brokerage}</li>
          </ul>
        </div>
        <div className='rounded-xl border p-6'>
          <h2 className='text-xl font-semibold'>Service Areas</h2>
          <ul className='mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2'>
            <li>Dunnellon</li>
            <li>Citrus Springs</li>
            <li>Crystal River</li>
            <li>Lecanto</li>
            <li>Beverly Hills</li>
            <li>Hernando</li>
            <li>Inverness</li>
            <li>Ocala</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
