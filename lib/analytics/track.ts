'use client';

type Primitive = string | number | boolean | null | undefined;

export type AnalyticsParams = Record<string, Primitive>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, Primitive>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined') return;
  if (process.env.NODE_ENV !== 'production') return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...params });
  }
}
