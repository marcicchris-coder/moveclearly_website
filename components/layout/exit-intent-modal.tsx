'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'moveclearly_exit_intent_last_seen';
const SHOW_EVERY_HOURS = 24;

export function ExitIntentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const shouldShow = () => {
      const lastSeen = window.localStorage.getItem(STORAGE_KEY);
      if (!lastSeen) return true;
      const elapsed = Date.now() - Number(lastSeen);
      return elapsed > SHOW_EVERY_HOURS * 60 * 60 * 1000;
    };

    const onLeave = (event: MouseEvent) => {
      if (event.clientY <= 0 && shouldShow()) {
        setOpen(true);
        window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
      }
    };

    document.addEventListener('mouseout', onLeave);
    return () => document.removeEventListener('mouseout', onLeave);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent aria-describedby='exit-intent-description'>
        <DialogHeader>
          <DialogTitle>Get the Florida Buyer Guide</DialogTitle>
          <DialogDescription id='exit-intent-description'>
            Grab the concise guide we give clients before they start touring homes.
          </DialogDescription>
        </DialogHeader>
        <div className='space-y-3'>
          <Button asChild className='w-full'>
            <Link href='/buyer-guide'>Unlock Buyer Guide</Link>
          </Button>
          <Button variant='outline' className='w-full' onClick={() => setOpen(false)}>
            Continue Browsing
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
