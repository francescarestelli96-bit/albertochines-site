import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden flex items-center">
      <div className="flex flex-col md:flex-row w-full h-screen">
        
        {/* LATO SINISTRO: NUOVO LOGO */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-8 md:px-24 z-10 bg-black">
          <div className="relative w-[280px] md:w-[400px] h-[200px]">
            <Image 
              src="/AC_logotipo.png" 
              alt="Alberto Chines"
              fill
              className="object-contain brightness-110" 
              priority
            />
          </div>
        </div>

        {/* LATO DESTRO: FOTO */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-full border-l border-zinc-900/30">
          <Image
            src="/alberto-hero.jpg" 
            alt="Alberto Chines"
            fill
            className="object-cover grayscale opacity-80"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden"></div>
        </div>

      </div>
    </main>
  );
}