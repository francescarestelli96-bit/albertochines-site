import Image from "next/image";

export default function HomePage() {
  // Percorsi corretti basati sulla tua cartella public/media
  const logoImmagine = "/media/AC_logotipo_blackBG.jpeg"; 
  const fotoPortrait = "/media/01-portrait.jpeg";

  return (
    <main className="relative min-h-screen bg-black overflow-hidden flex items-center">
      <div className="flex flex-col md:flex-row w-full h-screen">
        
        {/* LATO SINISTRO: Il logotipo caricato */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-8 md:px-24 z-10 bg-black">
          <div className="relative w-full max-w-[300px] md:max-w-[450px] aspect-square">
            <Image 
              src={logoImmagine} 
              alt="Alberto Chines Logotipo"
              fill
              className="object-contain" 
              priority
            />
          </div>
        </div>

        {/* LATO DESTRO: La foto Portrait (01-portrait.jpeg) */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-full border-l border-zinc-900/30">
          <Image
            src={fotoPortrait}
            alt="Alberto Chines Portrait"
            fill
            className="object-cover object-center grayscale opacity-90 transition-opacity duration-1000"
            priority
            sizes="50vw"
          />
          {/* Overlay sfumato per mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden"></div>
        </div>

      </div>

      {/* Footer minimale */}
      <div className="absolute bottom-10 left-8 md:left-24 z-20">
        <p className="text-[9px] text-zinc-600 tracking-[0.6em] uppercase font-light">
          Official Website
        </p>
      </div>
    </main>
  );
}