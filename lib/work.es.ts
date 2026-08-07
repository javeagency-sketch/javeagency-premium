import type { WorkProject } from "@/lib/work";

export const workHero = {
  eyebrow: "Nuestro Trabajo",
  headline: "Negocios reales, transformaciones reales.",
  subheadline:
    "Cada proyecto a continuación es un caso real de cliente — sin templates, sin casos de estudio genéricos. A medida que se lanzan nuevos proyectos, se agregan aquí.",
};

export const workProjects: WorkProject[] = [
  {
    slug: "auria",
    industry: "E-Commerce",
    name: "Auria",
    year: "2025",
    overview:
      "Auria es una marca de regalos personalizados que entra al mercado de EE.UU. sin presencia digital previa. JAVE AGENCY llevó el negocio de la idea a una tienda en línea totalmente operativa — arquitectura de tienda, procesamiento de pagos y las bases de SEO necesarias para que clientes que aún no conocían la marca pudieran encontrarla.",
    servicesProvided: [
      "Construcción de tienda e-commerce",
      "Integración de pasarela de pago",
      "Identidad de marca",
      "Bases de SEO",
    ],
    results: [
      "Tienda completa lista para EE.UU. lanzada desde cero",
      "Procesamiento de pagos integrado, construido para clientes estadounidenses",
      "Estructura de SEO desde el primer día, no añadida después",
    ],
    href: "https://auriacustomprints.com",
    image: "/portfolio/auria.jpg",
    alt: "Family posing together in matching personalized apparel with gift boxes, representing the Auria custom gifts brand",
  },
  {
    slug: "proveer-vestir",
    industry: "Ropa de Trabajo y Retail",
    name: "Proveer & Vestir SpA",
    year: "2025",
    overview:
      "Proveer & Vestir es un proveedor chileno de ropa de trabajo que vende casi por completo mediante conversación directa con los clientes. JAVE AGENCY construyó un sitio catálogo diseñado en torno a esa realidad — cada página de producto lleva directamente a un pedido por WhatsApp en lugar de forzar un flujo de compra que los clientes no querían.",
    servicesProvided: [
      "Diseño de sitio catálogo",
      "Integración de pedidos por WhatsApp",
      "Desarrollo responsivo",
    ],
    results: [
      "Catálogo completo de productos en línea y fácil de explorar en cualquier dispositivo",
      "Cada producto lleva directamente a un pedido por WhatsApp",
      "Una tienda creíble y alineada a la marca para un negocio que vendía de boca en boca",
    ],
    href: "https://www.proveervestirspa.com",
    image: "/portfolio/proveer-vestir.jpg",
    alt: "Colleagues in matching corporate uniforms reviewing work together, representing Proveer & Vestir SpA workwear",
  },
  {
    slug: "canelo-beats",
    industry: "Música y Entretenimiento",
    name: "Canelo Beats",
    year: "2024",
    overview:
      "Para el lanzamiento de un artista, JAVE AGENCY construyó una identidad completa desde cero — branding, un sitio web y un kit para redes sociales diseñados para lanzarse juntos como un solo lanzamiento coordinado, no como tres piezas desconectadas.",
    servicesProvided: [
      "Identidad de marca",
      "Diseño y desarrollo de sitio web",
      "Kit para redes sociales",
    ],
    results: [
      "Identidad completa de artista entregada desde cero",
      "Sitio web y kit social lanzados juntos como un solo lanzamiento",
      "Sistema visual consistente en cada plataforma",
    ],
    href: "https://caneloflashbeats.github.io/site/",
    image: "/portfolio/canelo-beats.jpg",
    alt: "Dark, cinematic recording studio with a mixing console lit by colorful ambient lighting, representing the Canelo Beats brand",
  },
  {
    slug: "eureka",
    industry: "Eventos y Entretenimiento",
    name: "Eureka",
    year: "2024",
    overview:
      "Eureka, una empresa de entretenimiento para eventos, había crecido sin formalizar nunca una identidad visual. JAVE AGENCY construyó un logo, un sistema tipográfico y un manual de marca que el negocio pudo aplicar de forma consistente en propuestas, redes sociales y materiales en sitio.",
    servicesProvided: [
      "Identidad de marca",
      "Sistema tipográfico",
      "Documentación de manual de marca",
    ],
    results: [
      "Primera identidad visual formal en la historia de la empresa",
      "Manual que el equipo puede aplicar sin necesitar un diseñador",
      "Apariencia consistente en propuestas, redes sociales y materiales en sitio",
    ],
    image: "/portfolio/eureka.jpg",
    alt: "Colorful children's birthday party with balloons and festive decorations, representing the Eureka events and entertainment brand",
  },
];
