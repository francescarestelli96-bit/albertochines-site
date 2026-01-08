"use client";
import { useLanguage } from "@/components/LanguageProvider";

export default function RepertorioPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-noise bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-[12px] uppercase tracking-[0.45em] text-white/60">
          {t.nav.repertorio}
        </h1>
        <p className="mt-6 text-white/65 leading-relaxed">
          {t.common.comingSoon}
        </p>
      </section>
    </main>
  );
}
