'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-20 animate-in fade-in duration-1000">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.3em] border-b border-white/10 pb-8 mb-12">
          {t('about.title')}
        </h1>
        <div className="prose prose-invert max-w-none">
          {/* Spaziatura giustificata e sillabazione automatica per un blocco di testo perfetto */}
          <p className="text-base md:text-lg font-extralight leading-relaxed tracking-wide text-zinc-300 whitespace-pre-line text-justify hyphens-auto">
            {t('about.content')}
          </p>
        </div>

        <div className="mt-24 pt-12 border-t border-white/10 text-center">
          <a 
            href="#" 
            className="inline-block px-10 py-4 border border-white/20 text-[10px] uppercase tracking-[0.4em] font-light hover:bg-white hover:text-black transition-all duration-500"
          >
            Download Press Kit
          </a>
        </div>
      </div>
    </main>
  );
}