'use client';
import { useLanguage } from "../../../components/LanguageProvider";
import Link from 'next/link';

export default function VideoPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-40 px-6 pb-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-24 border-b border-white/10 pb-8 text-left">
          <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.4em]">
            VIDEOS
          </h1>
          <Link href="/media" className="text-[10px] tracking-[0.3em] uppercase border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all">
            ← Back to Photos
          </Link>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-white/5 bg-zinc-900/20">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/bK0ZWsJIhQU"
              title={t('video.handelTitle')}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-white text-xl font-bold tracking-wider uppercase">
              {t('video.handelTitle')}
            </h3>
            <p className="text-zinc-500 text-sm font-extralight mt-2 italic">
              {t('video.handelDescription')}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}