"use client";
import MediaGrid from "@/components/MediaGrid";
import { useLanguage } from "@/components/LanguageProvider";

export default function MediaPage() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-[12px] uppercase tracking-[0.45em] text-white/40 mb-12">{t.nav.media}</h1>
      <MediaGrid />
    </main>
  );
}