'use client';
import { useLanguage } from "../components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen w-full bg-black flex flex-col md:flex-row overflow-x-hidden">
      
      {/* SEZIONE TESTO (SINISTRA SU DESKTOP / SOPRA SU MOBILE) */}
      <div className="relative z-20 w-full md:w-1/2 flex flex-col justify-center px-6 md:px-20 pt-32 pb-12 md:pt-0 md:pb-0 animate-in fade-in slide-in-from-left-12 duration-1000">
        <div className="max-w-xl">
          <h1 className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl font-extralight uppercase tracking-[0.2em] md:tracking-[0.3em] text-white leading-[1.1]">
            Alberto<br />Chines
          </h1>
          
          <div className="h-[1px] w-16 md:w-24 bg-white/40 my-6 md:my-10" />
          
          <div className="space-y-3">
            <p className="text-[9px] md:text-xs font-light uppercase tracking-[0.5em] md:tracking-[0.8em] text-zinc-300">
              {t('home.subtitle')}
            </p>
            <p className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-extralight">
              {t('home.tagline')}
            </p>
          </div>
        </div>
      </div>

      {/* SEZIONE FOTO (DESTRA SU DESKTOP / SOTTO SU MOBILE) */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen z-10 animate-in fade-in md:slide-in-from-right-12 duration-1000 delay-300">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/media/01-portrait.jpeg" 
            alt="Alberto Chines" 
            className="w-full h-full object-cover object-top md:object-center grayscale hover:grayscale-0 transition-all duration-1000 block"
            style={{ display: 'block' }}
          />
          {/* Sfumatura nera per fondere l'immagine con il testo su desktop (da sinistra) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent hidden md:block" />
          {/* Sfumatura nera per fondere l'immagine con il testo su mobile (dall'alto) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
        </div>
      </div>

    </main>
  );
}