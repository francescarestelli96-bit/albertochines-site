"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";

const navItemClass =
  "text-[12px] uppercase tracking-[0.35em] text-white/60 hover:text-white transition";

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  const isActive = (href: string) => (pathname === href ? "text-white" : "");

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-[12px] uppercase tracking-[0.45em] text-white/90 hover:text-white transition whitespace-nowrap"
        >
          ALBERTO CHINES
        </Link>

        {/* Nav - sempre visibile anche mobile (wrap) */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link className={`${navItemClass} ${isActive("/")}`} href="/">
            {t.nav.home}
          </Link>
          <Link className={`${navItemClass} ${isActive("/about")}`} href="/about">
            {t.nav.bio}
          </Link>
          <Link className={`${navItemClass} ${isActive("/repertorio")}`} href="/repertorio">
            {t.nav.repertorio}
          </Link>
          <Link className={`${navItemClass} ${isActive("/media")}`} href="/media">
            {t.nav.media}
          </Link>
          <Link className={`${navItemClass} ${isActive("/concerts")}`} href="/concerts">
            {t.nav.concerts}
          </Link>
          <Link className={`${navItemClass} ${isActive("/contact")}`} href="/contact">
            {t.nav.contact}
          </Link>
        </nav>

        {/* Lang switch */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/60">
              {t.common.lang}
            </span>

            <button
              onClick={() => setLang("it")}
              className={`text-[11px] uppercase tracking-[0.3em] transition ${
                lang === "it" ? "text-white" : "text-white/50 hover:text-white/80"
              }`}
              aria-pressed={lang === "it"}
              type="button"
            >
              IT
            </button>
            <span className="text-white/20">•</span>
            <button
              onClick={() => setLang("en")}
              className={`text-[11px] uppercase tracking-[0.3em] transition ${
                lang === "en" ? "text-white" : "text-white/50 hover:text-white/80"
              }`}
              aria-pressed={lang === "en"}
              type="button"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
