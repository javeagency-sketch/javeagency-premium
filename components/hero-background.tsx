"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

/**
 * Cinematic hero background: an animated NYC-style skyline silhouette with
 * twinkling windows, layered under a faint tech/data grid. Built entirely in
 * code (no licensed stock footage available) — swaps out automatically for
 * /videos/hero-loop.mp4 the moment that file exists.
 */
export function HeroBackground() {
  const reducedMotion = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: videoReady ? 0 : 1 }}
      >
        <Skyline animate={!reducedMotion} />
        <TechGrid animate={!reducedMotion} />
      </div>

      {!reducedMotion && (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-65"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoReady(false)}
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
      )}

      <div className="bg-cream/55 absolute inset-0" />
      <div className="from-cream/85 absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b to-transparent" />
      <div className="from-cream absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent" />
    </div>
  );
}

function Skyline({ animate }: { animate: boolean }) {
  const buildings = [
    { x: 0, w: 60, h: 220 },
    { x: 58, w: 40, h: 300 },
    { x: 96, w: 70, h: 170 },
    { x: 164, w: 50, h: 360 },
    { x: 212, w: 34, h: 240 },
    { x: 244, w: 56, h: 420 },
    { x: 298, w: 44, h: 200 },
    { x: 340, w: 64, h: 320 },
    { x: 402, w: 38, h: 260 },
    { x: 438, w: 52, h: 460 },
    { x: 488, w: 46, h: 210 },
    { x: 532, w: 60, h: 340 },
    { x: 590, w: 40, h: 280 },
    { x: 628, w: 58, h: 400 },
    { x: 684, w: 44, h: 230 },
    { x: 726, w: 50, h: 310 },
    { x: 774, w: 62, h: 250 },
    { x: 834, w: 38, h: 380 },
    { x: 870, w: 54, h: 220 },
    { x: 922, w: 48, h: 300 },
    { x: 968, w: 32, h: 200 },
  ];

  return (
    <svg
      viewBox="0 0 1000 480"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      {buildings.map((b, i) => (
        <g key={i}>
          <rect
            x={b.x}
            y={480 - b.h}
            width={b.w}
            height={b.h}
            className="fill-ink"
            opacity={0.08 + (i % 3) * 0.02}
          />
          <Windows building={b} animate={animate} seed={i} />
        </g>
      ))}
    </svg>
  );
}

function Windows({
  building,
  animate,
  seed,
}: {
  building: { x: number; w: number; h: number };
  animate: boolean;
  seed: number;
}) {
  const cols = Math.max(2, Math.floor(building.w / 12));
  const rows = Math.max(3, Math.floor(building.h / 18));
  const windows: { cx: number; cy: number; delay: number }[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if ((r + c + seed) % 4 !== 0) continue;
      windows.push({
        cx: building.x + 6 + c * (building.w / cols),
        cy: 480 - building.h + 10 + r * (building.h / rows),
        delay: ((r * cols + c + seed) % 9) * 0.6,
      });
    }
  }

  return (
    <>
      {windows.map((w, i) =>
        animate ? (
          <motion.rect
            key={i}
            x={w.cx}
            y={w.cy}
            width={2.5}
            height={4}
            className="fill-terracotta"
            animate={{ opacity: [0.15, 0.7, 0.15] }}
            transition={{ duration: 5, repeat: Infinity, delay: w.delay, ease: "easeInOut" }}
          />
        ) : (
          <rect
            key={i}
            x={w.cx}
            y={w.cy}
            width={2.5}
            height={4}
            className="fill-terracotta"
            opacity={0.4}
          />
        ),
      )}
    </>
  );
}

function TechGrid({ animate }: { animate: boolean }) {
  const lines = Array.from({ length: 7 }, (_, i) => i);

  return (
    <svg
      viewBox="0 0 1000 480"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      {lines.map((i) => {
        const y = 300 + i * 26;
        return (
          <motion.line
            key={i}
            x1={0}
            y1={y}
            x2={1000}
            y2={y}
            stroke="var(--color-terracotta)"
            strokeOpacity={0.08}
            strokeWidth={1}
            strokeDasharray="2 10"
            animate={animate ? { strokeDashoffset: [0, -240] } : undefined}
            transition={{ duration: 14 + i, repeat: Infinity, ease: "linear" }}
          />
        );
      })}
    </svg>
  );
}
