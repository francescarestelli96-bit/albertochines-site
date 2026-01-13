import Image from "next/image";

export default function HomePage() {
  const logoImmagine = "/media/AC_logotipo_blackBG.jpeg"; 
  const fotoPortrait = "/media/01-portrait.jpeg"; 

  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col">
      
      {/* HEADER */}
      <header className="absolute top-0 w-full py-6 px-8 md:px-24 z-30">
        <p className="text-[9px] text-zinc-600 tracking-[0.5em] uppercase font-light">
          Official Website
        </p>
      </header>

      {/* CONTENITORE PRINCIPALE SFALSATO PER NON COPRIRE LA FACCIA */}
      <div className="flex flex-col md:flex-row flex-grow w-full h-full">
        
        {/* LOGO SECTION - Sopra in mobile, sinistra in desktop */}
        <div className="w-full h-1/2 md:h-full md:w-1/2 flex items-center justify-center bg-black z-20 order-2 md:order-1">
          <div className="relative w-[80%] max-w-[300px] md:max-w-[550px] aspect-[3/2]">
            <Image 
              src={logoImmagine} 
              alt="Alberto Chines Logotipo"
              fill
              className="object-contain brightness-110" 
              priority
            />
          </div>
        </div>

        {/* FOTO SECTION - Sotto in mobile (così la faccia è libera), destra in desktop */}
        <div className="w-full h-1/2 md:h-full md:w-1/2 relative z-10 order-1 md:order-2">
          <Image
            src={fotoPortrait}
            alt="Alberto Chines Portrait"
            fill
            className="object-cover object-top md:object-center grayscale opacity-80 md:opacity-90"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Sfumatura per non avere stacchi netti tra foto e logo in mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black md:hidden" />
        </div>

      </div>

    </main>
  );
}