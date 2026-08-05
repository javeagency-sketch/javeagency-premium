import type { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { InlineCta } from "@/components/inline-cta";
import { Reveal, RevealGroup, RevealItem, RevealMask } from "@/components/ui/reveal";
import { aboutHero, aboutStory, differentiators, beforeAfter, aboutCta } from "@/lib/about";

const description =
  "JAVE AGENCY is a web design, branding, and marketing agency working with businesses in the United States, Chile, and Colombia — premium websites and digital growth, built by one team.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: "About — Javé Agency", description, url: "/about" },
  twitter: { title: "About — Javé Agency", description },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutHero.eyebrow}
        headline={aboutHero.headline}
        subheadline={aboutHero.subheadline}
        crumbs={[{ label: "About" }]}
      />

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-8">
          <RevealMask>
            <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              {aboutStory.eyebrow}
            </span>
            <h2 className="text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
              {aboutStory.heading}
            </h2>
          </RevealMask>

          <Reveal className="max-w-2xl space-y-6">
            {aboutStory.paragraphs.map((p) => (
              <p key={p} className="text-ink-soft text-lg leading-relaxed">
                {p}
              </p>
            ))}
            <p className="text-ink-soft text-lg leading-relaxed">
              Curious what that looks like in practice? Explore our{" "}
              <Link
                href="/services"
                className="text-terracotta-dark decoration-line hover:text-terracotta underline underline-offset-4"
              >
                services
              </Link>{" "}
              or see it applied in{" "}
              <Link
                href="/work"
                className="text-terracotta-dark decoration-line hover:text-terracotta underline underline-offset-4"
              >
                real client work
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealMask className="mb-20 max-w-2xl md:mb-28">
            <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              What Sets Us Apart
            </span>
            <h2 className="text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
              Three things every client feels.
            </h2>
          </RevealMask>

          <RevealGroup className="border-line border-t">
            {differentiators.map((item) => (
              <RevealItem key={item.num}>
                <div className="border-line border-b py-12 md:py-16">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-16">
                    <div className="flex items-baseline gap-6 md:w-2/5">
                      <span className="text-terracotta font-serif text-lg">{item.num}</span>
                      <h3 className="text-3xl leading-[1.05] font-medium tracking-tight md:text-4xl">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-ink-soft text-lg leading-relaxed md:w-2/5">{item.desc}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealMask className="mb-16 text-center md:mb-20">
            <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              {beforeAfter.eyebrow}
            </span>
            <h2 className="text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
              {beforeAfter.heading}
            </h2>
          </RevealMask>

          <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <RevealItem>
              <div className="border-line bg-cream h-full rounded-xl border p-8 md:p-10">
                <span className="text-ink-soft mb-6 block text-xs font-semibold tracking-[0.2em] uppercase">
                  {beforeAfter.before.label}
                </span>
                <ul className="space-y-4">
                  {beforeAfter.before.items.map((item) => (
                    <li key={item} className="text-ink-soft flex items-start gap-3 text-base">
                      <X size={16} className="text-ink-soft/50 mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
            <RevealItem>
              <div className="border-terracotta/30 bg-cream h-full rounded-xl border p-8 shadow-[0_20px_50px_rgba(184,92,56,0.08)] md:p-10">
                <span className="text-terracotta mb-6 block text-xs font-semibold tracking-[0.2em] uppercase">
                  {beforeAfter.after.label}
                </span>
                <ul className="space-y-4">
                  {beforeAfter.after.items.map((item) => (
                    <li key={item} className="text-ink flex items-start gap-3 text-base">
                      <Check size={16} className="text-terracotta mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <InlineCta
        heading={aboutCta.heading}
        body={aboutCta.body}
        secondaryLabel="Get in Touch"
        secondaryHref="/contact"
      />
    </>
  );
}
