'use client';

const CALENDLY_URL = 'https://calendly.com/YOUR_CALENDLY_LINK';

function openCalendly(e) {
  e.preventDefault();
  if (typeof window !== 'undefined' && window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    if (window.gtag) window.gtag('event', 'calendly_open');
    if (window.fbq) window.fbq('track', 'Schedule');
  } else {
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
  }
}

export default function CalendlyButton({ className = 'cta-btn', children }) {
  return (
    <button type="button" className={className} onClick={openCalendly}>
      {children}
    </button>
  );
}

export { openCalendly };

