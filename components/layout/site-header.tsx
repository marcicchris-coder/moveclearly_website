'use client';

import Link from 'next/link';
import { Home, Menu } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics/track';
import { BrandLogo } from '@/components/layout/brand-logo';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b bg-background/95 backdrop-blur'>
      <div
        className='relative h-9 overflow-hidden border-b border-black/30'
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg,#facc15 0 18px,#111827 18px 30px)'
        }}
        aria-label='Website under construction notice'
      >
        <div className='absolute inset-0 flex items-center justify-center px-4'>
          <p className='rounded-sm bg-amber-200/95 px-3 py-1 text-center text-[10px] font-extrabold uppercase tracking-[0.2em] text-neutral-900 ring-1 ring-black/30 sm:text-xs'>
            Website Under Construction
          </p>
        </div>
      </div>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6'>
        <Link href='/' className='inline-flex items-center' onClick={() => trackEvent('nav_logo_click', { location: 'header' })}>
          <BrandLogo priority />
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
