import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { Reveal } from "@/components/ui/reveal";
import { site, siteUrl } from "@/lib/content";

const description =
  "Ponte en contacto con JAVE AGENCY — una agencia de diseño web y SEO al servicio de Sullivan County, NY, Monticello, Liberty y Wurtsboro, además de negocios en Estados Unidos, Chile y Colombia.";

export const metadata: Metadata = {
  title: "Contacto",
  description,
  alternates: {
    canonical: "/es/contacto",
    languages: { en: `${siteUrl}/contact`, es: `${siteUrl}/es/contacto` },
  },
  openGraph: { title: "Contacto — Javé Agency", description, url: "/es/contacto" },
  twitter: { title: "Contacto — Javé Agency", description },
};

export default function ContactPageEs() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        headline="Hablemos sobre tu negocio."
        subheadline="Cuéntanos dónde estás hoy y a dónde quieres llegar — te contactaremos con los siguientes pasos, sin compromiso."
        crumbs={[{ label: "Contacto" }]}
        locale="es"
      />

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-8">
          <Reveal>
            <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              Otras Formas de Contactarnos
            </span>
            <h2 className="mb-6 font-serif text-3xl leading-[1.05] font-medium tracking-tight">
              ¿Prefieres una llamada o un mensaje rápido?
            </h2>
            <p className="text-ink-soft mb-8 text-base leading-relaxed">
              Si un formulario no es lo tuyo, agenda una llamada de descubrimiento gratuita
              directamente o escríbenos por WhatsApp. Trabajamos en horarios de EE.UU., Chile y
              Colombia y normalmente respondemos dentro de un día hábil.
            </p>
            <div className="flex flex-col gap-4">
              <MagneticLink
                href={site.bookingUrl}
                target="_blank"
                rel="noopener"
                className="bg-terracotta text-paper hover:bg-terracotta-dark w-full rounded-sm px-6 py-3.5 text-center text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors"
              >
                Agendar una Llamada
              </MagneticLink>
              <MagneticLink
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener"
                className="border-line text-ink hover:border-terracotta hover:text-terracotta-dark w-full rounded-sm border px-6 py-3.5 text-center text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors"
              >
                Escríbenos por WhatsApp
              </MagneticLink>
              <a
                href={`mailto:${site.email}`}
                className="border-line text-ink hover:border-terracotta hover:text-terracotta-dark w-full rounded-sm border px-6 py-3.5 text-center text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors"
              >
                {site.email}
              </a>
            </div>
          </Reveal>

          <Reveal>
            <ContactForm locale="es" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
