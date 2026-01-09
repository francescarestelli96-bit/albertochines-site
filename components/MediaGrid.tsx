"use client";
const mediaItems = [
  { src: "/media/01-portrait.jpeg" }, { src: "/media/02-profile.jpeg" },
  { src: "/media/03-wide-piano.jpeg" }, { src: "/media/12-wide-stage.jpeg" },
  { src: "/media/07-vertical-stage.jpeg" }, { src: "/media/08-mid-performance.jpeg" }
];

export default function MediaGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
      {mediaItems.map((item, i) => (
        <div key={i} className="aspect-[4/5] overflow-hidden bg-neutral-900">
          <img src={item.src} className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500" />
        </div>
      ))}
    </div>
  );
}