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
        
        {/* NAVBAR / BRANDING */}
        <header className="absolute top-0 left-0 w-full py-6 px-8 md:px-24 z-50 pointer-events-none">
          <p className="text-[9px] text-zinc-500 tracking-[0.5em] uppercase font-light">
            Official Website
          </p>
        </header>

        {/* SEZIONE FOTO PORTRAIT - ORA A TUTTO SCHERMO */}
        <section className="relative w-full h-screen overflow-hidden bg-black">
          <div className="absolute -top-[5%] md:-top-[25%] left-0 w-full h-[120%] md:h-[140%]">
            <Image
              src={fotoPortrait}
              alt="Alberto Chines portrait"
              fill
              className="object-cover grayscale brightness-90 md:brightness-100"
              priority
              style={{ objectPosition: 'center top' }}
            />
          </div>
          
          {/* SFUMATURE */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-20 pointer-events-none md:hidden" />
          <div className="hidden md:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black via-black/20 to-transparent z-20 pointer-events-none" />
        </section>

      </main>
    </>
  );
}