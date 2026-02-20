import Image from 'next/image';
import { siteConfig } from '@/lib/constants';
import { TrackedAnchor } from '@/components/analytics/tracked-anchor';
import { TrackedLink } from '@/components/analytics/tracked-link';
import { BrandLogo } from '@/components/layout/brand-logo';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className='mt-20 border-t bg-white'>
      <div className='mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-6'>
        <div>
          <BrandLogo />
          <p className='mt-2 max-w-xl text-sm text-muted-foreground'>
            Clear strategy, fast communication, and modern guidance for buying and selling across key Florida communities.
          </p>
          <p className='mt-4 text-sm text-muted-foreground'>Brokerage: {siteConfig.brokerage}</p>
        </div>

        <div>
          <h3 className='text-sm font-semibold uppercase tracking-wide'>Explore</h3>
          <ul className='mt-3 space-y-2 text-sm'>
            <li><TrackedLink href='/listings' eventName='footer_link_click' eventParams={{ label: 'listings', href: '/listings' }}>Listings</TrackedLink></li>
            <li><TrackedLink href='/communities/dunnellon' eventName='footer_link_click' eventParams={{ label: 'top_areas', href: '/communities/dunnellon' }}>Top Areas</TrackedLink></li>
            <li><TrackedLink href='/blog' eventName='footer_link_click' eventParams={{ label: 'blog', href: '/blog' }}>Blog</TrackedLink></li>
            <li><TrackedLink href='/contact' eventName='footer_link_click' eventParams={{ label: 'contact', href: '/contact' }}>Contact</TrackedLink></li>
          </ul>
        </div>

        <div>
          <h3 className='text-sm font-semibold uppercase tracking-wide'>Reach Out</h3>
          <ul className='mt-3 space-y-2 text-sm text-muted-foreground'>
            <li>
              Chris Marcic:{' '}
              <TrackedAnchor
                href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                className='underline underline-offset-4'
                eventName='contact_click'
                eventParams={{ location: 'footer', method: 'phone', contact: 'chris' }}
              >
                {siteConfig.phone}
              </TrackedAnchor>
            </li>
            <li>
              <TrackedAnchor
                href={`mailto:${siteConfig.email}`}
                className='underline underline-offset-4'
                eventName='contact_click'
                eventParams={{ location: 'footer', method: 'email', contact: 'chris' }}
              >
                {siteConfig.email}
              </TrackedAnchor>
            </li>
            <li className='pt-1'>
              Michelle Marcic:{' '}
              <TrackedAnchor
                href={`tel:${siteConfig.secondaryPhone.replace(/\D/g, '')}`}
                className='underline underline-offset-4'
                eventName='contact_click'
                eventParams={{ location: 'footer', method: 'phone', contact: 'michelle' }}
              >
                {siteConfig.secondaryPhone}
              </TrackedAnchor>
            </li>
            <li>
              <TrackedAnchor
                href={`mailto:${siteConfig.secondaryEmail}`}
                className='underline underline-offset-4'
                eventName='contact_click'
                eventParams={{ location: 'footer', method: 'email', contact: 'michelle' }}
              >
                {siteConfig.secondaryEmail}
              </TrackedAnchor>
            </li>
            <li className='pt-1'>
              Website:{' '}
              <TrackedAnchor
                href={`https://${siteConfig.website}`}
                target='_blank'
                rel='noopener noreferrer'
                className='underline underline-offset-4'
                eventName='outbound_click'
                eventParams={{ location: 'footer', target: siteConfig.website }}
              >
                {siteConfig.website}
              </TrackedAnchor>
            </li>
          </ul>
        </div>
      </div>

      <div className='border-t bg-slate-50'>
        <div className='mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-6 md:flex-row md:items-center md:px-6'>
          <div className='flex items-center gap-5'>
            <Image
              src='/brand/meek-real-estate-logo.png'
              alt='Meek Real Estate logo'
              width={160}
              height={62}
              className='h-auto w-36'
            />
            <Image
              src='/brand/equal-housing-realtor-gray50.png'
              alt='Equal Housing Opportunity and Realtor marks'
              width={110}
              height={35}
              className='h-auto w-24'
            />
          </div>

          <div className='text-xs text-muted-foreground md:text-right'>
            <p>Each office is independently owned and operated.</p>
            <p className='mt-1'>© {year} Move Clearly. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
