"use client";

import Image from "next/image";

export type MediaItem = {
  src: string;
  alt?: string;
};

export type MediaGridProps = {
  items: MediaItem[];
};

export default function MediaGrid({ items }: MediaGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <div
          key={`${item.src}-${i}`}
          className="group relative overflow-hidden rounded-3xl border border-white/25 bg-white/[0.02]"
        >
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={item.src}
              alt={item.alt ?? ""}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={i < 2}
              className="object-cover grayscale transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>

          {/* NIENTE nomi/caption sotto: volutamente vuoto */}
        </div>
      ))}
    </div>
  );
}
