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
  /** Route slug under /templates/[detailSlug] for the detail preview page, if one exists. */
  detailSlug?: string;
  /** Homepage-section screenshots shown in the detail page's slider, if any. */
  screenshots?: { src: string; alt: string; label: string }[];
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
    slug: "beauty-salon",
    name: "Beauty Salon Template",
    category: "Beauty & Wellness",
    description:
      "An editorial booking-first template for salons and spas — service menus, stylist profiles, and a booking flow designed to feel as premium as the experience itself.",
    status: "coming-soon",
    image: "/templates/beauty-salon.jpg",
    alt: "Rich burgundy-toned concept mockup for the Beauty Salon Template booking demo, evoking an upscale salon interior",
    detailSlug: "beautysalon",
    screenshots: [
      { src: "/templates/beautysalon/hero.jpg", alt: "Beauty Salon Template — hero section", label: "Hero" },
      {
        src: "/templates/beautysalon/services.jpg",
        alt: "Beauty Salon Template — signature services section",
        label: "Services",
      },
      {
        src: "/templates/beautysalon/gallery.jpg",
        alt: "Beauty Salon Template — results gallery section",
        label: "Gallery",
      },
      { src: "/templates/beautysalon/about.jpg", alt: "Beauty Salon Template — our story section", label: "About" },
      {
        src: "/templates/beautysalon/contact.jpg",
        alt: "Beauty Salon Template — contact section",
        label: "Contact",
      },
    ],
  },
  {
    slug: "tattoo-artist",
    name: "Tattoo Artist Template",
    category: "Creative / Tattoo",
    description:
      "A bold, portfolio-first template for tattoo artists and studios — large gallery layouts, artist profiles, and a consultation request flow built in.",
    status: "coming-soon",
    image: "/templates/tattoo-artist.jpg",
    alt: "Moody black and charcoal concept mockup for the Tattoo Artist Template demo, with fine-line floral tattoo motifs",
    detailSlug: "tattoo",
    screenshots: [
      { src: "/templates/tattoo/hero.jpg", alt: "Tattoo Artist Template — hero section", label: "Hero" },
      { src: "/templates/tattoo/gallery.jpg", alt: "Tattoo Artist Template — featured work gallery", label: "Gallery" },
      { src: "/templates/tattoo/services.jpg", alt: "Tattoo Artist Template — tattoo styles section", label: "Styles" },
      { src: "/templates/tattoo/about.jpg", alt: "Tattoo Artist Template — about section", label: "About" },
      { src: "/templates/tattoo/contact.jpg", alt: "Tattoo Artist Template — booking section", label: "Booking" },
    ],
  },
  {
    slug: "portfolio",
    name: "Creative Portfolio Template",
    category: "Portfolio / Creative",
    description:
      "A cinematic showcase template for filmmakers, photographers, and creative studios — full-bleed reels, project breakdowns, and a client-ready contact flow.",
    status: "coming-soon",
    image: "/templates/portfolio.jpg",
    alt: "Cinematic dark teal concept mockup for the Creative Portfolio Template demo, featuring a silhouetted film camera on a tripod",
    detailSlug: "portfolio",
    screenshots: [
      { src: "/templates/portfolio/hero.jpg", alt: "Creative Portfolio Template — hero section", label: "Hero" },
      { src: "/templates/portfolio/gallery.jpg", alt: "Creative Portfolio Template — selected work section", label: "Work" },
      { src: "/templates/portfolio/services.jpg", alt: "Creative Portfolio Template — services section", label: "Services" },
      { src: "/templates/portfolio/about.jpg", alt: "Creative Portfolio Template — about section", label: "About" },
      { src: "/templates/portfolio/contact.jpg", alt: "Creative Portfolio Template — contact section", label: "Contact" },
    ],
  },
  {
    slug: "restaurant",
    name: "Restaurant Template",
    category: "Restaurant & Food",
    description:
      "A fast-paced, appetite-first template for restaurants and quick-service brands — scroll-driven menu highlights, bold food photography, and an order-now flow built in.",
    status: "coming-soon",
    image: "/templates/restaurant.jpg",
    alt: "Bold red-orange concept mockup for the Restaurant Template demo, featuring a stacked burger illustration",
    detailSlug: "restaurant",
  },
];

export const templatesCta = {
  heading: "Want to be first in line?",
  body: "Templates aren't available for purchase yet, but you can reach out to get notified at launch — or skip the wait with a fully custom build.",
};
