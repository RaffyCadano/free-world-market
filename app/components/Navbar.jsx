'use client';

import { useEffect, useState } from 'react';
import CalendlyButton from './CalendlyButton';

const links = [
  { label: 'Problem',  href: '/problem' },
  { label: 'Approach', href: '/approach' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing',  href: '/pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 960) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">

        {/* Logo */}
        <a href="/" className="nav-logo-wrap">
          <span className="nav-logo">HI GROWTH</span>
          <span className="nav-logo-sub">Premium Acquisition Systems</span>
        </a>

        {/* Centre links */}
        <div className={`nav-links${open ? ' nav-links--open' : ''}`}>
          {links.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          {/* CTA inside drawer on mobile */}
          <CalendlyButton location="nav" className="nav-cta nav-cta--mobile">
            Book a Call
          </CalendlyButton>
        </div>

        {/* Right side */}
        <div className="nav-right">
          <CalendlyButton location="nav" className="nav-cta">Book a Call</CalendlyButton>
          <button
            className={`nav-burger${open ? ' nav-burger--open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>

      </div>

      {/* Mobile backdrop */}
      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}
    </nav>
  );
}