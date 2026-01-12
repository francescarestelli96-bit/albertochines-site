import Image from "next/image";

export default function HomePage() {
  const logoImmagine = "/media/AC_logotipo_blackBG.jpeg"; 
  const fotoPortrait = "/01-portrait.jpeg"; // Cercata in public/

  return (
    <main className="relative min-h-screen bg-black flex flex-col overflow-x-hidden">
      
      {/* 1. SEZIONE HERO (LOGO + FOTO) */}
      <section className="relative min-h-screen flex flex-col border-b border-zinc-900">
        <header className="w-full py-6 px-8 md:px-24 z-20">
          <p className="text-[9px] text-zinc-600 tracking-[0.5em] uppercase font-light">
            Official Website
          </p>
        </header>

        <div className="flex flex-col md:flex-row-reverse flex-grow items-center">
          <div className="w-full md:w-1/2 relative h-[50vh] md:h-[80vh]">
            <Image
              src={fotoPortrait}
              alt="Alberto Chines Portrait"
              fill
              className="object-cover object-center grayscale opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden"></div>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center bg-black">
            <div className="relative w-[360px] h-[300px] md:w-[700px] md:h-[500px]">
              <Image 
                src={logoImmagine} 
                alt="Alberto Chines Logotipo"
                fill
                className="object-contain brightness-125 contrast-110" 
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEZIONE MEDIA (VIDEO & FOTO ALTERNATI) */}
      <section className="w-full bg-black py-20 px-6 md:px-24">
        <h2 className="text-zinc-500 text-[10px] tracking-[0.8em] uppercase mb-16 text-center">Media / Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* PRIMO VIDEO (Grande a sinistra) */}
          <div className="space-y-4">
            <div className="relative aspect-video bg-zinc-900 border border-zinc-800 flex items-center justify-center group cursor-pointer">
              <span className="text-zinc-700 text-[10px] tracking-widest uppercase">Video Placeholder 01</span>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
            </div>
            <p className="text-zinc-600 text-[9px] tracking-widest uppercase">01. Schumann - Kinderszenen</p>
          </div>

          {/* FOTO ALTERNATA (Destra) */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden">
              <span className="text-zinc-700 text-[10px] tracking-widest uppercase">Future Photo</span>
              {/* Qui andrà una foto futura di Alberto */}
            </div>
          </div>

          {/* SECONDO VIDEO (Destra, invertito) */}
          <div className="md:col-start-2 space-y-4">
            <div className="relative aspect-video bg-zinc-900 border border-zinc-800 flex items-center justify-center group cursor-pointer">
              <span className="text-zinc-700 text-[10px] tracking-widest uppercase">Video Placeholder 02</span>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
            </div>
            <p className="text-zinc-600 text-[9px] tracking-widest uppercase">02. Debussy - Images</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 bg-black border-t border-zinc-900 flex flex-col items-center">
        <p className="text-[9px] text-zinc-700 tracking-[0.5em] uppercase">© 2026 Alberto Chines</p>
      </footer>
    </main>
  );
}