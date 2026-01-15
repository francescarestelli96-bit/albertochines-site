'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function Repertorio() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8 pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extralight uppercase tracking-[0.4em] mb-20 opacity-80">
          {t('repertorio.title')}
        </h1>

        <div className="space-y-20">
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 mb-10 border-l border-zinc-800 pl-6 italic">
              {t('repertorio.solisticoTitle')}
            </h2>
            <div className="text-sm md:text-base font-light text-zinc-400 leading-relaxed whitespace-pre-line text-justify">
              {t('repertorio.solistico')}
            </div>
          </section>

          <section>
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 mb-10 border-l border-zinc-800 pl-6 italic">
              {t('repertorio.orchestraTitle')}
            </h2>
            <div className="text-sm md:text-base font-light text-zinc-400 leading-relaxed whitespace-pre-line text-justify">
              {t('repertorio.orchestra')}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}