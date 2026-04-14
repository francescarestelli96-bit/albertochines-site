import type { Metadata, Viewport } from "next";
import "./global.css";
import { LanguageProvider } from "../components/LanguageProvider";
import Header from "../components/Header";
import { siteConfig } from "../data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/icon.png"],
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: siteConfig.locale,
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "music",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-black text-white m-0 p-0 min-h-screen flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="relative z-10 flex-grow">
            {children}
          </main>
          <footer className="relative z-20 py-10 w-full bg-black border-t border-zinc-900/30">
            <div className="container mx-auto px-8 text-center">
              <p className="text-[9px] text-zinc-600 tracking-[0.3em] uppercase font-light">
                © {new Date().getFullYear()} ALBERTO CHINES — POWERED BY FRANCESCA RESTELLI
              </p>
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}