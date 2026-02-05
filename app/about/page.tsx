"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-40 pb-20 px-6 md:px-24 font-extralight uppercase">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl tracking-[0.4em] mb-20"
        >
          {t('bio.title')}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-12"
        >
          <p className="text-zinc-400 text-sm md:text-base leading-[2.2] tracking-[0.15em] lowercase first-letter:uppercase whitespace-pre-line">
            {t('bio.content')}
          </p>
          
          <div className="pt-16">
            <a 
              href={t('bio.pressKitUrl')} 
              download
              className="inline-block border border-white/20 px-10 py-5 text-[10px] tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500"
            >
              {t('bio.pressKitBtn')}
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}