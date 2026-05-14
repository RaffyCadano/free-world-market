'use client';

/**
 * components/LeadCaptureForm.jsx
 *
 * The #cta-final email capture form.
 * Spec: email only, inline row, "Reserved ✦" confirmation for 3s on success,
 * inline error on failure.
 *
 * On success: fires GA4 form_submit + Meta Pixel Lead event.
 * On success: optionally opens Calendly popup as secondary action.
 *
 * USAGE:
 *   <LeadCaptureForm openCalendlyOnSuccess />
 */

import { useState } from 'react';
import { trackFormSubmit, trackLead } from '@/lib/analytics';

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;

export default function LeadCaptureForm({ openCalendlyOnSuccess = false, className = '' }) {
  const [email, setEmail]     = useState('');
  const [status, setStatus]   = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errMsg, setErrMsg]   = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setErrMsg('');

    try {
      const res = await fetch('/api/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus('error');
        setErrMsg(data.error ?? 'Something went wrong — please email us directly.');
        return;
      }

      // Success
      setStatus('success');
      trackFormSubmit();  // GA4
      trackLead();        // Meta Pixel

      // Optional: also open Calendly popup
      if (openCalendlyOnSuccess && typeof window !== 'undefined' && window.Calendly) {
        window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      }

      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setEmail('');
      }, 3000);
    } catch {
      setStatus('error');
      setErrMsg('Something went wrong — please email us directly.');
    }
  }

  const isSuccess = status === 'success';
  const isLoading = status === 'loading';

  return (
    <form
      id="ctaEmail"
      className={`lead-form ${className}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="lead-form-row">
        <input
          id="ctaEmail"
          type="email"
          className="lead-form-input"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading || isSuccess}
          aria-label="Email address"
          autoComplete="email"
        />
        <button
          type="submit"
          className={`lead-form-btn${isSuccess ? ' lead-form-btn--success' : ''}`}
          disabled={isLoading || isSuccess}
        >
          {isSuccess ? 'Reserved ✦' : isLoading ? 'Sending…' : 'Reserve Your Spot'}
        </button>
      </div>

      {status === 'error' && (
        <p className="lead-form-error" role="alert">
          {errMsg}
        </p>
      )}
    </form>
  );
}
