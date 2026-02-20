import type { ReactNode } from 'react';

export function CardGrid({ children, columns = 3 }: { children: ReactNode; columns?: 2 | 3 | 4 }) {
  const columnsClass = columns === 2 ? 'md:grid-cols-2' : columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3';

  return <div className={`grid gap-5 ${columnsClass}`}>{children}</div>;
}
