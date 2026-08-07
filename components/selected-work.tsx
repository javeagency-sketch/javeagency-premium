"use client";

import { motion } from "motion/react";
import { EASE, RevealMask } from "@/components/ui/reveal";
import { PortfolioImage } from "@/components/portfolio-image";
import { workProjects } from "@/lib/work";
import { workProjects as workProjectsEs } from "@/lib/work.es";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    eyebrow: "Selected Work",
    heading: "Real businesses, real transformations.",
    body: "Every project is custom-built from the ground up — no templates, no shortcuts.",
  },
  es: {
    eyebrow: "Trabajos Seleccionados",
    heading: "Negocios reales, transformaciones reales.",
    body: "Cada proyecto se construye a la medida desde cero — sin templates, sin atajos.",
  },
};

export function SelectedWork({ locale = "en" }: { locale?: Locale } = {}) {
  const projects = locale === "es" ? workProjectsEs : workProjects;
  const t = copy[locale];
  return (
    <section id="work" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealMask className="mb-20 flex flex-wrap items-end justify-between gap-8 md:mb-28">
          <div className="max-w-xl">
            <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              {t.eyebrow}
            </span>
            <h2 className="text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
              {t.heading}
            </h2>
          </div>
          <p className="text-ink-soft max-w-xs text-lg leading-relaxed">{t.body}</p>
        </RevealMask>

        <div className="divide-line border-line divide-y border-t">
          {projects.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.9, ease: EASE }}
                className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24 lg:gap-24"
              >
                <div className={reversed ? "md:order-2" : undefined}>
                  <PortfolioImage
                    name={project.name}
                    image={project.image}
                    alt={project.alt}
                    href={project.href}
                    priority={i === 0}
                  />
                </div>

                <div className={reversed ? "md:order-1" : undefined}>
                  <span className="text-terracotta mb-4 block text-xs font-semibold tracking-[0.2em] uppercase">
                    {project.industry}
                  </span>
                  <h3 className="mb-5 text-3xl leading-[1.05] font-medium tracking-tight md:text-4xl">
                    {project.name}
                  </h3>
                  <p className="text-ink-soft mb-7 max-w-md text-lg leading-relaxed">
                    {project.overview}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {project.servicesProvided.slice(0, 3).map((service) => (
                      <span
                        key={service}
                        className="border-line text-ink-soft rounded-full border px-3.5 py-1.5 text-[11px] tracking-[0.02em]"
                      >
                        {service}
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
