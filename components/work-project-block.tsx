"use client";

import { motion } from "motion/react";
import { EASE } from "@/components/ui/reveal";
import { PortfolioImage } from "@/components/portfolio-image";
import type { WorkProject } from "@/lib/work";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: { services: "Services Provided", results: "Results" },
  es: { services: "Servicios Realizados", results: "Resultados" },
};

export function WorkProjectBlock({
  project,
  reversed,
  locale = "en",
}: {
  project: Partial<WorkProject> & Pick<WorkProject, "slug" | "name" | "image" | "alt">;
  reversed: boolean;
  locale?: Locale;
}) {
  const t = copy[locale];
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.9, ease: EASE }}
      className="grid grid-cols-1 items-start gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24 lg:gap-24"
    >
      <div className={reversed ? "md:order-2" : undefined}>
        <PortfolioImage
          name={project.name}
          image={project.image}
          alt={project.alt}
          href={project.href}
          priority={!reversed}
        />
      </div>

      <div className={reversed ? "md:order-1" : undefined}>
        {(project.industry || project.year) && (
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {project.industry && (
              <span className="text-terracotta text-xs font-semibold tracking-[0.2em] uppercase">
                {project.industry}
              </span>
            )}
            {project.year && <span className="text-ink-soft/60 text-xs">{project.year}</span>}
          </div>
        )}
        <h2 className="mb-5 text-3xl leading-[1.05] font-medium tracking-tight md:text-4xl">
          {project.name}
        </h2>
        {project.overview && (
          <p className="text-ink-soft mb-7 max-w-lg text-lg leading-relaxed">{project.overview}</p>
        )}

        {((project.servicesProvided?.length ?? 0) > 0 || (project.results?.length ?? 0) > 0) && (
          <div className="mb-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {(project.servicesProvided?.length ?? 0) > 0 && (
              <div>
                <span className="text-ink-soft mb-3 block text-[11px] font-semibold tracking-[0.14em] uppercase">
                  {t.services}
                </span>
                <ul className="space-y-1.5">
                  {project.servicesProvided!.map((s) => (
                    <li key={s} className="text-ink-soft text-sm">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {(project.results?.length ?? 0) > 0 && (
              <div>
                <span className="text-terracotta mb-3 block text-[11px] font-semibold tracking-[0.14em] uppercase">
                  {t.results}
                </span>
                <ul className="space-y-1.5">
                  {project.results!.map((r) => (
                    <li key={r} className="text-ink-soft text-sm">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
