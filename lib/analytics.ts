// Google Analytics 4 helper. Set NEXT_PUBLIC_GA_ID to enable.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function pageview(url: string) {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
}

type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(action: string, params: EventParams = {}) {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") return;
  window.gtag("event", action, params);
}
