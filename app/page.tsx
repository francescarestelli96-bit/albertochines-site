import Image from "next/image";

export default function HomePage() {
  const logoImmagine = "/media/AC_logotipo_blackBG.jpeg"; 
  const fotoPortrait = "/01-portrait.jpeg"; // Spostata fuori da media

  return (
    <main className="relative min-h-screen bg-black flex flex-col overflow-x-hidden">
      
      {/* 1. SEZIONE HERO (LOGO + FOTO) */}
      <section className="relative min-h-screen flex flex-col">
        <header className="w-full py-6 px-8 md:px-24 z-20">
          <p className="text-[9px] text-zinc-600 tracking-[0.5em] uppercase font-light">
            Official Website
          </p>
        </header>

        <div className="flex flex-col md:flex-row-reverse flex-grow items-center">
          {/* LATO FOTO */}
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

          {/* LATO LOGO */}
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

      {/* 2. SEZIONE VIDEO PLACEHOLDER */}
      <section className="w-full h-screen bg-zinc-950 flex flex-col items-center justify-center px-4 border-t border-zinc-900">
        <div className="w-full max-w-5xl aspect-video bg-black border border-zinc-800 flex items-center justify-center relative group">
          <div className="text-zinc-700 tracking-[0.4em] uppercase text-xs">Video Placeholder 01</div>
          {/* Icona play stilizzata */}
          <div className="absolute w-12 h-12 border border-zinc-700 rounded-full flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-zinc-500 border-b-[6px] border-b-transparent ml-1"></div>
          </div>
        </div>
        <p className="mt-8 text-zinc-500 text-[10px] tracking-[0.3em] uppercase">Performance / Recording</p>
      </section>

      {/* 3. SEZIONE FOTO/GALLERY PLACEHOLDER */}
      <section className="w-full h-screen bg-black flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full p-4 md:p-12">
          <div className="bg-zinc-900/30 border border-zinc-800 flex items-center justify-center text-zinc-700 text-[10px] tracking-widest uppercase">Future Image 02</div>
          <div className="bg-zinc-900/30 border border-zinc-800 flex items-center justify-center text-zinc-700 text-[10px] tracking-widest uppercase">Future Image 03</div>
        </div>
      </section>

      {/* 4. SEZIONE VIDEO PLACEHOLDER 02 */}
      <section className="w-full h-screen bg-zinc-950 flex flex-col items-center justify-center px-4 border-t border-zinc-900">
        <div className="w-full max-w-4xl aspect-video bg-black border border-zinc-800 flex items-center justify-center">
          <div className="text-zinc-700 tracking-[0.4em] uppercase text-xs">Video Placeholder 02</div>
        </div>
      </section>

      {/* FOOTER FINALE */}
      <footer className="py-20 bg-black flex flex-col items-center">
        <div className="w-20 h-[1px] bg-zinc-800 mb-8"></div>
        <p className="text-[9px] text-zinc-700 tracking-[0.5em] uppercase">© 2026 Alberto Chines</p>
      </footer>
    </main>
  );
}