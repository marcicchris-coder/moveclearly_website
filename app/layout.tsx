import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Manrope, Fraunces } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/constants';
import { buildMetadata } from '@/lib/seo/metadata';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { MobileCtaBar } from '@/components/layout/mobile-cta-bar';
import { ExitIntentModal } from '@/components/layout/exit-intent-modal';
import { AnalyticsPlaceholders } from '@/components/layout/analytics';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-serif', display: 'swap' });

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} | Florida Real Estate Team`,
  description: siteConfig.description,
  canonicalPath: '/'
});

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en' className={`${manrope.variable} ${fraunces.variable}`}>
      <head>
        <AnalyticsPlaceholders />
      </head>
      <body className='font-sans'>
        <SiteHeader />
        <main className='pb-24 md:pb-0'>{children}</main>
        <SiteFooter />
        <MobileCtaBar />
        <ExitIntentModal />
      </body>
    </html>
  );
}
