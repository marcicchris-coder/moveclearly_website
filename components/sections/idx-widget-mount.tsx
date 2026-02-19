'use client';

import { useEffect, useRef } from 'react';

type IdxWidgetMountProps = {
  scriptId: string;
  src: string;
  redirectHref?: string;
};

function extractListingId(pathname: string): string | null {
  const detailsMatch = pathname.match(/\/idx\/details\/listing\/[^/]+\/([^/?#]+)/i);
  if (detailsMatch?.[1]) return decodeURIComponent(detailsMatch[1]);

  return null;
}

export function IdxWidgetMount({ scriptId, src, redirectHref }: IdxWidgetMountProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;

    const container = containerRef.current;
    if (!container) return;
    initializedRef.current = true;

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'text/javascript';
    script.src = src;
    script.charset = 'UTF-8';
    script.async = false;
    container.appendChild(script);

    const onContainerClick = (event: MouseEvent) => {
      if (!redirectHref) return;

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a');
      const href = anchor?.getAttribute('href');
      if (!anchor || !href) return;

      let parsedUrl: URL;
      try {
        parsedUrl = new URL(href, window.location.origin);
      } catch {
        return;
      }

      const isIdxUrl = parsedUrl.hostname.endsWith('idxbroker.com') || parsedUrl.pathname.includes('/idx/');
      if (!isIdxUrl) return;

      event.preventDefault();

      const nextUrl = new URL(redirectHref, window.location.origin);
      const listingId = extractListingId(parsedUrl.pathname);
      if (listingId) {
        nextUrl.searchParams.set('highlight', listingId);
      }

      window.location.assign(nextUrl.toString());
    };

    container.addEventListener('click', onContainerClick);

    return () => {
      container.removeEventListener('click', onContainerClick);
    };
  }, [redirectHref, scriptId, src]);

  return <div ref={containerRef} suppressHydrationWarning />;
}
