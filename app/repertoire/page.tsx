"use client";
import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";

export default function RepertoirePage() {
  const { t } = useLanguage();
  const chamber = t('repertoire.content');
  const orchestra = t('repertoire.orchestra');

  return (
    <main className="min-h-screen bg-black text-white pt-40 pb-20 px-6 md:px-24 font-extralight uppercase">
      <div className="max-w-3xl mx-auto">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl md:text-5xl tracking-[0.4em] mb-24 text-left">
          {t('repertoire.title')}
        </motion.h1>

        {/* Sezione Solo & Chamber */}
        <section className="text-left mb-32">
          <h2 className="text-zinc-500 text-[10px] tracking-[0.5em] mb-12 border-b border-white/10 pb-4 font-normal italic">
            {t('repertoire.subtitle')}
          </h2>
          <div className="space-y-12">
            {Array.isArray(chamber) && chamber.map((item: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h3 className="text-[11px] tracking-[0.2em] mb-2 text-white">{item.composer}</h3>
                <p className="text-zinc-500 text-[10px] tracking-widest leading-relaxed whitespace-pre-line lowercase first-letter:uppercase">
                  {item.works}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sezione Orchestra */}
        <section className="text-left">
          <h2 className="text-zinc-500 text-[10px] tracking-[0.5em] mb-12 border-b border-white/10 pb-4 font-normal italic">
            {t('repertoire.orchestraTitle')}
          </h2>
          <div className="space-y-12">
            {Array.isArray(orchestra) && orchestra.map((item: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h3 className="text-[11px] tracking-[0.2em] mb-2 text-white">{item.composer}</h3>
                <p className="text-zinc-500 text-[10px] tracking-widest leading-relaxed lowercase first-letter:uppercase">
                  {item.works}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}