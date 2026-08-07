import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    eyebrow: "Built for Ambitious Businesses",
    body: "JAVE AGENCY is a web design and SEO agency serving Monticello, Liberty, Wurtsboro, Bloomingburg, Rock Hill, and the wider Sullivan County, NY and Catskills region, alongside clients in Chile and Colombia. We combine premium design, local SEO, and AI-powered digital marketing to help small businesses look more established, perform faster, and convert better online.",
    link: "Learn more about JAVE AGENCY →",
    href: "/about",
  },
  es: {
    eyebrow: "Hecho para Negocios Ambiciosos",
    body: "JAVE AGENCY es una agencia de diseño web y SEO al servicio de Monticello, Liberty, Wurtsboro, Bloomingburg, Rock Hill y todo Sullivan County, NY y la región de los Catskills, además de clientes en Chile y Colombia. Combinamos diseño premium, SEO local y marketing digital impulsado por IA para ayudar a pequeños negocios a verse más establecidos, rendir más rápido y convertir mejor en línea.",
    link: "Conoce más sobre JAVE AGENCY →",
    href: "/es/sobre-nosotros",
  },
};

export function AboutTeaser({ locale = "en" }: { locale?: Locale } = {}) {
  const t = copy[locale];
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
            {t.eyebrow}
          </span>
          <p className="text-2xl leading-relaxed font-medium tracking-tight text-balance md:text-3xl">
            {t.body}
          </p>
          <Link
            href={t.href}
            className="text-terracotta-dark decoration-line hover:text-terracotta mt-9 inline-block text-[13px] font-semibold tracking-[0.06em] uppercase underline underline-offset-4 transition-colors"
          >
            {t.link}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
