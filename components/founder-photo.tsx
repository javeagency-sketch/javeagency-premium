"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Renders a real founder photo if one exists at the given path; falls back
 * to a monogram placeholder otherwise. Drop a real photo in
 * public/images/team/ at the referenced path and it takes over automatically
 * — no code changes needed.
 *
 * A fast local 404 can fire the native `error` event before React finishes
 * hydrating and attaches the `onError` listener, so the failure is checked
 * again on mount via `naturalWidth`, not just via the event handler.
 */
export function FounderPhoto({
  src,
  alt,
  initial,
  gradient,
}: {
  src: string;
  alt: string;
  initial: string;
  gradient: string;
}) {
  const [errored, setErrored] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth === 0) {
      setErrored(true);
    }
  }, []);

  const handleRef = useCallback((node: HTMLImageElement | null) => {
    imgRef.current = node;
    if (node?.complete && node.naturalWidth === 0) {
      setErrored(true);
    }
  }, []);

  if (errored) {
    return (
      <div
        className={`text-paper/90 flex h-full w-full items-center justify-center bg-gradient-to-br font-serif text-6xl ${gradient}`}
        aria-hidden
      >
        {initial}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- runtime existence check needs a plain <img> onError fallback
    <img
      ref={handleRef}
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
      onError={() => setErrored(true)}
    />
  );
}
