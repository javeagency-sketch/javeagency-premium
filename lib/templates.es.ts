import type { Template } from "@/lib/templates";

export const templatesHero = {
  eyebrow: "Templates",
  headline: "Templates premium, próximamente.",
  subheadline:
    "Estamos empaquetando los sistemas de diseño detrás de nuestro trabajo con clientes en templates listos para lanzar, para industrias específicas — construidos con el mismo estándar premium que nuestros proyectos personalizados, a una fracción del costo.",
};

export const templates: Template[] = [
  {
    slug: "beauty-store",
    name: "Tienda de Belleza",
    category: "E-Commerce",
    description:
      "Un template de tienda enfocado en conversión para marcas de belleza y cosmética — diseños centrados en el producto, checkout limpio y espacio integrado para reseñas y paquetes de rutina.",
    status: "coming-soon",
    image: "/templates/beauty-store.jpg",
    alt: "Warm terracotta-toned concept mockup for the Beauty Store e-commerce template, featuring a skincare bottle on a pedestal",
  },
  {
    slug: "beauty-salon",
    name: "Template de Salón de Belleza",
    category: "Belleza y Bienestar",
    description:
      "Un template editorial enfocado en reservas para salones y spas — menú de servicios, perfiles de estilistas y un flujo de reserva diseñado para sentirse tan premium como la experiencia misma.",
    status: "coming-soon",
    image: "/templates/beauty-salon.jpg",
    alt: "Rich burgundy-toned concept mockup for the Beauty Salon Template booking demo, evoking an upscale salon interior",
    detailSlug: "beautysalon",
    screenshots: [
      { src: "/templates/beautysalon/hero.jpg", alt: "Beauty Salon Template — hero section", label: "Hero" },
      {
        src: "/templates/beautysalon/services.jpg",
        alt: "Beauty Salon Template — signature services section",
        label: "Servicios",
      },
      {
        src: "/templates/beautysalon/gallery.jpg",
        alt: "Beauty Salon Template — results gallery section",
        label: "Galería",
      },
      { src: "/templates/beautysalon/about.jpg", alt: "Beauty Salon Template — our story section", label: "Nosotros" },
      {
        src: "/templates/beautysalon/contact.jpg",
        alt: "Beauty Salon Template — contact section",
        label: "Contacto",
      },
    ],
  },
  {
    slug: "tattoo-artist",
    name: "Template de Tatuador",
    category: "Creativo / Tatuajes",
    description:
      "Un template audaz enfocado en portafolio para artistas y estudios de tatuajes — galerías grandes, perfiles de artistas y un flujo de solicitud de consulta integrado.",
    status: "coming-soon",
    image: "/templates/tattoo-artist.jpg",
    alt: "Moody black and charcoal concept mockup for the Tattoo Artist Template demo, with fine-line floral tattoo motifs",
    detailSlug: "tattoo",
    screenshots: [
      { src: "/templates/tattoo/hero.jpg", alt: "Tattoo Artist Template — hero section", label: "Hero" },
      { src: "/templates/tattoo/gallery.jpg", alt: "Tattoo Artist Template — featured work gallery", label: "Galería" },
      { src: "/templates/tattoo/services.jpg", alt: "Tattoo Artist Template — tattoo styles section", label: "Estilos" },
      { src: "/templates/tattoo/about.jpg", alt: "Tattoo Artist Template — about section", label: "Nosotros" },
      { src: "/templates/tattoo/contact.jpg", alt: "Tattoo Artist Template — booking section", label: "Reservas" },
    ],
  },
  {
    slug: "portfolio",
    name: "Template de Portafolio Creativo",
    category: "Portafolio / Creativo",
    description:
      "Un template cinematográfico para cineastas, fotógrafos y estudios creativos — reels a pantalla completa, desgloses de proyectos y un flujo de contacto listo para clientes.",
    status: "coming-soon",
    image: "/templates/portfolio.jpg",
    alt: "Cinematic dark teal concept mockup for the Creative Portfolio Template demo, featuring a silhouetted film camera on a tripod",
    detailSlug: "portfolio",
    screenshots: [
      { src: "/templates/portfolio/hero.jpg", alt: "Creative Portfolio Template — hero section", label: "Hero" },
      { src: "/templates/portfolio/gallery.jpg", alt: "Creative Portfolio Template — selected work section", label: "Trabajo" },
      { src: "/templates/portfolio/services.jpg", alt: "Creative Portfolio Template — services section", label: "Servicios" },
      { src: "/templates/portfolio/about.jpg", alt: "Creative Portfolio Template — about section", label: "Nosotros" },
      { src: "/templates/portfolio/contact.jpg", alt: "Creative Portfolio Template — contact section", label: "Contacto" },
    ],
  },
  {
    slug: "restaurant",
    name: "Template de Restaurante",
    category: "Restaurante y Comida",
    description:
      "Un template rápido y apetitoso para restaurantes y marcas de comida rápida — menú destacado con scroll, fotografía de comida impactante y un flujo de pedido integrado.",
    status: "coming-soon",
    image: "/templates/restaurant.jpg",
    alt: "Bold red-orange concept mockup for the Restaurant Template demo, featuring a stacked burger illustration",
    detailSlug: "restaurant",
  },
];

export const templatesCta = {
  heading: "¿Quieres ser el primero en enterarte?",
  body: "Los templates aún no están disponibles para compra, pero puedes escribirnos para que te avisemos al lanzamiento — o saltarte la espera con un proyecto totalmente personalizado.",
};
