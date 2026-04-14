'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-4 py-6 md:px-12 md:py-8 flex flex-col md:flex-row justify-between items-center bg-black/90 backdrop-blur-md border-b border-white/5 gap-4 md:gap-0 font-extralight uppercase">
      <Link
        href="/"
        aria-label="Alberto Chines home"
        className="relative h-14 w-14 md:h-16 md:w-16 shrink-0 no-underline hover:opacity-80 transition-opacity"
      >
        <Image
          src="/branding/ac-logo-square.png"
          alt="Alberto Chines logo"
          fill
          priority
          sizes="64px"
          className="object-contain"
        />
        <span className="sr-only">Alberto Chines</span>
      </Link>
      
      <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-8 items-center text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.4em] text-white">
        <Link href="/about" className="hover:opacity-50 transition-opacity">{t('nav.bio')}</Link>
        {/* <Link href="/concerts" className="hover:opacity-50 transition-opacity">{t('nav.concerts')}</Link> */}
        <Link href="/repertoire" className="hover:opacity-50 transition-opacity">{t('nav.repertoire')}</Link>
        <Link href="/media" className="hover:opacity-50 transition-opacity">{t('nav.media')}</Link>
        <Link href="/contact" className="hover:opacity-50 transition-opacity">{t('nav.contact')}</Link>
        
        <button 
          onClick={() => setLanguage(language === 'it' ? 'en' : 'it')} 
          className="ml-2 md:ml-4 border border-white/20 px-2 py-0.5 md:px-3 md:py-1 hover:bg-white hover:text-black transition-all text-[8px] min-w-[35px]"
        >
          {language === 'it' ? 'EN' : 'IT'}
        </button>
      </nav>
    </header>
  );
}
