'use client';
import { useLanguage } from "../components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="relative h-screen w-full bg-black overflow-hidden flex items-center">
      {/* Immagine di Sfondo Originale */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/media/03-wide-piano.jpeg" 
          alt="Alberto Chines" 
          className="w-full h-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Nome sulla stessa riga, spostato a sinistra */}
      <div className="relative z-10 w-full px-8 md:px-20 animate-in fade-in slide-in-from-left-8 duration-1000">
        <div className="max-w-7xl">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-extralight uppercase tracking-[0.3em] text-white whitespace-nowrap">
            {t('home.title')}
          </h1>
          
          <div className="h-[1px] w-24 bg-white/40 my-8" />
          
          <div className="space-y-2">
            <p className="text-[10px] md:text-xs font-light uppercase tracking-[0.8em] text-zinc-300">
              {t('home.subtitle')}
            </p>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-extralight">
              {t('home.tagline')}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}