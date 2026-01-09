'use client';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function Header() {
  const { lang, setLang, t }: any = useLanguage();

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-4 py-6 md:px-12 md:py-8 flex flex-col md:flex-row justify-between items-center bg-black/90 backdrop-blur-md border-b border-white/5 gap-4 md:gap-0">
      <Link href="/" className="text-lg md:text-xl tracking-[0.3em] font-extralight uppercase text-white no-underline">
        Alberto Chines
      </Link>
      
      <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-8 items-center text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.4em] uppercase font-extralight text-white">
        <Link href="/about" className="hover:opacity-50 transition-opacity">{t('nav.about')}</Link>
        <Link href="/concerts" className="hover:opacity-50 transition-opacity">{t('nav.concerts')}</Link>
        <Link href="/repertorio" className="hover:opacity-50 transition-opacity">{t('nav.repertorio')}</Link>
        <Link href="/media" className="hover:opacity-50 transition-opacity">{t('nav.media')}</Link>
        <Link href="/contact" className="hover:opacity-50 transition-opacity">{t('nav.contact')}</Link>
        
        <button 
          onClick={() => setLang(lang === 'it' ? 'en' : 'it')} 
          className="ml-2 md:ml-4 border border-white/20 px-2 py-0.5 md:px-3 md:py-1 hover:bg-white hover:text-black transition-all text-[8px] font-extralight"
        >
          {lang === 'it' ? 'EN' : 'IT'}
        </button>
      </nav>
    </header>
  );
}