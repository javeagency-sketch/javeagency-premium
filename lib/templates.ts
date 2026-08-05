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
  gradient: string;
};

export const templates: Template[] = [
  {
    slug: "beauty-store",
    name: "Beauty Store",
    category: "E-Commerce",
    description:
      "A conversion-focused storefront template for beauty and cosmetics brands — product-first layouts, clean checkout flow, and built-in space for reviews and routine bundles.",
    status: "coming-soon",
    gradient: "from-[#C99B8C] to-[#8F5A4A]",
  },
  {
    slug: "luxury-salon",
    name: "Luxury Salon",
    category: "Beauty & Wellness",
    description:
      "An editorial booking-first template for salons and spas — service menus, stylist profiles, and a booking flow designed to feel as premium as the experience itself.",
    status: "coming-soon",
    gradient: "from-[#B85C38] to-[#6B2C2C]",
  },
  {
    slug: "tattoo-studio",
    name: "Tattoo Studio",
    category: "Creative Studio",
    description:
      "A bold, portfolio-first template for tattoo artists and studios — large gallery layouts, artist profiles, and a consultation request flow built in.",
    status: "coming-soon",
    gradient: "from-[#18181B] to-[#3A3A3E]",
  },
  {
    slug: "audiovisual-portfolio",
    name: "Audiovisual Portfolio",
    category: "Creative & Media",
    description:
      "A cinematic showcase template for filmmakers, photographers, and audiovisual studios — full-bleed reels, project breakdowns, and a client-ready contact flow.",
    status: "coming-soon",
    gradient: "from-[#264653] to-[#16262C]",
  },
];

export const templatesCta = {
  heading: "Want to be first in line?",
  body: "Templates aren't available for purchase yet, but you can reach out to get notified at launch — or skip the wait with a fully custom build.",
};
