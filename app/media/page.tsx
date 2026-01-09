'use client';
import { useLanguage } from "../../components/LanguageProvider";

// Percorsi corretti per Next.js (senza la parola 'public')
const photos = [
  "/media/01-portrait.jpeg",
  "/media/02-profile.jpeg",
  "/media/03-wide-piano.jpeg",
  "/media/04-back.jpeg",
  "/media/01-portrait.jpeg",
  "/media/02-profile.jpeg"
];

export default function Media() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.3em] border-b border-white/10 pb-8 mb-12">
          {t('media.title')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((src, index) => (
            <div key={index} className="aspect-square bg-zinc-900 overflow-hidden group relative">
              <img 
                src={src} 
                alt="Alberto Chines"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                // Se l'immagine proprio non esiste, mettiamo un colore grigio scuro invece del loop
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}