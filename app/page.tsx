import Image from "next/image";

export default function HomePage() {
  const logoImmagine = "/media/AC_logotipo_blackBG.jpeg"; 
  const fotoPortrait = "/media/01-portrait.jpeg";

  return (
    <main className="relative min-h-screen bg-black flex flex-col overflow-hidden">
      
      {/* HEADER */}
      <header className="w-full py-4 px-8 md:px-24 z-20">
        <p className="text-[9px] text-zinc-600 tracking-[0.5em] uppercase font-light">
          Official Website
        </p>
      </header>

      {/* CONTENITORE */}
      <div className="flex flex-col md:flex-row-reverse flex-grow items-center justify-center">
        
        {/* LATO FOTO */}
        <div className="w-full md:w-1/2 relative h-[45vh] md:h-[80vh]">
          <Image
            src={fotoPortrait}
            alt="Alberto Chines Portrait"
            fill
            className="object-cover object-center grayscale opacity-80"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden"></div>
        </div>

        {/* LATO LOGO - MASSIMIZZATO */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-black p-0 overflow-hidden">
          <div className="relative w-full flex items-center justify-center">
            {/* MOBILE: scale-[1.8] per farlo grande come il tuo segno verde
                DESKTOP: md:scale-[2.2] per occupare tutto lo spazio a sinistra
            */}
            <div className="relative w-[120%] aspect-[3/1] scale-[1.8] md:scale-[2.2] origin-center">
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

      </div>

      <div className="h-10 md:hidden bg-black"></div>
    </main>
  );
}