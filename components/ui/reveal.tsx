"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/** The site's one easing curve — cinematic, no bounce. */
export const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

/** Fade-up on scroll into view. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      variants={fadeUp}
      transition={{ delay, duration: 0.8, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09 },
  },
};

/** Wrap a list of RevealItem children to stagger their entrance. */
export function RevealGroup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

const maskReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
  show: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: 1, ease: EASE },
  },
};

/**
 * Wipes content into view via clip-path rather than a simple fade —
 * used for headlines and section titles.
 */
export function RevealMask({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      variants={maskReveal}
      transition={{ delay, duration: 1, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** The site's standard hover interaction — a restrained lift, no spring bounce. */
export function HoverLift({
  children,
  className,
  lift = 2,
}: {
  children: ReactNode;
  className?: string;
  lift?: number;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -lift }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
