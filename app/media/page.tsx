'use client';
import { useLanguage } from "../../components/LanguageProvider";

const photos = [
  "/media/01-portrait.jpeg", "/media/02-profile.jpeg", "/media/03-wide-piano.jpeg",
  "/media/04-back.jpeg", "/media/05-hands.jpeg", "/media/06-score-open.jpeg",
  "/media/07-vertical-stage.jpeg", "/media/08-mid-performance.jpeg", "/media/09-close-reading.jpeg",
  "/media/10-hands-2.jpeg", "/media/11-profile-2.jpeg", "/media/12-wide-stage.jpeg"
];

export default function Media() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Titolo con animazione fade-in dall'alto */}
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.3em] border-b border-white/10 pb-8 mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
          {t('media.title')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((src, index) => (
            <div 
              key={src} 
              className="aspect-[4/5] bg-zinc-900 overflow-hidden group relative animate-in fade-in zoom-in-95 duration-700 fill-mode-both"
              style={{ animationDelay: `${index * 100}ms` }} // Le foto caricano una dopo l'altra
            >
              <img 
                src={src} 
                alt="Alberto Chines"
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay leggero che sparisce al passaggio del mouse */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}