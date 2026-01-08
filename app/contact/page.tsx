"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen px-6 py-16">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-light tracking-wide">{t.nav.contact}</h1>
        <p className="mt-4 text-white/60">booking@… (placeholder)</p>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-white/70">
          Instagram / YouTube / Spotify (placeholder)
        </div>
      </section>
    </main>
  );
}
