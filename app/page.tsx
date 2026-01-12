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
        <div className="w-full md:w-1/2 relative h-[55vh] md:h-[80vh]">
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
          {/* Su Mobile: max-w-[320px] (più grande)
              Su Desktop: md:max-w-[300px] (più piccolo ed elegante)
          */}
          <div className="relative w-full max-w-[320px] md:max-w-[300px] aspect-[3/1]">
            <Image 
              src={logoImmagine} 
              alt="Alberto Chines Logotipo"
              fill
              className="object-contain brightness-125" 
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