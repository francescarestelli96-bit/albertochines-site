"use client";
import { useLanguage } from "@/components/LanguageProvider";

export default function RepertorioPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-40 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[12px] uppercase tracking-[0.45em] text-white/40 mb-16">
          {t.nav.repertorio}
        </h1>
        <div className="text-white/60 font-light italic tracking-wide">
          {t.common.comingSoon}
        </div>
      </div>
    </main>
  );
}