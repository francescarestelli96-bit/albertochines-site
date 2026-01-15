'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function Repertorio() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-20 animate-in fade-in duration-1000">
      <div className="max-w-4xl mx-auto">
        
        {/* TITOLO PULITO E PRECISO */}
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.3em] border-b border-white/10 pb-8 mb-16">
          {t('repertorio.title')}
        </h1>

        <div className="space-y-24">
          
          {/* SEZIONE SOLISTICO */}
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 mb-10 italic">
              {t('repertorio.solisticoTitle')}
            </h2>
            <div className="text-base md:text-lg font-extralight leading-relaxed tracking-wide text-zinc-300 whitespace-pre-line text-justify hyphens-auto">
              {t('repertorio.solistico')}
            </div>
          </section>

          {/* SEZIONE ORCHESTRA */}
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 mb-10 italic">
              {t('repertorio.orchestraTitle')}
            </h2>
            <div className="text-base md:text-lg font-extralight leading-relaxed tracking-wide text-zinc-300 whitespace-pre-line text-justify hyphens-auto">
              {t('repertorio.orchestra')}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}