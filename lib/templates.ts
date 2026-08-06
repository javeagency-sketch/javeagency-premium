export const templatesHero = {
  eyebrow: "Templates",
  headline: "Premium templates, coming soon.",
  subheadline:
    "We're packaging the design systems behind our client work into ready-to-launch templates for specific industries — built with the same premium standard as our custom projects, at a fraction of the cost.",
};

export type TemplateStatus = "coming-soon" | "in-progress";

export type Template = {
  slug: string;
  name: string;
  category: string;
  description: string;
  status: TemplateStatus;
  image: string;
  alt: string;
};

export const templates: Template[] = [
  {
    slug: "beauty-store",
    name: "Beauty Store",
    category: "E-Commerce",
    description:
      "A conversion-focused storefront template for beauty and cosmetics brands — product-first layouts, clean checkout flow, and built-in space for reviews and routine bundles.",
    status: "coming-soon",
    image: "/templates/beauty-store.jpg",
    alt: "Warm terracotta-toned concept mockup for the Beauty Store e-commerce template, featuring a skincare bottle on a pedestal",
  },
  {
    slug: "luxury-salon",
    name: "Luxury Salon",
    category: "Beauty & Wellness",
    description:
      "An editorial booking-first template for salons and spas — service menus, stylist profiles, and a booking flow designed to feel as premium as the experience itself.",
    status: "coming-soon",
    image: "/templates/luxury-salon.jpg",
    alt: "Rich burgundy-toned concept mockup for the Luxury Salon booking template, evoking an upscale salon interior",
  },
  {
    slug: "tattoo-studio",
    name: "Tattoo Studio",
    category: "Creative Studio",
    description:
      "A bold, portfolio-first template for tattoo artists and studios — large gallery layouts, artist profiles, and a consultation request flow built in.",
    status: "coming-soon",
    image: "/templates/tattoo-studio.jpg",
    alt: "Moody black and charcoal concept mockup for the Tattoo Studio portfolio template, with fine-line floral tattoo motifs",
  },
  {
    slug: "audiovisual-portfolio",
    name: "Audiovisual Portfolio",
    category: "Creative & Media",
    description:
      "A cinematic showcase template for filmmakers, photographers, and audiovisual studios — full-bleed reels, project breakdowns, and a client-ready contact flow.",
    status: "coming-soon",
    image: "/templates/audiovisual-portfolio.jpg",
    alt: "Cinematic dark teal concept mockup for the Audiovisual Portfolio template, featuring a silhouetted film camera on a tripod",
  },
];

export const templatesCta = {
  heading: "Want to be first in line?",
  body: "Templates aren't available for purchase yet, but you can reach out to get notified at launch — or skip the wait with a fully custom build.",
};
