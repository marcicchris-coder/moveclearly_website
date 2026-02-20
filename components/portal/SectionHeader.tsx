import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  center?: boolean;
}

export function SectionHeader({ eyebrow, title, description, center = false }: SectionHeaderProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow ? <p className='text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700'>{eyebrow}</p> : null}
      <h2 className='mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl'>{title}</h2>
      {description ? <p className='mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base'>{description}</p> : null}
    </div>
  );
}
