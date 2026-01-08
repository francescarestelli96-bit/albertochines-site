import Image from "next/image";

export type MediaItem = {
  src: string;
  alt?: string;
};

type MediaGridProps = {
  items: MediaItem[];
};

export default function MediaGrid({ items }: MediaGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <div
          key={`${item.src}-${i}`}
          className="group overflow-hidden rounded-3xl border border-white/15 bg-white/[0.02]"
        >
          <div className="relative aspect-[4/5] w-full">
            <Image
              src={item.src}
              alt={item.alt ?? "Media"}
              fill
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
