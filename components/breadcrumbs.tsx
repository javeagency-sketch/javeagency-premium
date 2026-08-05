import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ crumbs, className }: { crumbs: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="text-ink-soft flex flex-wrap items-center gap-1.5 text-[13px]">
        <li>
          <Link href="/" className="hover:text-terracotta-dark transition-colors">
            Home
          </Link>
        </li>
        {crumbs.map((crumb, i) => (
          <li key={crumb.label} className="flex items-center gap-1.5">
            <ChevronRight size={13} className="text-ink-soft/50" />
            {crumb.href && i < crumbs.length - 1 ? (
              <Link href={crumb.href} className="hover:text-terracotta-dark transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-ink" aria-current="page">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
