"use client";

import { motion } from "motion/react";
import { EASE, RevealGroup, RevealItem, RevealMask } from "@/components/ui/reveal";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealMask className="mb-20 text-center md:mb-28">
          <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
            Our Process
          </span>
          <h2 className="text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
            From first call to compounding growth.
          </h2>
        </RevealMask>

        <RevealGroup className="relative grid grid-cols-1 gap-y-14 md:grid-cols-4 md:gap-x-8">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
            className="bg-line absolute top-6 right-[12%] left-[12%] hidden h-px origin-left md:block"
          />
          {process.map((step) => (
            <RevealItem key={step.num} className="relative px-2 text-center">
              <div className="border-line bg-cream text-terracotta-dark relative z-10 mx-auto mb-7 flex h-12 w-12 items-center justify-center border font-serif text-sm">
                {step.num}
              </div>
              <h3 className="mb-3 text-2xl font-medium tracking-tight">{step.title}</h3>
              <p className="text-ink-soft mx-auto max-w-[220px] text-base leading-relaxed">
                {step.desc}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
