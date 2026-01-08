"use client";
import { useLanguage } from "@/components/LanguageProvider";

export default function ConcertsPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-40 pb-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-[12px] uppercase tracking-[0.45em] text-white/40 mb-16">
        {t.nav.concerti}
      </h1>
      
      <div className="space-y-12">
        {/* Placeholder per i concerti - Stile minimale */}
        <p className="text-white/60 font-light tracking-wide italic">
          {t.common.comingSoon}
        </p>
        
        {/* Esempio di come potrai aggiungere i concerti in futuro:
        <div className="border-b border-white/10 pb-6 flex justify-between items-end">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">24 Maggio 2026</p>
            <h2 className="text-xl font-light tracking-tight">Teatro La Fenice, Venezia</h2>
          </div>
          <p className="text-[10px] uppercase tracking-widest">Recital</p>
        </div> 
        */}
      </div>
    </main>
  );
}