import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseAdminClient } from '@/lib/supabase/server';
import { leadSchema } from '@/lib/validation';
import { isRateLimited } from '@/lib/rate-limit';

export async function POST(req: NextRequest) {
  const ip = req.ip || req.headers.get('x-forwarded-for') || 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please try again shortly.' }, { status: 429 });
  }

  try {
    const json = await req.json();
    const parsed = leadSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input', issues: parsed.error.flatten() }, { status: 400 });
    }

    if (parsed.data.website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const supabase = createSupabaseAdminClient();

    const { error } = await supabase.from('leads').insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      type: parsed.data.type,
      source: parsed.data.source,
      message: parsed.data.message,
      locationInterest: parsed.data.locationInterest
    });

    if (error) {
      return NextResponse.json({ error: 'Unable to save lead' }, { status: 500 });
    }

    if (process.env.ZAPIER_WEBHOOK_URL) {
      fetch(process.env.ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data)
      }).catch(() => null);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 });
  }
}
