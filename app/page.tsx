import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden flex items-center">
      <div className="flex flex-col md:flex-row w-full h-screen">
        
        {/* LATO SINISTRO: Testo Originale */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-8 md:px-24 z-10 bg-black">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extralight tracking-[0.3em] text-white uppercase">
              ALBERTO CHINES
            </h1>
            <p className="text-xs md:text-sm font-light tracking-[0.5em] text-zinc-500 uppercase">
              Pianist
            </p>
          </div>
        </div>

        {/* LATO DESTRO: Foto Profilo */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-full border-l border-zinc-900/30">
          <Image
            src="/alberto-hero.jpg" // Assicurati che il nome della foto sia questo
            alt="Alberto Chines"
            fill
            className="object-cover object-center grayscale opacity-80"
            priority
            sizes="50vw"
          />
          {/* Sfumatura per mobile */}
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