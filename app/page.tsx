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
      <div className="flex flex-col md:flex-row-reverse flex-grow items-center">
        
        {/* LATO FOTO */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-[85vh]">
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

        {/* LATO LOGO - VIA DI MEZZO */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-8 md:py-0 md:px-16 bg-black">
          {/* Mobile: max-w-[340px] e mt-[-20px] per avvicinarlo ma non coprire 
              Desktop: md:max-w-[550px] (Via di mezzo tra i 300 di prima e gli 850 giganti)
          */}
          <div className="relative w-full max-w-[340px] md:max-w-[550px] aspect-[3/1] mt-[-10px] md:mt-0">
            <Image 
              src={logoImmagine} 
              alt="Alberto Chines Logotipo"
              fill
              className="object-contain brightness-125 transition-transform duration-700 hover:scale-[1.03]" 
              priority
            />
          </div>
        </div>

      </div>

      <div className="h-8 md:hidden bg-black"></div>
    </main>
  );
}