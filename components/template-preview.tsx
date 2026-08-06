import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/** Full-width strip marking a page as a non-functional template demo. */
export function DemoOnlyBadge() {
  return (
    <div className="bg-ink text-paper flex items-center justify-center gap-2 py-2.5 text-center text-[11px] font-semibold tracking-[0.14em] uppercase">
      <span className="bg-terracotta h-1.5 w-1.5 rounded-full" aria-hidden />
      Demo Preview — Interactions Disabled
    </div>
  );
}

/**
 * Embeds the real, live template site so visitors can scroll, navigate, and
 * see the actual animations — the deployed site disables its own forms and
 * booking actions via NEXT_PUBLIC_DEMO_MODE, so nothing here blocks
 * interaction with the iframe itself. Falls back to a static preview image
 * when no live deployment exists yet.
 */
export function TemplatePreview({
  title,
  previewImage,
  demoUrl,
  category,
  isLive = false,
}: {
  title: string;
  previewImage: string;
  demoUrl?: string;
  category: string;
  isLive?: boolean;
}) {
  return (
    <div className="border-line bg-cream overflow-hidden rounded-xl border">
      <div className="border-line bg-paper flex flex-wrap items-center justify-between gap-3 border-b px-6 py-4">
        <span className="text-terracotta-dark text-[11px] font-semibold tracking-[0.14em] uppercase">
          {isLive ? "Live Template — Browse Freely, Interactions Disabled" : "Demo Only — Not Yet Deployed"}
        </span>
        <span className="text-ink-soft text-[11px] font-semibold tracking-[0.1em] uppercase">
          {category}
        </span>
      </div>

      {isLive && demoUrl ? (
        <iframe
          src={demoUrl}
          title={`${title} — live template preview`}
          className="h-[85vh] min-h-[560px] w-full border-0"
        />
      ) : (
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={previewImage}
            alt={`${title} template preview`}
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            priority
            className="pointer-events-none object-cover"
          />
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 p-6">
        <p className="text-ink-soft text-xs">
          Demo only — contact JAVE AGENCY to request this template.
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
