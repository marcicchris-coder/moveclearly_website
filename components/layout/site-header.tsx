'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BrandLogo } from '@/components/layout/brand-logo';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className='sticky top-0 z-50 border-b border-cyan-100 bg-white/95 backdrop-blur'>
      <div className='construction-tape relative h-9 overflow-hidden border-b border-black/30' aria-label='Website under construction notice'>
        <div className='absolute inset-0 flex items-center justify-center px-4'>
          <p className='rounded-sm bg-amber-200/95 px-3 py-1 text-center text-[10px] font-extrabold uppercase tracking-[0.2em] text-neutral-900 ring-1 ring-black/30 sm:text-xs'>
            Website Under Construction
          </p>
        </div>
      </div>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6'>
        <Link href='/' className='inline-flex items-center'>
          <BrandLogo priority />
        </Link>

        <nav className='hidden items-center gap-6 md:flex' aria-label='Primary navigation'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              className='text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className='hidden md:flex'>
          <Button asChild size='sm'>
            <Link href='/contact'>Talk to a local guide</Link>
          </Button>
        </div>

        <button
          type='button'
          className='rounded-md p-2 text-slate-700 md:hidden'
          aria-label='Toggle menu'
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu className='h-5 w-5' />
        </button>
      </div>

      <div className={cn('border-t border-cyan-100 px-4 py-3 md:hidden', open ? 'block' : 'hidden')}>
        <nav className='grid gap-3' aria-label='Mobile navigation'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              className='text-sm font-medium text-slate-700'
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size='sm' className='mt-1'>
            <Link href='/contact' onClick={() => setOpen(false)}>
              Talk to a local guide
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
