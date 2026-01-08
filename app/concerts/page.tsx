"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function ConcertsPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen px-6 py-16">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-light tracking-wide">{t.nav.concerts}</h1>
        <p className="mt-4 text-white/60">{t.common.comingSoon}</p>
      </section>
    </main>
  );
}
