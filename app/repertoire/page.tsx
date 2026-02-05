"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function RepertoirePage() {
  const { t } = useLanguage();
  const items = t('repertoire.items');

  return (
    <main className="min-h-screen bg-black text-white pt-40 pb-20 px-6 md:px-24 font-extralight uppercase">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl md:text-6xl tracking-[0.4em] mb-24"
        >
          {t('repertoire.title')}
        </motion.h1>

        <section>
          <h2 className="text-zinc-500 text-[10px] tracking-[0.5em] mb-16 border-b border-white/10 pb-4">
            {t('repertoire.soloChamber')}
          </h2>
          
          <div className="space-y-16">
            {Array.isArray(items) && items.map((item: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xs md:text-sm tracking-[0.2em] mb-3 text-white">
                  {item.composer}
                </h3>
                <p className="text-zinc-500 text-[10px] md:text-[11px] tracking-widest italic lowercase first-letter:uppercase">
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