import Link from 'next/link';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className='mt-20 border-t bg-secondary/40'>
      <div className='mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6'>
        <div className='md:col-span-2'>
          <h2 className='text-lg font-semibold'>Move Clearly</h2>
          <p className='mt-2 max-w-xl text-sm text-muted-foreground'>
            Clear strategy. Responsive guidance. A modern, straightforward real estate experience for buyers and sellers across key Florida communities.
          </p>
        </div>
        <div>
          <h3 className='text-sm font-semibold uppercase tracking-wide'>Explore</h3>
          <ul className='mt-3 space-y-2 text-sm'>
            <li><Link href='/search'>Search Homes</Link></li>
            <li><Link href='/communities/dunnellon'>Communities</Link></li>
            <li><Link href='/blog'>Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className='text-sm font-semibold uppercase tracking-wide'>Contact</h3>
          <ul className='mt-3 space-y-2 text-sm'>
            <li><Link href='/schedule'>Schedule a Call</Link></li>
            <li><Link href='/contact'>Contact Form</Link></li>
            <li><Link href='/home-value'>Get Home Value</Link></li>
          </ul>
        </div>
      </div>
      <div className='border-t px-4 py-4 text-center text-xs text-muted-foreground'>
        <p>© {year} Move Clearly. All rights reserved.</p>
      </div>
    </footer>
  );
}
