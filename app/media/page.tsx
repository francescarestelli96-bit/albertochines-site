import MediaGrid, { MediaItem } from "../../components/MediaGrid";

const items: MediaItem[] = [
  { src: "/media/01-portrait.jpeg", alt: "Portrait" },
  { src: "/media/02-profile.jpeg", alt: "Profile" },
  { src: "/media/05-hands.jpeg", alt: "Hands" },
  { src: "/media/09-close-reading.jpeg", alt: "Reading" },
  { src: "/media/12-wide-stage.jpeg", alt: "Stage" },
];

export default function MediaPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-[12px] uppercase tracking-[0.45em] text-white/50">MEDIA</h1>
        <div className="mt-8">
          <MediaGrid items={items} />
        </div>
      </section>
    </main>
  );
}
