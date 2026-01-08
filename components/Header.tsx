// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { label: "Bio", href: "/about" },
  { label: "Repertorio", href: "/repertorio" },
  { label: "Media", href: "/media" },
  { label: "Concerti", href: "/concerts" },
  { label: "Contatti", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false); // chiudi menu quando cambi pagina
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-[11px] uppercase tracking-[0.4em] text-neutral-200 hover:text-white transition"
        >
          Alberto Chines
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.35em] text-neutral-400">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className={`hover:text-neutral-200 transition ${
                pathname === i.href ? "text-neutral-200" : ""
              }`}
            >
              {i.label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Lang pill (static) */}
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] uppercase tracking-[0.35em] text-neutral-400">
            <span>Lang</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-neutral-200">
              IT
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] uppercase tracking-[0.35em] text-neutral-200 hover:bg-white/[0.06] transition"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Apri menu"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-neutral-950/80 backdrop-blur-xl">
          <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3 text-[11px] uppercase tracking-[0.35em] text-neutral-300">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className={`py-2 hover:text-white transition ${
                  pathname === i.href ? "text-white" : ""
                }`}
              >
                {i.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
