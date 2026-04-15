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
  description: siteConfig.longDescription,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.subtitle,
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
    description: siteConfig.subtitle,
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
      <body className="bg-black text-white m-0 min-h-screen flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="relative z-10 flex-1">{children}</main>
          <footer className="relative z-10 border-t border-white/5 px-6 py-5 text-center text-[10px] uppercase tracking-[0.38em] text-zinc-500">
            <a
              href="https://www.francescarestelli.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              powered by francesca restelli
            </a>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
