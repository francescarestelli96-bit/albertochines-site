"use client";
import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";

export default function RepertoirePage() {
  const { t } = useLanguage();
  const chamber = t('repertoire.content');
  const orchestra = t('repertoire.orchestra');

  return (
    <main className="min-h-screen bg-black text-white pt-40 pb-20 px-6 md:px-24">
      <div className="max-w-3xl mr-auto text-left">
        <motion.h1 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-3xl md:text-5xl tracking-[0.4em] mb-24 font-extralight uppercase"
        >
          {t('repertoire.title')}
        </motion.h1>

        <section className="mb-32">
          <h2 className="text-zinc-500 text-xs tracking-[0.5em] mb-12 border-b border-white/10 pb-4 font-light uppercase italic">
            {t('repertoire.subtitle')}
          </h2>
          <div className="space-y-16">
            {Array.isArray(chamber) && chamber.map((item: any, i: number) => (
              <div key={i}>
                <h3 className="text-sm md:text-lg tracking-[0.15em] mb-3 uppercase">{item.composer}</h3>
                <p className="text-zinc-400 text-xs md:text-base font-light italic leading-relaxed">{item.works}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-zinc-500 text-xs tracking-[0.5em] mb-12 border-b border-white/10 pb-4 font-light uppercase italic">
            {t('repertoire.orchestraTitle')}
          </h2>
          <div className="space-y-16">
            {Array.isArray(orchestra) && orchestra.map((item: any, i: number) => (
              <div key={i}>
                <h3 className="text-sm md:text-lg tracking-[0.15em] mb-3 uppercase">{item.composer}</h3>
                <p className="text-zinc-400 text-xs md:text-base font-light leading-relaxed">{item.works}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}