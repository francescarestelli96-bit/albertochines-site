'use client';
import { useLanguage } from "../../components/LanguageProvider";
import Link from 'next/link';

export default function MediaPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-40 px-6 pb-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-24 border-b border-white/10 pb-8 text-left">
          <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.4em]">
            {t('nav.media')}
          </h1>
          <Link href="/media/video" className="text-[10px] tracking-[0.3em] uppercase border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all">
            Videos →
          </Link>
        </div>

        {/* QUI VANNO LE TUE FOTO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="aspect-[3/4] bg-zinc-900 border border-white/5 flex items-center justify-center">
            <span className="text-zinc-700 uppercase tracking-widest text-[10px]">Photo Gallery</span>
          </div>
        </div>
      </div>
    </main>
  );
}