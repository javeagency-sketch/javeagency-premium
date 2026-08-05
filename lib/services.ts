export const servicesHero = {
  eyebrow: "Services",
  headline: "Everything a growing brand needs, built by one team.",
  subheadline:
    "We work as a web design agency, branding agency, and growth partner in one — so your website, identity, content, and automation all move in the same direction instead of pulling against each other.",
};

export type ServiceSlug = "web-design" | "branding" | "automation" | "content-creation";

export type ServiceFaq = { q: string; a: string };

export type ServiceDetail = {
  slug: ServiceSlug;
  num: string;
  navTitle: string;
  title: string;
  tagline: string;
  overview: string[];
  benefits: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  faqs: ServiceFaq[];
  ctaHeading: string;
  ctaBody: string;
};

export const services: ServiceDetail[] = [
  {
    slug: "web-design",
    num: "01",
    navTitle: "Web Design",
    title: "Web Design & Development",
    tagline: "Editorial-quality websites, engineered to convert.",
    overview: [
      "Your website is the first real interaction most customers have with your business — it either builds credibility in the first few seconds or costs you the visit. Our web design and development service exists to make sure it's the former.",
      "We design and build custom sites from the ground up: no page builders, no recycled templates pretending to be bespoke. Every project starts with strategy — who the site needs to convince, what action they should take, and what's currently getting in the way — before a single screen gets designed.",
      "On the development side, we build on modern infrastructure (Next.js, deployed on Vercel's global edge network) so pages load fast everywhere, not just in one region. That matters even more for clients serving customers across the United States, Chile, and Colombia, where connection speeds and expectations vary by market.",
    ],
    benefits: [
      {
        title: "Built to convert, not just look good",
        desc: "Every layout decision is made against a goal — book a call, add to cart, submit a form — not aesthetics alone.",
      },
      {
        title: "Fast by default",
        desc: "Modern, edge-deployed infrastructure means real-world load times in the range Core Web Vitals rewards.",
      },
      {
        title: "SEO-ready from day one",
        desc: "Semantic structure, metadata, and sitemaps are part of the build, not an afterthought bolted on later.",
      },
      {
        title: "Fully responsive",
        desc: "Every project is designed and tested across mobile, tablet, and desktop before it ships.",
      },
    ],
    process: [
      {
        title: "Discover",
        desc: "A working session to understand your business, audience, and goals for the site.",
      },
      {
        title: "Design",
        desc: "Wireframes and visual design, refined through focused feedback rounds.",
      },
      {
        title: "Develop",
        desc: "Custom, responsive development with performance and SEO built in.",
      },
      {
        title: "Launch",
        desc: "QA, deployment, and a walkthrough so your team can manage the site with confidence.",
      },
    ],
    faqs: [
      {
        q: "Do you build on WordPress, Shopify, or something custom?",
        a: "It depends on the project. E-commerce projects often run on Shopify for the checkout and inventory tooling; content-heavy sites sometimes use WordPress. Most marketing and brand sites we build custom on Next.js for the performance and flexibility. We recommend the right foundation for your specific goals during discovery, not before.",
      },
      {
        q: "How long does a website project take?",
        a: "Most marketing websites take 2–4 weeks from kickoff to launch. More complex builds — e-commerce, custom portals, multi-language sites — typically run 4–8 weeks depending on scope.",
      },
      {
        q: "Will my new site be optimized for search engines?",
        a: "Yes. Semantic HTML, metadata, sitemaps, and Core Web Vitals performance are part of every build, not a separate line item.",
      },
      {
        q: "Do you offer support after launch?",
        a: "Yes — optional monthly maintenance plans are available, and we walk your team through the site before launch so you can make basic edits confidently either way.",
      },
    ],
    ctaHeading: "Ready for a website that actually earns its keep?",
    ctaBody:
      "Tell us about your business and we'll map out what a premium, high-performing site looks like for you.",
  },
  {
    slug: "branding",
    num: "02",
    navTitle: "Branding",
    title: "Brand Identity Systems",
    tagline: "A visual foundation that holds up as you scale.",
    overview: [
      "Inconsistent branding is one of the fastest ways a growing business loses credibility — a logo that looks different on the website than on the invoice, colors that shift from post to post, no real guidelines to keep it all together. As a branding agency, this is the problem we solve first.",
      "We build complete identity systems: logo, color palette, typography, and usage guidelines that give your business one consistent look across every touchpoint — website, social, print, packaging, and beyond. The goal isn't just a nice logo; it's a system your team (or any future vendor) can apply consistently without a designer holding their hand every time.",
      "For businesses operating across multiple markets — the United States, Chile, and Colombia, in our case — a strong identity system also does the work of signaling professionalism instantly, before a customer reads a single word of copy.",
    ],
    benefits: [
      {
        title: "One consistent identity everywhere",
        desc: "Guidelines that keep your brand recognizable across web, social, and print.",
      },
      {
        title: "Built to scale",
        desc: "Systems designed to extend cleanly as you add products, locations, or sub-brands.",
      },
      {
        title: "Instant credibility",
        desc: "A premium visual identity signals professionalism before a customer reads a word.",
      },
      {
        title: "Usable by your team",
        desc: "Clear guidelines mean you're not dependent on us for every new asset.",
      },
    ],
    process: [
      {
        title: "Discover",
        desc: "Understand your business, audience, and how you want to be perceived.",
      },
      {
        title: "Design",
        desc: "Concept development for logo, palette, and typography, refined with your input.",
      },
      {
        title: "Develop",
        desc: "Full guidelines documentation and asset delivery in every format you need.",
      },
      {
        title: "Launch",
        desc: "Rollout support across your website, social channels, and print materials.",
      },
    ],
    faqs: [
      {
        q: "Do you design logos only, or full identity systems?",
        a: "Full systems by default — logo, color palette, typography, and usage guidelines. A logo on its own rarely solves the consistency problem that brings clients to us.",
      },
      {
        q: "Can you refresh an existing brand instead of starting over?",
        a: "Yes. Many projects are rebrands, not brand-new identities — we evaluate what's working before deciding what to change.",
      },
      {
        q: "How long does a branding project take?",
        a: "Most brand identity projects take 3–10 business days depending on scope and feedback turnaround.",
      },
      {
        q: "Do you also design business cards, packaging, and signage?",
        a: "Yes — once the core identity is set, we can extend it to business cards, packaging, signage, and other print or physical materials.",
      },
    ],
    ctaHeading: "Ready for a brand that looks as good as your business is?",
    ctaBody:
      "Let's talk about where your current identity is falling short — and what a consistent system would unlock.",
  },
  {
    slug: "automation",
    num: "03",
    navTitle: "Automation",
    title: "Automation & AI Workflows",
    tagline: "Growth infrastructure that runs while you don't.",
    overview: [
      "Most small and mid-sized businesses lose leads to the same problem: nobody follows up fast enough. A form submission sits in an inbox for two days, a WhatsApp message goes unanswered overnight, a lead cools before anyone reaches out.",
      "Our automation and AI workflow service builds the infrastructure that closes that gap — automated lead capture and routing, follow-up sequences, CRM and email integration, and reporting dashboards that tell you what's actually working, without someone manually compiling a spreadsheet every week.",
      "This is where we combine AI-assisted tooling with human strategy: AI handles the repetitive, time-sensitive work — instant responses, data extraction, first-pass qualification — while your team stays focused on the conversations that actually need a human. The result is a business that responds like a much larger company, without the overhead of one.",
    ],
    benefits: [
      {
        title: "No lead goes cold",
        desc: "Automated capture and follow-up mean inquiries get a response in minutes, not days.",
      },
      {
        title: "Less manual admin",
        desc: "Reporting and routing that used to take hours a week happen automatically.",
      },
      {
        title: "AI where it helps, human where it matters",
        desc: "Automation handles speed; your team handles judgment and relationships.",
      },
      {
        title: "Clear visibility",
        desc: "Dashboards that show what's converting, so decisions aren't based on guesswork.",
      },
    ],
    process: [
      {
        title: "Discover",
        desc: "Map your current lead flow and find where inquiries stall or get lost.",
      },
      {
        title: "Design",
        desc: "Design the automation logic — routing, sequences, and integrations — around your process.",
      },
      {
        title: "Develop",
        desc: "Build and connect the workflows to your CRM, email, and messaging tools.",
      },
      {
        title: "Launch",
        desc: "Test with real traffic, then hand over reporting so you can see it working.",
      },
    ],
    faqs: [
      {
        q: "What tools do you build automations on?",
        a: "It depends on what you already use — common setups include Resend for transactional email, CRM integrations, and messaging automation for WhatsApp and Instagram. We fit the tooling to your existing stack where possible.",
      },
      {
        q: "Is this a one-time setup or an ongoing service?",
        a: "Both are available. Most clients start with a one-time build, then move to a monthly plan for monitoring, reporting, and iteration as volume grows.",
      },
      {
        q: "Will this replace my sales team?",
        a: "No — it's designed to support them. Automation handles speed and consistency; your team still owns the relationships and decisions that need a human.",
      },
      {
        q: "Can this integrate with a site you didn't build?",
        a: "In most cases, yes. We can connect automation workflows to an existing website or platform without a full rebuild.",
      },
    ],
    ctaHeading: "Ready to stop losing leads to slow follow-up?",
    ctaBody:
      "Tell us how leads reach you today, and we'll show you where automation would make the biggest difference.",
  },
  {
    slug: "content-creation",
    num: "04",
    navTitle: "Content Creation",
    title: "Content & Social Assets",
    tagline: "Consistent, on-brand content that actually ships.",
    overview: [
      "A strong brand and a fast website still need a consistent presence to back them up — and content is where most small teams run out of time first. Posting becomes sporadic, visuals drift from the brand system, and the channel that should be building trust ends up doing the opposite.",
      "Our content and social asset service covers strategy, design, and copywriting for the channels that matter to your business: content calendars planned around your goals, feed and story design that stays on-brand, and copywriting that sounds like your business, not a template.",
      "Everything ties back to the identity system we build (or the one you already have) — so content strengthens the brand instead of diluting it, and every post looks like it came from the same premium business your website represents.",
    ],
    benefits: [
      {
        title: "Always on-brand",
        desc: "Every asset is built from your identity system, so content reinforces the brand instead of drifting from it.",
      },
      {
        title: "Consistent, not sporadic",
        desc: "A planned calendar means posting stays regular even when your team is busy running the business.",
      },
      {
        title: "Copy that sounds like you",
        desc: "Copywriting grounded in your actual voice and offer, not generic templates.",
      },
      {
        title: "Reporting that shows impact",
        desc: "Monthly performance reporting so content decisions are based on what's working.",
      },
    ],
    process: [
      {
        title: "Discover",
        desc: "Understand your brand voice, audience, and current content gaps.",
      },
      {
        title: "Design",
        desc: "Build a content calendar and visual system aligned to your identity.",
      },
      { title: "Develop", desc: "Produce feed, story, and copy assets on a consistent schedule." },
      { title: "Launch", desc: "Publish, monitor performance, and report on what's resonating." },
    ],
    faqs: [
      {
        q: "Do you handle posting, or just design the content?",
        a: "Both options are available — some clients want fully managed posting and community management, others prefer we deliver assets for their team to publish.",
      },
      {
        q: "Which platforms do you design for?",
        a: "Primarily Instagram and Facebook, with content adaptable to other channels depending on where your audience actually is.",
      },
      {
        q: "Is this a monthly service?",
        a: "Yes — content and social asset work is typically an ongoing monthly engagement, since consistency is most of the value.",
      },
      {
        q: "Can you also run paid ad creative?",
        a: "Yes, we produce ad creative as part of broader paid media work, built from the same brand system as your organic content.",
      },
    ],
    ctaHeading: "Ready for content that finally keeps pace with your brand?",
    ctaBody:
      "Let's talk about what's slowing your content down — and build a system that keeps it consistent.",
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug);
}
