"use client";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl tracking-tighter font-light leading-[0.8] uppercase">
            {t.home.title} <br />
            <span className="text-white/40">— {t.home.subtitle}</span>
          </h1>
          <p className="max-w-sm text-sm tracking-wide text-white/50 leading-relaxed font-light">
            {t.home.tagline}
          </p>
        </div>
        <div className="relative aspect-[4/5] grayscale hover:grayscale-0 transition duration-1000">
          <img 
            src="/media/12-wide-stage.jpeg" 
            alt="Alberto Chines" 
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
      </div>
    </main>
  );
}