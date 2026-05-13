'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener(
      'scroll',
      handleScroll
    );

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );
  }, []);

  return (
    <nav
      className={
        scrolled
          ? 'navbar scrolled'
          : 'navbar'
      }
    >
      <div className="wrap nav-inner">
        <div className="nav-logo">
          LUXE GROWTH
        </div>

        <div className="nav-links">
          <a href="/problem">
            Problem
          </a>

          <a href="/approach">
            Approach
          </a>

          <a href="/services">
            Services
          </a>

          <a href="/pricing">
            Pricing
          </a>
        </div>
      </div>
    </nav>
  );
}