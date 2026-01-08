"use client";

const images = [
  { src: "/media/01-portrait.jpeg" },
  { src: "/media/02-profile.jpeg" },
  { src: "/media/12-wide-stage.jpeg" }
];

export default function MediaGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-black">
      {images.map((img, i) => (
        <div key={i} className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition duration-700">
          <img src={img.src} className="w-full h-full object-cover" alt="Gallery" />
        </div>
      ))}
    </div>
  );
}