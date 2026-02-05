"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

// Percorsi reali presi dal tuo screenshot della cartella public/media
const photos = [
  "/media/01-portrait.jpeg",
  "/media/02-profile.jpeg",
  "/media/03-wide-piano.jpeg",
  "/media/04-back.jpeg",
  "/media/07-vertical-stage.jpeg",
  "/media/08-mid-performance.jpeg",
  "/media/09-close-reading.jpeg",
  "/media/12-wide-stage.jpeg",
];

const videos = [
  { id: "OSRr9ASWODY", title: "SOLER Fandango in D minor R.146" },
  { id: "2nATAXQDNxg", title: "BEETHOVEN Variations and Fugue Op.35 “Eroica”" },
  { id: "-3bs1ZL1iM0", title: "ADÈS Darknesse Visible (after John Dowland)" },
  { id: "l2pcGL63nrI", title: "ČAJKOVSKIJ/FEINBERG Scherzo from Symphony N.6" },
  { id: "S9V10_retrc", title: "RAMEAU La Villageoise" },
  { id: "VSBjO2y5pU0", title: "CHOPIN Variations Brillantes Op.12" },
  { id: "L5A9QvuBlPE", title: "BARTÓK Dance Suite Sz.77 BB86b" },
  { id: "6TjURcUPG38", title: "FRESCOBALDI Aria detto Balletto" },
  { id: "Oef2DJmmG4E", title: "STRAVINKSIJ/AGOSTI L’Oiseau de Feu" },
  { id: "6BnFLOYoRFs", title: "LECTURE: The Rite of Spring (2025)" },
];

export default function MediaPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 sm:px-12 lg:px-24 font-extralight">
      <section className="mb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] tracking-[0.4em] mb-16 text-zinc-500 uppercase"
        >
          {t('media.photos')}
        </motion.h2>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="overflow-hidden bg-zinc-900"
            >
              <img 
                src={src} 
                alt="Alberto Chines" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] tracking-[0.4em] mb-16 text-zinc-500 uppercase"
        >
          {t('media.videos')}
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20">
          {videos.map((v) => (
            <div key={v.id}>
              <div className="relative aspect-video bg-zinc-950 shadow-2xl overflow-hidden group">
                <iframe 
                  src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0&modestbranding=1`} 
                  title={v.title}
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
              <p className="mt-6 text-[9px] tracking-[0.3em] text-zinc-500 uppercase">
                {v.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}