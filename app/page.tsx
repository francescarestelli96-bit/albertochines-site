import Image from "next/image";

export default function HomePage() {
  const logoImmagine = "/media/AC_logotipo_blackBG.jpeg"; 
  const fotoPortrait = "/media/01-portrait.jpeg"; 

  return (
    <main className="relative min-h-screen w-full bg-black flex flex-col md:flex-row overflow-hidden">
      
      {/* NAVBAR */}
      <header className="absolute top-0 left-0 w-full py-6 px-8 md:px-24 z-50 pointer-events-none">
        <p className="text-[9px] text-zinc-500 tracking-[0.5em] uppercase font-light">
          Official Website
        </p>
      </header>

      {/* 1. LOGO SECTION (SINISTRA) */}
      <section className="relative w-full h-[40vh] md:h-screen md:w-1/2 bg-black flex items-center justify-center p-12 md:p-24 md:order-1 z-30">
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

      {/* 2. FOTO SECTION (DESTRA) */}
      <section className="relative w-full h-[60vh] md:h-screen md:w-1/2 md:order-2 bg-black overflow-hidden">
        {/* CONTAINER DELLA FOTO CON TRASLAZIONE MANUALE PER ALZARLA */}
        <div className="absolute inset-0 w-full h-full scale-[1.3] md:scale-[1.15] translate-y-[-5%] md:translate-y-[-8%] origin-center">
          <Image
            src={fotoPortrait}
            alt="Alberto Chines Portrait"
            fill
            className="object-cover grayscale brightness-90 md:brightness-100"
            priority
          />
        </div>
        
        {/* SFUMATURA LATERALE SINISTRA (MOLTO PIÙ AMPIA PER DESKTOP) */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black via-black/70 to-transparent z-20 pointer-events-none" />
        
        {/* SFUMATURA IN BASSO (MOBILE) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-20 pointer-events-none md:hidden" />
      </section>

    </main>
  );
}