"use client";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-40 pb-20 px-6">
      <section className="mx-auto max-w-3xl">
        <h1 className="text-[12px] uppercase tracking-[0.45em] text-white/40 mb-12">
          {t.about.title}
        </h1>
        <div className="text-white/70 leading-relaxed font-light whitespace-pre-line text-base antialiased tracking-wide">
          {t.about.body}
        </div>
      </section>
    </main>
  );
}