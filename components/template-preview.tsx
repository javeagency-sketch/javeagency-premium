import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Full-width strip marking a page as a non-functional template demo. */
export function DemoOnlyBadge() {
  return (
    <div className="bg-ink text-paper flex items-center justify-center gap-2 py-2.5 text-center text-[11px] font-semibold tracking-[0.14em] uppercase">
      <span className="bg-terracotta h-1.5 w-1.5 rounded-full" aria-hidden />
      Template Preview — Demo Only
    </div>
  );
}

/**
 * Responsive preview card for a single template. Renders a static image by
 * default; pass isLive once a real Vercel deployment exists at demoUrl to
 * swap in a non-interactive iframe (pointer-events-none keeps every link,
 * form, and button inside the embedded site inert).
 */
export function TemplatePreview({
  title,
  description,
  previewImage,
  demoUrl,
  category,
  isLive = false,
}: {
  title: string;
  description: string;
  previewImage: string;
  demoUrl?: string;
  category: string;
  isLive?: boolean;
}) {
  return (
    <div className="border-line bg-cream overflow-hidden rounded-xl border">
      <div className="border-line bg-paper flex flex-wrap items-center justify-between gap-3 border-b px-6 py-4">
        <span className="text-terracotta-dark text-[11px] font-semibold tracking-[0.14em] uppercase">
          Demo Only — Not Interactive
        </span>
        <span className="text-ink-soft text-[11px] font-semibold tracking-[0.1em] uppercase">
          {category}
        </span>
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {isLive && demoUrl ? (
          <iframe
            src={demoUrl}
            title={`${title} live preview`}
            tabIndex={-1}
            aria-hidden
            className="pointer-events-none h-full w-full border-0"
          />
        ) : (
          <Image
            src={previewImage}
            alt={`${title} template preview`}
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            priority
            className="pointer-events-none object-cover"
          />
        )}
      </div>

      <div className="p-8">
        <h2 className="mb-3 font-serif text-2xl tracking-tight">{title}</h2>
        <p className="text-ink-soft mb-6 text-base leading-relaxed">{description}</p>
        {demoUrl && !isLive && (
          <p className="text-ink-soft/60 mb-6 text-xs">
            Live preview coming soon —{" "}
            <span className="font-mono">{demoUrl.replace("https://", "")}</span>
          </p>
        )}
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
