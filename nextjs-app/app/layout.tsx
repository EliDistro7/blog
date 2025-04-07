// app/layout.tsx
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "sonner";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
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
  const title = "Future Holders | Digital Innovation Studio";
  const description = "We build digital experiences that shape the future. Web design, development, and digital strategy services.";

  const metadataBase = new URL("https://www.futureholders.pro");
  
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: description,
    openGraph: {
      title: "Future Holders",
      description: "Digital innovation studio creating future-ready experiences",
      url: metadataBase,
      siteName: "Future Holders",
      images: [],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Future Holders",
      description: "Digital innovation studio creating future-ready experiences",
      images: [],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Windows-specific tile color */}
        <meta name="msapplication-TileColor" content="#E0F2FE" />
        {/* Apple touch icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      
      <body className="bg-brand-foam text-brand-dark font-sans">
        <LanguageProvider>
          <div className="relative min-h-screen flex flex-col">
            <Toaster />
            
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