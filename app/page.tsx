'use client';
import { useLanguage } from "../components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-6 pt-24 md:pt-0">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
        
        {/* Foto: Sopra su mobile, a destra su desktop */}
        <div className="relative aspect-[4/5] grayscale opacity-70 order-1 md:order-2 overflow-hidden w-full max-w-sm mx-auto md:max-w-none">
          <img 
            src="/media/01-portrait.jpeg" 
            alt="Alberto Chines" 
            className="object-cover w-full h-full"
          />
        </div>

        {/* Testo: Sotto la foto su mobile, a sinistra su desktop */}
        <div className="flex flex-col order-2 md:order-1 text-center md:text-left">
          <h1 className="text-4xl md:text-8xl font-extralight uppercase tracking-[0.1em] leading-tight text-white">
            Alberto<br />Chines
          </h1>
          <div className="h-[1px] w-12 bg-white/20 my-6 md:my-10 mx-auto md:mx-0"></div>
          <h2 className="text-xl md:text-3xl font-extralight uppercase tracking-[0.4em] md:tracking-[0.6em] text-neutral-400">
            {t('home.subtitle')}
          </h2>
          <p className="text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] font-extralight text-neutral-600 uppercase mt-8 md:mt-12">
            {t('home.tagline')}
          </p>
        </div>
        
      </div>
    </main>
  );
}