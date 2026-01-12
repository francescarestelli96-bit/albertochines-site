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

        {/* LATO LOGO/TITOLO */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-4 md:px-16 bg-black">
          {/* Mobile: w-[95%] (quasi tutto lo schermo)
              Desktop: md:max-w-[850px] (gigante, si leggerà anche l'ultima riga dello Steinway)
          */}
          <div className="relative w-[95%] md:w-full md:max-w-[850px] aspect-[3/1]">
            <Image 
              src={logoImmagine} 
              alt="Alberto Chines Logotipo"
              fill
              className="object-contain brightness-125 transition-all duration-1000 hover:scale-105" 
              priority
            />
          </div>
        </div>

      </div>

      {/* FOOTER SPAZIATORE PER MOBILE */}
      <div className="h-12 md:hidden bg-black"></div>
    </main>
  );
}