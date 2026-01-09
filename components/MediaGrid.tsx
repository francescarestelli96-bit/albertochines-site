"use client";

const mediaItems = [
  { src: "/media/01-portrait.jpeg" },
  { src: "/media/02-profile.jpeg" },
  { src: "/media/03-wide-piano.jpeg" },
  { src: "/media/04-back.jpeg" },
  { src: "/media/05-hands.jpeg" },
  { src: "/media/07-vertical-stage.jpeg" },
  { src: "/media/08-mid-performance.jpeg" },
  { src: "/media/11-profile-2.jpeg" },
  { src: "/media/12-wide-stage.jpeg" },
];

export default function MediaGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0"> {/* gap-0 per avere le foto attaccate, o gap-1 per un filo di spazio */}
      {mediaItems.map((item, i) => (
        <div key={i} className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
          <img 
            src={item.src} 
            alt="Alberto Chines"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700 ease-in-out"
          />
        </div>
      ))}
    </div>
  );
}