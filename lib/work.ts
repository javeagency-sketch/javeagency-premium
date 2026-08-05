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
  gradient: string;
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
    gradient: "from-[#C7784E] to-[#8F3F20]",
  },
  {
    slug: "panda",
    industry: "B2B Wholesale",
    name: "Panda",
    year: "2025",
    overview:
      "Panda's wholesale operation was running on manual, spreadsheet-driven ordering — every account, price tier, and inventory update tracked by hand. JAVE AGENCY replaced that process with a custom B2B ordering portal built around how the business actually sells.",
    servicesProvided: ["Custom web application", "UX/UI design", "Account & pricing architecture"],
    results: [
      "Manual ordering replaced with a self-serve B2B portal",
      "Tiered pricing and account management handled automatically",
      "Inventory sync removes a full manual reconciliation step",
    ],
    gradient: "from-[#264653] to-[#16262C]",
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
    gradient: "from-[#6B2C2C] to-[#2B1414]",
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
    gradient: "from-[#5B4C40] to-[#2B221B]",
  },
];
