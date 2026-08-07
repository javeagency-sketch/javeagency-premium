"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Breadcrumbs, type Crumb } from "@/components/breadcrumbs";
import { EASE, RevealMask } from "@/components/ui/reveal";
import type { Locale } from "@/lib/i18n";

export function PageHero({
  eyebrow,
  headline,
  subheadline,
  crumbs,
  children,
  locale = "en",
}: {
  eyebrow: string;
  headline: string;
  subheadline?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
  locale?: Locale;
}) {
  return (
    <section className="border-line bg-cream relative overflow-hidden border-b">
      <div
        aria-hidden
        className="bg-terracotta/15 pointer-events-none absolute top-0 right-0 h-[420px] w-[560px] translate-x-1/4 -translate-y-1/3 rounded-full blur-[130px]"
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-24 lg:pb-28">
        {crumbs && <Breadcrumbs crumbs={crumbs} className="mb-10" locale={locale} />}
        <RevealMask className="max-w-3xl">
          <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
            {eyebrow}
          </span>
          <h1 className="mb-6 font-serif text-5xl leading-[1.05] font-medium tracking-tight text-balance md:text-6xl">
            {headline}
          </h1>
          {subheadline && (
            <p className="text-ink-soft max-w-2xl text-lg leading-relaxed md:text-xl">
              {subheadline}
            </p>
          )}
        </RevealMask>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
