'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function Repertorio() {
  const { t } = useLanguage();

  const renderList = (text: string) => {
    if (!text || text.includes('repertorio.')) return null;
    return text.split('\n').map((line, i) => {
      const parts = line.split('|');
      if (parts.length >= 2) {
        return (
          <div key={i} className="mt-12 mb-2">
            <h3 className="text-white text-xl md:text-2xl font-bold tracking-wider mb-2">
              {parts[0].trim()}
            </h3>
            <p className="text-zinc-500 text-base md:text-lg font-extralight tracking-wide leading-tight whitespace-pre-line">
              {parts[1].trim()}
            </p>
          </div>
        );
      }
      return (
        <div key={i} className="text-zinc-500 text-base md:text-lg font-extralight tracking-wide leading-tight mb-1 whitespace-pre-line">
          {line.trim()}
        </div>
      );
    });
  };

  return (
    <main className="min-h-screen bg-black text-white pt-40 px-6 pb-32">
      <div className="max-w-4xl mx-auto">
        {/* TITOLO PRINCIPALE */}
        <h1 className="text-4xl md:text-6xl font-extralight uppercase tracking-[0.4em] mb-24 opacity-90 border-b border-white/10 pb-8 text-left">
          {t('repertorio.title')}
        </h1>

        <div className="space-y-32">
          {/* SEZIONE SOLISTICO */}
          <section>
            <h2 className="text-lg md:text-xl uppercase tracking-[0.3em] text-white font-light mb-16 flex items-center gap-6">
              <span className="w-12 h-[1px] bg-zinc-700"></span>
              {t('repertorio.solisticoTitle')}
            </h2>
            <div className="flex flex-col">
              {renderList(t('repertorio.solistico'))}
            </div>
          </section>

          {/* SEZIONE ORCHESTRA */}
          <section>
            <h2 className="text-lg md:text-xl uppercase tracking-[0.3em] text-white font-light mb-16 flex items-center gap-6">
              <span className="w-12 h-[1px] bg-zinc-700"></span>
              {t('repertorio.orchestraTitle')}
            </h2>
            <div className="flex flex-col">
              {renderList(t('repertorio.orchestra'))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}