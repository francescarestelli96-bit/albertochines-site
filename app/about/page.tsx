"use client";
import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-40 pb-32 px-6 md:px-24">
      <div className="max-w-3xl mx-auto text-left">
        <motion.h1 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-3xl md:text-5xl tracking-[0.4em] mb-16 font-extralight uppercase"
        >
          {t('bio.title')}
        </motion.h1>

        <div className="space-y-12">
          <p className="text-zinc-300 text-base md:text-lg leading-[2] tracking-wide font-light whitespace-pre-line">
            {t('bio.content')}
          </p>
          
          <div className="pt-20">
            <a 
              href={t('bio.pressKitUrl')} 
              download 
              className="inline-block border border-white/20 px-10 py-5 text-xs tracking-[0.4em] font-light hover:bg-white hover:text-black transition-all uppercase"
            >
              {t('bio.pressKitBtn')}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}