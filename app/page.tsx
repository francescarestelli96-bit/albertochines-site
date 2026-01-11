'use client';
import { useLanguage } from "../components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      {/* Immagine di Sfondo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/media/03-wide-piano.jpeg" 
          alt="Alberto Chines" 
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Contenuto Testuale */}
      <div className="relative z-10 flex flex-col items-center animate-in fade-in zoom-in-95 duration-1000 px-4 text-center">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-extralight uppercase tracking-[0.4em] text-white whitespace-nowrap mr-[-0.4em]">
          {t('home.title')}
        </h1>
        
        <div className="h-[1px] w-12 md:w-16 bg-white/30 my-6 md:my-8" />
        
        <p className="text-[9px] md:text-xs font-light uppercase tracking-[0.6em] text-zinc-200 mr-[-0.6em]">
          {t('home.subtitle')}
        </p>

        <p className="mt-4 text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-extralight">
          {t('home.tagline')}
        </p>
      </div>
    </main>
  );
}