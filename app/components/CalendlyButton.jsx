'use client';

/**
 * components/CalendlyButton.jsx
 *
 * Opens the Calendly popup on click and fires precise tracking events:
 *   calendly_open         — on button click (popup opens)
 *   calendly_profile_viewed — when the Calendly page renders inside the popup
 *   calendly_event_scheduled — when the user completes a booking (fires Schedule pixel)
 *
 * Listeners are attached once per mount and cleaned up on unmount.
 */

import { useEffect } from 'react';
import { trackCalendlyOpen, trackEvent, trackSchedule } from '@/lib/analytics';
import { onCalendlyEvent, CALENDLY_EVENTS } from '@/lib/calendly';

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;

export default function CalendlyButton({ location = 'unknown', className = 'cta-btn', children }) {
  // Attach Calendly postMessage listeners once on mount
  useEffect(() => {
    const cleanupProfile = onCalendlyEvent(CALENDLY_EVENTS.PROFILE_VIEWED, () => {
      trackEvent('calendly_profile_viewed', { location });
    });

    const cleanupScheduled = onCalendlyEvent(CALENDLY_EVENTS.SCHEDULED, () => {
      trackEvent('calendly_event_scheduled', { location });
      trackSchedule(); // Meta Pixel — Schedule
    });

    return () => {
      cleanupProfile();
      cleanupScheduled();
    };
  }, [location]);

  function handleClick() {
    if (typeof window === 'undefined') return;

    if (typeof window.Calendly === 'undefined') {
      // Fallback: open in new tab if widget script hasn't loaded yet
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
    } else {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    }

    // Fire immediately on open
    trackCalendlyOpen(location);
  }

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
}

