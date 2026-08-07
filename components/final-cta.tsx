import { ContactForm } from "@/components/contact-form";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { Reveal, RevealMask } from "@/components/ui/reveal";
import { site } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    eyebrow: "Let's Work Together",
    heading: "Ready for a website that actually grows your business?",
    body: "Book a free discovery call — no pressure, no obligation, just a clear plan for what growth looks like for your business.",
    bookCall: "Book a Discovery Call",
    whatsapp: "WhatsApp Us",
    eyebrow2: "Or Send a Message",
    heading2: "Tell us about your project.",
  },
  es: {
    eyebrow: "Trabajemos Juntos",
    heading: "¿Listo para un sitio web que realmente haga crecer tu negocio?",
    body: "Agenda una llamada de descubrimiento gratuita — sin presión, sin obligación, solo un plan claro de cómo se ve el crecimiento para tu negocio.",
    bookCall: "Agendar una Llamada",
    whatsapp: "Escríbenos por WhatsApp",
    eyebrow2: "O Envíanos un Mensaje",
    heading2: "Cuéntanos sobre tu proyecto.",
  },
};

export function FinalCta({ locale = "en" }: { locale?: Locale } = {}) {
  const t = copy[locale];
  return (
    <section id="contact" className="bg-cream">
      <div className="from-terracotta to-terracotta-dark text-paper bg-gradient-to-br py-24 text-center md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealMask className="mx-auto max-w-3xl">
            <span className="text-paper/85 mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              {t.eyebrow}
            </span>
            <h2 className="text-paper mb-6 font-serif text-4xl leading-[1.05] font-medium tracking-tight text-balance md:text-6xl">
              {t.heading}
            </h2>
            <p className="text-paper/90 mx-auto mb-10 max-w-[520px] text-lg leading-relaxed">
              {t.body}
            </p>
            <div className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:max-w-none sm:flex-row">
              <MagneticLink
                href={site.bookingUrl}
                target="_blank"
                rel="noopener"
                className="bg-paper text-ink hover:bg-ink hover:text-paper w-full rounded-sm px-7 py-4 text-center text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors sm:w-auto"
              >
                {t.bookCall}
              </MagneticLink>
              <MagneticLink
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener"
                className="border-paper/60 text-paper hover:bg-paper/12 w-full rounded-sm border px-7 py-4 text-center text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors sm:w-auto"
              >
                {t.whatsapp}
              </MagneticLink>
            </div>
          </RevealMask>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 lg:px-8">
        <Reveal className="mb-12 text-center">
          <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
            {t.eyebrow2}
          </span>
          <h2 className="text-3xl leading-[1.05] font-medium tracking-tight md:text-4xl">
            {t.heading2}
          </h2>
        </Reveal>

        <Reveal>
          <ContactForm locale={locale} />
        </Reveal>
      </div>
    </section>
  );
}
