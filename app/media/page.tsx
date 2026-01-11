'use client';
import { useLanguage } from "../../components/LanguageProvider";

const photos = [
  "/media/01-portrait.jpeg", "/media/03-wide-piano.jpeg", "/media/02-profile.jpeg",
  "/media/07-vertical-stage.jpeg", "/media/12-wide-stage.jpeg", "/media/05-hands.jpeg",
  "/media/11-profile-2.jpeg", "/media/06-score-open.jpeg", "/media/04-back.jpeg",
  "/media/08-mid-performance.jpeg", "/media/09-close-reading.jpeg", "/media/10-hands-2.jpeg"
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
            <div key={src} className="aspect-[4/5] bg-zinc-900 overflow-hidden group relative animate-in fade-in zoom-in-95 duration-700" style={{ animationDelay: `${index * 50}ms` }}>
              <img 
                src={src} 
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105" 
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-left opacity-40 italic">
          <p className="text-[10px] uppercase tracking-[0.2em]">Photos by Milana Megina</p>
        </div>
      </div>
    </main>
  );
}