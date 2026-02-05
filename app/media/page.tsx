"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

// Percorsi reali dalle tue cartelle
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
  { id: "OSRr9ASWODY", composer: "ANTONIO SOLER", title: "Fandango in D minor R.146" },
  { id: "2nATAXQDNxg", composer: "LUDWIG VAN BEETHOVEN", title: "Variations and Fugue Op.35 “Eroica”" },
  { id: "-3bs1ZL1iM0", composer: "THOMAS ADÈS", title: "Darknesse Visible (after John Dowland)" },
  { id: "l2pcGL63nrI", composer: "P.I. ČAJKOVSKIJ / FEINBERG", title: "Scherzo from Symphony N.6" },
  { id: "S9V10_retrc", composer: "JEAN-PHILIPPE RAMEAU", title: "La Villageoise" },
  { id: "VSBjO2y5pU0", composer: "FRYDERYK CHOPIN", title: "Variations Brillantes Op.12" },
  { id: "L5A9QvuBlPE", composer: "BÉLA BARTÓK", title: "Dance Suite Sz.77 BB86b" },
  { id: "6TjURcUPG38", composer: "GIROLAMO FRESCOBALDI", title: "Aria detto Balletto" },
  { id: "Oef2DJmmG4E", composer: "IGOR STRAVINSKY / AGOSTI", title: "L’Oiseau de Feu" },
  { id: "6BnFLOYoRFs", composer: "LECTURE", title: "The Rite of Spring (2025)" },
];

export default function MediaPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 sm:px-12 lg:px-24 font-extralight uppercase">
      
      {/* SEZIONE FOTO */}
      <section className="mb-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl tracking-[0.4em] font-extralight"
          >
            {t('media.photos')}
          </motion.h2>
          
          <motion.a 
            href="#video-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border border-white/20 px-8 py-3 text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 w-fit font-light"
          >
            VAI AI VIDEO ↓
          </motion.a>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="overflow-hidden bg-zinc-900 grayscale hover:grayscale-0 transition-all duration-1000"
            >
              <img 
                src={src} 
                alt="Alberto Chines" 
                className="w-full h-auto hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEZIONE VIDEO */}
      <section id="video-section" className="pt-20">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl tracking-[0.4em] mb-24 font-extralight"
        >
          {t('media.videos')}
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-24">
          {videos.map((v) => (
            <motion.div 
              key={v.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video bg-zinc-950 overflow-hidden group mb-8">
                <iframe 
                  src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0&modestbranding=1`} 
                  title={v.title}
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-1000"
                ></iframe>
              </div>
              <div className="space-y-2 text-left">
                <p className="text-white text-[11px] md:text-sm tracking-[0.2em] font-normal">
                  {v.composer} <span className="text-zinc-600 mx-2">—</span> {v.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}