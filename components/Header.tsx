'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', color: 'white' }}>
        ALBERTO CHINES
      </Link>
      
      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link href="/about">{t('nav.about')}</Link>
        <Link href="/concerts">{t('nav.concerts')}</Link>
        <Link href="/repertorio">{t('nav.repertorio')}</Link>
        <Link href="/media">{t('nav.media')}</Link>
        <Link href="/contact">{t('nav.contact')}</Link>
        
        <button 
          onClick={() => setLang(lang === 'it' ? 'en' : 'it')}
          style={{ background: 'none', border: '1px solid white', color: 'white', cursor: 'pointer', padding: '0.2rem 0.5rem' }}
        >
          {lang === 'it' ? 'EN' : 'IT'}
        </button>
      </nav>
    </header>
  );
}