"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-[12px] uppercase tracking-[0.45em] text-white/50">
          {t.about.title}
        </h1>

        <article className="mt-10 space-y-6 text-white/75 leading-[1.95]">
          {t.about.body.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
      </section>
    </main>
  );
}
