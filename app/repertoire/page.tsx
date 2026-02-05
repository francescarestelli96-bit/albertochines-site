"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function RepertoirePage() {
  const { t } = useLanguage();
  const items = t('repertoire.items');

  return (
    <main className="min-h-screen bg-black text-white pt-40 pb-20 px-6 md:px-24 font-extralight uppercase">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl tracking-[0.4em] mb-24 text-center">{t('repertoire.title')}</h1>
        <section>
          <h2 className="text-zinc-500 text-[10px] tracking-[0.5em] mb-12 border-b border-white/10 pb-4">{t('repertoire.soloChamber')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {Array.isArray(items) && items.map((item: any, i: number) => (
              <div key={i}>
                <h3 className="text-[11px] tracking-[0.2em] mb-2 text-white">{item.composer}</h3>
                <p className="text-zinc-500 text-[10px] tracking-wider italic lowercase first-letter:uppercase">{item.works}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}