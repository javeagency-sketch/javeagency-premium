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
import type { LucideIcon } from "lucide-react";

export const siteUrl = "https://javeagency.com";

export const site = {
  name: "Javé Agency",
  tagline: "Design, strategy and growth for ambitious businesses.",
  description:
    "Javé Agency builds high-converting websites, branding, and digital marketing systems for businesses in Monticello, Wurtsboro, Bloomingburg, Pine Bush, and across Sullivan County, NY. Free strategy call.",
  bookingUrl: "https://calendar.app.google/8PbpkbSVL3EtkQo2A",
  phoneDisplay: "+1 (717) 808-6050",
  phoneHref: "tel:+17178086050",
  whatsappUrl: "https://wa.me/17178086050",
  instagramUrl: "https://www.instagram.com/jave.marketing/",
  email: "hello@javeagency.com",
};

export const hero = {
  headline: "We build digital brands that feel impossible to ignore.",
  locationLine:
    "Proudly serving Sullivan County — Monticello, Wurtsboro, Bloomingburg, Pine Bush, and beyond.",
  subheadline:
    "Premium websites, branding systems, and AI-powered growth infrastructure for ambitious businesses across Sullivan County, Monticello, Wurtsboro, Bloomingburg, and the greater Catskills region.",
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
  Icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
};

export const whatWeBuild: WhatWeBuildItem[] = [
  {
    key: "websites",
    Icon: Globe,
    title: "Websites That Work While You Sleep",
    desc: "A site that loads fast, looks great on any phone, and turns visitors into customers — not just another pretty page.",
    bullets: ["Custom Design", "Mobile-Friendly", "Built to Convert"],
  },
  {
    key: "brand",
    Icon: Palette,
    title: "A Brand People Remember",
    desc: "Your logo, colors, and look — all designed to work together, so your business looks just as sharp on a business card as it does online.",
    bullets: ["Logo Design", "Brand Guidelines", "Print Materials"],
  },
  {
    key: "content",
    Icon: Share2,
    title: "Content That Shows Up Consistently",
    desc: "Posts, stories, and captions — planned and designed ahead of time, so your brand stays active without you having to think about it daily.",
    bullets: ["Social Media", "Copywriting", "Content Calendar"],
  },
  {
    key: "automation",
    Icon: Zap,
    title: "Follow-Ups That Never Sleep",
    desc: "When someone reaches out, they hear back right away — automatically. No lead waits, no message gets lost.",
    bullets: ["Instant Follow-Up", "Easy Reporting", "Never Miss a Lead"],
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

export type GrowthStackItem = {
  Icon: LucideIcon;
  title: string;
  desc: string;
};

export const growthStack: GrowthStackItem[] = [
  {
    Icon: Zap,
    title: "Lightning-Fast Sites",
    desc: "Your website loads instantly — on any device, anywhere.",
  },
  {
    Icon: Search,
    title: "Built to Be Found",
    desc: "Every site is structured to show up on Google from day one.",
  },
  {
    Icon: MessageCircle,
    title: "Follow-Ups That Never Sleep",
    desc: "New leads get an immediate response — automated, but personal.",
  },
  {
    Icon: BarChart3,
    title: "Know What's Working",
    desc: "Simple, clear reporting — no confusing dashboards.",
  },
];

export const industriesSection = {
  heading: "Specialized Marketing for Every Industry",
  subheading:
    "From home services to healthcare, we build industry-specific strategies that generate real leads and revenue for businesses across Sullivan County — Monticello, Wurtsboro, Bloomingburg, Pine Bush, and beyond.",
};

export type IndustryItem = {
  Icon: LucideIcon;
  name: string;
  desc: string;
  href: string;
};

export const industries: IndustryItem[] = [
  {
    Icon: HardHat,
    name: "Construction",
    desc: "More bids, more projects, and a dominant local presence for general contractors and specialty trades across Sullivan County.",
    href: "/services/construction-marketing-orange-county",
  },
  {
    Icon: Trees,
    name: "Landscaping",
    desc: "Year-round leads for lawn care and landscaping companies — from spring cleanups to winter snow removal contracts.",
    href: "/services/landscaping-marketing-orange-county",
  },
  {
    Icon: Home,
    name: "Roofing",
    desc: "High-intent roofing leads, storm-season surge campaigns, and a Google presence that books estimates daily — built for Catskills winters and ice-dam season.",
    href: "/services/roofing-marketing-orange-county",
  },
  {
    Icon: Wrench,
    name: "Plumbing",
    desc: "Emergency call capture, scheduled service bookings, and steady leads for Sullivan County plumbers, day or night.",
    href: "/services/plumbing-marketing-orange-county",
  },
  {
    Icon: Wind,
    name: "HVAC",
    desc: "Seasonal surge campaigns, maintenance agreement marketing, and year-round lead generation — built for hot summers and cold Catskills winters.",
    href: "/services/hvac-marketing-orange-county",
  },
  {
    Icon: Zap,
    name: "Electrician",
    desc: "Panel upgrade leads, residential service calls, and commercial project inquiries for local electrical contractors.",
    href: "/services/electrician-marketing-orange-county",
  },
  {
    Icon: UtensilsCrossed,
    name: "Restaurant",
    desc: "More diners, more online orders, and a loyal local following for Sullivan County restaurants through social and SEO.",
    href: "/services/restaurant-marketing-orange-county",
  },
  {
    Icon: Stethoscope,
    name: "Medical & Healthcare",
    desc: "Compliant patient acquisition strategies that grow local practices and fill appointment calendars.",
    href: "/services/medical-marketing-orange-county",
  },
  {
    Icon: Scale,
    name: "Legal",
    desc: "More qualified consultations and page-1 rankings for Sullivan County law firms, across every practice area.",
    href: "/services/legal-marketing-orange-county",
  },
  {
    Icon: Building2,
    name: "Real Estate",
    desc: "More buyer and seller leads, a recognized personal brand, and a CRM system that never lets a deal slip away.",
    href: "/services/real-estate-marketing-orange-county",
  },
  {
    Icon: Car,
    name: "Auto Repair",
    desc: "More cars in your bay, a 5-star Google reputation, and a loyal customer base that keeps coming back.",
    href: "/services/auto-repair-marketing-orange-county",
  },
  {
    Icon: Dumbbell,
    name: "Fitness & Wellness",
    desc: "Year-round membership growth, powerful social content, and retention systems for gyms and studios.",
    href: "/services/fitness-marketing-orange-county",
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
