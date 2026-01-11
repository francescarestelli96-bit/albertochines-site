'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function Repertorio() {
  const { t } = useLanguage();

  const renderList = (text: string) => {
    return text.split('\n').map((line, i) => {
      const parts = line.split(':');
      if (parts.length > 1) {
        return (
          <div key={i} className="mb-8 break-inside-avoid">
            <span className="block text-white text-sm md:text-base font-normal uppercase tracking-widest mb-1">
              {parts[0].trim()}
            </span>
            <span className="block text-zinc-500 text-sm font-light leading-relaxed italic">
              {parts[1].trim()}
            </span>
          </div>
        );
      }
      return <p key={i} className="text-zinc-400 mb-4">{line}</p>;
    });
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.3em] border-b border-white/10 pb-8 mb-16 text-center md:text-left">
          {t('repertorio.title')}
        </h1>

        <section className="mb-24">
          <h2 className="text-xl font-light mb-12 uppercase tracking-[0.2em] text-zinc-400 italic border-l border-white/20 pl-4">
            {t('repertorio.solisticoTitle')}
          </h2>
          <div className="md:columns-2 gap-16">
            {renderList(t('repertorio.solistico'))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-light mb-12 uppercase tracking-[0.2em] text-zinc-400 italic border-l border-white/20 pl-4">
            {t('repertorio.orchestraTitle')}
          </h2>
          <div className="md:columns-2 gap-16">
            {renderList(t('repertorio.orchestra'))}
          </div>
        </section>
      </div>
    </main>
  );
}