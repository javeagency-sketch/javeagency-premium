"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { EASE, RevealMask } from "@/components/ui/reveal";
import { caseStudies } from "@/lib/content";

export function SelectedWork() {
  return (
    <section id="work" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealMask className="mb-20 flex flex-wrap items-end justify-between gap-8 md:mb-28">
          <div className="max-w-xl">
            <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              Selected Work
            </span>
            <h2 className="text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
              Real businesses, real transformations.
            </h2>
          </div>
          <p className="text-ink-soft max-w-xs text-lg leading-relaxed">
            Every project is custom-built from the ground up — no templates, no shortcuts.
          </p>
        </RevealMask>

        <div className="divide-line border-line divide-y border-t">
          {caseStudies.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.9, ease: EASE }}
                className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24 lg:gap-24"
              >
                <div className={reversed ? "md:order-2" : undefined}>
                  <div className="group relative">
                    <div
                      className={`text-paper/90 relative aspect-[4/3] overflow-hidden bg-gradient-to-br font-serif text-2xl italic ${project.gradient}`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span>{project.name}</span>
                      </div>
                      <motion.a
                        href={project.href}
                        target={project.href ? "_blank" : undefined}
                        rel={project.href ? "noopener" : undefined}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className={`bg-ink/75 text-paper absolute inset-0 flex flex-col items-center justify-center gap-3 ${project.href ? "cursor-pointer" : "pointer-events-none"}`}
                      >
                        {project.href && (
                          <>
                            <span className="border-paper/50 flex h-12 w-12 items-center justify-center rounded-full border">
                              <ArrowUpRight size={20} />
                            </span>
                            <span className="text-xs font-semibold tracking-[0.16em] uppercase">
                              View Project
                            </span>
                          </>
                        )}
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className={reversed ? "md:order-1" : undefined}>
                  <span className="text-terracotta mb-4 block text-xs font-semibold tracking-[0.2em] uppercase">
                    {project.industry}
                  </span>
                  <h3 className="mb-5 text-3xl leading-[1.05] font-medium tracking-tight md:text-4xl">
                    {project.name}
                  </h3>
                  <p className="text-ink-soft mb-7 max-w-md text-lg leading-relaxed">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {project.badges.map((badge) => (
                      <span
                        key={badge}
                        className="border-line text-ink-soft rounded-full border px-3.5 py-1.5 text-[11px] tracking-[0.02em]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
