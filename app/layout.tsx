import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import { SiteChrome } from "@/components/site-chrome";
import { site, siteUrl } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const seoTitle = "Javé Agency | Web Design, SEO & Digital Marketing in Sullivan County, NY";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
    languages: { en: `${siteUrl}/`, es: `${siteUrl}/es` },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: seoTitle,
    description: site.description,
    url: siteUrl,
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: site.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f0e3",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  email: site.email,
  areaServed: [
    "Sullivan County, NY",
    "Monticello, NY",
    "Liberty, NY",
    "Wurtsboro, NY",
    "Bloomingburg, NY",
    "Rock Hill, NY",
    "Pine Bush, NY",
    "United States",
    "Chile",
    "Colombia",
  ],
  sameAs: [site.instagramUrl],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-cream text-ink min-h-screen overflow-x-hidden font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <MotionProvider>
          <SiteChrome>{children}</SiteChrome>
        </MotionProvider>
      </body>
    </html>
  );
}
