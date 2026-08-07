"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { EASE } from "@/components/ui/reveal";
import { navLinks, site } from "@/lib/content";
import { navLinks as navLinksEs } from "@/lib/content.es";
import { alternatePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const copy = {
  en: { cta: "Get in Touch", switchTo: "Español" },
  es: { cta: "Contáctanos", switchTo: "English" },
};

function Logo({ locale }: { locale: Locale }) {
  return (
    <Link href={locale === "es" ? "/es" : "/"} className="flex items-baseline gap-2">
      <span className="text-ink font-serif text-xl font-semibold">
        Jav<span className="text-terracotta font-normal italic">é</span>
      </span>
      <span className="text-ink-soft text-[11px] tracking-[0.16em] uppercase">Agency</span>
    </Link>
  );
}

export function Navbar({ locale = "en" }: { locale?: Locale } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const drawerRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const links = locale === "es" ? navLinksEs : navLinks;
  const t = copy[locale];
  const switchHref = alternatePath(pathname, locale);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    }
    function onClickOutside(e: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    drawerRef.current?.querySelector("a")?.focus();
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-line bg-cream/90 shadow-[0_8px_30px_rgba(36,28,21,0.06)] backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Logo locale={locale} />

        <div className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink-soft hover:text-terracotta-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={switchHref}
            className="text-ink-soft hover:text-terracotta-dark text-xs font-semibold tracking-[0.08em] uppercase transition-colors"
          >
            {t.switchTo}
          </Link>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener"
            className="bg-ink text-paper hover:bg-terracotta-dark rounded-sm px-5 py-2.5 text-[13px] font-medium transition-colors"
          >
            {t.cta}
          </a>
        </div>

        <button
          ref={burgerRef}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-nav-drawer"
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-5 w-6 items-center justify-center md:hidden"
        >
          {open ? <X className="size-[22px]" /> : <Menu className="size-[22px]" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="border-line bg-cream overflow-hidden border-t md:hidden"
          >
            <div className="flex flex-col px-6 pb-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-line text-ink-soft border-t py-3.5 text-[15px] first:border-t-0"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={switchHref}
                onClick={() => setOpen(false)}
                className="border-line text-ink-soft border-t py-3.5 text-[15px]"
              >
                {t.switchTo}
              </Link>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
                className="bg-ink text-paper mt-3 rounded-sm px-5 py-3 text-center text-[13px] font-medium"
              >
                {t.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
