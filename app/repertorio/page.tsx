'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function Repertorio() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-20 animate-in fade-in duration-1000">
      <div className="max-w-4xl mx-auto">
        {/* Titolo Principale della Pagina */}
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.3em] border-b border-white/10 pb-8 mb-12 text-center md:text-left">
          {t('repertorio.title')}
        </h1>

        {/* Sezione Solistico e Cameristico */}
        <section className="mb-20">
          <h2 className="text-xl md:text-2xl font-light mb-10 uppercase tracking-[0.2em] text-zinc-400 border-l-2 border-white/30 pl-4">
            {t('repertorio.solisticoTitle')}
          </h2>
          <div className="text-sm md:text-base font-extralight leading-relaxed tracking-wide text-zinc-300 whitespace-pre-line columns-1 md:columns-2 gap-12">
            {t('repertorio.solistico')}
          </div>
        </section>

        {/* Sezione Orchestra */}
        <section>
          <h2 className="text-xl md:text-2xl font-light mb-10 uppercase tracking-[0.2em] text-zinc-400 border-l-2 border-white/30 pl-4">
            {t('repertorio.orchestraTitle')}
          </h2>
          <div className="text-sm md:text-base font-extralight leading-relaxed tracking-wide text-zinc-300 whitespace-pre-line">
            {t('repertorio.orchestra')}
          </div>
        </section>
      </div>
    </main>
  );
}