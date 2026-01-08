"use client";

import { useLanguage } from "@/components/LanguageProvider";
import MediaGrid from "@/components/MediaGrid";

export default function MediaPage() {
  const { t } = useLanguage();

  const items = [
    { kind: "photo" as const, title: "Portrait", src: "/media/01-portrait.jpeg", ratio: "portrait" as const },
    { kind: "photo" as const, title: "Profile", src: "/media/02-profile.jpeg", ratio: "portrait" as const },
    { kind: "photo" as const, title: "Wide Piano", src: "/media/03-wide-piano.jpeg", ratio: "landscape" as const },
    { kind: "photo" as const, title: "Back", src: "/media/04-back.jpeg", ratio: "portrait" as const },
    { kind: "photo" as const, title: "Hands", src: "/media/05-hands.jpeg", ratio: "portrait" as const },
    { kind: "photo" as const, title: "Score Open", src: "/media/06-score-open.jpeg", ratio: "landscape" as const },
    { kind: "photo" as const, title: "Vertical Stage", src: "/media/07-vertical-stage.jpeg", ratio: "portrait" as const },
    { kind: "photo" as const, title: "Mid Performance", src: "/media/08-mid-performance.jpeg", ratio: "landscape" as const },
    { kind: "photo" as const, title: "Close Reading", src: "/media/09-close-reading.jpeg", ratio: "landscape" as const },
    { kind: "photo" as const, title: "Hands II", src: "/media/10-hands-2.jpeg", ratio: "portrait" as const },
    { kind: "photo" as const, title: "Profile II", src: "/media/11-profile-2.jpeg", ratio: "portrait" as const },
    { kind: "photo" as const, title: "Wide Stage", src: "/media/12-wide-stage.jpeg", ratio: "landscape" as const },
  ];

  return (
    <main className="min-h-screen px-6 py-16">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-light tracking-wide">{t.nav.media}</h1>
        <p className="mt-4 text-white/60">Photos & video. (Video coming soon.)</p>

        <div className="mt-10">
          <MediaGrid items={items} />
        </div>
      </section>
    </main>
  );
}
