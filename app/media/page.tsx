"use client";
import MediaGrid from "@/components/MediaGrid";
import { useLanguage } from "@/components/LanguageProvider";

export default function MediaPage() {
  const { t } = useLanguage();

  // Protezione per evitare errori durante il caricamento
  if (!t) return <div className="min-h-screen bg-neutral-950" />;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Intestazione della pagina */}
        <div className="mb-16">
          <h1 className="text-[12px] uppercase tracking-[0.45em] text-white/40 mb-2">
            {t.nav.media}
          </h1>
          <div className="h-[1px] w-12 bg-white/10" />
        </div>

        {/* Griglia delle immagini - Senza bordi e con lo stile definito in MediaGrid */}
        <section className="w-full">
          <MediaGrid />
        </section>
      </div>
    </main>
  );
}