"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen bg-black text-white pt-40 pb-20 px-6 md:px-24 font-extralight uppercase">
      <div className="max-w-5xl mx-auto">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl md:text-6xl tracking-[0.4em] mb-16">
          {t('bio.title')}
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <p className="text-zinc-400 text-sm leading-relaxed tracking-widest lowercase first-letter:uppercase whitespace-pre-line">
              {t('bio.content')}
            </p>
            <div className="pt-12">
              <a href={t('bio.pressKitUrl')} download className="border border-white/20 px-8 py-4 text-[10px] tracking-widest hover:bg-white hover:text-black transition-all">
                {t('bio.pressKitBtn')}
              </a>
            </div>
          </div>
          <img src="/media/01-portrait.jpeg" alt="Alberto Chines" className="w-full grayscale h-auto shadow-2xl" />
        </div>
      </div>
    </main>
  );
}