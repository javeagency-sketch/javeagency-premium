import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { InlineCta } from "@/components/inline-cta";
import { FaqAccordion } from "@/components/faq-accordion";
import { Reveal, RevealGroup, RevealItem, RevealMask } from "@/components/ui/reveal";
import { services, type ServiceDetail } from "@/lib/services";

export function ServicePageContent({ service }: { service: ServiceDetail }) {
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.num}`}
        headline={service.title}
        subheadline={service.tagline}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.navTitle }]}
      />

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-8">
          <RevealMask>
            <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              Overview
            </span>
            <h2 className="text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
              How we approach it.
            </h2>
          </RevealMask>

          <Reveal className="max-w-2xl space-y-6">
            {service.overview.map((p) => (
              <p key={p} className="text-ink-soft text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealMask className="mb-16 max-w-2xl md:mb-20">
            <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              Benefits
            </span>
            <h2 className="text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
              What you actually get.
            </h2>
          </RevealMask>

          <RevealGroup className="border-line bg-line grid grid-cols-1 gap-px border sm:grid-cols-2">
            {service.benefits.map((b) => (
              <RevealItem key={b.title}>
                <div className="bg-paper h-full p-8 md:p-10">
                  <h3 className="mb-3 font-serif text-xl tracking-tight">{b.title}</h3>
                  <p className="text-ink-soft text-base leading-relaxed">{b.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="process" className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealMask className="mb-16 text-center md:mb-20">
            <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              Process
            </span>
            <h2 className="text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
              From kickoff to launch.
            </h2>
          </RevealMask>

          <RevealGroup className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {service.process.map((step, i) => (
              <RevealItem key={step.title} className="text-center">
                <div className="border-line bg-cream text-terracotta-dark mx-auto mb-6 flex h-12 w-12 items-center justify-center border font-serif text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-3 text-2xl font-medium tracking-tight">{step.title}</h3>
                <p className="text-ink-soft mx-auto max-w-[220px] text-base leading-relaxed">
                  {step.desc}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
          <RevealMask>
            <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              FAQ
            </span>
            <h2 className="text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
              Common questions.
            </h2>
          </RevealMask>
          <Reveal>
            <FaqAccordion items={service.faqs} />
          </Reveal>
        </div>
      </section>

      <section className="border-line bg-cream border-t py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="flex flex-wrap items-center justify-between gap-6">
            <span className="text-ink-soft text-xs font-semibold tracking-[0.2em] uppercase">
              Explore Other Services
            </span>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-ink-soft decoration-line hover:text-terracotta-dark text-[15px] underline underline-offset-4 transition-colors"
                >
                  {s.navTitle}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <InlineCta
        heading={service.ctaHeading}
        body={service.ctaBody}
        secondaryLabel="See Our Work"
        secondaryHref="/work"
      />
    </>
  );
}
