'use client';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 w-full z-[100] p-8 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/10">
      <Link href="/" className="text-xl tracking-tighter font-bold uppercase text-white no-underline">
        Alberto Chines
      </Link>
      
      <nav className="flex gap-8 items-center text-[10px] tracking-[0.2em] uppercase font-medium text-white">
        <Link href="/about" className="hover:text-neutral-400 transition-colors">{t('nav.about')}</Link>
        <Link href="/concerts" className="hover:text-neutral-400 transition-colors">{t('nav.concerts')}</Link>
        <Link href="/repertorio" className="hover:text-neutral-400 transition-colors">{t('nav.repertorio')}</Link>
        <Link href="/media" className="hover:text-neutral-400 transition-colors">{t('nav.media')}</Link>
        <Link href="/contact" className="hover:text-neutral-400 transition-colors">{t('nav.contact')}</Link>
        
        <button 
          onClick={() => setLang(lang === 'it' ? 'en' : 'it')} 
          className="ml-4 border border-white/40 px-3 py-1 hover:bg-white hover:text-black transition-all cursor-pointer bg-transparent text-white text-[10px]"
        >
          {lang === 'it' ? 'EN' : 'IT'}
        </button>
      </nav>
    </header>
  );
}