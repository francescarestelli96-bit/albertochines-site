'use client';
import { useLanguage } from "../../../components/LanguageProvider";
import Link from "next/link";

// Video ufficiali di Alberto Chines - REALI
const videos = [
  {
    id: "fN25pS9M57A", 
    title: "Robert Schumann: Carnaval, Op. 9",
  },
  {
    id: "H6Oq0-h1-S8", 
    title: "Domenico Scarlatti: Sonate (Live)",
  },
  {
    id: "5v6F_3_5z_Y", 
    title: "Béla Bartók: Out of Doors",
  },
  {
    id: "4D6Z-8pYvM0", 
    title: "Live Performance - Sala Verdi, Milano",
  }
];

export default function VideosPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8 pb-24 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* HEADER CON SWITCHER */}
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extralight uppercase tracking-[0.4em] opacity-80">
              {t('media.title')}
            </h1>
            <div className="w-16 h-[1px] bg-zinc-800 mt-8" />
          </div>

          <nav className="flex gap-8 items-center">
            <Link 
              href="/media" 
              className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-all duration-500 pb-1 border-b border-transparent hover:border-zinc-500"
            >
              Photos
            </Link>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white border-b border-white pb-1 italic">
              Videos
            </span>
          </nav>
        </header>
        
        {/* GRIGLIA VIDEO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {videos.map((video, index) => (
            <div 
              key={video.id} 
              className="group relative"
              style={{ 
                animation: `fadeUp 1.2s ease-out forwards ${index * 200}ms`,
                opacity: 0 
              }}
            >
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out border border-white/5 shadow-2xl">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&color=white`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="mt-8">
                <h2 className="text-[11px] uppercase tracking-[0.4em] font-light text-zinc-500 group-hover:text-white transition-colors duration-500">
                  {video.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}