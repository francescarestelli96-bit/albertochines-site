'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function Repertorio() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.3em] border-b border-white/10 pb-8 mb-12">
          {t('repertorio.title')}
        </h1>

        <section className="mb-16">
          <h2 className="text-2xl font-light uppercase tracking-widest text-white/50 mb-8 italic">
            Solistico
          </h2>
          <div className="text-lg font-light leading-relaxed text-gray-300 whitespace-pre-line border-l border-white/10 pl-6">
            {t('repertorio.solistico')}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-light uppercase tracking-widest text-white/50 mb-8 italic">
            Orchestra
          </h2>
          <div className="text-lg font-light leading-relaxed text-gray-300 whitespace-pre-line border-l border-white/10 pl-6">
            {t('repertorio.orchestra')}
          </div>
        </section>
      </div>
    </main>
  );
}