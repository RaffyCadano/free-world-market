'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);

  useEffect(() => {
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isDesktop) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animationFrame;
    const speed = 0.18;

    const updateCursor = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (cursorDot.current) {
        cursorDot.current.style.left = `${mouseX}px`;
        cursorDot.current.style.top = `${mouseY}px`;
        cursorDot.current.style.opacity = '1';
        cursorDot.current.style.visibility = 'visible';
      }

      if (cursorRing.current) {
        cursorRing.current.style.opacity = '1';
        cursorRing.current.style.visibility = 'visible';
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * speed;
      ringY += (mouseY - ringY) * speed;

      if (cursorRing.current) {
        cursorRing.current.style.left = `${ringX}px`;
        cursorRing.current.style.top = `${ringY}px`;
      }

      animationFrame = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', updateCursor);
    animateRing();

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={cursorDot} />
      <div className="cursor-ring" ref={cursorRing} />
    </>
  );
}
