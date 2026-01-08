"use client";

const mediaItems = [
  { src: "/media/01-portrait.jpeg" },
  { src: "/media/02-profile.jpeg" },
  { src: "/media/12-wide-stage.jpeg" },
  // Aggiungi qui gli altri file che hai nella cartella public/media
];

export default function MediaGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mediaItems.map((item, i) => (
        <div key={i} className="overflow-hidden rounded-sm bg-neutral-900">
          <img 
            src={item.src} 
            alt="Alberto Chines"
            className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-700 aspect-[4/5]"
          />
        </div>
      ))}
    </div>
  );
}