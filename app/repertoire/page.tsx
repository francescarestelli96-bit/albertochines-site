"use client";
import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";

export default function RepertoirePage() {
  const { t } = useLanguage();
  const chamber = t('repertoire.content');
  const orchestra = t('repertoire.orchestra');

  return (
    <main className="min-h-screen bg-black text-white pt-40 pb-32 px-6 md:px-24">
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-3xl md:text-5xl tracking-[0.4em] mb-24 text-left font-extralight uppercase"
        >
          {t('repertoire.title')}
        </motion.h1>

        {/* Sezione Solo & Chamber */}
        <section className="text-left mb-32">
          <h2 className="text-zinc-500 text-xs tracking-[0.5em] mb-16 border-b border-white/10 pb-4 font-light uppercase">
            {t('repertoire.subtitle')}
          </h2>
          
          <div className="space-y-16"> {/* Spazio aumentato tra i blocchi */}
            {Array.isArray(chamber) && chamber.map((item: any, i: number) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="group"
              >
                <h3 className="text-sm md:text-base tracking-[0.2em] mb-4 text-white font-normal uppercase transition-colors group-hover:text-zinc-400">
                  {item.composer}
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm tracking-widest leading-relaxed font-light italic">
                  {item.works}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sezione Orchestra */}
        <section className="text-left">
          <h2 className="text-zinc-500 text-xs tracking-[0.5em] mb-16 border-b border-white/10 pb-4 font-light uppercase">
            {t('repertoire.orchestraTitle')}
          </h2>
          <div className="space-y-16">
            {Array.isArray(orchestra) && orchestra.map((item: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-sm md:text-base tracking-[0.2em] mb-4 text-white font-normal uppercase">
                  {item.composer}
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm tracking-widest leading-relaxed font-light">
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