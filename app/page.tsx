import Image from "next/image";

export default function HomePage() {
  const logoImmagine = "/media/AC_logotipo_blackBG.jpeg"; 
  const fotoPortrait = "/media/01-portrait.jpeg";

  return (
    <main className="relative min-h-screen bg-black flex flex-col overflow-x-hidden">
      
      {/* HEADER MINIMALE */}
      <header className="w-full py-6 px-8 md:px-24 z-20">
        <p className="text-[9px] text-zinc-600 tracking-[0.6em] uppercase font-light">
          Official Website
        </p>
      </header>

      {/* CONTENITORE PRINCIPALE */}
      <div className="flex flex-col md:flex-row-reverse flex-grow">
        
        {/* LATO FOTO */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-[80vh]">
          <Image
            src={fotoPortrait}
            alt="Alberto Chines Portrait"
            fill
            className="object-cover object-center grayscale opacity-90"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden"></div>
        </div>

        {/* LATO LOGO/TITOLO */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-6 py-12 md:py-0 md:px-24 bg-black">
          {/* Mobile: max-w-[350px] (bello grande per leggere Steinway)
              Desktop: md:max-w-[650px] (più del doppio di prima per massima leggibilità)
          */}
          <div className="relative w-full max-w-[350px] md:max-w-[650px] aspect-[3/1]">
            <Image 
              src={logoImmagine} 
              alt="Alberto Chines Logotipo"
              fill
              className="object-contain brightness-125 transition-transform duration-700 hover:scale-105" 
              priority
            />
          </div>
        </div>

      </div>

      {/* FOOTER SPAZIATORE PER MOBILE */}
      <div className="h-10 md:hidden bg-black"></div>
    </main>
  );
}