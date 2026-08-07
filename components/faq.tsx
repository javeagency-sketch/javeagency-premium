"use client";

import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { EASE, Reveal, RevealMask } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { faqs, promises } from "@/lib/content";
import { faqs as faqsEs, promises as promisesEs } from "@/lib/content.es";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    eyebrow: "FAQ",
    heading: "Questions we hear often.",
    body: "Still wondering about something? Book a free discovery call and we'll answer everything in person.",
  },
  es: {
    eyebrow: "Preguntas Frecuentes",
    heading: "Preguntas que escuchamos seguido.",
    body: "¿Aún tienes dudas? Agenda una llamada de descubrimiento gratuita y responderemos todo en persona.",
  },
};

export function Faq({ locale = "en" }: { locale?: Locale } = {}) {
  const [open, setOpen] = useState<number | null>(0);
  const items = locale === "es" ? faqsEs : faqs;
  const promiseItems = locale === "es" ? promisesEs : promises;
  const t = copy[locale];

  return (
    <>
      <section id="faq" className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
          <RevealMask>
            <span className="text-terracotta mb-5 block text-xs font-semibold tracking-[0.24em] uppercase">
              {t.eyebrow}
            </span>
            <h2 className="mb-5 text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
              {t.heading}
            </h2>
            <p className="text-ink-soft max-w-[280px] text-lg leading-relaxed">{t.body}</p>
          </RevealMask>

          <Reveal>
            {items.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </Reveal>
        </div>
      </section>

      <div className="border-line bg-paper border-t py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-6 lg:px-8">
          {promiseItems.map((p) => (
            <span
              key={p}
              className="border-line text-ink-soft rounded-full border px-4 py-2 text-[12.5px]"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqs)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const id = useId();

  return (
    <div className="border-line border-b">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 py-6 text-left font-serif text-xl tracking-tight"
      >
        <span>{item.q}</span>
        <span
          className={cn(
            "border-line text-terracotta flex h-7 w-7 shrink-0 items-center justify-center border transition-transform duration-300",
            isOpen && "border-terracotta rotate-45",
          )}
        >
          <Plus className="size-3.5" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="max-w-[560px] pb-7">
              {item.a.map((p) => (
                <p key={p} className="text-ink-soft pb-4 text-lg leading-relaxed">
                  {p}
                </p>
              ))}
              {item.list && (
                <ul className="mb-4">
                  {item.list.map((li) => (
                    <li key={li} className="text-ink-soft relative py-1.5 pl-4.5 text-base">
                      <span className="text-terracotta-dark absolute left-0">—</span>
                      {li}
                    </li>
                  ))}
                </ul>
              )}
              {item.aAfterList && (
                <p className="text-ink-soft text-lg leading-relaxed">{item.aAfterList}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
