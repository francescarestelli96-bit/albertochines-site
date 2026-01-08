"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-7xl px-4 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div className="text-left">
            <div className="text-[12px] uppercase tracking-[0.45em] text-white/45">
              Alberto Chines
            </div>

            <h1 className="mt-5 font-light uppercase tracking-[0.18em] leading-[1.05] text-[40px] sm:text-[56px]">
              ALBERTO CHINES – PIANIST
            </h1>

            <p className="mt-7 max-w-md text-white/65 leading-[1.9]">
              {t.home.tagline}
            </p>
          </div>

          {/* RIGHT — no border/ring */}
          <div className="w-full">
            <Image
              src="/media/12-wide-stage.jpeg"
              alt="Alberto Chines"
              width={1600}
              height={1000}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
