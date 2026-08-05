"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { HeroBackground } from "@/components/hero-background";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { EASE, RevealMask } from "@/components/ui/reveal";
import { hero, site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <HeroBackground />
      <TerracottaGlow />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-terracotta mb-8 inline-block text-xs font-semibold tracking-[0.24em] uppercase"
          >
            Design · Strategy · Growth
          </motion.span>

          <RevealMask>
            <h1 className="mb-8 font-serif text-5xl leading-[1.02] font-medium tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl">
              {hero.headline}
            </h1>
          </RevealMask>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            className="text-ink-soft mx-auto mb-14 max-w-2xl text-lg leading-relaxed md:text-xl"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <MagneticLink
              href={site.bookingUrl}
              target="_blank"
              rel="noopener"
              className="bg-terracotta text-paper hover:bg-terracotta-dark w-full rounded-sm px-9 py-4 text-center text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors sm:w-auto"
            >
              Book a Strategy Call
            </MagneticLink>
            <Link
              href="/work"
              className="border-line text-ink hover:border-terracotta hover:text-terracotta-dark w-full rounded-sm border px-9 py-4 text-center text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors sm:w-auto"
            >
              View Selected Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TerracottaGlow() {
  return (
    <motion.div
      aria-hidden
      className="bg-terracotta/20 pointer-events-none absolute top-1/2 left-1/2 h-[560px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
      animate={{ opacity: [0.5, 0.85, 0.5] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
