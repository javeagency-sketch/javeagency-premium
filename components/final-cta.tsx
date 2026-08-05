import { ContactForm } from "@/components/contact-form";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { Reveal, RevealMask } from "@/components/ui/reveal";
import { site } from "@/lib/content";

export function FinalCta() {
  return (
    <section id="contact" className="bg-cream">
      <div className="from-terracotta to-terracotta-dark text-paper bg-gradient-to-br py-24 text-center md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealMask className="mx-auto max-w-3xl">
            <span className="text-paper/85 mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              Let&apos;s Work Together
            </span>
            <h2 className="text-paper mb-6 font-serif text-4xl leading-[1.05] font-medium tracking-tight text-balance md:text-6xl">
              Ready for a website that actually grows your business?
            </h2>
            <p className="text-paper/90 mx-auto mb-10 max-w-[520px] text-lg leading-relaxed">
              Book a free discovery call — no pressure, no obligation, just a clear plan for what
              growth looks like for your business.
            </p>
            <div className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:max-w-none sm:flex-row">
              <MagneticLink
                href={site.bookingUrl}
                target="_blank"
                rel="noopener"
                className="bg-paper text-ink hover:bg-ink hover:text-paper w-full rounded-sm px-7 py-4 text-center text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors sm:w-auto"
              >
                Book a Discovery Call
              </MagneticLink>
              <MagneticLink
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener"
                className="border-paper/60 text-paper hover:bg-paper/12 w-full rounded-sm border px-7 py-4 text-center text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors sm:w-auto"
              >
                WhatsApp Us
              </MagneticLink>
            </div>
          </RevealMask>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 lg:px-8">
        <Reveal className="mb-12 text-center">
          <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
            Or Send a Message
          </span>
          <h2 className="text-3xl leading-[1.05] font-medium tracking-tight md:text-4xl">
            Tell us about your project.
          </h2>
        </Reveal>

        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
