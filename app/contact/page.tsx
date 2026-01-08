"use client";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-40 pb-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-[12px] uppercase tracking-[0.45em] text-white/40 mb-16">
        {t.nav.contatti}
      </h1>
      
      <div className="space-y-20">
        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">General Inquiries</p>
          <a 
            href="mailto:info@albertochines.com" 
            className="text-2xl md:text-4xl font-light tracking-tighter hover:text-white/60 transition-colors block"
          >
            info@albertochines.com
          </a>
        </div>

        <div className="flex gap-12">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Social</p>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm tracking-widest hover:text-white/50 transition-colors uppercase">Instagram</a>
              <a href="#" className="text-sm tracking-widest hover:text-white/50 transition-colors uppercase">Facebook</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Management</p>
            <p className="text-sm tracking-widest text-white/60 uppercase italic">Steinway Artist</p>
          </div>
        </div>
      </div>
    </main>
  );
}