"use client";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const { t, lang, setLang } = useLanguage();

  const menu = [
    { n: t.nav.home, h: "/" },
    { n: t.nav.bio, h: "/about" },
    { n: t.nav.repertorio, h: "/repertorio" },
    { n: t.nav.media, h: "/media" },
    { n: t.nav.concerti, h: "/concerts" },
    { n: t.nav.contatti, h: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 px-6 py-10 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
      <Link href="/" className="text-[11px] uppercase tracking-[0.4em] font-medium">
        ALBERTO CHINES
      </Link>

      <nav className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] text-white/60">
        {menu.map((m) => (
          <Link key={m.h} href={m.h} className="hover:text-white transition-colors">{m.n}</Link>
        ))}
      </nav>

      <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
        <span className="text-[9px] uppercase tracking-widest text-white/40 font-medium">Lang</span>
        <div className="flex gap-2 text-[10px] font-bold">
          <button onClick={() => setLang("it")} className={lang === "it" ? "text-white" : "text-white/20"}>IT</button>
          <span className="text-white/10">·</span>
          <button onClick={() => setLang("en")} className={lang === "en" ? "text-white" : "text-white/20"}>EN</button>
        </div>
      </div>
    </header>
  );
}