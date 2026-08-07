import {
  BarChart3,
  Building2,
  Car,
  Dumbbell,
  Globe,
  HardHat,
  Home,
  MessageCircle,
  Palette,
  Scale,
  Search,
  Share2,
  Stethoscope,
  Trees,
  UtensilsCrossed,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";
import type { WhatWeBuildItem, GrowthStackItem, IndustryItem } from "@/lib/content";

export const hero = {
  headline: "Agencia de Diseño Web y SEO en Sullivan County, NY",
  locationLine:
    "Al servicio de Sullivan County — Monticello, Liberty, Wurtsboro, Bloomingburg, Rock Hill, Woodridge, Fallsburg, Mamakating y Pine Bush.",
  subheadline:
    "Sitios web premium, SEO local, branding y marketing digital impulsado por IA para negocios en Monticello, Liberty, Wurtsboro, Bloomingburg, Rock Hill y todo Sullivan County, NY.",
};

export const navLinks = [
  { href: "/es/sobre-nosotros", label: "Nosotros" },
  { href: "/es/servicios", label: "Servicios" },
  { href: "/es/trabajos", label: "Trabajos" },
  { href: "/es/templates", label: "Templates" },
  { href: "/es/contacto", label: "Contacto" },
];

export const legalLinks = [
  { href: "/privacy-policy", label: "Política de Privacidad" },
  { href: "/terms-and-conditions", label: "Términos y Condiciones" },
];

export const metrics = [
  { target: 25, suffix: "+", label: "Proyectos Entregados" },
  { target: 95, suffix: "+", label: "Rendimiento en Lighthouse" },
  { target: 99, suffix: "%", label: "Negocios Exitosos" },
];

export const whatWeBuild: WhatWeBuildItem[] = [
  {
    key: "websites",
    Icon: Globe,
    title: "Sitios Web Que Trabajan Mientras Duermes",
    desc: "Un sitio que carga rápido, se ve increíble en cualquier celular y convierte visitantes en clientes — no solo una página bonita más.",
    bullets: ["Diseño a Medida", "Compatible con Móviles", "Diseñado para Convertir"],
  },
  {
    key: "brand",
    Icon: Palette,
    title: "Una Marca Que la Gente Recuerda",
    desc: "Tu logo, colores y estilo — todo diseñado para trabajar en conjunto, así tu negocio se ve igual de profesional en una tarjeta de presentación que en internet.",
    bullets: ["Diseño de Logo", "Manual de Marca", "Material Impreso"],
  },
  {
    key: "content",
    Icon: Share2,
    title: "Contenido Que Aparece de Forma Constante",
    desc: "Publicaciones, historias y textos — planeados y diseñados con anticipación, para que tu marca se mantenga activa sin que tengas que pensarlo cada día.",
    bullets: ["Redes Sociales", "Redacción", "Calendario de Contenido"],
  },
  {
    key: "automation",
    Icon: Zap,
    title: "Seguimiento Que Nunca Duerme",
    desc: "Cuando alguien te escribe, recibe respuesta de inmediato — de forma automática. Ningún cliente potencial espera, ningún mensaje se pierde.",
    bullets: ["Respuesta Instantánea", "Reportes Simples", "Nunca Pierdas un Lead"],
  },
];

export const process = [
  {
    num: "01",
    title: "Descubrir",
    desc: "Una llamada enfocada en entender tu negocio, objetivos y público antes de diseñar nada.",
  },
  {
    num: "02",
    title: "Diseñar",
    desc: "Conceptos basados en estrategia, refinados con rondas de retroalimentación rápidas y enfocadas.",
  },
  {
    num: "03",
    title: "Desarrollar",
    desc: "Sitios personalizados, responsivos y optimizados para velocidad y buscadores desde el primer día.",
  },
  {
    num: "04",
    title: "Crecer",
    desc: "Lanzamos, luego iteramos — contenido, automatización y reportes que se acumulan con el tiempo.",
  },
];

export const growthStack: GrowthStackItem[] = [
  {
    Icon: Zap,
    title: "Sitios Ultra Rápidos",
    desc: "Tu sitio web carga al instante — en cualquier dispositivo, en cualquier lugar.",
  },
  {
    Icon: Search,
    title: "Diseñado para Ser Encontrado",
    desc: "Cada sitio está estructurado para aparecer en Google desde el primer día.",
  },
  {
    Icon: MessageCircle,
    title: "Seguimiento Que Nunca Duerme",
    desc: "Los nuevos clientes potenciales reciben respuesta inmediata — automatizada, pero personal.",
  },
  {
    Icon: BarChart3,
    title: "Sabe Qué Está Funcionando",
    desc: "Reportes simples y claros — sin paneles confusos.",
  },
];

export const industriesSection = {
  heading: "Marketing Especializado para Cada Industria",
  subheading:
    "Desde servicios para el hogar hasta salud, construimos estrategias específicas por industria y SEO local que generan clientes potenciales reales para negocios en Sullivan County — Monticello, Liberty, Wurtsboro, Bloomingburg, Rock Hill, Woodridge, Fallsburg, Mamakating y Pine Bush.",
};

export const industries: IndustryItem[] = [
  {
    Icon: HardHat,
    name: "Construcción",
    desc: "Más cotizaciones, más proyectos y una presencia local dominante para contratistas generales y especializados en Sullivan County.",
    href: "/services/construction-marketing-sullivan-county",
  },
  {
    Icon: Trees,
    name: "Paisajismo",
    desc: "Clientes potenciales durante todo el año para empresas de jardinería y paisajismo — desde limpiezas de primavera hasta contratos de remoción de nieve en invierno.",
    href: "/services/landscaping-marketing-sullivan-county",
  },
  {
    Icon: Home,
    name: "Techado",
    desc: "Clientes potenciales de alta intención, campañas para temporada de tormentas y presencia en Google que agenda estimaciones a diario — diseñado para los inviernos de los Catskills.",
    href: "/services/roofing-marketing-sullivan-county",
  },
  {
    Icon: Wrench,
    name: "Plomería",
    desc: "Captura de llamadas de emergencia, reservas de servicio programadas y clientes potenciales constantes para plomeros de Sullivan County, de día o de noche.",
    href: "/services/plumbing-marketing-sullivan-county",
  },
  {
    Icon: Wind,
    name: "HVAC",
    desc: "Campañas de temporada, marketing de contratos de mantenimiento y generación de leads todo el año — diseñado para veranos calurosos e inviernos fríos en los Catskills.",
    href: "/services/hvac-marketing-sullivan-county",
  },
  {
    Icon: Zap,
    name: "Electricistas",
    desc: "Clientes potenciales para actualización de paneles, llamadas de servicio residencial y consultas de proyectos comerciales para contratistas eléctricos locales.",
    href: "/services/electrician-marketing-sullivan-county",
  },
  {
    Icon: UtensilsCrossed,
    name: "Restaurantes",
    desc: "Más comensales, más pedidos en línea y una fiel base de seguidores locales para restaurantes de Sullivan County mediante redes sociales y SEO.",
    href: "/services/restaurant-marketing-sullivan-county",
  },
  {
    Icon: Stethoscope,
    name: "Salud y Medicina",
    desc: "Estrategias de adquisición de pacientes que cumplen con la normativa y hacen crecer consultorios locales, llenando la agenda de citas.",
    href: "/services/medical-marketing-sullivan-county",
  },
  {
    Icon: Scale,
    name: "Legal",
    desc: "Más consultas calificadas y posiciones en la primera página para bufetes de abogados de Sullivan County, en cualquier área de práctica.",
    href: "/services/legal-marketing-sullivan-county",
  },
  {
    Icon: Building2,
    name: "Bienes Raíces",
    desc: "Más clientes potenciales de compradores y vendedores, una marca personal reconocida y un sistema CRM que nunca deja escapar una venta.",
    href: "/services/real-estate-marketing-sullivan-county",
  },
  {
    Icon: Car,
    name: "Talleres Automotrices",
    desc: "Más autos en tu taller, una reputación de 5 estrellas en Google y una base de clientes leales que siempre regresa.",
    href: "/services/auto-repair-marketing-sullivan-county",
  },
  {
    Icon: Dumbbell,
    name: "Fitness y Bienestar",
    desc: "Crecimiento de membresías durante todo el año, contenido social poderoso y sistemas de retención para gimnasios y estudios.",
    href: "/services/fitness-marketing-sullivan-county",
  },
];

export const faqs = [
  {
    q: "¿Trabajan con clientes internacionales?",
    a: [
      "Por supuesto. Trabajamos con negocios de todo el mundo y operamos 100% de forma remota. Como nómadas digitales radicados principalmente en Chile, con períodos de trabajo en Colombia y Estados Unidos, estamos acostumbrados a colaborar en distintas zonas horarias. Ya seas una startup local o una empresa internacional, siempre estamos a un mensaje o reunión de distancia.",
    ],
  },
  {
    q: "¿Qué los hace diferentes de una agencia más grande?",
    a: [
      "Mantenemos las cosas simples, personales y eficientes. En lugar de pasar por múltiples departamentos o largos procesos de aprobación, trabajas directamente con quienes construyen tu proyecto. Esto significa comunicación más rápida, más flexibilidad, precios accesibles y soluciones hechas a la medida de tu negocio — no un proceso genérico para todos.",
    ],
  },
  {
    q: "¿Ofrecen soporte continuo después del lanzamiento?",
    a: [
      "Sí. No desaparecemos después de la entrega.",
      "Para sitios web, ofrecemos planes de mantenimiento mensual opcionales que incluyen actualizaciones, mejoras y soporte continuo. Si prefieres administrar tu sitio tú mismo, te daremos un recorrido antes del lanzamiento para que puedas hacer cambios con confianza.",
      "Para branding, redes sociales y otros proyectos de diseño, siempre estamos disponibles si necesitas trabajo adicional o tienes preguntas después de la entrega.",
    ],
  },
  {
    q: "¿Cómo funciona la llamada de descubrimiento?",
    a: [
      "Simplemente haz clic en el botón Agendar una Llamada y elige la fecha y hora que mejor te acomode.",
      "Durante la llamada conoceremos más sobre tu negocio, objetivos y requisitos del proyecto. También es tu oportunidad para hacer preguntas, explorar ideas y ver si somos el equipo correcto antes de comenzar.",
    ],
  },
  {
    q: "¿Cuál es su estructura de precios?",
    a: [
      "No usamos paquetes genéricos — cada cotización se construye alrededor de tus objetivos específicos, la complejidad del proyecto y tu cronograma. Una landing page simple y una tienda e-commerce completa son inversiones distintas, y preferimos cotizar correctamente en vez de forzarlo a un nivel genérico.",
      "La mejor manera de obtener un número real es una llamada de descubrimiento gratuita: te preguntaremos qué quieres lograr y luego te enviaremos una cotización clara y detallada — sin obligación, sin presión.",
    ],
  },
  {
    q: "¿Cuánto tiempo toma un proyecto?",
    a: [
      "Los tiempos dependen del alcance, pero la mayoría de los proyectos se completan en estos plazos:",
    ],
    list: [
      "Sitios web: 1–3 semanas",
      "Branding: 3–10 días hábiles",
      "Tarjetas de presentación, presentaciones, flyers y otro diseño gráfico: 3–7 días hábiles",
      "Gestión de Redes Sociales: Servicio mensual con planificación de contenido y soporte continuo",
    ],
    aAfterList:
      "Siempre te daremos un cronograma claro antes de empezar, para que sepas exactamente qué esperar.",
  },
];

export const promises = [
  "Diseño Responsivo",
  "Listo para SEO",
  "Carga Rápida",
  "Mobile First",
  "Diseñado para Crecer",
  "Soporte Continuo",
  "Proceso Transparente",
  "Estrategia a Medida",
];

export const projectTypes = [
  "Sitio Web",
  "Branding",
  "Redes Sociales",
  "Anuncios Pagados",
  "Impresión / Empaque",
  "Algo más",
];

export const budgetRanges = [
  "< $1,000",
  "$1,000 – $3,000",
  "$3,000 – $8,000",
  "$8,000+",
  "Aún no lo sé",
];
