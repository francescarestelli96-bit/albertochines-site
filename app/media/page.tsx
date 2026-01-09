'use client';
import { useLanguage } from "../../components/LanguageProvider";

export default function Media() {
  const { t } = useLanguage();
  
  // Lista delle tue foto (assicurati che i nomi siano identici a quelli nella cartella public/media)
  const photos = [
    '01-portrait.jpeg',
    '02-profile.jpeg',
    '03-wide-piano.jpeg',
    '04-back.jpeg'
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-20">
      <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.3em] border-b border-white/10 pb-8 mb-12">
        {t('media.title')}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photoName) => (
          <div key={photoName} className="aspect-square overflow-hidden bg-black border-0 outline-none">
            <img 
              src={`/media/${photoName}`} 
              alt="Alberto Chines" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 block m-0 p-0 border-0"
            />
          </div>
        ))}
      </div>
    </main>
  );
}