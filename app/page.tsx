import Image from "next/image";

export default function HomePage() {
  const logoImmagine = "/media/AC_logotipo_blackBG.jpeg"; 
  const fotoPortrait = "/media/01-portrait.jpeg"; 

  return (
    <main className="relative min-h-screen bg-black flex flex-col overflow-x-hidden">
      
      {/* 1. SEZIONE HERO (LOGO + FOTO ALTO) */}
      <section className="relative min-h-screen flex flex-col border-b border-zinc-900">
        <header className="w-full py-6 px-8 md:px-24 z-20">
          <p className="text-[9px] text-zinc-600 tracking-[0.5em] uppercase font-light">
            Official Website
          </p>
        </header>

        <div className="flex flex-col md:row flex-grow items-center">
          <div className="w-full md:w-1/2 relative h-[50vh] md:h-[80vh]">
            <Image
              src={fotoPortrait}
              alt="Alberto Chines Portrait"
              fill
              className="object-cover object-center grayscale opacity-80 transition-transform duration-[2000ms] hover:scale-105"
              priority
            />
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center bg-black p-10">
            <div className="relative w-full max-w-[340px] md:max-w-[600px] aspect-[3/2]">
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

      {/* 2. SEZIONE MEDIA DINAMICA */}
      <section className="w-full py-32 px-6 md:px-24 bg-black space-y-32">
        
        {/* RIGA 1: VIDEO GRANDE ASIMMETRICO */}
        <div className="flex flex-col md:flex-row gap-12 items-end">
          <div className="w-full md:w-2/3 group cursor-pointer overflow-hidden border border-zinc-800">
            <div className="relative aspect-video bg-zinc-900 transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-zinc-600 text-[10px] tracking-[0.5em] uppercase">Video Placeholder 01</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 pb-4">
            <p className="text-zinc-500 text-[10px] tracking-widest uppercase border-l border-zinc-700 pl-4">
              Live Performance<br/>
              <span className="text-zinc-700">Teatro alla Scala, 2025</span>
            </p>
          </div>
        </div>

        {/* RIGA 2: LA FOTO PORTRAIT INTERA (Più in basso) */}
        <div className="flex justify-center py-20">
          <div className="relative w-full max-w-4xl aspect-[4/5] md:aspect-[16/9] overflow-hidden">
            <Image
              src={fotoPortrait}
              alt="Alberto Chines Full"
              fill
              className="object-contain grayscale opacity-90 transition-all duration-1000 hover:scale-110 hover:opacity-100"
            />
          </div>
        </div>

        {/* RIGA 3: GRIGLIA SFALSATA VIDEO + FOTO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Sottosezione Video 02 */}
          <div className="space-y-6">
             <div className="relative aspect-video bg-zinc-900 border border-zinc-800 flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-zinc-800 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <span className="text-zinc-600 text-[9px] tracking-widest uppercase">Video Placeholder 02</span>
             </div>
             <p className="text-zinc-700 text-[8px] tracking-[0.4em] uppercase">Interviste / Documentario</p>
          </div>

          {/* Sottosezione Video 03 (Sfalsata più in basso) */}
          <div className="space-y-6 md:mt-24">
             <div className="relative aspect-video bg-zinc-900 border border-zinc-800 flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-zinc-800 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <span className="text-zinc-600 text-[9px] tracking-widest uppercase">Video Placeholder 03</span>
             </div>
             <p className="text-zinc-700 text-[8px] tracking-[0.4em] uppercase">Recording Session</p>
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="py-24 bg-black flex flex-col items-center border-t border-zinc-900">
        <p className="text-[9px] text-zinc-700 tracking-[0.6em] uppercase font-light">
          © 2026 Alberto Chines — Steinway Artist
        </p>
      </footer>

    </main>
  );
}