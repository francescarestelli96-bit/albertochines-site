"use client";
import { useLanguage } from "../../components/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-48 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-5xl font-light uppercase tracking-tighter">
          {t('about.title')}
        </h1>
        <div className="prose prose-invert text-white/70 font-light leading-relaxed">
          {/* Qui andrà il testo della bio, per ora t('about.content') */}
          <p>{t('about.description') || "Testo biografia in arrivo..."}</p>
        </div>
      </div>
    </main>
  );
}