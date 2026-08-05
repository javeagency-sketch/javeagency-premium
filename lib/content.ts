export const siteUrl = "https://javeagency.com";

export const site = {
  name: "Javé Agency",
  tagline: "Design, strategy and growth for ambitious businesses.",
  description:
    "Javé Agency is a two-person creative studio blending marketing strategy, bold design and digital development to help ambitious businesses grow.",
  bookingUrl: "https://calendar.app.google/8PbpkbSVL3EtkQo2A",
  phoneDisplay: "+1 (717) 808-6050",
  phoneHref: "tel:+17178086050",
  whatsappUrl: "https://wa.me/17178086050",
  instagramUrl: "https://www.instagram.com/jave.marketing/",
  email: "hello@javeagency.com",
};

export const hero = {
  headline: "We build digital brands that feel impossible to ignore.",
  subheadline:
    "Premium websites, branding systems, and AI-powered growth infrastructure for ambitious businesses in the United States, Chile, and Colombia.",
};

export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/templates", label: "Templates" },
  { href: "/contact", label: "Contact" },
];

export const metrics = [
  { target: 25, suffix: "+", label: "Projects Delivered" },
  { target: 95, suffix: "+", label: "Lighthouse Performance" },
  { target: 99, suffix: "%", label: "Successful Businesses" },
];

export type WhatWeBuildKey = "websites" | "brand" | "content" | "automation";

export type WhatWeBuildItem = {
  key: WhatWeBuildKey;
  num: string;
  title: string;
  desc: string;
  bullets: string[];
};

export const whatWeBuild: WhatWeBuildItem[] = [
  {
    key: "websites",
    num: "01",
    title: "High-Converting Websites",
    desc: "Custom-built, editorial-quality sites engineered to turn visitors into customers — not just look good.",
    bullets: ["UX/UI Design", "Custom Development", "Speed & SEO", "Conversion-Focused"],
  },
  {
    key: "brand",
    num: "02",
    title: "Brand Identity Systems",
    desc: "A complete visual foundation — logo, palette, type, and guidelines — built to hold up as you scale.",
    bullets: ["Logo & Identity", "Design Systems", "Brand Guidelines", "Print & Packaging"],
  },
  {
    key: "content",
    num: "03",
    title: "Content & Social Assets",
    desc: "Consistent, on-brand content across every channel — planned, designed, and published on schedule.",
    bullets: ["Content Strategy", "Feed & Story Design", "Copywriting", "Paid Creative"],
  },
  {
    key: "automation",
    num: "04",
    title: "Automation & AI Workflows",
    desc: "Lead capture, follow-up, and reporting that run themselves — so nothing falls through the cracks.",
    bullets: ["Lead Automation", "AI-Assisted Workflows", "CRM & Email", "Reporting Dashboards"],
  },
];

export const process = [
  {
    num: "01",
    title: "Discover",
    desc: "A focused call to understand your business, goals, and audience before anything is designed.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Concepts grounded in strategy, refined through fast, focused feedback rounds.",
  },
  {
    num: "03",
    title: "Develop",
    desc: "Clean, custom, responsive builds — optimized for speed and search from day one.",
  },
  {
    num: "04",
    title: "Grow",
    desc: "Launch, then iterate — content, automation, and reporting that compound over time.",
  },
];

export type CaseStudy = {
  industry: string;
  name: string;
  summary: string;
  badges: string[];
  href?: string;
  gradient: string;
};

export const caseStudies: CaseStudy[] = [
  {
    industry: "E-Commerce",
    name: "Auria",
    summary:
      "Took a print-on-demand gift brand from idea to a fully operational US storefront — store, payments, and SEO foundations built for launch.",
    badges: ["Full Store Build", "Payment Integration", "SEO Foundations"],
    href: "https://auriacustomprints.com",
    gradient: "from-[#C7784E] to-[#8F3F20]",
  },
  {
    industry: "Workwear & Retail",
    name: "Proveer & Vestir SpA",
    summary:
      "Built a catalog website for a Chilean workwear supplier, designed around how customers actually buy — every product routes straight into a direct WhatsApp order.",
    badges: ["Catalog Website", "WhatsApp Ordering", "Responsive Design"],
    href: "https://www.proveervestirspa.com",
    gradient: "from-[#264653] to-[#16262C]",
  },
  {
    industry: "Music & Entertainment",
    name: "Canelo Beats",
    summary:
      "Built a complete artist identity from scratch for a release — branding, website, and a social kit designed to launch together.",
    badges: ["Brand Identity", "Website Launch", "Social Kit"],
    href: "https://caneloflashbeats.github.io/site/",
    gradient: "from-[#6B2C2C] to-[#2B1414]",
  },
  {
    industry: "Events & Entertainment",
    name: "Eureka",
    summary:
      "Gave an event entertainment company a visual identity it didn't have — logo, type system, and guidelines it could apply consistently.",
    badges: ["Visual Identity", "Type System", "Brand Guidelines"],
    gradient: "from-[#5B4C40] to-[#2B221B]",
  },
];

export type GrowthStackItem = {
  name: string;
  outcome: string;
};

export const growthStack: GrowthStackItem[] = [
  {
    name: "Next.js",
    outcome: "Pages that load instantly and rank — enterprise-grade performance out of the box.",
  },
  {
    name: "Tailwind CSS",
    outcome: "A consistent, on-brand design system that scales without slowing development down.",
  },
  {
    name: "Vercel",
    outcome: "Global edge deployment with zero-downtime releases, so your site is fast everywhere.",
  },
  {
    name: "Resend",
    outcome: "Reliable transactional email so every lead and client update actually lands.",
  },
  {
    name: "Apify",
    outcome:
      "Automated data extraction and monitoring that powers lead gen and competitive insight.",
  },
  {
    name: "Claude Code",
    outcome: "AI-assisted development that ships features faster without cutting quality corners.",
  },
];

export const faqs = [
  {
    q: "Do you work with international clients?",
    a: [
      "Absolutely. We work with businesses worldwide and operate 100% remotely. As digital nomads based primarily in Chile, with work periods in Colombia and the United States, we're used to collaborating across different time zones. Whether you're a local startup or an international company, we're always just a message or meeting away.",
    ],
  },
  {
    q: "What makes you different from a larger agency?",
    a: [
      "We keep things simple, personal, and efficient. Instead of going through multiple departments or long approval processes, you work directly with the people building your project. This means faster communication, more flexibility, affordable pricing, and solutions tailored to your business — not a one-size-fits-all process.",
    ],
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: [
      "Yes. We don't disappear after delivery.",
      "For websites, we offer optional monthly maintenance plans that include updates, improvements, and ongoing support. If you prefer managing the website yourself, we'll provide a walkthrough before launch so you feel confident making future edits.",
      "For branding, social media, and other design projects, we're always available if you need additional work or have questions after delivery.",
    ],
  },
  {
    q: "How does the discovery call work?",
    a: [
      "Simply click the Book a Call button and choose the date and time that works best for you.",
      "During the call, we'll learn more about your business, goals, and project requirements. It's also an opportunity for you to ask any questions, explore ideas, and see if we're the right fit before getting started.",
    ],
  },
  {
    q: "What is your pricing structure?",
    a: [
      "We don't use one-size-fits-all packages — every quote is built around your specific goals, the complexity of the project, and your timeline. A simple landing page and a full e-commerce build are different investments, and we'd rather price it right than force it into a generic tier.",
      "The best way to get a real number is a free discovery call: we'll ask about what you're trying to achieve, then follow up with a clear, itemized quote — no obligation, no pressure.",
    ],
  },
  {
    q: "How long does a project take?",
    a: [
      "Project timelines depend on the scope, but most projects are completed within these timeframes:",
    ],
    list: [
      "Websites: 1–3 weeks",
      "Branding: 3–10 business days",
      "Business cards, presentations, flyers & other graphic design: 3–7 business days",
      "Social Media Management: Monthly service with ongoing content planning and support",
    ],
    aAfterList:
      "We'll always provide a clear timeline before we begin, so you know exactly what to expect.",
  },
];

export const promises = [
  "Responsive Design",
  "SEO Ready",
  "Fast Loading",
  "Mobile First",
  "Built for Growth",
  "Ongoing Support",
  "Transparent Process",
  "Custom Strategy",
];

export const projectTypes = [
  "Website",
  "Branding",
  "Social Media",
  "Paid Ads",
  "Print / Packaging",
  "Something else",
];

export const budgetRanges = [
  "< $1,000",
  "$1,000 – $3,000",
  "$3,000 – $8,000",
  "$8,000+",
  "Not sure yet",
];
