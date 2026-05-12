'use client';

/**
 * components/CalendlyButton.jsx
 *
 * Drop-in replacement for any CTA anchor that should open the
 * Calendly popup.  Fires GA4 + Meta Pixel events on open.
 *
 * USAGE:
 *   <CalendlyButton location="hero" className="cta-btn">
 *     Book a Call
 *   </CalendlyButton>
 *
 * Props:
 *   location   – tracking label ('hero' | 'nav' | 'pricing' | 'cta_final')
 *   className  – forwarded to the <button>
 *   children   – button label
 */

import { trackCalendlyOpen, trackSchedule } from '@/lib/analytics';

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;

export default function CalendlyButton({ location = 'unknown', className = 'cta-btn', children }) {
  function handleClick() {
    if (typeof window === 'undefined') return;
    if (typeof window.Calendly === 'undefined') {
      // Fallback: open in new tab if widget script hasn't loaded
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
      return;
    }

    window.Calendly.initPopupWidget({ url: CALENDLY_URL });

    // Fire tracking events
    trackCalendlyOpen(location);
    trackSchedule();
  }

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
