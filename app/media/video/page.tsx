'use client';
import { useLanguage } from "../../../components/LanguageProvider";

interface VideoData {
  id: string;
  titleKey: string; // Key for translation in LanguageProvider
  descriptionKey: string; // Key for translation in LanguageProvider
}

// VIDEO DATA
const videos: VideoData[] = [
  {
    id: "bK0ZWsJIhQU",
    titleKey: "video.handelTitle",
    descriptionKey: "video.handelDescription",
  },
  {
    id: "j_L7m7L_I40",
    titleKey: "video.chopinTitle",
    descriptionKey: "video.chopinDescription",
  },
  {
    id: "K8N3XvU-r2Y",
    titleKey: "video.bartokTitle",
    descriptionKey: "video.bartokDescription",
  },
];

export default function Videos() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-40 px-6 pb-32 animate-in fade-in duration-1000">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.4em] mb-24 border-b border-white/10 pb-8 text-left">
          {t('nav.media')}
        </h1>

        <div className="space-y-24">
          <section>
            <h2 className="text-lg md:text-xl uppercase tracking-[0.3em] text-white font-light mb-12 flex items-center gap-6">
              <span className="w-12 h-[1px] bg-zinc-700"></span>
              {t('video.performanceTitle')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="flex flex-col">
                  {/* YouTube Embed Container */}
                  <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-white/5 bg-zinc-900/20 shadow-lg">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={t(video.titleKey)}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  <div className="mt-4 px-1">
                    <h3 className="text-white text-sm md:text-base font-bold tracking-wider uppercase leading-tight">
                      {t(video.titleKey)}
                    </h3>
                    <p className="text-zinc-500 text-xs md:text-sm font-extralight mt-1 leading-relaxed">
                      {t(video.descriptionKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <footer className="pt-20 text-center">
            <a 
              href="https://www.youtube.com/@albertochines" 
              target="_blank" 
              className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 hover:text-white transition-colors border border-zinc-800 px-8 py-4"
            >
              {t('video.moreOnYoutube')}
            </a>
          </footer>
        </div>
      </div>
    </main>
  );
}
