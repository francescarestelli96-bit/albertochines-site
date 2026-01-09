"use client";
import { useLanguage } from "../components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-48 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl tracking-tighter font-light leading-[0.85] uppercase">
            {t('home.title')} <br />
            <span className="text-white/30">— {t('home.subtitle')}</span>
          </h1>
          <p className="max-w-sm text-sm tracking-[0.1em] text-white/50 leading-relaxed font-light">
            {t('home.tagline')}
          </p>
        </div>
        <div className="relative w-full">
          <img 
            src="/media/12-wide-stage.jpeg" 
            alt="Alberto Chines" 
            className="w-full h-auto grayscale brightness-90 contrast-110 object-cover rounded-none"
          />
        </div>
      </div>
    </main>
  );
}