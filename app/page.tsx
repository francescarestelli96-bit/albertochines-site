import Image from "next/image";

export default function HomePage() {
  // Percorsi delle immagini basati sui tuoi file
  const logoImmagine = "/media/AC_logotipo_blackBG.jpeg"; 
  const fotoPortrait = "/media/01-portrait.jpeg"; 

  return (
    <main className="relative h-screen w-full bg-black overflow-hidden">
      
      {/* HEADER / NAVIGATION (Opzionale se vuoi che resti visibile sopra la foto) */}
      <header className="absolute top-0 w-full py-6 px-8 md:px-24 z-30 flex justify-between items-center">
        <p className="text-[9px] text-zinc-500 tracking-[0.5em] uppercase font-light">
          Official Website
        </p>
      </header>

      {/* CONTENUTO PRINCIPALE: FOTO + LOGO */}
      <div className="relative h-full w-full flex flex-col md:flex-row items-center justify-center">
        
        {/* LATO SINISTRO: LOGO E SCRITTE */}
        <div className="w-full md:w-1/2 flex items-center justify-center z-20 p-10">
          <div className="flex flex-col items-center">
            {/* Il logo principale */}
            <div className="relative w-[300px] md:w-[500px] aspect-[3/2]">
              <Image 
                src={logoImmagine} 
                alt="Alberto Chines Logotipo"
                fill
                className="object-contain brightness-110 contrast-110" 
                priority
              />
            </div>
            {/* Scritta Steinway Artist sotto */}
            <p className="mt-8 text-[10px] md:text-[12px] text-zinc-400 tracking-[0.8em] uppercase font-extralight">
              Steinway Artist
            </p>
          </div>
        </div>

        {/* LATO DESTRO: LA FOTO PORTRAIT */}
        <div className="absolute inset-0 md:relative md:w-1/2 h-full z-10">
          <Image
            src={fotoPortrait}
            alt="Alberto Chines Portrait"
            fill
            className="object-cover object-center grayscale opacity-80 md:opacity-100 transition-opacity duration-1000"
            priority
          />
          {/* Overlay per mobile per far leggere meglio il testo se la foto va sotto */}
          <div className="absolute inset-0 bg-black/40 md:hidden" />
        </div>

      </div>

    </main>
  );
}