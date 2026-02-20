import Image from 'next/image';
import { siteConfig } from '@/lib/constants';
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
          <p className='mt-4 text-sm text-muted-foreground'>{siteConfig.brokerage}</p>
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
            <li>Public contact details are hidden during pre-launch.</li>
            <li>Full contact information will be published at launch.</li>
            <li>Website: {siteConfig.website}</li>
          </ul>
        </div>
      </div>

      <div className='border-t bg-slate-50'>
        <div className='mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-6 md:flex-row md:items-center md:px-6'>
          <div className='flex items-center gap-5'>
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
