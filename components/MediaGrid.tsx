// components/MediaGrid.tsx
import Image from "next/image";

export type MediaItem = {
  src: string;
  alt?: string;
};

export default function MediaGrid({ items }: { items: MediaItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div
          key={it.src}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={it.src}
              alt={it.alt ?? ""}
              fill
              className="object-cover"
            />
          </div>
          {/* NIENTE CAPTION. NIENTE NOMI. */}
        </div>
      ))}
    </div>
  );
}
