import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { siteConfig } from '@/lib/constants';
import { buildMetadata } from '@/lib/seo/metadata';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { AnalyticsPlaceholders } from '@/components/layout/analytics';
import { BasicAnalyticsHook } from '@/components/analytics/basic-analytics-hook';

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} | Real Estate Clarity Portal`,
  description: siteConfig.description,
  canonicalPath: '/'
});

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en'>
      <head>
        <AnalyticsPlaceholders />
      </head>
      <body className='font-sans text-slate-900'>
        <BasicAnalyticsHook />
        <a href='#main-content' className='skip-link'>Skip to content</a>
        <SiteHeader />
        <main id='main-content'>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
