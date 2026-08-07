import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { InlineCta } from "@/components/inline-cta";
import { WorkProjectBlock } from "@/components/work-project-block";
import { RevealMask } from "@/components/ui/reveal";
import { workHero, workProjects } from "@/lib/work.es";
import { siteUrl } from "@/lib/content";

const description =
  "Casos de éxito del trabajo de JAVE AGENCY con pequeños negocios en Sullivan County, NY y clientes en Estados Unidos, Chile y Colombia — proyectos reales de e-commerce, B2B, branding y entretenimiento.";

export const metadata: Metadata = {
  title: "Trabajos",
  description,
  alternates: {
    canonical: "/es/trabajos",
    languages: { en: `${siteUrl}/work`, es: `${siteUrl}/es/trabajos` },
  },
  openGraph: { title: "Trabajos — Javé Agency", description, url: "/es/trabajos" },
  twitter: { title: "Trabajos — Javé Agency", description },
};

export default function WorkPageEs() {
  return (
    <>
      <PageHero
        eyebrow={workHero.eyebrow}
        headline={workHero.headline}
        subheadline={workHero.subheadline}
        crumbs={[{ label: "Trabajos" }]}
        locale="es"
      />

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="divide-line border-line divide-y border-t">
            {workProjects.map((project, i) => (
              <WorkProjectBlock
                key={project.slug}
                project={project}
                reversed={i % 2 === 1}
                locale="es"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-line bg-paper border-t py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <RevealMask className="mx-auto max-w-2xl">
            <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              Lo Que Sigue
            </span>
            <h2 className="mb-5 text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
              Tu proyecto podría ser el próximo en esta página.
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed">
              Cada caso de éxito aquí comenzó como una primera conversación. Si estás considerando
              un nuevo sitio web, una identidad de marca o un sistema de crecimiento, nos gustaría
              escucharte.
            </p>
          </RevealMask>
        </div>
      </section>

      <InlineCta
        heading="¿Listo para comenzar tu propio caso de éxito?"
        body="Cuéntanos sobre tu negocio y hacia dónde quieres llevarlo — nosotros nos encargamos del resto."
        secondaryLabel="Explorar Servicios"
        secondaryHref="/es/servicios"
        locale="es"
      />
    </>
  );
}
