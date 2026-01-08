"use client";

type MediaItem = {
  kind: "photo";
  title: string;
  src: string;       // es: "/media/01-portrait.jpeg"
  ratio: "portrait" | "landscape" | "square";
};

function ratioClass(r: MediaItem["ratio"]) {
  if (r === "portrait") return "aspect-[3/4]";
  if (r === "square") return "aspect-square";
  return "aspect-[16/10]";
}

export default function MediaGrid({ items }: { items: MediaItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((it) => (
        <div
          key={it.src}
          className="rounded-3xl border border-white/10 bg-white/[0.04] overflow-hidden"
        >
          <div className={"relative " + ratioClass(it.ratio)}>
            <img
              src={it.src}
              alt={it.title}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="p-6 border-t border-white/10">
            <div className="text-xs tracking-[0.28em] uppercase text-white/50">
              Photo
            </div>
            <div className="mt-2 text-white/85">{it.title}</div>
            <div className="mt-1 text-sm text-white/50">{it.src}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
