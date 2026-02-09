'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Community } from '@/lib/content/communities';

export function CommunityCard({ community }: { community: Community }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
      <Card className='h-full'>
        <CardHeader>
          <CardTitle>{community.name}</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-sm text-muted-foreground'>{community.summary}</p>
          <Link href={`/communities/${community.slug}`} className='inline-flex items-center text-sm font-semibold text-primary'>
            Explore community <ArrowRight className='ml-1 h-4 w-4' />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
