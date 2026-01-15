'use client';
import { useLanguage } from "../../components/LanguageProvider";

// Ordine rimescolato per non ripetere la Home all'inizio e dare ritmo
const photos = [
  "/media/12-wide-stage.jpeg",    // Apertura cinematografica (Orizzontale)
  "/media/07-vertical-stage.jpeg",// Verticale potente
  "/media/05-hands.jpeg",         // Dettaglio mani
  "/media/03-wide-piano.jpeg",    // Orizzontale tastiera
  "/media/02-profile.jpeg",       // Profilo
  "/media/06-score-open.jpeg",    // Spartito
  "/media/01-portrait.jpeg",      // Il portrait della home (messo a metà)
  "/media/08-mid-performance.jpeg",
  "/media/11-profile-2.jpeg",
  "/media/09-close-reading.jpeg",
  "/media/04-back.jpeg",
  "/media/10-hands-2.jpeg"
];

export default function Media() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8 pb-24 overflow-x-hidden">
      <div className="max-w-[1600px] mx-auto">
        
        {/* TITOLO - Più aria sotto */}
        <header className="mb-24">
          <h1 className="text-3xl md:text-4xl font-extralight uppercase tracking-[0.4em] opacity-80">
            {t('media.title')}
          </h1>
          <div className="w-16 h-[1px] bg-zinc-800 mt-8" />
        </header>
        
        {/* GRIGLIA MASONRY CON PIÙ SPAZIO (GAP-12) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-12 space-y-12">
          {photos.map((src, index) => (
            <div 
              key={src} 
              className="relative overflow-hidden group bg-zinc-900/50"
              style={{ 
                breakInside: 'avoid',
                animation: `fadeUp 1.2s ease-out forwards ${index * 120}ms`,
                opacity: 0 
              }}
            >
              <img 
                src={src} 
                className="w-full h-auto object-cover grayscale contrast-[1.1] 
                           group-hover:grayscale-0 group-hover:scale-110 
                           transition-all duration-[2s] ease-in-out cursor-none" 
                alt="Alberto Chines"
                loading="lazy"
              />
              
              {/* Overlay sottile */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-opacity duration-1000 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CREDIT FINALE */}
        <footer className="mt-32 pt-12 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-light">
            Photography by <span className="text-zinc-400">Milana Megina</span>
          </p>
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