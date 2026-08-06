import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { InlineCta } from "@/components/inline-cta";
import { Process } from "@/components/process";
import { Reveal, RevealGroup, RevealItem, RevealMask } from "@/components/ui/reveal";
import { servicesHero, services as staticServices } from "@/lib/services";
import { getServices } from "@/lib/sanity.queries";

const description =
  "Web design, branding, automation, and content services for businesses in the United States, Chile, and Colombia — one team, working as your web design agency, branding agency, and growth partner.";

export const metadata: Metadata = {
  title: "Services",
  description,
  alternates: { canonical: "/services" },
  openGraph: { title: "Services — Javé Agency", description, url: "/services" },
  twitter: { title: "Services — Javé Agency", description },
};

export default async function ServicesPage() {
  const cmsServices = await getServices();
  const cmsBySlug = new Map(cmsServices.map((s) => [s.slug.current, s]));

  // The four service detail routes (app/services/[slug]/page.tsx) are
  // static — the CMS only overrides the tagline shown here, it doesn't add
  // new listing entries, so every "Learn more" link keeps resolving.
  const services = staticServices.map((service) => ({
    ...service,
    tagline: cmsBySlug.get(service.slug)?.shortDescription || service.tagline,
  }));

  return (
    <>
      <PageHero
        eyebrow={servicesHero.eyebrow}
        headline={servicesHero.headline}
        subheadline={servicesHero.subheadline}
        crumbs={[{ label: "Services" }]}
      />

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-8">
          <RevealMask>
            <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              Our Approach
            </span>
            <h2 className="text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
              One team. Every discipline.
            </h2>
          </RevealMask>

          <Reveal className="max-w-2xl space-y-6">
            <p className="text-ink-soft text-lg leading-relaxed">
              Most agencies specialize narrowly, which means growing businesses end up juggling a
              web design agency, a branding agency, and a marketing agency — three vendors, three
              invoices, and nobody accountable for how the pieces fit together.
            </p>
            <p className="text-ink-soft text-lg leading-relaxed">
              JAVE AGENCY works differently. One team owns the strategy, the design, the
              development, and the growth systems that follow launch, for businesses across the
              United States, Chile, and Colombia. Below are the four disciplines we work in — each
              one designed to support the others, not operate in isolation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealGroup className="border-line border-t">
            {services.map((service) => (
              <RevealItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group border-line hover:border-terracotta/50 block border-b py-12 transition-colors duration-500 md:py-16"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-16">
                    <div className="flex items-baseline gap-6 md:w-2/5">
                      <span className="text-terracotta font-serif text-lg">{service.num}</span>
                      <h3 className="text-3xl leading-[1.05] font-medium tracking-tight md:text-4xl">
                        {service.navTitle}
                      </h3>
                    </div>
                    <div className="md:w-2/5">
                      <p className="text-ink-soft mb-4 text-lg leading-relaxed">
                        {service.tagline}
                      </p>
                      <span className="text-terracotta-dark inline-flex items-center gap-1.5 text-[12.5px] font-semibold tracking-[0.06em] uppercase transition-all duration-300 group-hover:gap-2.5">
                        Learn more <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Process />

      <InlineCta
        heading="Not sure which service fits?"
        body="Tell us about your business and we'll recommend where to start — no pressure, no obligation."
        secondaryLabel="View Our Work"
        secondaryHref="/work"
      />
    </>
  );
}
