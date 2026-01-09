'use client';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function Header() {
  const { lang, setLang, t }: any = useLanguage();

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] p-6 flex justify-between items-center bg-black border-b border-white/20">
      <Link href="/" className="text-xl tracking-tighter font-bold uppercase text-white">
        Alberto Chines
      </Link>
      
      <nav className="flex gap-6 items-center text-[10px] tracking-[0.2em] uppercase font-bold text-white">
        <Link href="/about" className="text-white hover:opacity-50 transition-opacity">BIO</Link>
        <Link href="/concerts" className="text-white hover:opacity-50 transition-opacity">CONCERTI</Link>
        <Link href="/repertorio" className="text-white hover:opacity-50 transition-opacity">REPERTORIO</Link>
        <Link href="/media" className="text-white hover:opacity-50 transition-opacity">MEDIA</Link>
        <Link href="/contact" className="text-white hover:opacity-50 transition-opacity">CONTATTI</Link>
        
        <button 
          onClick={() => setLang(lang === 'it' ? 'en' : 'it')} 
          className="ml-4 border border-white px-3 py-1 bg-white text-black font-bold uppercase"
        >
          {lang === 'it' ? 'EN' : 'IT'}
        </button>
      </nav>
    </header>
  );
}