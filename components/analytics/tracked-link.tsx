'use client';

import Link, { type LinkProps } from 'next/link';
import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import { trackEvent, type AnalyticsParams } from '@/lib/analytics/track';

type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

type TrackedLinkProps = LinkProps &
  AnchorProps & {
    eventName: string;
    eventParams?: AnalyticsParams;
  };

function hrefToValue(href: LinkProps['href']) {
  if (typeof href === 'string') return href;
  if (typeof href.pathname === 'string') return href.pathname;
  return '/';
}

export function TrackedLink({ eventName, eventParams, href, onClick, ...props }: TrackedLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    trackEvent(eventName, { href: hrefToValue(href), ...eventParams });
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
