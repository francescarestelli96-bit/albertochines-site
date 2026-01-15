'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function Repertorio() {
  const { t } = useLanguage();

  const renderList = (text: string) => {
    if (!text || text.includes('repertorio.')) return null;
    return text.split('\n').map((line, i) => {
      const parts = line.split('|');
      if (parts.length < 2) return null;
      return (
        <div key={i} className="mb-10 group">
          <h3 className="text-white text-lg md:text-xl font-light tracking-wider mb-2">
            {parts[0].trim()}
          </h3>
          <p className="text-zinc-500 text-sm md:text-base font-extralight tracking-wide leading-relaxed">
            {parts[1].trim()}
          </p>
        </div>
      );
    });
  };

  return (
    <main className="min-h-screen bg-black text-white pt-40 px-6 pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.4em] mb-24 opacity-90 border-b border-white/10 pb-8">
          {t('repertorio.title')}
        </h1>

        <div className="space-y-32">
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 italic mb-12 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-zinc-800"></span>
              {t('repertorio.solisticoTitle')}
            </h2>
            <div className="grid gap-2">
              {renderList(t('repertorio.solistico'))}
            </div>
          </section>

          <section>
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 italic mb-12 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-zinc-800"></span>
              {t('repertorio.orchestraTitle')}
            </h2>
            <div className="grid gap-2">
              {renderList(t('repertorio.orchestra'))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}