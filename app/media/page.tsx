'use client';
import { useLanguage } from "../../components/LanguageProvider";

const photos = [
  "/public/media/01-portrait.jpeg",
  "/public/media/02-profile.jpeg",
  "/public/media/03-wide-piano.jpeg",
  "/public/media/04-back.jpeg",
  "/public/media/01-portrait.jpeg", // Duplicate for grid
  "/public/media/02-profile.jpeg"   // Duplicate for grid
];

export default function Media() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-20 animate-in fade-in duration-1000">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.3em] border-b border-white/10 pb-8 mb-12">
          {t('media.title')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((src, index) => (
            <div key={index} className="aspect-square bg-white/5 overflow-hidden group">
              <img 
                src={src} 
                alt="Alberto Chines"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x600/1a1a1a/ffffff?text=Alberto+Chines"; }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}