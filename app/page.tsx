import Image from "next/image";

export default function HomePage() {
  const logoImmagine = "/media/AC_logotipo_blackBG.jpeg"; 
  const fotoPortrait = "/media/01-portrait.jpeg"; 

  return (
    <main className="relative min-h-screen w-full bg-black flex flex-col md:flex-row overflow-hidden">
      
      {/* HEADER NAVBAR */}
      <header className="absolute top-0 left-0 w-full py-6 px-8 md:px-24 z-50 pointer-events-none">
        <p className="text-[9px] text-zinc-500 tracking-[0.5em] uppercase font-light">
          Official Website
        </p>
      </header>

      {/* 1. SEZIONE LOGO (SOTTO IN MOBILE / SINISTRA IN DESKTOP) */}
      <section className="relative w-full h-[35vh] md:h-screen md:w-1/2 bg-black flex items-center justify-center p-12 md:p-24 md:order-1 z-30">
        <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[500px] aspect-[3/2]">
          <Image 
            src={logoImmagine} 
            alt="Alberto Chines Logotipo"
            fill
            className="object-contain brightness-110 contrast-110" 
            priority
          />
        </div>
      </section>

      {/* 2. SEZIONE FOTO (SOPRA IN MOBILE / DESTRA IN DESKTOP) */}
      <section className="relative w-full h-[65vh] md:h-screen md:w-1/2 md:order-2 overflow-hidden bg-black">
        <Image
          src={fotoPortrait}
          alt="Alberto Chines Portrait"
          fill
          className="object-cover grayscale brightness-90 md:brightness-100"
          priority
          style={{ objectPosition: 'center 0%' }} // POSIZIONE MASSIMA (TOP)
        />
        
        {/* SFUMATURA IN BASSO (PER MOBILE) - Più alta per coprire il taglio */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent z-20 pointer-events-none md:hidden" />
        
        {/* SFUMATURA LATERALE (PER DESKTOP) - Più larga per unire al logo */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black via-black/40 to-transparent z-20 pointer-events-none" />
      </section>

    </main>
  );
}