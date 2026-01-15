'use client';
import { useLanguage } from "../../../components/LanguageProvider";

// Sostituisci questi ID con quelli dei video reali di Alberto
const videos = [
  {
    id: "ID_VIDEO_1",
    title: "Schumann: Carnaval, Op. 9",
  },
  {
    id: "ID_VIDEO_2",
    title: "Beethoven: Piano Sonata No. 32",
  },
  {
    id: "ID_VIDEO_3",
    title: "Ravel: Miroirs",
  },
  {
    id: "ID_VIDEO_4",
    title: "Live at Sala Verdi",
  }
];

export default function VideosPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8 pb-24 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* TITOLO */}
        <header className="mb-20">
          <h1 className="text-3xl md:text-4xl font-extralight uppercase tracking-[0.4em] opacity-80">
            {t('media.videos') || 'Videos'}
          </h1>
          <div className="w-16 h-[1px] bg-zinc-800 mt-8" />
        </header>
        
        {/* GRIGLIA VIDEO DINAMICA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {videos.map((video, index) => (
            <div 
              key={video.id} 
              className="group relative"
              style={{ 
                animation: `fadeUp 1.2s ease-out forwards ${index * 200}ms`,
                opacity: 0 
              }}
            >
              {/* CONTENITORE VIDEO 16:9 */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out shadow-2xl">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&showinfo=0&modestbranding=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Overlay per uniformità visiva finché non si interagisce */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />
              </div>

              {/* INFO VIDEO */}
              <div className="mt-6">
                <h2 className="text-[11px] uppercase tracking-[0.3em] font-light text-zinc-400 group-hover:text-white transition-colors duration-500">
                  {video.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* LINK PER TORNARE ALLE FOTO */}
        <footer className="mt-32 pt-12 border-t border-white/5 flex justify-center">
          <a 
            href="/media" 
            className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 hover:text-white transition-all duration-500"
          >
            ← Back to Gallery
          </a>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}