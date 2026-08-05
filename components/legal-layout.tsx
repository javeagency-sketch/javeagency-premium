import type { ReactNode } from "react";

export function LegalLayout({
  eyebrow,
  title,
  lastUpdated,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-[760px] px-6 py-16 md:px-10 md:py-24">
        <span className="text-terracotta mb-4 block text-xs font-semibold tracking-[0.24em] uppercase">
          {eyebrow}
        </span>
        <h1 className="mb-4 font-serif text-[32px] leading-[1.05] font-medium tracking-tight md:text-[46px]">
          {title}
        </h1>
        <p className="text-ink-soft mb-12 text-sm">Last updated: {lastUpdated}</p>

        {intro && (
          <p className="text-ink-soft mb-12 max-w-[620px] text-[15.5px] leading-relaxed">{intro}</p>
        )}

        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  );
}

export function LegalSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-line border-t py-9 first:border-t-0 first:pt-0">
      <div className="mb-4 flex items-baseline gap-3">
        <span className="text-terracotta text-xs">{number}</span>
        <h2 className="font-serif text-xl md:text-2xl">{title}</h2>
      </div>
      <div className="text-ink-soft max-w-[620px] space-y-4 text-[15px] leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="text-ink-soft relative pl-4.5 text-[15px] leading-relaxed">
          <span className="text-terracotta-dark absolute left-0">—</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
