'use client';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function Header() {
  const { lang, setLang, t }: any = useLanguage();

  return (
    <header className="fixed top-0 left-0 w-full z-[100] p-8 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/5">
      <Link href="/" className="text-xl tracking-[0.3em] font-extralight uppercase text-white no-underline">
        Alberto Chines
      </Link>
      
      <nav className="flex gap-8 items-center text-[10px] tracking-[0.4em] uppercase font-extralight text-white">
        <Link href="/about" className="hover:opacity-50 transition-opacity">{t('nav.about')}</Link>
        <Link href="/concerts" className="hover:opacity-50 transition-opacity">{t('nav.concerts')}</Link>
        <Link href="/repertorio" className="hover:opacity-50 transition-opacity">{t('nav.repertorio')}</Link>
        <Link href="/media" className="hover:opacity-50 transition-opacity">{t('nav.media')}</Link>
        <Link href="/contact" className="hover:opacity-50 transition-opacity">{t('nav.contact')}</Link>
        
        <button 
          onClick={() => setLang(lang === 'it' ? 'en' : 'it')} 
          className="ml-4 border border-white/20 px-3 py-1 hover:bg-white hover:text-black transition-all text-[10px] tracking-[0.2em] font-extralight uppercase text-white"
        >
          {lang === 'it' ? 'EN' : 'IT'}
        </button>
      </nav>
    </header>
  );
}