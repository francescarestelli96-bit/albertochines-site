'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function Concerts() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-20 animate-in fade-in duration-1000">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.3em] border-b border-white/10 pb-8 mb-12">
          {t('concerts.title')}
        </h1>
        
        <div className="flex items-center justify-center h-64">
          <p className="text-zinc-500 italic tracking-widest">
            {t('concerts.message') || "Dates coming soon"}
          </p>
        </div>
      </div>
    </main>
  );
}