'use client';
import { useLanguage } from "../../../components/LanguageProvider";
import Link from 'next/link';

const videoIDs = ["bK0ZWsJIhQU", "j_L7m7L_I40", "K8N3XvU-r2Y"];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoIDs.map((id, index) => {
            const keys = ["handel", "chopin", "bartok"];
            return (
              <div key={id} className="flex flex-col">
                <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-white/5 bg-zinc-900/20">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={t(`video.${keys[index]}Title`)}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-4 text-left">
                  <h3 className="text-white text-sm font-bold tracking-wider uppercase">
                    {t(`video.${keys[index]}Title`)}
                  </h3>
                  <p className="text-zinc-500 text-xs font-extralight mt-1">
                    {t(`video.${keys[index]}Description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}