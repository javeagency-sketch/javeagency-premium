import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { InlineCta } from "@/components/inline-cta";
import { HoverLift, Reveal, RevealGroup, RevealItem, RevealMask } from "@/components/ui/reveal";
import { templatesHero, templates, templatesCta } from "@/lib/templates";

const description =
  "Premium, industry-specific website templates from JAVE AGENCY — the same design standard as our custom client work, built for businesses in the United States, Chile, and Colombia.";

export const metadata: Metadata = {
  title: "Templates",
  description,
  alternates: { canonical: "/templates" },
  openGraph: { title: "Templates — Javé Agency", description, url: "/templates" },
  twitter: { title: "Templates — Javé Agency", description },
};

export default function TemplatesPage() {
  return (
    <>
      <PageHero
        eyebrow={templatesHero.eyebrow}
        headline={templatesHero.headline}
        subheadline={templatesHero.subheadline}
        crumbs={[{ label: "Templates" }]}
      />

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-8">
          <RevealMask>
            <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              How It Works
            </span>
            <h2 className="text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
              Custom-grade design, ready to launch.
            </h2>
          </RevealMask>

          <Reveal className="max-w-2xl space-y-6">
            <p className="text-ink-soft text-lg leading-relaxed">
              Not every business needs — or can wait for — a fully custom build. The JAVE AGENCY
              template line packages the same premium design standard behind our{" "}
              <Link
                href="/work"
                className="text-terracotta-dark decoration-line hover:text-terracotta underline underline-offset-4"
              >
                client work
              </Link>{" "}
              into ready-to-launch templates for specific industries, so you can get a premium
              website live faster, at a lower cost than a fully custom engagement.
            </p>
            <p className="text-ink-soft text-lg leading-relaxed">
              Each template is still built on the same modern infrastructure as our custom projects
              — fast, responsive, and SEO-ready — with room to add your own branding, copy, and
              images. If you need something more specific to your business, our{" "}
              <Link
                href="/services/web-design"
                className="text-terracotta-dark decoration-line hover:text-terracotta underline underline-offset-4"
              >
                custom web design service
              </Link>{" "}
              is the better fit.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {templates.map((template) => (
              <RevealItem key={template.slug}>
                <HoverLift className="border-line bg-cream h-full overflow-hidden rounded-xl border">
                  <div
                    className={`text-paper/90 flex aspect-[16/10] items-center justify-center bg-gradient-to-br font-serif text-2xl italic ${template.gradient}`}
                  >
                    {template.name}
                  </div>
                  <div className="p-8">
                    <span className="text-terracotta mb-3 block text-[11px] font-semibold tracking-[0.14em] uppercase">
                      {template.category}
                    </span>
                    <h3 className="mb-3 font-serif text-2xl tracking-tight">{template.name}</h3>
                    <p className="text-ink-soft mb-7 text-base leading-relaxed">
                      {template.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="border-line text-ink-soft/50 cursor-not-allowed rounded-sm border px-5 py-2.5 text-[12px] font-semibold tracking-[0.06em] uppercase">
                        Live Demo — Coming Soon
                      </span>
                      <Link
                        href="/contact"
                        className="text-terracotta-dark hover:text-terracotta inline-flex items-center gap-1.5 text-[12.5px] font-semibold tracking-[0.06em] uppercase transition-colors"
                      >
                        Learn More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </HoverLift>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <InlineCta
        heading={templatesCta.heading}
        body={templatesCta.body}
        secondaryLabel="Start a Custom Project"
        secondaryHref="/services/web-design"
      />
    </>
  );
}
