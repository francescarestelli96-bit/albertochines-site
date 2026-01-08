"use client";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen bg-noise bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-3xl px-4 py-16 pt-32">
        <h1 className="text-[12px] uppercase tracking-[0.45em] text-white/60">
          {t.about.title}
        </h1>
        <div className="mt-8 text-white/65 leading-relaxed font-light whitespace-pre-line text-sm md:text-base">
          {t.about.body}
        </div>
      </section>
    </main>
  );
}