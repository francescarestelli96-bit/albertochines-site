import Image from "next/image";

export default function HomePage() {
  const logoImmagine = "/media/AC_logotipo_blackBG.jpeg"; 
  const fotoPortrait = "/media/01-portrait.jpeg"; 

  return (
    <main className="relative min-h-screen bg-black flex flex-col overflow-x-hidden">
      
      {/* --- SEZIONE 1: HERO (Iniziale) --- */}
      <section className="relative min-h-screen flex flex-col border-b border-zinc-900/50">
        <header className="w-full py-6 px-8 md:px-24 z-20">
          <p className="text-[9px] text-zinc-600 tracking-[0.5em] uppercase font-light">
            Official Website
          </p>
        </header>

        <div className="flex flex-col md:flex-row-reverse flex-grow items-center">
          {/* FOTO IN ALTO (Homepage) */}
          <div className="w-full md:w-1/2 relative h-[50vh] md:h-[80vh]">
            <Image
              src={fotoPortrait}
              alt="Alberto Chines Portrait"
              fill
              className="object-cover object-center grayscale opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden"></div>
          </div>

          {/* LOGO */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-black">
            <div className="relative w-[340px] h-[280px] md:w-[600px] md:h-[450px]">
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

      {/* --- SEZIONE 2: MEDIA DINAMICA --- */}
      <section className="w-full py-24 px-6 md:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-zinc-500 text-[10px] tracking-[0.8em] uppercase mb-20 text-center">Media</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
            
            {/* VIDEO PLACEHOLDER 1 - Occupa 8 colonne su 12 */}
            <div className="md:col-span-8 space-y-4">
              <div className="relative aspect-video bg-zinc-900/30 border border-zinc-800 flex items-center justify-center group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520529611108-61f64c44c017?q=80&w=2070')] bg-cover bg-center opacity-20 grayscale group-hover:opacity-40 transition-opacity duration-700"></div>
                <span className="relative z-10 text-zinc-500 text-[9px] tracking-[0.4em] uppercase">Video Placeholder 01 / Performance</span>
                <div className="absolute z-10 w-12 h-12 border border-zinc-700 rounded-full flex items-center justify-center opacity-50 group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-zinc-400 border-b-[6px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>

            {/* TESTO O DETTAGLIO - Occupa 4 colonne */}
            <div className="md:col-span-4 self-center">
              <h3 className="text-zinc-400 text-xs tracking-widest uppercase mb-2">Repertorio</h3>
              <p className="text-zinc-600 text-[10px] leading-relaxed tracking-wide font-light">
                Esplorazione sonora attraverso i secoli. Dalle strutture barocche alle sperimentazioni contemporanee.
              </p>
            </div>

            {/* FOTO 01-PORTRAIT - Ripetuta più in basso (4 colonne) */}
            <div className="md:col-span-4 space-y-4 md:mt-12">
              <div className="relative aspect-[3/4] border border-zinc-900 grayscale">
                <Image
                  src={fotoPortrait}
                  alt="Alberto Chines Detail"
                  fill
                  className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-1000"
                />
              </div>
              <p className="text-zinc-700 text-[8px] tracking-[0.3em] uppercase">Portrait Detail</p>
            </div>

            {/* VIDEO PLACEHOLDER 2 - Occupa 8 colonne */}
            <div className="md:col-span-8 space-y-4 md:mt-32">
              <div className="relative aspect-video bg-zinc-900/30 border border-zinc-800 flex items-center justify-center group cursor-pointer">
                <span className="text-zinc-500 text-[9px] tracking-[0.4em] uppercase">Video Placeholder 02 / Interview</span>
                <div className="absolute inset-0 border border-transparent group-hover:border-zinc-800 transition-all duration-500"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-black border-t border-zinc-900/30 flex flex-col items-center">
        <div className="w-12 h-[1px] bg-zinc-800 mb-8"></div>
        <p className="text-[9px] text-zinc-700 tracking-[0.5em] uppercase">© 2026 Alberto Chines</p>
      </footer>
    </main>
  );
}