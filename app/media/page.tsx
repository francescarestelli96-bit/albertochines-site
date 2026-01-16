'use client';
import { useLanguage } from "../../components/LanguageProvider";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function MediaPage() {
  const { t } = useLanguage();
  const [shuffledPhotos, setShuffledPhotos] = useState<any[]>([]);

  const photos = [
    { src: "/media/01-portrait.jpeg", alt: "Portrait" },
    { src: "/media/02-profile.jpeg", alt: "Profile" },
    { src: "/media/03-wide-piano.jpeg", alt: "Wide Piano" },
    { src: "/media/04-back.jpeg", alt: "Back View" },
    { src: "/media/05-hands.jpeg", alt: "Hands" },
    { src: "/media/06-score-open.jpeg", alt: "Score" },
    { src: "/media/07-vertical-stage.jpeg", alt: "Stage" },
    { src: "/media/08-mid-performance.jpeg", alt: "Performance" },
    { src: "/media/09-close-reading.jpeg", alt: "Reading" }
  ];

  useEffect(() => {
    // Mescola l'ordine delle foto al caricamento
    setShuffledPhotos([...photos].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <main className="min-h-screen bg-black text-white pt-40 px-6 pb-32">
      <div className="max-w-6xl mx-auto">
        
        {/* Header della pagina */}
        <div className="flex justify-between items-end mb-24 border-b border-white/10 pb-8 text-left">
          <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.4em]">
            {t('nav.media')}
          </h1>
          <Link href="/media/video" className="text-[10px] tracking-[0.3em] uppercase border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all">
            Videos →
          </Link>
        </div>

        {/* Griglia Masonry con Super Zoom */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {shuffledPhotos.map((photo, index) => (
            <div key={index} className="break-inside-avoid overflow-hidden bg-zinc-900 group">
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-auto object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 border border-white/5"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}