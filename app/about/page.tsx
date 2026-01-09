'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.3em] border-b border-white/10 pb-8 mb-12">
          {t('about.title')}
        </h1>
        <div className="text-lg md:text-xl font-light leading-relaxed tracking-wide text-gray-300 whitespace-pre-line">
          {t('about.content')}
        </div>
      </div>
    </main>
  );
}