/**
 * app/api/submit/route.js
 *
 * Handles contact/lead form submissions server-side.
 * POST only — validates, rate-limits, then forwards to HubSpot.
 * Secret keys never leave the server.
 *
 * POST /api/submit
 * Body: { firstName, lastName, email, company?, message? }
 *
 * Returns:
 *   200  { success: true,  message: "Lead submitted successfully" }
 *   400  { success: false, error: string }
 *   429  { success: false, error: string, retryAfter: number }
 *   500  { success: false, error: string }
 */

import '@/lib/env';                                        // fail fast on missing vars
import { NextResponse } from 'next/server';
import { submitSchema, emailOnlySchema, firstZodError } from '@/lib/validation';
import { rateLimit } from '@/lib/rateLimit';
import { submitToHubSpot } from '@/lib/hubspot';

/* ── Handler ─────────────────────────────────────────────── */

export async function POST(request) {
  // 1. Rate limit by IP
  const ip = (request.headers.get('x-forwarded-for') ?? '127.0.0.1')
    .split(',')[0]
    .trim();

  const { allowed, retryAfter } = rateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { success: false, error: `Too many requests. Please try again in ${retryAfter} seconds.`, retryAfter },
      { status: 429, headers: { 'Retry-After': String(retryAfter) } }
    );
  }

  // 2. Parse body
  let raw;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request body.' }, { status: 400 });
  }

  // 3. Validate + sanitize
  // Use email-only schema when only email is provided (CTA final form),
  // full schema when additional fields are present (contact/pricing forms).
  const isEmailOnly = raw && typeof raw === 'object' && Object.keys(raw).every((k) => k === 'email');
  const schema = isEmailOnly ? emailOnlySchema : submitSchema;
  const result = schema.safeParse(raw);

  if (!result.success) {
    return NextResponse.json(
      { success: false, error: firstZodError(result.error) },
      { status: 400 }
    );
  }

  const { email, firstName = '', lastName = '', company = '', message = '' } = result.data;

  // 4. Build HubSpot payload
  const hutk    = request.cookies.get('hubspotutk')?.value ?? '';
  const pageUri = request.headers.get('referer') ?? '';

  const payload = {
    fields: [
      { name: 'email',     value: email     },
      { name: 'firstname', value: firstName },
      { name: 'lastname',  value: lastName  },
      { name: 'company',   value: company   },
      { name: 'message',   value: message   },
    ].filter((f) => f.value !== ''),          // omit empty optional fields
    context: {
      hutk:      hutk     || undefined,
      pageUri:   pageUri  || undefined,
      ipAddress: ip       || undefined,
    },
  };

  // 5. Submit to HubSpot (timeout + retry handled inside)
  const { ok, status, body } = await submitToHubSpot(payload);

  if (!ok) {
    console.error('[/api/submit] HubSpot error', status, body);
    return NextResponse.json(
      { success: false, error: 'Could not submit your details. Please try again.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, message: 'Lead submitted successfully.' });
}

// Reject all non-POST methods explicitly
export function GET()    { return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 }); }
export function PUT()    { return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 }); }
export function DELETE() { return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 }); }
export function PATCH()  { return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 }); }

