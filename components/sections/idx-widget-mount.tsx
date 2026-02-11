'use client';

import { useEffect, useRef } from 'react';

type IdxWidgetMountProps = {
  scriptId: string;
  src: string;
};

export function IdxWidgetMount({ scriptId, src }: IdxWidgetMountProps) {
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
  }, [scriptId, src]);

  return <div ref={containerRef} suppressHydrationWarning />;
}
