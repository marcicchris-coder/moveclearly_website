'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function BasicAnalyticsHook() {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    // Placeholder for future analytics provider wiring.
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('mc:page_view', { detail: { pathname } }));
    }
  }, [pathname]);

  return null;
}
