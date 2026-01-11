'use client';
import { useLanguage } from "../../components/LanguageProvider";

const photos = [
  { src: "/media/01-portrait.jpeg", size: "large" },
  { src: "/media/03-wide-piano.jpeg", size: "small" },
  { src: "/media/02-profile.jpeg", size: "small" },
  { src: "/media/12-wide-stage.jpeg", size: "large" },
  { src: "/media/07-vertical-stage.jpeg", size: "small" },
  { src: "/media/05-hands.jpeg", size: "small" },
  { src: "/media/06-score-open.jpeg", size: "large" },
  { src: "/media/04-back.jpeg", size: "small" },
  { src: "/media/08-mid-performance.jpeg", size: "small" },
  { src: "/media/09-close-reading.jpeg", size: "small" },
  { src: "/media/11-profile-2.jpeg", size: "small" },
  { src: "/media/10-hands-2.jpeg", size: "small" }
];

export default function Media() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.3em] border-b border-white/10 pb-8 mb-16">
          {t('media.title')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          {photos.map((item, index) => (
            <div 
              key={item.src} 
              className={`relative bg-zinc-900/10 overflow-hidden group animate-in fade-in duration-1000 ${
                item.size === 'large' ? 'md:col-span-2 aspect-video' : 'aspect-[4/5]'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={item.src} 
                className="w-full h-full object-contain transition-all duration-1000 grayscale group-hover:grayscale-0" 
                alt="Alberto Chines"
              />
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-light italic text-left">
            Photos by Milana Megina
          </p>
        </div>
      </div>
    </main>
  );
}