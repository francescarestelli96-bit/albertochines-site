'use client';
import { useLanguage } from "../components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-1000">
        <h1 className="flex flex-col items-center leading-none text-white">
          <span className="text-5xl md:text-8xl font-extralight tracking-[0.5em] uppercase mr-[-0.5em]">
            Alberto
          </span>
          <span className="text-5xl md:text-8xl font-extralight tracking-[0.15em] uppercase mt-2">
            Chines
          </span>
        </h1>
        
        <div className="h-[1px] w-12 bg-white/20 my-10" />
        
        <p className="text-[10px] md:text-xs font-light uppercase tracking-[0.8em] text-zinc-500 mr-[-0.8em] animate-pulse">
          {t('home.subtitle')}
        </p>
        
        <p className="mt-4 text-[9px] uppercase tracking-[0.3em] text-zinc-600 font-extralight">
          {t('home.tagline')}
        </p>
      </div>
    </main>
  );
}