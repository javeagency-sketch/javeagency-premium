"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

export function CountUp({
  target,
  suffix = "",
  duration = 1.4,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start: number | null = null;
    let frame: number;
    const effectiveDuration = reducedMotion ? 0 : duration * 1000;

    function step(timestamp: number) {
      if (start === null) start = timestamp;
      const progress =
        effectiveDuration === 0 ? 1 : Math.min((timestamp - start) / effectiveDuration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    }

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, reducedMotion, target, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
