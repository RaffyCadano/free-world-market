/**
 * lib/hubspot.js
 *
 * Server-side HubSpot Forms API client.
 * Handles timeout (8 s) and one automatic retry on 5xx errors.
 * Never imported by client components.
 *
 * USAGE:
 *   import { submitToHubSpot } from '@/lib/hubspot';
 *   const { ok, status, body } = await submitToHubSpot({ fields, context });
 */

const PORTAL_ID   = process.env.HUBSPOT_PORTAL_ID;
const FORM_GUID   = process.env.HUBSPOT_FORM_GUID;
const ENDPOINT    = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`;
const TIMEOUT_MS  = 8_000;
const MAX_RETRIES = 1;

/**
 * POST a lead to HubSpot with timeout + retry.
 *
 * @param {{ fields: Array<{name:string,value:string}>, context: object }} payload
 * @returns {Promise<{ ok: boolean; status: number; body: string }>}
 */
export async function submitToHubSpot(payload) {
  let attempt = 0;

  while (attempt <= MAX_RETRIES) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      const res = await fetch(ENDPOINT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
        signal:  controller.signal,
      });

      clearTimeout(timer);

      const text = await res.text();

      // Retry once on server errors
      if (!res.ok && res.status >= 500 && attempt < MAX_RETRIES) {
        attempt++;
        console.warn(`[HubSpot] ${res.status} — retrying (attempt ${attempt + 1})`);
        continue;
      }

      return { ok: res.ok, status: res.status, body: text };
    } catch (err) {
      clearTimeout(timer);

      if (err.name === 'AbortError') {
        console.error('[HubSpot] Request timed out after', TIMEOUT_MS, 'ms');
        if (attempt < MAX_RETRIES) { attempt++; continue; }
        return { ok: false, status: 504, body: 'HubSpot request timed out.' };
      }

      console.error('[HubSpot] Network error:', err.message);
      return { ok: false, status: 503, body: err.message };
    }
  }

  return { ok: false, status: 500, body: 'Max retries exceeded.' };
}
