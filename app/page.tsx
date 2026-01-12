import Image from "next/image";

export default function HomePage() {
  const logoImmagine = "/media/AC_logotipo_blackBG.jpeg"; 
  const fotoPortrait = "/01-portrait.jpeg"; // Assicurati che sia nella cartella public

  return (
    <main className="relative min-h-screen bg-black flex flex-col overflow-hidden">
      
      {/* HEADER */}
      <header className="w-full py-6 px-8 md:px-24 z-20">
        <p className="text-[9px] text-zinc-600 tracking-[0.5em] uppercase font-light">
          Official Website
        </p>
      </header>

      {/* CONTENITORE PRINCIPALE (LOGO E FOTO AFFIANCATI) */}
      <div className="flex flex-col md:flex-row-reverse flex-grow items-center">
        
        {/* LATO FOTO */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-[80vh]">
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

        {/* LATO LOGO (Misure che avevamo deciso) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-center bg-black">
          
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

      <div className="h-10 md:hidden bg-black"></div>
    </main>
  );
}