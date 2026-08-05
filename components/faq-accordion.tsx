"use client";

import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { EASE } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, i) => (
        <FaqAccordionItem
          key={item.q}
          item={item}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  );
}

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { q: string; a: string };
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
            <p className="text-ink-soft max-w-[620px] pb-7 text-lg leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
