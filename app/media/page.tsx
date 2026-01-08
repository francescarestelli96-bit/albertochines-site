// app/media/page.tsx
import MediaGrid, { MediaItem } from "../../components/MediaGrid";

const items: MediaItem[] = [
  { src: "/media/01-portrait.jpeg" },
  { src: "/media/02-profile.jpeg" },
  { src: "/media/05-hands.jpeg" },
  { src: "/media/09-close-reading.jpeg" },
  { src: "/media/12-wide-stage.jpeg" },
];

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-noise bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20">
        <h1 className="text-[11px] uppercase tracking-[0.4em] text-neutral-400">
          Media
        </h1>

        <div className="mt-8">
          <MediaGrid items={items} />
        </div>
      </section>
    </main>
  );
}
