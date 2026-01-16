'use client';
import { useLanguage } from "../../../components/LanguageProvider"; // PERCORSO BLINDATO

const videoIDs = ["bK0ZWsJIhQU", "j_L7m7L_I40", "K8N3XvU-r2Y"];

export default function Videos() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-40 px-6 pb-32 animate-in fade-in duration-1000">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.4em] mb-24 border-b border-white/10 pb-8 text-left">
          {t('nav.media')}
        </h1>

        <section>
          <h2 className="text-lg md:text-xl uppercase tracking-[0.3em] text-white font-light mb-12 flex items-center gap-6">
            <span className="w-12 h-[1px] bg-zinc-700"></span>
            {t('video.performanceTitle')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoIDs.map((id, index) => {
              const keys = ["handel", "chopin", "bartok"];
              return (
                <div key={id} className="flex flex-col">
                  <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-white/5 bg-zinc-900/20 shadow-lg">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${id}`}
                      title={t(`video.${keys[index]}Title`)}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="mt-4 px-1">
                    <h3 className="text-white text-sm md:text-base font-bold tracking-wider uppercase leading-tight">
                      {t(`video.${keys[index]}Title`)}
                    </h3>
                    <p className="text-zinc-500 text-xs md:text-sm font-extralight mt-1 leading-relaxed">
                      {t(`video.${keys[index]}Description`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <footer className="pt-20 text-center">
          <a href="https://www.youtube.com/@albertochines" target="_blank" className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 hover:text-white transition-colors border border-zinc-800 px-8 py-4">
            {t('video.moreOnYoutube')}
          </a>
        </footer>
      </div>
    </main>
  );
}