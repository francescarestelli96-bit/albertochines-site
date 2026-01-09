"use client";
import { useLanguage } from "../../components/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-48 px-6 pb-20">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-5xl font-light uppercase tracking-tighter border-b border-white/10 pb-4">
          {t('about.title')}
        </h1>
        <div className="text-white/80 font-light leading-relaxed whitespace-pre-wrap text-lg">
          {t('about.content')}
        </div>
      </div>
    </main>
  );
}