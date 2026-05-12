'use client';

/**
 * components/Analytics.jsx
 *
 * Injects GA4 + Meta Pixel scripts after hydration (afterInteractive).
 * Rendered once in app/layout.js — never exposes measurement IDs
 * via server-side rendering since NEXT_PUBLIC_ vars are inlined at
 * build time and are intentionally public (not secret).
 *
 * Secret keys (HubSpot, etc.) are NEVER referenced here.
 */

import Script from 'next/script';

const GA_ID    = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

// Only treat values as real if they match the expected formats.
// Placeholders like 'G-XXXXXXXXXX' or 'XXXXXXXXXXXXXXX' are skipped.
const validGaId    = GA_ID    && /^G-[A-Z0-9]{4,}$/.test(GA_ID)    ? GA_ID    : null;
const validPixelId = PIXEL_ID && /^[0-9]{10,20}$/.test(PIXEL_ID)   ? PIXEL_ID : null;

export default function Analytics() {
  return (
    <>
      {/* ── Google Analytics 4 ──────────────────────────── */}
      {validGaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${validGaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${validGaId}', {
                page_path: window.location.pathname,
                send_page_view: true
              });
            `}
          </Script>
        </>
      )}

      {/* ── Meta Pixel ──────────────────────────────────── */}
      {validPixelId && (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${validPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {/* ── Calendly widget script ───────────────────────── */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
