"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

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
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 sm:px-12 lg:px-24">
       <h2 className="text-[10px] tracking-[0.4em] mb-16 text-zinc-500 uppercase">{t('media.videos')}</h2>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {videos.map((v) => (
            <div key={v.id}>
              <div className="relative aspect-video bg-zinc-900 group">
                <iframe 
                  src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0`} 
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-6 text-[9px] tracking-[0.3em] text-zinc-500 uppercase">{v.title}</p>
            </div>
          ))}
       </div>
    </main>
  );
}