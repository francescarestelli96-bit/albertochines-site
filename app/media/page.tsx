import MediaGrid, { MediaItem } from "@/components/MediaGrid";

const items: MediaItem[] = [
  { src: "/media/01-portrait.jpeg" },
  { src: "/media/02-profile.jpeg" },
  { src: "/media/05-hands.jpeg" },
  { src: "/media/09-close-reading.jpeg" },
  { src: "/media/12-wide-stage.jpeg" },
];

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-[12px] uppercase tracking-[0.45em] text-white/50">Media</h1>
        <div className="mt-8">
          <MediaGrid items={items} />
        </div>
      </section>
    </main>
  );
}
