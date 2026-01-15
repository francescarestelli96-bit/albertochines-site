'use client';
import { useLanguage } from "../../components/LanguageProvider";
import Link from "next/link";

const photos = [
  "/media/12-wide-stage.jpeg",    // Apertura palco
  "/media/05-hands.jpeg",         // Dettaglio mani
  "/media/07-vertical-stage.jpeg",// Verticale intera
  "/media/06-score-open.jpeg",    // Dettaglio spartito
  "/media/02-profile.jpeg",       // Profilo stretto
  "/media/03-wide-piano.jpeg",    // Piano wide
  "/media/11-profile-2.jpeg",     // Profilo 2
  "/media/09-close-reading.jpeg", // Studio
  "/media/01-portrait.jpeg",      // Portrait Home (verso la fine)
  "/media/08-mid-performance.jpeg",
  "/media/04-back.jpeg",
  "/media/10-hands-2.jpeg"
];

export default function Media() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8 pb-24">
      <div className="max-w-[1600px] mx-auto">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extralight uppercase tracking-[0.4em] opacity-80">
              {t('media.title')}
            </h1>
            <div className="w-16 h-[1px] bg-zinc-800 mt-8" />
          </div>
          <nav className="flex gap-8 items-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white border-b border-white pb-1 italic">Photos</span>
            <Link href="/media/videos" className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-all pb-1 border-b border-transparent">Videos</Link>
          </nav>
        </header>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-12 space-y-12">
          {photos.map((src, index) => (
            <div key={src} className="relative overflow-hidden group bg-zinc-900/50" style={{ breakInside: 'avoid', animation: `fadeUp 1.2s ease-out forwards ${index * 120}ms`, opacity: 0 }}>
              <img src={src} className="w-full h-auto grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s] ease-in-out" alt="Alberto Chines" />
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{` @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } } `}</style>
    </main>
  );
}