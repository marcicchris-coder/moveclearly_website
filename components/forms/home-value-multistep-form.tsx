'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface State {
  name: string;
  email: string;
  phone: string;
  locationInterest: string;
  message: string;
  website: string;
}

const initial: State = {
  name: '',
  email: '',
  phone: '',
  locationInterest: '',
  message: '',
  website: ''
};

export function HomeValueMultiStepForm() {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<State>(initial);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const canContinue =
    step === 1
      ? state.name.length > 1 && state.email.length > 4 && state.phone.length > 6
      : state.locationInterest.length > 2;

  async function submit() {
    setLoading(true);
    setError('');

    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...state,
        type: 'seller-home-value',
        source: '/home-value'
      })
    });

    setLoading(false);

    if (!response.ok) {
      setError('Could not submit. Please try again.');
      return;
    }

    router.push('/thank-you?type=seller-home-value');
  }

  return (
    <div className='rounded-xl border bg-card p-6'>
      <div className='mb-6 flex items-center justify-between'>
        <p className='text-sm font-medium'>Step {step} of 2</p>
        <div className='h-2 w-32 overflow-hidden rounded-full bg-secondary'>
          <div className='h-full bg-primary transition-all' style={{ width: `${step * 50}%` }} />
        </div>
      </div>

      {step === 1 ? (
        <div className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='name'>Name</Label>
            <Input id='name' value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' type='email' value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='phone'>Phone</Label>
            <Input id='phone' value={state.phone} onChange={(e) => setState({ ...state, phone: e.target.value })} />
          </div>
          <Input tabIndex={-1} autoComplete='off' className='hidden' aria-hidden='true' value={state.website} onChange={(e) => setState({ ...state, website: e.target.value })} />
          <Button className='w-full' disabled={!canContinue} onClick={() => setStep(2)}>
            Continue
          </Button>
        </div>
      ) : (
        <div className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='location'>Property Location</Label>
            <Input
              id='location'
              placeholder='Street + City'
              value={state.locationInterest}
              onChange={(e) => setState({ ...state, locationInterest: e.target.value })}
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='details'>Property Details</Label>
            <Textarea
              id='details'
              rows={5}
              placeholder='Beds, baths, upgrades, timeline...'
              value={state.message}
              onChange={(e) => setState({ ...state, message: e.target.value })}
            />
          </div>
          {error ? <p className='text-sm text-red-600'>{error}</p> : null}
          <div className='grid grid-cols-2 gap-2'>
            <Button variant='outline' onClick={() => setStep(1)}>
              Back
            </Button>
            <Button disabled={!canContinue || loading} onClick={submit}>
              {loading ? 'Submitting...' : 'Get Home Value'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
