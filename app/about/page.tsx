"use client";
import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-40 pb-20 px-6 md:px-24 font-extralight uppercase">
      <div className="max-w-3xl mx-auto text-left">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl md:text-5xl tracking-[0.4em] mb-16">
          {t('bio.title')}
        </motion.h1>
        <p className="text-zinc-400 text-sm md:text-base leading-[2.2] tracking-[0.15em] lowercase first-letter:uppercase whitespace-pre-line">
          {t('bio.content')}
        </p>
        <div className="pt-16">
          <a href={t('bio.pressKitUrl')} download className="inline-block border border-white/20 px-8 py-4 text-[10px] tracking-[0.4em] hover:bg-white hover:text-black transition-all">
            {t('bio.pressKitBtn')}
          </a>
        </div>
      </div>
    </main>
  );
}