/**
 * lib/analytics.js
 *
 * Thin wrappers around gtag() and fbq() so every call-site
 * is one line and never crashes when the scripts haven't
 * loaded yet (SSR, script-blockers, etc.).
 *
 * USAGE:
 *   import { trackEvent, trackLead, trackSchedule } from '@/lib/analytics';
 *
 *   trackEvent('cta_click', { location: 'hero' });
 *   trackLead();
 *   trackSchedule();
 */

/* ── GA4 ─────────────────────────────────────────────────── */

/**
 * Fire a GA4 event.
 * @param {string} eventName
 * @param {Record<string, string|number>} [params]
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}

/** page_view — called automatically by GA4 but exposed for SPAs */
export function trackPageView(url) {
  trackEvent('page_view', { page_path: url });
}

/**
 * cta_click — fire whenever a CTA button is clicked.
 * @param {'nav'|'hero'|'pricing'|'cta_final'|string} location
 */
export function trackCtaClick(location) {
  trackEvent('cta_click', { location });
}

/** form_submit */
export function trackFormSubmit() {
  trackEvent('form_submit');
}

/** calendly_open */
export function trackCalendlyOpen(location) {
  trackEvent('calendly_open', { location });
}

/* ── Meta Pixel ──────────────────────────────────────────── */

function fbq(...args) {
  if (typeof window === 'undefined') return;
  if (typeof window.fbq !== 'function') return;
  window.fbq(...args);
}

/** PageView — sent automatically by the pixel script on load */
export function pixelPageView() {
  fbq('track', 'PageView');
}

/** Lead — fire on successful form submission */
export function trackLead() {
  fbq('track', 'Lead');
}

/** Schedule — fire when Calendly popup opens or booking is confirmed */
export function trackSchedule() {
  fbq('track', 'Schedule');
}
