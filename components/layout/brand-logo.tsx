import Image from 'next/image';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
  className?: string;
  priority?: boolean;
}

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <Image
      src='/brand/move-clearly-logo.svg'
      alt='Move Clearly'
      width={180}
      height={48}
      priority={priority}
      className={cn('h-auto w-[150px] sm:w-[180px]', className)}
    />
  );
}
