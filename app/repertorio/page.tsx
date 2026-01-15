'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function Repertorio() {
  const { t } = useLanguage();

  const renderList = (text: string) => {
    if (!text || text.includes('repertorio.')) return null;
    
    return text.split('\n').map((line, i) => {
      const parts = line.split('|');
      
      // BLOCCO AUTORE (Bianco Bold)
      if (parts.length >= 2) {
        return (
          <div key={i} className="mb-6 break-inside-avoid">
            <h3 className="text-white text-sm md:text-base font-bold tracking-wider mb-1 uppercase">
              {parts[0].trim()}
            </h3>
            <p className="text-zinc-500 text-xs md:text-sm font-extralight tracking-wide leading-tight">
              {parts[1].trim()}
            </p>
          </div>
        );
      }
      
      // OPERA SINGOLA (Attaccata alla precedente, senza spazio vuoto)
      return (
        <div key={i} className="text-zinc-500 text-xs md:text-sm font-extralight tracking-wide leading-tight mt-[-4px] mb-1 break-inside-avoid">
          {line.trim()}
        </div>
      );
    });
  };

  return (
    <main className="min-h-screen bg-black text-white pt-40 px-6 pb-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.4em] mb-24 border-b border-white/10 pb-8">
          {t('repertorio.title')}
        </h1>

        <div className="space-y-32">
          {/* SEZIONE SOLISTICO */}
          <section>
            <h2 className="text-lg md:text-xl uppercase tracking-[0.3em] text-white font-light mb-16 flex items-center gap-6">
              <span className="w-12 h-[1px] bg-zinc-700"></span>
              {t('repertorio.solisticoTitle')}
            </h2>
            <div className="columns-1 md:columns-2 gap-12 lg:gap-24 overflow-hidden">
              {renderList(t('repertorio.solistico'))}
            </div>
          </section>

          {/* SEZIONE ORCHESTRA */}
          <section>
            <h2 className="text-lg md:text-xl uppercase tracking-[0.3em] text-white font-light mb-16 flex items-center gap-6">
              <span className="w-12 h-[1px] bg-zinc-700"></span>
              {t('repertorio.orchestraTitle')}
            </h2>
            <div className="columns-1 md:columns-2 gap-12 lg:gap-24 overflow-hidden">
              {renderList(t('repertorio.orchestra'))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}