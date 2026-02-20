'use client';

import { ReactNode } from 'react';

export function SectionReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <div className='animate-fade-up' style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
