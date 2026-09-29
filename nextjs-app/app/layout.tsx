// app/layout.tsx
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans, JetBrains_Mono } from "next/font/google";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { LanguageProvider } from "@/context/LanguageContext";

// ── Fonts (match tailwind.config: display / sans / mono) ─────────────────────
const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

// ── Viewport: dark brand surface so mobile browser chrome blends in ──────────
export const viewport: Viewport = {
  themeColor: "#1A1208",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// ── Metadata ─────────────────────────────────────────────────────────────────
const SITE_URL = "https://www.futureholder.pro";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Future Holders | Marketing & Digital Agency in Tanzania";
  const description =
    "Branding, social media, web development, door-to-door marketing and tender support for Tanzanian businesses. 50+ websites delivered, 40+ happy clients.";
  const metadataBase = new URL(SITE_URL);

  const ogImage = {
    url: "/og-image.png", // create a 1200x630 image at public/og-image.png
    width: 1200,
    height: 630,
    alt: "Future Holders - Tanzania's digital marketing agency",
  };

  return {
    metadataBase,
    title: {
      template: "%s | Future Holders",
      default: title,
    },
    description,
    applicationName: "Future Holders",
    alternates: { canonical: "/" },
    openGraph: {
      title,
      description,
      url: metadataBase,
      siteName: "Future Holders",
      images: [ogImage],
      locale: "en_US",
      alternateLocale: ["sw_TZ"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    keywords: [
      "digital marketing Tanzania",
      "web development Dar es Salaam",
      "branding Tanzania",
      "social media management",
      "door-to-door marketing",
      "tender applications",
      "future holders",
    ],
    robots: { index: true, follow: true },
  };
}

// ── Structured data (Organization) ───────────────────────────────────────────
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Future Holders",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: "info@futureholder.pro",
  telephone: "+255745787370",
  areaServed: "TZ",
  sameAs: [
    "https://www.facebook.com/f.hmarketers",
    "https://www.instagram.com/fh_marketers/",
    "https://x.com/fh_marketers",
    "https://www.linkedin.com/company/future-holders-company-limited/",
  ],
};

// ── Root layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="msapplication-TileColor" content="#1A1208" />
      </head>

      <body className="flex min-h-screen flex-col bg-surface text-cream font-sans antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DXJZR4NRK1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DXJZR4NRK1');
          `}
        </Script>

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        <LanguageProvider>
          {/* Skip link for keyboard users */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-amber focus:px-4 focus:py-2 focus:font-display focus:font-bold focus:text-surface-deep"
          >
            Skip to content
          </a>

          <Header />
          <main id="main-content" className="relative z-10 flex-1">
            {children}
          </main>
          <Footer />
          <SpeedInsights />
        </LanguageProvider>
      </body>
    </html>
  );
}