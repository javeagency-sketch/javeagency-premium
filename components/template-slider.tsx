"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

export type TemplateSlide = {
  src: string;
  alt: string;
  label: string;
};

/**
 * Lightweight horizontal screenshot showcase for a template — replaces the
 * old live-iframe preview. No embedded site, no separate deployment: just a
 * scrollable set of homepage-section screenshots with arrow and swipe nav.
 */
export function TemplateSlider({
  title,
  category,
  slides,
}: {
  title: string;
  category: string;
  slides: TemplateSlide[];
}) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = (next: number) => {
    setIndex((next + slides.length) % slides.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      goTo(index + (delta < 0 ? 1 : -1));
    }
    touchStartX.current = null;
  };

  return (
    <div className="border-line bg-cream overflow-hidden rounded-xl border">
      <div className="border-line bg-paper flex flex-wrap items-center justify-between gap-3 border-b px-6 py-4">
        <span className="text-terracotta-dark text-[11px] font-semibold tracking-[0.14em] uppercase">
          Template Preview — Demo Only
        </span>
        <span className="text-ink-soft text-[11px] font-semibold tracking-[0.1em] uppercase">
          {category}
        </span>
      </div>

      <div
        className="relative aspect-[16/10] w-full touch-pan-y select-none overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-500 ease-out"
            style={{ opacity: i === index ? 1 : 0, pointerEvents: i === index ? "auto" : "none" }}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              priority={i === 0}
              className="pointer-events-none object-cover object-top"
            />
          </div>
        ))}

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous section"
          className="bg-ink/60 hover:bg-ink text-paper absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full backdrop-blur-sm transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next section"
          className="bg-ink/60 hover:bg-ink text-paper absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full backdrop-blur-sm transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ${slide.label}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "bg-paper w-6" : "bg-paper/50 w-1.5"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="border-line flex flex-wrap items-center justify-between gap-4 border-t p-6">
        <p className="text-ink-soft text-xs">
          Demo only — contact JAVE AGENCY to request this template for {title}.
        </p>
        <Link
          href="/contact"
          className="bg-terracotta hover:bg-terracotta-dark text-paper inline-flex items-center gap-2 rounded-sm px-7 py-3.5 text-[12.5px] font-semibold tracking-[0.06em] uppercase transition-colors"
        >
          Request This Template <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
