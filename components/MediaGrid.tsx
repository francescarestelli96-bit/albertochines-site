"use client";

import Image from "next/image";

export type MediaItem = {
  src: string;
};

export default function MediaGrid({ items }: { items: MediaItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <div key={i} className="overflow-hidden rounded-2xl">
          <Image
            src={item.src}
            alt=""
            width={1400}
            height={1800}
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
          />
        </div>
      ))}
    </div>
  );
}
