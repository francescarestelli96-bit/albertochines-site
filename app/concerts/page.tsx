"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function ConcertsPage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen px-6 py-16">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-light tracking-wide uppercase">
          {lang === "it" ? "Concerti" : "Concerts"}
        </h1>

        <p className="mt-4 text-white/60">
          {lang === "it"
            ? "Calendario in aggiornamento."
            : "Concert schedule coming soon."}
        </p>
      </section>
    </main>
  );
}
