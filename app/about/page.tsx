"use client";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen pt-40 pb-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-[12px] uppercase tracking-[0.45em] text-white/40 mb-16">
        {t.about.title}
      </h1>
      <div className="space-y-8 text-white/70 leading-relaxed tracking-wide font-light text-[15px] whitespace-pre-line">
        {t.about.body}
      </div>
    </main>
  );
}