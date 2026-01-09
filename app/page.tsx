'use client';
import { useLanguage } from "../components/LanguageProvider"; // Percorso corretto

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col">
          <h1 className="text-6xl md:text-8xl font-extralight uppercase tracking-[0.1em] leading-tight text-white">
            Alberto<br />Chines
          </h1>
          <div className="h-[1px] w-12 bg-white/20 my-10"></div>
          <h2 className="text-2xl md:text-3xl font-extralight uppercase tracking-[0.6em] text-neutral-400">
            {t('home.subtitle')}
          </h2>
          <p className="text-[10px] tracking-[0.3em] font-extralight text-neutral-600 uppercase mt-12">
            {t('home.tagline')}
          </p>
        </div>
        
        <div className="relative aspect-[4/5] grayscale opacity-70">
          <img 
            src="/media/01-portrait.jpeg" 
            alt="Alberto Chines" 
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </main>
  );
}