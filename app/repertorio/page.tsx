'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function Repertorio() {
  const { t } = useLanguage();

  const renderList = (text: string) => {
    if (!text || text.includes('repertorio.')) return null;
    return text.split('\n').map((line, i) => {
      const parts = line.split('|');
      if (parts.length < 2) return (
         <div key={i} className="mb-4 text-zinc-300 font-extralight">{line}</div>
      );
      return (
        <div key={i} className="mb-12 group">
          <h3 className="text-white text-xl md:text-2xl font-light tracking-wider mb-3">
            {parts[0].trim()}
          </h3>
          <div className="text-zinc-500 text-base md:text-lg font-extralight tracking-wide leading-relaxed whitespace-pre-line">
            {parts[1].trim()}
          </div>
        </div>
      );
    });
  };

  return (
    <main className="min-h-screen bg-black text-white pt-40 px-6 pb-32">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-4xl md:text-6xl font-extralight uppercase tracking-[0.4em] mb-24 opacity-90 border-b border-white/10 pb-8">
          {t('repertorio.title')}
        </h1>

        <div className="space-y-32">
          
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 italic mb-16 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-zinc-800"></span>
              {t('repertorio.solisticoTitle')}
            </h2>
            <div className="grid gap-2">
              {renderList(t('repertorio.solistico'))}
            </div>
          </section>

          <section>
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 italic mb-16 flex items-center gap-4">
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