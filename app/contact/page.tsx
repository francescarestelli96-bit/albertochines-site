"use client";
import { useLanguage } from "@/components/LanguageProvider";
export default function Contact() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-40 px-6 max-w-3xl mx-auto">
      <h1 className="text-[12px] uppercase tracking-[0.45em] text-white/40 mb-12">{t.nav.contatti}</h1>
      <p className="text-white/60 font-light italic">{t.common.comingSoon}</p>
    </main>
  );
}