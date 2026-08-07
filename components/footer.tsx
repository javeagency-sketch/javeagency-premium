import Link from "next/link";
import { legalLinks, navLinks, site } from "@/lib/content";
import { legalLinks as legalLinksEs, navLinks as navLinksEs } from "@/lib/content.es";
import { services } from "@/lib/services";
import { services as servicesEs } from "@/lib/services.es";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    tagline:
      "A web design, SEO, and digital marketing agency serving Sullivan County, NY and businesses in the United States, Chile, and Colombia.",
    navigation: "Navigation",
    services: "Services",
    connect: "Connect",
    rights: "All rights reserved.",
    working: "Working across USA · Chile · Colombia",
  },
  es: {
    tagline:
      "Una agencia de diseño web, SEO y marketing digital al servicio de Sullivan County, NY y negocios en Estados Unidos, Chile y Colombia.",
    navigation: "Navegación",
    services: "Servicios",
    connect: "Conecta",
    rights: "Todos los derechos reservados.",
    working: "Trabajando en EE.UU. · Chile · Colombia",
  },
};

export function Footer({ locale = "en" }: { locale?: Locale } = {}) {
  const links = locale === "es" ? navLinksEs : navLinks;
  const legal = locale === "es" ? legalLinksEs : legalLinks;
  const serviceLinks = locale === "es" ? servicesEs : services;
  const t = copy[locale];
  return (
    <footer className="bg-ink text-paper/85 py-20 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-paper/14 grid grid-cols-1 gap-10 border-b pb-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="text-paper mb-2.5 flex items-baseline gap-2 font-serif text-xl">
              <span>
                Jav<span className="text-terracotta font-normal italic">é</span>
              </span>
              <span className="text-paper/60 text-[10px] tracking-[0.16em] uppercase">Agency</span>
            </div>
            <p className="text-paper/60 max-w-[260px] text-sm">{t.tagline}</p>
          </div>

          <div>
            <h4 className="text-terracotta mb-4 text-[11.5px] tracking-[0.1em] uppercase">
              {t.navigation}
            </h4>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-paper/75 hover:text-paper mb-3 block text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="text-terracotta mb-4 text-[11.5px] tracking-[0.1em] uppercase">
              {t.services}
            </h4>
            {serviceLinks.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="text-paper/75 hover:text-paper mb-3 block text-sm transition-colors"
              >
                {service.navTitle}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="text-terracotta mb-4 text-[11.5px] tracking-[0.1em] uppercase">
              {t.connect}
            </h4>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener"
              className="text-paper/75 hover:text-paper mb-3 block text-sm transition-colors"
            >
              Instagram
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener"
              className="text-paper/75 hover:text-paper mb-3 block text-sm transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-paper/75 hover:text-paper mb-3 block text-sm transition-colors"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="text-paper/50 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pt-6 text-[12.5px]">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>
              © {new Date().getFullYear()} Javé Agency. {t.rights}
            </span>
            {legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-paper/50 hover:text-paper transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <span>{t.working}</span>
        </div>
      </div>
    </footer>
  );
}
