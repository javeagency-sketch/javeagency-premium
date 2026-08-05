import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/content";

const description =
  "Get in touch with JAVE AGENCY — a web design, branding, and marketing agency working with businesses in the United States, Chile, and Colombia.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact — Javé Agency", description, url: "/contact" },
  twitter: { title: "Contact — Javé Agency", description },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        headline="Let's talk about your business."
        subheadline="Tell us where you are today and where you want to be — we'll follow up with next steps, no obligation."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-8">
          <Reveal>
            <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              Other Ways to Reach Us
            </span>
            <h2 className="mb-6 font-serif text-3xl leading-[1.05] font-medium tracking-tight">
              Prefer a call or a quick message?
            </h2>
            <p className="text-ink-soft mb-8 text-base leading-relaxed">
              If a form isn&apos;t your style, book a free discovery call directly or reach us on
              WhatsApp. We work across US, Chile, and Colombia time zones and typically respond
              within one business day.
            </p>
            <div className="flex flex-col gap-4">
              <MagneticLink
                href={site.bookingUrl}
                target="_blank"
                rel="noopener"
                className="bg-terracotta text-paper hover:bg-terracotta-dark w-full rounded-sm px-6 py-3.5 text-center text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors"
              >
                Book a Discovery Call
              </MagneticLink>
              <MagneticLink
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener"
                className="border-line text-ink hover:border-terracotta hover:text-terracotta-dark w-full rounded-sm border px-6 py-3.5 text-center text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors"
              >
                WhatsApp Us
              </MagneticLink>
              <a
                href={`mailto:${site.email}`}
                className="border-line text-ink hover:border-terracotta hover:text-terracotta-dark w-full rounded-sm border px-6 py-3.5 text-center text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors"
              >
                {site.email}
              </a>
            </div>
          </Reveal>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
