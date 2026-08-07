import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { InlineCta } from "@/components/inline-cta";
import { Process } from "@/components/process";
import { Reveal, RevealGroup, RevealItem, RevealMask } from "@/components/ui/reveal";
import { servicesHero, services } from "@/lib/services.es";
import { siteUrl } from "@/lib/content";

const description =
  "Diseño web, SEO local, branding, automatización y contenido para pequeños negocios en Sullivan County, NY — un solo equipo, como tu agencia de diseño web, agencia de SEO y agencia de branding.";

export const metadata: Metadata = {
  title: "Servicios",
  description,
  alternates: {
    canonical: "/es/servicios",
    languages: { en: `${siteUrl}/services`, es: `${siteUrl}/es/servicios` },
  },
  openGraph: { title: "Servicios — Javé Agency", description, url: "/es/servicios" },
  twitter: { title: "Servicios — Javé Agency", description },
};

export default function ServicesPageEs() {
  return (
    <>
      <PageHero
        eyebrow={servicesHero.eyebrow}
        headline={servicesHero.headline}
        subheadline={servicesHero.subheadline}
        crumbs={[{ label: "Servicios" }]}
        locale="es"
      />

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-8">
          <RevealMask>
            <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              Nuestro Enfoque
            </span>
            <h2 className="text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
              Un equipo. Cada disciplina.
            </h2>
          </RevealMask>

          <Reveal className="max-w-2xl space-y-6">
            <p className="text-ink-soft text-lg leading-relaxed">
              La mayoría de las agencias se especializan de forma limitada, lo que hace que los
              negocios en crecimiento terminen manejando una agencia de diseño web, una agencia de
              branding y una agencia de marketing — tres proveedores, tres facturas, y nadie
              responsable de que las piezas encajen entre sí.
            </p>
            <p className="text-ink-soft text-lg leading-relaxed">
              JAVE AGENCY trabaja diferente. Un solo equipo es dueño de la estrategia, el diseño,
              el desarrollo y los sistemas de crecimiento que siguen después del lanzamiento — como
              una agencia de diseño web y SEO en Sullivan County, NY, y para negocios en Estados
              Unidos, Chile y Colombia. A continuación, las cuatro disciplinas en las que
              trabajamos — cada una diseñada para apoyar a las demás, no para operar aisladas.
            </p>
            <p className="text-ink-soft text-lg leading-relaxed">
              Desde diseño web para pequeños negocios en Sullivan County hasta marketing digital en
              Monticello, Liberty y Wurtsboro, NY, cada proyecto se construye alrededor del mismo
              objetivo: un sitio web y un sistema de marketing que realmente genere clientes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealGroup className="border-line border-t">
            {services.map((service) => (
              <RevealItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group border-line hover:border-terracotta/50 block border-b py-12 transition-colors duration-500 md:py-16"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-16">
                    <div className="flex items-baseline gap-6 md:w-2/5">
                      <span className="text-terracotta font-serif text-lg">{service.num}</span>
                      <h3 className="text-3xl leading-[1.05] font-medium tracking-tight md:text-4xl">
                        {service.navTitle}
                      </h3>
                    </div>
                    <div className="md:w-2/5">
                      <p className="text-ink-soft mb-4 text-lg leading-relaxed">
                        {service.tagline}
                      </p>
                      <span className="text-terracotta-dark inline-flex items-center gap-1.5 text-[12.5px] font-semibold tracking-[0.06em] uppercase transition-all duration-300 group-hover:gap-2.5">
                        Saber más <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Process locale="es" />

      <InlineCta
        heading="¿No sabes qué servicio se ajusta a ti?"
        body="Cuéntanos sobre tu negocio y te recomendaremos por dónde empezar — sin presión, sin obligación."
        secondaryLabel="Ver Nuestros Trabajos"
        secondaryHref="/es/trabajos"
        locale="es"
      />
    </>
  );
}
