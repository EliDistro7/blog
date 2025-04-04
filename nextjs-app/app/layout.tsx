

// app/layout.tsx
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing, toPlainText } from "next-sanity";
import { Toaster } from "sonner";
import DraftModeToast from "@/app/components/DraftModeToast";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import * as demo from "@/sanity/lib/demo";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import { handleError } from "./client-utils";
import { LanguageProvider } from '@/context/LanguageContext'



// Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
});

// Viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#E0F2FE' },
    { media: '(prefers-color-scheme: dark)', color: '#0C4A6E' },
  ],
  colorScheme: 'light',
}

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
    stega: false,
  });
  const title = settings?.title || "Future Holders | Digital Innovation Studio";
  const description = settings?.description || "We build digital experiences that shape the future. Web design, development, and digital strategy services.";

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : new URL("https://www.futureholders.pro");
  } catch {
    metadataBase = new URL("https://www.futureholders.pro");
  }
  
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: typeof description === 'string' ? description : toPlainText(description),
    openGraph: {
      title: "Future Holders",
      description: "Digital innovation studio creating future-ready experiences",
      url: metadataBase,
      siteName: "Future Holders",
      images: ogImage ? [ogImage] : [],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Future Holders",
      description: "Digital innovation studio creating future-ready experiences",
      images: ogImage ? [ogImage] : [],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    keywords: [
      "web design",
      "digital agency",
      "web development",
      "digital strategy",
      "future holders",
      "innovation studio"
    ],
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Windows-specific tile color */}
        <meta name="msapplication-TileColor" content="#E0F2FE" />
        {/* Apple touch icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      
      <body className="bg-brand-foam text-brand-dark font-sans ">
        <LanguageProvider>
         
        <div className="relative min-h-screen flex flex-col">
          <Toaster />
          {isDraftMode && (
            <>
              <DraftModeToast />
              <VisualEditing />
            </>
          )}
          <SanityLive onError={handleError} />
          
          <div className="sticky top-0 z-50">
            
            <Header />
          </div>
          
          <main className="flex-1 z-10">
            {children}
          </main>
          
          <Footer />
        </div>
        <SpeedInsights />
        </LanguageProvider>
      </body>
    </html>
  );
}