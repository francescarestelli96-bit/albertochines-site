// components/MediaGrid.tsx
import Image from "next/image";

export type MediaItem = {
  src: string; // es: "/media/01-portrait.jpeg"
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
              alt={it.alt ?? "Media"}
              fill
              className="object-cover transition duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
