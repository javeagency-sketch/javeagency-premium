export const workHero = {
  eyebrow: "Our Work",
  headline: "Real businesses, real transformations.",
  subheadline:
    "Every project below is a real client engagement — no templates, no stock case studies. As new projects launch, they get added here.",
};

export type WorkProject = {
  slug: string;
  industry: string;
  name: string;
  year: string;
  overview: string;
  servicesProvided: string[];
  results: string[];
  href?: string;
  image: string;
  alt: string;
};

export const workProjects: WorkProject[] = [
  {
    slug: "auria",
    industry: "E-Commerce",
    name: "Auria",
    year: "2025",
    overview:
      "Auria is a print-on-demand gift brand entering the US market with no existing digital presence. JAVE AGENCY took the business from concept to a fully operational storefront — store architecture, payment processing, and the SEO foundations needed to be found by customers who didn't know the brand yet.",
    servicesProvided: [
      "E-commerce store build",
      "Payment gateway integration",
      "Brand identity",
      "SEO foundations",
    ],
    results: [
      "Full US-ready storefront launched from zero",
      "Integrated payment processing built for American customers",
      "SEO structure in place from day one, not bolted on later",
    ],
    href: "https://auriacustomprints.com",
    image: "/portfolio/auria.jpg",
    alt: "Family posing together in matching personalized apparel with gift boxes, representing the Auria custom gifts brand",
  },
  {
    slug: "proveer-vestir",
    industry: "Workwear & Retail",
    name: "Proveer & Vestir SpA",
    year: "2025",
    overview:
      "Proveer & Vestir is a Chilean workwear supplier that sells almost entirely through direct conversation with customers. JAVE AGENCY built a catalog website designed around that reality — every product page routes straight into a WhatsApp order instead of forcing a checkout flow customers didn't want.",
    servicesProvided: [
      "Catalog website design",
      "WhatsApp order integration",
      "Responsive development",
    ],
    results: [
      "Full product catalog live and easy to browse on any device",
      "Every listing routes directly into a WhatsApp order",
      "A credible, on-brand storefront for a business that sold by word of mouth",
    ],
    href: "https://www.proveervestirspa.com",
    image: "/portfolio/proveer-vestir.jpg",
    alt: "Colleagues in matching corporate uniforms reviewing work together, representing Proveer & Vestir SpA workwear",
  },
  {
    slug: "canelo-beats",
    industry: "Music & Entertainment",
    name: "Canelo Beats",
    year: "2024",
    overview:
      "For an artist release, JAVE AGENCY built a complete identity from a blank page — branding, a website, and a social kit designed to launch together as one coordinated release, not three disconnected assets.",
    servicesProvided: ["Brand identity", "Website design & development", "Social media kit"],
    results: [
      "Full artist identity delivered from scratch",
      "Website and social kit launched together as one release",
      "Consistent visual system across every platform",
    ],
    href: "https://caneloflashbeats.github.io/site/",
    image: "/portfolio/canelo-beats.jpg",
    alt: "Dark, cinematic recording studio with a mixing console lit by colorful ambient lighting, representing the Canelo Beats brand",
  },
  {
    slug: "eureka",
    industry: "Events & Entertainment",
    name: "Eureka",
    year: "2024",
    overview:
      "Eureka, an event entertainment company, had grown without ever formalizing a visual identity. JAVE AGENCY built a logo, type system, and brand guidelines the business could apply consistently across proposals, social media, and on-site materials.",
    servicesProvided: ["Brand identity", "Type system", "Brand guidelines documentation"],
    results: [
      "First formal visual identity in the company's history",
      "Guidelines the team can apply without a designer on call",
      "Consistent look across proposals, social, and on-site materials",
    ],
    image: "/portfolio/eureka.jpg",
    alt: "Colorful children's birthday party with balloons and festive decorations, representing the Eureka events and entertainment brand",
  },
];
