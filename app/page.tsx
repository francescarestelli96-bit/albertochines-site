"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import PlaceholderMedia from "@/components/PlaceholderMedia";

function Tile({
  href,
  kicker,
  title,
  body,
  right,
}: {
  href: string;
  kicker: string;
  title: string;
  body: string;
  right?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 hover:bg-white/[0.07] transition"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="text-xs tracking-[0.28em] uppercase text-white/55">
            {kicker}
          </div>
          <div className="mt-3 text-white/90 text-lg">{title}</div>
          <div className="mt-2 text-white/55 text-sm leading-relaxed">{body}</div>
          <div className="mt-6 text-sm text-white/55 group-hover:text-white/75 transition">
            Apri →
          </div>
        </div>

        {right ? <div className="hidden lg:block w-48">{right}</div> : null}
      </div>
    </Link>
  );
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen px-6 py-16">
      <section className="mx-auto max-w-6xl">
        <div className="text-xs tracking-[0.34em] uppercase text-white/60">
          Alberto Chines
        </div>

        <h1 className="mt-4 text-5xl md:text-6xl font-light tracking-wide">
          {t.home.headline}
        </h1>

        <p className="mt-5 max-w-2xl text-white/65 leading-relaxed">
          {t.home.subheadline}
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Tile
            href="/about"
            kicker={t.nav.bio}
            title={t.home.bioTeaser}
            body="Formazione, debutto, premi, attività e profilo completo."
          />
          <Tile
            href="/media"
            kicker={t.nav.media}
            title={t.home.mediaTeaser}
            body="Galleria foto selezionate (press-ready)."
            right={<PlaceholderMedia label="Preview" ratio="aspect-[16/10]" />}
          />
          <Tile
            href="/repertorio"
            kicker={t.nav.repertoire}
            title={t.home.repertoireTeaser}
            body="Programmi solistici, cameristici e progetti."
          />
          <Tile
            href="/concerts"
            kicker={t.nav.concerts}
            title={t.home.concertsTeaser}
            body="Prossimi concerti e archivio."
          />
          <div className="lg:col-span-2">
            <Tile
              href="/contact"
              kicker={t.nav.contact}
              title={t.home.contactTeaser}
              body="Booking, comunicazione, richieste stampa."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
