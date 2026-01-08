"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";

function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={[
        "text-xs tracking-[0.28em] uppercase transition",
        active ? "text-white" : "text-white/55 hover:text-white/85",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-xs tracking-[0.34em] uppercase text-white/85 hover:text-white transition"
        >
          Alberto Chines
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/about" label={t.nav.bio} />
          <NavLink href="/repertorio" label={t.nav.repertoire} />
          <NavLink href="/media" label={t.nav.media} />
          <NavLink href="/concerts" label={t.nav.concerts} />
          <NavLink href="/contact" label={t.nav.contact} />
        </nav>

        <button
          onClick={toggleLang}
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.22em] uppercase text-white/80 hover:bg-white/10 hover:text-white transition"
          aria-label="Toggle language"
        >
          Lang <span className="ml-2 rounded-full border border-white/15 px-2 py-1">{lang.toUpperCase()}</span>
        </button>
      </div>
    </header>
  );
}
