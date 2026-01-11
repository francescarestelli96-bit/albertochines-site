'use client';
import { useLanguage } from "../../components/LanguageProvider";

// Ordine rimescolato per il ritmo
const photos = [
  "/media/01-portrait.jpeg", 
  "/media/12-wide-stage.jpeg", 
  "/media/05-hands.jpeg", 
  "/media/07-vertical-stage.jpeg", 
  "/media/03-wide-piano.jpeg", 
  "/media/06-score-open.jpeg", 
  "/media/02-profile.jpeg", 
  "/media/08-mid-performance.jpeg", 
  "/media/11-profile-2.jpeg",
  "/media/04-back.jpeg",
  "/media/09-close-reading.jpeg",
  "/media/10-hands-2.jpeg"
];

export default function Media() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.3em] border-b border-white/10 pb-8 mb-16">
          {t('media.title')}
        </h1>
        
        {/* Layout a colonne per dinamismo altezze */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {photos.map((src, index) => (
            <div 
              key={src} 
              className="relative overflow-hidden group animate-in fade-in zoom-in-95 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img 
                src={src} 
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                alt="Alberto Chines"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 opacity-50">
          <p className="text-[10px] uppercase tracking-[0.2em] italic font-light">
            Photos by Milana Megina
          </p>
        </div>
      </div>
    </main>
  );
}