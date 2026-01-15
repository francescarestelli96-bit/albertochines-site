'use client';
import { useLanguage } from "../../components/LanguageProvider";

// Ordine ragionato per alternare pesi visivi (Wide vs Vertical)
const photos = [
  "/media/12-wide-stage.jpeg",    // Grande apertura
  "/media/01-portrait.jpeg",      // Verticale
  "/media/05-hands.jpeg",         // Dettaglio
  "/media/07-vertical-stage.jpeg",// Verticale lungo
  "/media/03-wide-piano.jpeg",    // Orizzontale
  "/media/06-score-open.jpeg",    // Dettaglio spartito
  "/media/02-profile.jpeg",       // Profilo
  "/media/08-mid-performance.jpeg",
  "/media/11-profile-2.jpeg",
  "/media/04-back.jpeg",
  "/media/09-close-reading.jpeg",
  "/media/10-hands-2.jpeg"
];

export default function Media() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* TITOLO - Più minimale e in linea con la Home */}
        <header className="mb-20">
          <h1 className="text-3xl md:text-4xl font-extralight uppercase tracking-[0.4em] opacity-80">
            {t('media.title')}
          </h1>
          <div className="w-12 h-[1px] bg-zinc-700 mt-6" />
        </header>
        
        {/* GRIGLIA MASONRY ASIMMETRICA */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((src, index) => (
            <div 
              key={src} 
              className="relative overflow-hidden group bg-zinc-900"
              style={{ 
                breakInside: 'avoid', // Fondamentale per il Masonry
                animation: `fadeUp 1s ease-out forwards ${index * 100}ms`,
                opacity: 0 
              }}
            >
              <img 
                src={src} 
                className="w-full h-auto object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[1.5s] ease-in-out" 
                alt="Alberto Chines"
                loading="lazy"
              />
              
              {/* Overlay per rendere il bianco e nero ancora più profondo al passaggio */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-opacity duration-1000" />
            </div>
          ))}
        </div>

        {/* CREDIT FINALE */}
        <footer className="mt-24 pt-10 border-t border-white/5">
          <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-light">
            Photography by <span className="text-zinc-300">Milana Megina</span>
          </p>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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