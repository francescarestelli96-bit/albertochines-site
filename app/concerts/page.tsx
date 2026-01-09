"use client";
import { useLanguage } from "../../components/LanguageProvider";

export default function Concerts() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-48 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-5xl font-light uppercase tracking-tighter">
          {t('concerts.title')}
        </h1>
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/50 italic">{t('common.loading')}</p>
        </div>
      </div>
    </main>
  );
}