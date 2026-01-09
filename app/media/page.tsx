"use client";
import { useLanguage } from "../../components/LanguageProvider";

export default function Media() {
  const { t } = useLanguage();

  const photos = [
    { src: "/media/01-portrait.jpeg", alt: "Alberto Chines portrait" },
    { src: "/media/02-profile.jpeg", alt: "Alberto Chines profile" },
    { src: "/media/03-wide-piano.jpeg", alt: "Alberto Chines at the piano" },
    { src: "/media/04-back.jpeg", alt: "Alberto Chines back view" },
    { src: "/media/05-hands.jpeg", alt: "Piano details" },
    { src: "/media/06-score-open.jpeg", alt: "Musical score" },
    { src: "/media/07-vertical-stage.jpeg", alt: "On stage" },
    { src: "/media/08-mid-performance.jpeg", alt: "Performance" },
    { src: "/media/09-close-reading.jpeg", alt: "Reading score" },
    { src: "/media/10-hands-2.jpeg", alt: "Hands detail" },
    { src: "/media/11-profile-2.jpeg", alt: "Profile portrait" },
    { src: "/media/12-wide-stage.jpeg", alt: "Wide stage view" },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-48 px-6 pb-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-5xl font-light uppercase tracking-tighter border-b border-white/10 pb-4">
          {t('media.title')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="overflow-hidden bg-neutral-900 group">
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}