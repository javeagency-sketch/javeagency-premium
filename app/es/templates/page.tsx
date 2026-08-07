import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { InlineCta } from "@/components/inline-cta";
import { HoverLift, Reveal, RevealGroup, RevealItem, RevealMask } from "@/components/ui/reveal";
import { templatesHero, templates, templatesCta } from "@/lib/templates.es";
import { siteUrl } from "@/lib/content";

const description =
  "Templates de sitios web premium por industria de JAVE AGENCY — el mismo estándar de diseño que nuestro trabajo personalizado con clientes, hecho para pequeños negocios en Sullivan County, NY y más allá.";

export const metadata: Metadata = {
  title: "Templates",
  description,
  alternates: {
    canonical: "/es/templates",
    languages: { en: `${siteUrl}/templates`, es: `${siteUrl}/es/templates` },
  },
  openGraph: { title: "Templates — Javé Agency", description, url: "/es/templates" },
  twitter: { title: "Templates — Javé Agency", description },
};

export default function TemplatesPageEs() {
  return (
    <>
      <PageHero
        eyebrow={templatesHero.eyebrow}
        headline={templatesHero.headline}
        subheadline={templatesHero.subheadline}
        crumbs={[{ label: "Templates" }]}
        locale="es"
      />

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-8">
          <RevealMask>
            <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              Cómo Funciona
            </span>
            <h2 className="text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
              Diseño de calidad personalizada, listo para lanzar.
            </h2>
          </RevealMask>

          <Reveal className="max-w-2xl space-y-6">
            <p className="text-ink-soft text-lg leading-relaxed">
              No todos los negocios necesitan — o pueden esperar por — un proyecto totalmente
              personalizado. La línea de templates de JAVE AGENCY empaqueta el mismo estándar de
              diseño premium detrás de nuestro{" "}
              <Link
                href="/es/trabajos"
                className="text-terracotta-dark decoration-line hover:text-terracotta underline underline-offset-4"
              >
                trabajo con clientes
              </Link>{" "}
              en templates listos para lanzar, para poner en línea un sitio web premium más rápido
              y a un costo menor que un proyecto totalmente personalizado.
            </p>
            <p className="text-ink-soft text-lg leading-relaxed">
              Cada template está construido sobre la misma infraestructura moderna que nuestros
              proyectos personalizados — rápida, responsiva y lista para SEO — con espacio para
              agregar tu propia marca, textos e imágenes. Si necesitas algo más específico para tu
              negocio, nuestro{" "}
              <Link
                href="/services/web-design"
                className="text-terracotta-dark decoration-line hover:text-terracotta underline underline-offset-4"
              >
                servicio de diseño web personalizado
              </Link>{" "}
              es la mejor opción.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {templates.map((template, i) => (
              <RevealItem key={template.slug}>
                <HoverLift className="border-line bg-cream h-full overflow-hidden rounded-xl border">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={template.image}
                      alt={template.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      priority={i === 0}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-terracotta mb-3 block text-[11px] font-semibold tracking-[0.14em] uppercase">
                      {template.category}
                    </span>
                    <h3 className="mb-3 font-serif text-2xl tracking-tight">{template.name}</h3>
                    <p className="text-ink-soft mb-7 text-base leading-relaxed">
                      {template.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      {template.detailSlug ? (
                        <Link
                          href={`/templates/${template.detailSlug}`}
                          className="border-terracotta text-terracotta-dark hover:bg-terracotta hover:text-paper rounded-sm border px-5 py-2.5 text-[12px] font-semibold tracking-[0.06em] uppercase transition-colors"
                        >
                          Ver Vista Previa
                        </Link>
                      ) : (
                        <span className="border-line text-ink-soft/50 cursor-not-allowed rounded-sm border px-5 py-2.5 text-[12px] font-semibold tracking-[0.06em] uppercase">
                          Demo en Vivo — Próximamente
                        </span>
                      )}
                      <Link
                        href="/es/contacto"
                        className="text-terracotta-dark hover:text-terracotta inline-flex items-center gap-1.5 text-[12.5px] font-semibold tracking-[0.06em] uppercase transition-colors"
                      >
                        Saber Más <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </HoverLift>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <InlineCta
        heading={templatesCta.heading}
        body={templatesCta.body}
        secondaryLabel="Iniciar un Proyecto Personalizado"
        secondaryHref="/services/web-design"
        locale="es"
      />
    </>
  );
}
