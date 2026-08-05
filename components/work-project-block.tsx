"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { EASE } from "@/components/ui/reveal";
import type { WorkProject } from "@/lib/work";

export function WorkProjectBlock({
  project,
  reversed,
}: {
  project: WorkProject;
  reversed: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.9, ease: EASE }}
      className="grid grid-cols-1 items-start gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24 lg:gap-24"
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
                    View Live Site
                  </span>
                </>
              )}
            </motion.a>
          </div>
        </div>
      </div>

      <div className={reversed ? "md:order-1" : undefined}>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="text-terracotta text-xs font-semibold tracking-[0.2em] uppercase">
            {project.industry}
          </span>
          <span className="text-ink-soft/60 text-xs">{project.year}</span>
        </div>
        <h2 className="mb-5 text-3xl leading-[1.05] font-medium tracking-tight md:text-4xl">
          {project.name}
        </h2>
        <p className="text-ink-soft mb-7 max-w-lg text-lg leading-relaxed">{project.overview}</p>

        <div className="mb-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <span className="text-ink-soft mb-3 block text-[11px] font-semibold tracking-[0.14em] uppercase">
              Services Provided
            </span>
            <ul className="space-y-1.5">
              {project.servicesProvided.map((s) => (
                <li key={s} className="text-ink-soft text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-terracotta mb-3 block text-[11px] font-semibold tracking-[0.14em] uppercase">
              Results
            </span>
            <ul className="space-y-1.5">
              {project.results.map((r) => (
                <li key={r} className="text-ink-soft text-sm">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
