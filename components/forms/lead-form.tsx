'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(7, 'Phone is required'),
  message: z.string().optional(),
  locationInterest: z.string().optional(),
  website: z.string().optional()
});

type FormValues = z.infer<typeof schema>;

export function LeadForm({
  type,
  source,
  title = 'Let’s Connect',
  submitLabel = 'Submit Inquiry'
}: {
  type: string;
  source: string;
  title?: string;
  submitLabel?: string;
}) {
  const router = useRouter();
  const [error, setError] = useState('');

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      locationInterest: '',
      website: ''
    }
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setError('');

    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...values, type, source })
    });

    if (!response.ok) {
      setError('Unable to submit right now. Please try again.');
      return;
    }

    router.push(`/thank-you?type=${encodeURIComponent(type)}`);
  });

  return (
    <form onSubmit={onSubmit} className='space-y-4 rounded-xl border bg-card p-6'>
      <h3 className='text-lg font-semibold'>{title}</h3>
      <div className='space-y-2'>
        <Label htmlFor='name'>Name</Label>
        <Input id='name' {...form.register('name')} />
        <p className='text-xs text-red-600'>{form.formState.errors.name?.message}</p>
      </div>
      <div className='grid gap-4 sm:grid-cols-2'>
        <div className='space-y-2'>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' type='email' {...form.register('email')} />
          <p className='text-xs text-red-600'>{form.formState.errors.email?.message}</p>
        </div>
        <div className='space-y-2'>
          <Label htmlFor='phone'>Phone</Label>
          <Input id='phone' {...form.register('phone')} />
          <p className='text-xs text-red-600'>{form.formState.errors.phone?.message}</p>
        </div>
      </div>
      <div className='space-y-2'>
        <Label htmlFor='locationInterest'>Location Interest</Label>
        <Input id='locationInterest' placeholder='Example: Ocala' {...form.register('locationInterest')} />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='message'>Message</Label>
        <Textarea id='message' rows={4} {...form.register('message')} />
      </div>
      <Input tabIndex={-1} autoComplete='off' className='hidden' aria-hidden='true' {...form.register('website')} />
      {error ? <p className='text-sm text-red-600'>{error}</p> : null}
      <Button type='submit' className='w-full' disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? 'Submitting...' : submitLabel}
      </Button>
    </form>
  );
}
