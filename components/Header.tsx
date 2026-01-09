'use client';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function Header() {
  const { lang, setLang, t }: any = useLanguage();

  return (
    <header className="fixed top-0 left-0 w-full z-[100] p-8 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/10">
      <Link href="/" className="text-xl tracking-tighter font-bold uppercase text-white !visible">
        Alberto Chines
      </Link>
      
      <nav className="flex gap-8 items-center text-[10px] tracking-[0.2em] uppercase font-medium text-white">
        <Link href="/about" className="text-white hover:text-neutral-400">{t('nav.about')}</Link>
        <Link href="/concerts" className="text-white hover:text-neutral-400">{t('nav.concerts')}</Link>
        <Link href="/repertorio" className="text-white hover:text-neutral-400">{t('nav.repertorio')}</Link>
        <Link href="/media" className="text-white hover:text-neutral-400">{t('nav.media')}</Link>
        <Link href="/contact" className="text-white hover:text-neutral-400">{t('nav.contact')}</Link>
        
        <button 
          onClick={() => setLang(lang === 'it' ? 'en' : 'it')} 
          className="ml-4 border border-white/40 px-3 py-1 hover:bg-white hover:text-black transition-all text-white"
        >
          {lang === 'it' ? 'EN' : 'IT'}
        </button>
      </nav>
    </header>
  );
}