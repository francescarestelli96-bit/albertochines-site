import Image from "next/image";

export default function HomePage() {
  const logoImmagine = "/media/AC_logotipo_blackBG.jpeg"; 
  const fotoPortrait = "/media/01-portrait.jpeg";

  return (
    <main className="relative min-h-screen bg-black flex flex-col overflow-hidden">
      
      {/* HEADER - Scritta piccolina in alto */}
      <header className="w-full py-4 px-6 md:px-12 z-20">
        <p className="text-[8px] md:text-[10px] text-zinc-600 tracking-[0.5em] uppercase font-light">
          Official Website
        </p>
      </header>

      {/* CONTENITORE PRINCIPALE */}
      <div className="flex flex-col md:flex-row-reverse flex-grow items-center">
        
        {/* LATO FOTO: Sopra su mobile, destra su web */}
        <div className="w-full md:w-1/2 relative h-[45vh] md:h-[85vh]">
          <Image
            src={fotoPortrait}
            alt="Alberto Chines Portrait"
            fill
            className="object-cover object-top md:object-center grayscale opacity-80"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Sfuma la foto verso il nero del logo su mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden"></div>
        </div>

        {/* LATO LOGO: Sotto su mobile, sinistra su web */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-black overflow-hidden">
          <div className="relative w-full h-[30vh] md:h-[60vh] flex items-center justify-center">
            <div className="relative w-[140%] h-full scale-[1.3] md:scale-[1.8]">
              <Image 
                src={logoImmagine} 
                alt="Alberto Chines Logotipo"
                fill
                className="object-contain brightness-150 contrast-125 transition-transform duration-1000 hover:scale-[1.05]" 
                priority
              />
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER - Spaziatore finale per mobile */}
      <div className="h-8 md:hidden bg-black"></div>
    </main>
  );
}