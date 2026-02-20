'use client';

import Link from 'next/link';
import { Home, Menu } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics/track';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b bg-background/95 backdrop-blur'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6'>
        <Link href='/' className='text-xl font-bold tracking-tight' onClick={() => trackEvent('nav_logo_click', { location: 'header' })}>
          Move Clearly
        </Link>

        <nav className='hidden items-center gap-7 md:flex' aria-label='Main navigation'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => trackEvent('nav_link_click', { location: 'header', label: link.label, href: link.href })}
              className='text-xs font-semibold uppercase tracking-[0.12em] text-foreground/80 transition-colors hover:text-foreground'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className='hidden items-center gap-2 md:flex'>
          <Button asChild variant='outline' size='sm' className='uppercase tracking-[0.08em]'>
            <Link href='/contact' onClick={() => trackEvent('cta_click', { location: 'header', cta: 'contact', href: '/contact' })}>
              Contact
            </Link>
          </Button>
          <Button asChild size='sm' className='uppercase tracking-[0.08em]'>
            <Link
              href='/listings'
              onClick={() => trackEvent('cta_click', { location: 'header', cta: 'view_listings', href: '/listings' })}
            >
              <Home className='mr-2 h-4 w-4' />
              View Listings
            </Link>
          </Button>
        </div>

        <button
          type='button'
          className='rounded-md p-2 md:hidden'
          aria-label='Toggle menu'
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu className='h-5 w-5' />
        </button>
      </div>

      <div className={cn('border-t px-4 py-3 md:hidden', open ? 'block' : 'hidden')}>
        <nav className='grid gap-3' aria-label='Mobile navigation'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-sm font-medium'
              onClick={() => {
                trackEvent('nav_link_click', { location: 'mobile_menu', label: link.label, href: link.href });
                setOpen(false);
              }}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size='sm' className='mt-2'>
            <Link
              href='/listings'
              onClick={() => {
                trackEvent('cta_click', { location: 'mobile_menu', cta: 'view_listings', href: '/listings' });
                setOpen(false);
              }}
            >
              View Listings
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
