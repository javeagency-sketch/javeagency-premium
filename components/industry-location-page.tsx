import { PageHero } from "@/components/page-hero";
import { InlineCta } from "@/components/inline-cta";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { site, siteUrl } from "@/lib/content";
import type { IndustryLocationPage } from "@/lib/industry-locations";

export function IndustryLocationPageContent({ page }: { page: IndustryLocationPage }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: page.metaDescription,
    url: `${siteUrl}/services/${page.slug}`,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Sullivan County, NY" },
      { "@type": "City", name: "Monticello, NY" },
      { "@type": "City", name: "Wurtsboro, NY" },
      { "@type": "City", name: "Bloomingburg, NY" },
      { "@type": "City", name: "Pine Bush, NY" },
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: page.serviceType,
        areaServed: "Sullivan County, NY",
        provider: {
          "@type": "ProfessionalService",
          name: site.name,
        },
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow={page.eyebrow}
        headline={page.h1}
        subheadline={page.subheadline}
        crumbs={[{ label: "Services", href: "/services" }, { label: page.industry }]}
      />

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl space-y-6">
            {page.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-ink-soft text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {page.benefits.map((benefit) => (
              <RevealItem key={benefit.title} className="border-line bg-cream rounded-xl border p-7">
                <h3 className="mb-3 text-xl leading-[1.05] font-medium tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-ink-soft text-base leading-relaxed">{benefit.desc}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <InlineCta
        heading={page.ctaHeading}
        body={page.ctaBody}
        secondaryLabel="Get a Free Quote"
        secondaryHref="/contact"
      />
    </>
  );
}
