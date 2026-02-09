'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function BuyerGuideGateForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({ name: '', email: '', phone: '', website: '' });
  const [error, setError] = useState('');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...values,
        locationInterest: '',
        message: 'Requested buyer guide download',
        type: 'buyer-guide',
        source: '/buyer-guide'
      })
    });

    setLoading(false);
    if (!response.ok) {
      setError('Submission failed. Please try again.');
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className='rounded-xl border bg-card p-6 text-center'>
        <h3 className='text-xl font-semibold'>Your guide is ready</h3>
        <p className='mt-2 text-sm text-muted-foreground'>
          Download the PDF now and check your inbox for a copy.
        </p>
        <Button asChild className='mt-4'>
          <a href='/buyer-guide.pdf' download>
            Download Buyer Guide
          </a>
        </Button>
      </div>
    );
  }

  return (
    <form className='space-y-4 rounded-xl border bg-card p-6' onSubmit={onSubmit}>
      <div className='space-y-2'>
        <Label htmlFor='name'>Name</Label>
        <Input id='name' value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} required />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='email'>Email</Label>
        <Input id='email' type='email' value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} required />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='phone'>Phone</Label>
        <Input id='phone' value={values.phone} onChange={(e) => setValues({ ...values, phone: e.target.value })} required />
      </div>
      <Input tabIndex={-1} autoComplete='off' className='hidden' aria-hidden='true' value={values.website} onChange={(e) => setValues({ ...values, website: e.target.value })} />
      {error ? <p className='text-sm text-red-600'>{error}</p> : null}
      <Button type='submit' className='w-full' disabled={loading}>
        {loading ? 'Submitting...' : 'Unlock the Guide'}
      </Button>
    </form>
  );
}
