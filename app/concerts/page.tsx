'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function Concerts() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8 flex items-center justify-center animate-in fade-in duration-1000">
      <div className="max-w-2xl w-full text-center">
        <header className="mb-16">
          <h1 className="text-3xl md:text-4xl font-extralight uppercase tracking-[0.4em] opacity-80">
            {t('concerts.title')}
          </h1>
          <div className="w-16 h-[1px] bg-zinc-800 mx-auto mt-8" />
        </header>

        <div className="py-20 border border-white/5 bg-zinc-900/10 rounded-sm">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-zinc-500 font-light">
            {t('concerts.message')}
          </p>
        </div>
      </div>
    </main>
  );
}