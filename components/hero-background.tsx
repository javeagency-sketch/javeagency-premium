"use client";

import { useReducedMotion } from "motion/react";

export function HeroBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="bg-ink absolute inset-0 overflow-hidden">
      {!reducedMotion && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
      )}

      <div className="from-ink via-ink/45 absolute inset-0 bg-gradient-to-t to-transparent" />
    </div>
  );
}
