import Link from 'next/link';
import { siteConfig } from '@/lib/constants';
import { BrandLogo } from '@/components/layout/brand-logo';
import { complianceCopy } from '@/src/content/compliance';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className='mt-20 border-t border-cyan-100 bg-slate-50'>
      <div className='mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6'>
        <div>
          <BrandLogo />
          <p className='mt-3 text-sm leading-6 text-slate-600'>
            Move Clearly is an education-first portal for buyers and sellers across Citrus County and nearby Florida communities.
          </p>
        </div>

        <div>
          <h3 className='text-sm font-semibold uppercase tracking-[0.12em] text-slate-900'>Explore</h3>
          <ul className='mt-3 space-y-2 text-sm text-slate-600'>
            <li><Link href='/communities' className='hover:text-slate-900'>Explore Communities</Link></li>
            <li><Link href='/buy' className='hover:text-slate-900'>Buyer Roadmap</Link></li>
            <li><Link href='/sell' className='hover:text-slate-900'>Seller Roadmap</Link></li>
            <li><Link href='/contact' className='hover:text-slate-900'>Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className='text-sm font-semibold uppercase tracking-[0.12em] text-slate-900'>Compliance and Contact</h3>
          <p className='mt-3 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-900'>
            {complianceCopy.footerNotice}
          </p>
          <ul className='mt-3 space-y-2 text-sm text-slate-600'>
            {complianceCopy.brokerageFields.map((field) => (
              <li key={field}>{field}: Placeholder</li>
            ))}
          </ul>
          <p className='mt-3 text-xs text-slate-500'>{complianceCopy.fairHousing}</p>
        </div>
      </div>

      <div className='border-t border-cyan-100'>
        <div className='mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 md:px-6'>
          <p>Photos on this site use royalty-free sources and are replaceable through the centralized image map.</p>
          <p>© {year} {siteConfig.name}. All rights reserved. Version {siteConfig.version}.</p>
        </div>
      </div>
    </footer>
  );
}
