"use client";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen pt-40 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl tracking-[0.15em] font-light text-white uppercase leading-tight">
            {t.home.title} —<br />{t.home.subtitle}
          </h1>
          <p className="mt-12 text-white/50 max-w-md leading-relaxed tracking-wide text-sm">
            {t.home.tagline}
          </p>
        </div>
        
        <div className="w-full">
          <img 
            src="/media/12-wide-stage.jpeg" 
            alt="Alberto Chines" 
            className="w-full grayscale brightness-90 hover:brightness-100 transition duration-700 rounded-sm"
          />
        </div>
      </div>
    </main>
  );
}