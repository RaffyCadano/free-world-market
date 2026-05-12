/**
 * app/api/submit/route.js
 *
 * Handles contact/lead form submissions server-side.
 * Validates input, then POSTs to HubSpot Forms API.
 * Secret keys never leave the server.
 *
 * POST /api/submit
 * Body: { firstName, lastName, email, company?, message? }
 *
 * Returns:
 *   200  { success: true }
 *   400  { success: false, error: string }
 *   500  { success: false, error: string }
 */

import { NextResponse } from 'next/server';

const PORTAL_ID  = process.env.HUBSPOT_PORTAL_ID;
const FORM_GUID  = process.env.HUBSPOT_FORM_GUID;
const HUBSPOT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`;

/* ── Helpers ─────────────────────────────────────────────── */

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ── Handler ─────────────────────────────────────────────── */

export async function POST(request) {
  // 1. Parse body
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const { firstName, lastName, email, company = '', message = '' } = body;

  // 2. Validate required fields
  if (!firstName || typeof firstName !== 'string' || firstName.trim().length === 0) {
    return NextResponse.json({ success: false, error: 'First name is required.' }, { status: 400 });
  }
  if (!lastName || typeof lastName !== 'string' || lastName.trim().length === 0) {
    return NextResponse.json({ success: false, error: 'Last name is required.' }, { status: 400 });
  }
  if (!email || !isValidEmail(email.trim())) {
    return NextResponse.json({ success: false, error: 'A valid email address is required.' }, { status: 400 });
  }

  // 3. Sanitize — strip leading/trailing whitespace; truncate to safe lengths
  const fields = [
    { name: 'firstname',    value: firstName.trim().slice(0, 100) },
    { name: 'lastname',     value: lastName.trim().slice(0, 100)  },
    { name: 'email',        value: email.trim().slice(0, 254)     },
    { name: 'company',      value: company.trim().slice(0, 200)   },
    { name: 'message',      value: message.trim().slice(0, 2000)  },
  ];

  // 4. Get submission metadata
  const ipHeader = request.headers.get('x-forwarded-for') ?? '';
  const hutk     = request.cookies.get('hubspotutk')?.value ?? '';
  const pageUri  = request.headers.get('referer') ?? '';

  // 5. Submit to HubSpot
  try {
    const hsResponse = await fetch(HUBSPOT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields,
        context: {
          hutk: hutk || undefined,
          pageUri: pageUri || undefined,
          ipAddress: ipHeader.split(',')[0].trim() || undefined,
        },
      }),
    });

    if (!hsResponse.ok) {
      // Log server-side; never expose raw API error to the client
      const errText = await hsResponse.text();
      console.error('[HubSpot submit error]', hsResponse.status, errText);
      return NextResponse.json(
        { success: false, error: 'Could not submit your details. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[HubSpot submit exception]', err);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

// Reject non-POST methods
export function GET()    { return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 }); }
export function PUT()    { return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 }); }
export function DELETE() { return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 }); }
