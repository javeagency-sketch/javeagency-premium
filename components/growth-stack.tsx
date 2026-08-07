"use client";

import { HoverLift, RevealGroup, RevealItem, RevealMask } from "@/components/ui/reveal";
import { growthStack } from "@/lib/content";
import { growthStack as growthStackEs } from "@/lib/content.es";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    eyebrow: "Built to Perform, Not Just Look Good",
    heading: "Modern infrastructure, built for outcomes.",
    body: "We don't pick tools because they're trendy — every layer of our stack exists to make your site faster, your leads better handled, and your team faster to ship.",
  },
  es: {
    eyebrow: "Diseñado para Rendir, No Solo para Verse Bien",
    heading: "Infraestructura moderna, hecha para resultados.",
    body: "No elegimos herramientas porque estén de moda — cada capa de nuestro stack existe para hacer tu sitio más rápido, tus clientes potenciales mejor gestionados, y a tu equipo más ágil para lanzar.",
  },
};

export function GrowthStack({ locale = "en" }: { locale?: Locale } = {}) {
  const items = locale === "es" ? growthStackEs : growthStack;
  const t = copy[locale];
  return (
    <section className="bg-ink text-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealMask className="mb-20 max-w-2xl md:mb-28">
          <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
            {t.eyebrow}
          </span>
          <h2 className="text-paper mb-6 text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
            {t.heading}
          </h2>
          <p className="text-paper/65 text-lg leading-relaxed">{t.body}</p>
        </RevealMask>

        <RevealGroup className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {items.map((item) => (
            <RevealItem key={item.title}>
              <HoverLift className="group border-paper/12 hover:border-terracotta/50 h-full rounded-xl border p-6 transition-colors duration-500 md:p-8">
                <item.Icon className="text-terracotta mb-5" size={28} strokeWidth={1.75} />
                <h3 className="text-paper mb-2 text-lg leading-[1.15] font-medium tracking-tight md:text-xl">
                  {item.title}
                </h3>
                <p className="text-paper/65 text-sm leading-relaxed md:text-base">{item.desc}</p>
              </HoverLift>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
