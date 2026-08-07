import type { ServiceSlug } from "@/lib/services";

export const servicesHero = {
  eyebrow: "Servicios",
  headline: "Todo lo que una marca en crecimiento necesita, hecho por un solo equipo.",
  subheadline:
    "Somos una agencia de diseño web, una agencia de branding y un socio de crecimiento en uno solo — para que tu sitio web, identidad, contenido y automatización avancen en la misma dirección en vez de estorbarse entre sí.",
};

export type ServiceListing = {
  slug: ServiceSlug;
  num: string;
  navTitle: string;
  tagline: string;
};

export const services: ServiceListing[] = [
  {
    slug: "web-design",
    num: "01",
    navTitle: "Diseño Web",
    tagline: "Sitios web de calidad editorial, diseñados para convertir.",
  },
  {
    slug: "branding",
    num: "02",
    navTitle: "Branding",
    tagline: "Una base visual que se sostiene mientras creces.",
  },
  {
    slug: "automation",
    num: "03",
    navTitle: "Automatización",
    tagline: "Infraestructura de crecimiento que funciona aunque tú no estés.",
  },
  {
    slug: "content-creation",
    num: "04",
    navTitle: "Creación de Contenido",
    tagline: "Contenido consistente y alineado a tu marca que realmente se publica.",
  },
];
