"use client";
import { useLanguage } from "../../components/LanguageProvider";

export default function Repertorio() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-48 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-5xl font-light uppercase tracking-tighter">
          {t('repertorio.title')}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contenuto del repertorio */}
        </div>
      </div>
    </main>
  );
}