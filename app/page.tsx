import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden flex items-center">
      <div className="flex flex-col md:flex-row w-full h-screen">
        
        {/* LATO SINISTRO: IL NUOVO LOGO */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-8 md:px-24 z-10 bg-black">
          <div className="relative w-full max-w-[280px] md:max-w-[400px]">
            <Image 
              src="/AC_logotipo.png" 
              alt="Logo Alberto Chines"
              width={600}
              height={300}
              className="object-contain w-full h-auto brightness-110" 
              priority
            />
          </div>
        </div>

        {/* LATO DESTRO: FOTO ALBERTO */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-full border-l border-zinc-900/30">
          <Image
            src="/alberto-hero.jpg" 
            alt="Alberto Chines"
            fill
            className="object-cover object-center grayscale opacity-80"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden"></div>
        </div>

      </div>

      <div className="absolute bottom-10 left-8 md:left-24 z-20">
        <p className="text-[10px] text-zinc-600 tracking-[0.6em] uppercase font-light">
          Official Website
        </p>
      </div>
    </main>
  );
}