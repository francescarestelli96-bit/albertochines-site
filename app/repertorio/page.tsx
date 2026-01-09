"use client";
import { useLanguage } from "../../components/LanguageProvider";

export default function Repertorio() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-48 px-6 pb-20">
      <div className="max-w-4xl mx-auto space-y-16">
        <section>
          <h1 className="text-5xl font-light uppercase tracking-tighter mb-8">{t('repertorio.title')}</h1>
          <h2 className="text-2xl font-light text-white/40 mb-6 uppercase tracking-widest">{t('repertorio.subtitle')}</h2>
          <div className="text-white/70 font-light leading-loose whitespace-pre-wrap columns-1 md:columns-2 gap-12">
            {t('repertorio.content')}
          </div>
        </section>
        
        <section className="border-t border-white/10 pt-16">
          <h2 className="text-2xl font-light text-white/40 mb-6 uppercase tracking-widest">{t('repertorio.orchestraTitle')}</h2>
          <div className="text-white/70 font-light leading-loose whitespace-pre-wrap">
            {t('repertorio.orchestraContent')}
          </div>
        </section>
      </div>
    </main>
  );
}