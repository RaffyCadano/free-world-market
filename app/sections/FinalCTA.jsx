'use client';

import { useState } from 'react';

export default function FinalCTA() {
  const [status, setStatus] =
    useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus('success');

    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };

  return (
    <section
      id="cta-final"
      className="final-section"
    >
      <div className="wrap">
        <div className="eyebrow">
          Final Step
        </div>

        <h2 className="section-title">
          Ready to scale your
          luxury brand?
        </h2>

        <p className="section-text">
          Book your discovery call
          and receive a strategic
          growth roadmap tailored
          to your business.
        </p>

        <form
          className="final-form"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <button
            className={
              status === 'success'
                ? 'cta-btn success'
                : 'cta-btn'
            }
          >
            {status === 'success'
              ? 'Reserved ✦'
              : 'Book Discovery Call'}
          </button>
        </form>

        <div className="contact-grid">
          <div>
            <span>Email</span>

            <a href="mailto:hello@luxegrowth.com">
              hello@luxegrowth.com
            </a>
          </div>

          <div>
            <span>Phone</span>

            <a href="tel:+15551234567">
              +1 (555) 123-4567
            </a>
          </div>

          <div>
            <span>Headquarters</span>

            <p>New York, NY</p>
          </div>
        </div>
      </div>
    </section>
  );
}