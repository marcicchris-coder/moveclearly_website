'use client';

import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import { trackEvent, type AnalyticsParams } from '@/lib/analytics/track';

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventParams?: AnalyticsParams;
};

export function TrackedAnchor({ eventName, eventParams, href, onClick, ...props }: TrackedAnchorProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    trackEvent(eventName, { href, ...eventParams });
  };

  return <a href={href} onClick={handleClick} {...props} />;
}
