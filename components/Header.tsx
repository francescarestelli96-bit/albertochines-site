'use client';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="fixed top-0 w-full z-50 p-8 flex justify-between items-center bg-neutral-950/50 backdrop-blur-sm">
      <Link href="/" className="text-xl tracking-tighter font-light uppercase">Alberto Chines</Link>
      <nav className="flex gap-8 items-center text-xs tracking-widest uppercase font-light">
        <Link href="/about" className="hover:text-white/50 transition-colors">{t('nav.about')}</Link>
        <Link href="/concerts" className="hover:text-white/50 transition-colors">{t('nav.concerts')}</Link>
        <Link href="/repertorio" className="hover:text-white/50 transition-colors">{t('nav.repertorio')}</Link>
        <Link href="/media" className="hover:text-white/50 transition-colors">{t('nav.media')}</Link>
        <Link href="/contact" className="hover:text-white/50 transition-colors">{t('nav.contact')}</Link>
        <button onClick={() => setLang(lang === 'it' ? 'en' : 'it')} className="ml-4 border border-white/20 px-2 py-1 hover:bg-white hover:text-black transition-all">
          {lang === 'it' ? 'EN' : 'IT'}
        </button>
      </nav>
    </header>
  );
}