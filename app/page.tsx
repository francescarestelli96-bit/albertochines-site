'use client';
import { useLanguage } from "../components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="relative h-screen w-full bg-black overflow-hidden flex flex-col md:flex-row">
      
      {/* SEZIONE SINISTRA: TESTO */}
      <div className="relative z-10 w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-20 animate-in fade-in slide-in-from-left-12 duration-1000">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight uppercase tracking-[0.3em] text-white leading-tight">
            Alberto<br />Chines
          </h1>
          
          <div className="h-[1px] w-24 bg-white/40 my-10" />
          
          <div className="space-y-3">
            <p className="text-[10px] md:text-xs font-light uppercase tracking-[0.8em] text-zinc-300">
              {t('home.subtitle')}
            </p>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-extralight">
              {t('home.tagline')}
            </p>
          </div>
        </div>
      </div>

      {/* SEZIONE DESTRA: FOTO RITRATTO */}
      <div className="relative w-full md:w-1/2 h-full animate-in fade-in slide-in-from-right-12 duration-1000 delay-300">
        <div className="absolute inset-0">
          <img 
            src="/media/01-portrait.jpeg" 
            alt="Alberto Chines Portrait" 
            className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
          />
          {/* Overlay sfumato per ammorbidire l'incontro tra foto e nero a sinistra */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
        </div>
      </div>

    </main>
  );
}