import type { Metadata } from "next";
import Image from "next/image";
import { getHomeJsonLd, siteConfig } from "../data/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
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
          <div className="w-full max-w-[420px] -mt-12 md:mt-0 text-center md:text-left">
            <p className="text-[10px] md:text-xs text-zinc-500 tracking-[0.55em] uppercase mb-6">
              {siteConfig.profession}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.22em] uppercase leading-[0.95]">
              Alberto
              <br />
              Chines
            </h1>
            <p className="mt-6 text-[10px] md:text-xs text-zinc-400 tracking-[0.45em] uppercase">
              Official Website
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
