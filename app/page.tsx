'use client';
import Image from "next/image";

export default function HomePage() {
  const logoImmagine = "/media/AC_logotipo_blackBG.jpeg"; 
  const fotoPortrait = "/media/01-portrait.jpeg"; 

  return (
    <main className="relative min-h-screen w-full bg-black flex flex-col md:flex-row overflow-hidden">
      
      {/* 1. SEZIONE LOGO (SINISTRA SU DESKTOP, SOTTO SU MOBILE) */}
      <section className="relative w-full h-[50vh] md:h-screen md:w-1/2 bg-black flex items-center justify-center p-8 md:p-12 z-20 order-2 md:order-1">
        <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[500px] aspect-[3/2]">
          <Image 
            src={logoImmagine} 
            alt="Alberto Chines Logotipo"
            fill
            className="object-contain" 
            priority
          />
        </div>
      </section>

      {/* 2. SEZIONE FOTO (DESTRA SU DESKTOP, SOPRA SU MOBILE) */}
      <section className="relative w-full h-[50vh] md:h-screen md:w-1/2 bg-black z-10 order-1 md:order-2">
        <Image
          src={fotoPortrait}
          alt="Alberto Chines Portrait"
          fill
          className="object-cover grayscale brightness-[0.85] md:brightness-100"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectPosition: 'center 15%' }} // Mantiene la testa di Alberto sempre visibile
        />
      </section>

      {/* HEADER NAVBAR (Trasparente e sopra tutto) */}
      <header className="absolute top-0 left-0 w-full py-6 md:py-10 px-6 md:px-12 z-50">
        <div className="flex justify-between items-center opacity-60 hover:opacity-100 transition-opacity">
          <p className="text-[8px] md:text-[10px] text-white tracking-[0.4em] uppercase font-light">
            Official Website
          </p>
        </div>
      </header>

    </main>
  );
}