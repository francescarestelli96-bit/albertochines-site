import type { Metadata } from "next";
import Image from "next/image";
import { getHomeJsonLd, siteConfig } from "../data/site";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.title,
  },
  description: siteConfig.subtitle,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.subtitle,
    url: siteConfig.url,
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
};

export default function HomePage() {
  const nameplateImage = "/media/alberto-chines-wordmark.jpeg";
  const fotoPortrait = "/media/01-portrait.jpeg";
  const structuredData = getHomeJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="relative min-h-screen w-full bg-black flex flex-col md:flex-row overflow-x-hidden">
        <header className="absolute top-0 left-0 w-full py-6 px-8 md:px-24 z-50 pointer-events-none">
          <p className="text-[9px] text-zinc-500 tracking-[0.5em] uppercase font-light">
            Official Website
          </p>
        </header>

        <section className="relative w-full h-[55vh] md:h-screen md:w-1/2 md:order-2 overflow-hidden bg-black">
          <div className="absolute -top-[5%] md:-top-[25%] left-0 w-full h-[120%] md:h-[140%]">
            <Image
              src={fotoPortrait}
              alt="Alberto Chines portrait"
              fill
              className="object-cover grayscale brightness-90 md:brightness-100"
              priority
              style={{ objectPosition: "center top" }}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-20 pointer-events-none md:hidden" />
          <div className="hidden md:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black via-black/20 to-transparent z-20 pointer-events-none" />
        </section>

        <section className="relative w-full h-[45vh] md:h-screen md:w-1/2 bg-black flex items-center justify-center p-4 md:p-24 md:order-1 z-30">
          <div className="relative w-full max-w-[280px] md:max-w-[500px] aspect-[3/2] -mt-16 md:mt-0">
            <Image
              src={nameplateImage}
              alt="Alberto Chines. Italian pianist, educator, Steinway Artist"
              fill
              sizes="(max-width: 768px) 280px, 500px"
              className="object-contain brightness-110 contrast-110"
              priority
            />
          </div>
        </section>
      </main>
    </>
  );
}
