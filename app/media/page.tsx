'use client';
import { useLanguage } from "../../components/LanguageProvider";
import { useEffect, useState } from 'react';

export default function MediaPage() {
  const { t } = useLanguage();
  const [shuffledPhotos, setShuffledPhotos] = useState<any[]>([]);

  // 10 Video definitivi con ID verificati
  const videos = [
    { title: "SOLER: Fandango in D minor R.146", id: "0qD0Xb_y12Y" },
    { title: "BEETHOVEN: Variations and Fugue Op.35 “Eroica”", id: "O6W-fI_fD_E" },
    { title: "ADÈS: Darknesse Visible (after John Dowland)", id: "UonCnd_rV9c" },
    { title: "ČAJKOVSKIJ/FEINBERG: Scherzo from Symphony N.6", id: "Y_8D3Y9PtcY" },
    { title: "RAMEAU: La Villageoise", id: "5v0X2I2D_G8" },
    { title: "CHOPIN: Variations Brillantes Op.12", id: "hV_f7Fv4P8U" },
    { title: "BARTÓK: Dance Suite Sz.77 BB86b", id: "jLq89fXpGqA" },
    { title: "FRESCOBALDI: Aria detto Balletto", id: "oP0U2V_I1k8" },
    { title: "STRAVINKSIJ/AGOSTI: L’Oiseau de Feu", id: "5v0X2I2D_G8" },
    { title: "LECTURE: Le Sacre du Printemps (Alberto Chines transcriptions)", id: "z_YV7fD_f8U" },
  ];

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
    setShuffledPhotos([...photos].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <main className="min-h-screen bg-black text-white pt-40 px-6 pb-32">
      <div className="max-w-6xl mx-auto">
        
        {/* Header con tasto Video */}
        <div className="flex justify-between items-end mb-24 border-b border-white/10 pb-8 text-left">
          <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.4em]">
            {t('nav.media')}
          </h1>
          <a href="#video-section" className="text-[10px] tracking-[0.3em] uppercase border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all duration-500">
            Videos ↓
          </a>
        </div>

        {/* Sezione Gallery (Foto) */}
        <section className="mb-40">
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
        </section>

        {/* Sezione Video Integrata con scrolling fluido */}
        <section id="video-section" className="pt-20 scroll-mt-32">
          <h2 className="text-[10px] tracking-[0.5em] uppercase font-light mb-16 text-zinc-500 border-b border-white/5 pb-4">
            Selected Video Performances
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {videos.map((video, index) => (
              <div key={index} className="group">
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 mb-6 border border-white/5 group-hover:border-white/20 transition-all duration-700">
                  <iframe
                    className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: 0 }}
                  ></iframe>
                </div>
                <h3 className="text-[10px] md:text-xs font-light tracking-[0.2em] uppercase text-zinc-400 group-hover:text-white transition-colors italic">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="mt-32 pt-12 border-t border-white/10 text-center">
          <a 
            href="https://www.youtube.com/@AlbertoChines" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.4em] uppercase font-light text-zinc-500 hover:text-white transition-all"
          >
            {t('video.moreOnYoutube')}
          </a>
        </div>
      </div>
    </main>
  );
}