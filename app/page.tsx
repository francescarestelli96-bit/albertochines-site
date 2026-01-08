"use client";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen bg-neutral-950 text-neutral-100 overflow-hidden">
      <div className="bg-noise absolute inset-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-48 lg:pt-64">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center">
          
          {/* Testo a Sinistra */}
          <div className="space-y-8">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/40">
              ALBERTO CHINES
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-light leading-[0.9]">
              ALBERTO <br />
              CHINES — <br />
              <span className="text-white/90">PIANIST</span>
            </h1>
            <p className="max-w-sm text-sm md:text-base text-white/50 leading-relaxed font-light tracking-wide">
              {t.home.tagline}
            </p>
          </div>

          {/* Foto a Destra (Senza Cornici) */}
          <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-lg shadow-2xl">
            <img 
              src="/media/12-wide-stage.jpeg" 
              alt="Alberto Chines" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition duration-1000"
            />
          </div>
          
        </div>
      </div>
    </main>
  );
}