'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8 pb-24 flex items-center justify-center animate-in fade-in duration-1000">
      <div className="max-w-xl w-full text-center">
        {/* TITOLO PRINCIPALE */}
        <h1 className="text-3xl md:text-4xl font-extralight uppercase tracking-[0.4em] opacity-80 mb-20">
          {t('contact.title')}
        </h1>
        
        <div className="space-y-16">
          {/* MANAGEMENT */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 mb-4">General Management</p>
            <a 
              href="mailto:info@albertochines.com" 
              className="text-xl md:text-2xl font-light hover:text-zinc-400 transition-colors duration-500"
            >
              info@albertochines.com
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex justify-center gap-12 pt-8">
            <a 
              href="https://instagram.com/albertochines" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-colors duration-500"
            >
              Instagram
            </a>
            <a 
              href="https://facebook.com/albertochines" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-colors duration-500"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* FOOTER MINIMALE */}
        <div className="mt-32 pt-12 border-t border-white/5 opacity-30 text-[9px] uppercase tracking-[0.2em] font-light">
          © 2026 Alberto Chines
        </div>
      </div>
    </main>
  );
}