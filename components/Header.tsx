"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={[
        "text-[11px] uppercase tracking-[0.45em] transition-colors",
        active ? "text-white" : "text-white/55 hover:text-white/85",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="text-[12px] uppercase tracking-[0.45em] text-white/85 hover:text-white">
          Alberto Chines
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/" label={t.nav.home} />
          <NavLink href="/about" label={t.nav.bio} />
          <NavLink href="/repertorio" label={t.nav.repertorio} />
          <NavLink href="/media" label={t.nav.media} />
          <NavLink href="/concerts" label={t.nav.concerti} />
          <NavLink href="/contact" label={t.nav.contatti} />
        </nav>

        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-white/70">
          <span className="hidden sm:inline">Lang</span>
          <button
            onClick={() => setLang("it")}
            className={lang === "it" ? "text-white" : "text-white/50 hover:text-white/80"}
            aria-label="Italiano"
          >
            IT
          </button>
          <span className="text-white/25">·</span>
          <button
            onClick={() => setLang("en")}
            className={lang === "en" ? "text-white" : "text-white/50 hover:text-white/80"}
            aria-label="English"
          >
            EN
          </button>
        </div>
      </div>

      {/* mobile ultra-minimale */}
      <div className="md:hidden border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex gap-5 overflow-x-auto">
          <NavLink href="/" label={t.nav.home} />
          <NavLink href="/about" label={t.nav.bio} />
          <NavLink href="/repertorio" label={t.nav.repertorio} />
          <NavLink href="/media" label={t.nav.media} />
          <NavLink href="/concerts" label={t.nav.concerti} />
          <NavLink href="/contact" label={t.nav.contatti} />
        </div>
      </div>
    </header>
  );
}
