'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function Concerts() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 pt-20 font-extralight uppercase">
      <div className="text-center space-y-8">
        <h1 className="text-3xl md:text-5xl tracking-[0.4em]">
          {t('concerts.title')}
        </h1>
        <div className="h-[1px] w-12 bg-white/20 mx-auto"></div>
        <p className="text-[10px] md:text-xs tracking-[0.3em] text-neutral-500 normal-case md:uppercase">
          {t('concerts.message')}
        </p>
      </div>
    </main>
  );
}