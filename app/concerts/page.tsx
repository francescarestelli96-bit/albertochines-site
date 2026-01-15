'use client';
import { useLanguage } from "../../components/LanguageProvider"; // PERCORSO CORRETTO

export default function Concerts() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-extralight uppercase tracking-[0.4em] mb-12">
        {t('concerts.title')}
      </h1>
      <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 italic">
        {t('concerts.message')}
      </p>
    </main>
  );
}