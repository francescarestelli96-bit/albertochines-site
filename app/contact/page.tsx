'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-20 animate-in fade-in duration-1000">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.3em] border-b border-white/10 pb-8 mb-12">
          {t('contact.title')}
        </h1>
        
        <div className="space-y-8 mt-12">
          <p className="text-xl font-light tracking-widest text-zinc-400 uppercase">General Inquiries</p>
          <a 
            href="mailto:info@albertochines.com" 
            className="text-2xl md:text-4xl font-extralight hover:text-zinc-400 transition-colors duration-300"
          >
            info@albertochines.com
          </a>
        </div>
      </div>
    </main>
  );
}