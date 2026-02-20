import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Badge({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-cyan-200/80 bg-gradient-to-r from-cyan-50 to-sky-100 px-3 py-1 text-xs font-semibold text-sky-900 shadow-sm',
        className
      )}
    >
      {children}
    </span>
  );
}
