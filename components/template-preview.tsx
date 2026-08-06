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

/** Static fallback preview for templates without a section-by-section screenshot slider yet. */
export function TemplatePreview({
  title,
  previewImage,
  category,
}: {
  title: string;
  previewImage: string;
  category: string;
}) {
  return (
    <div className="border-line bg-cream overflow-hidden rounded-xl border">
      <div className="border-line bg-paper flex flex-wrap items-center justify-between gap-3 border-b px-6 py-4">
        <span className="text-terracotta-dark text-[11px] font-semibold tracking-[0.14em] uppercase">
          Demo Only — Not Yet Deployed
        </span>
        <span className="text-ink-soft text-[11px] font-semibold tracking-[0.1em] uppercase">
          {category}
        </span>
      </div>

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
