"use client";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const { t, lang, setLang } = useLanguage();

  const menuItems = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.bio, href: "/about" },
    { name: t.nav.repertorio, href: "/repertorio" },
    { name: t.nav.media, href: "/media" },
    { name: t.nav.concerti, href: "/concerts" },
    { name: t.nav.contatti, href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <Link href="/" className="text-[11px] tracking-[0.4em] font-light text-white uppercase">
          ALBERTO CHINES
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-6 text-[10px] uppercase tracking-[0.2em] text-white/50">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex gap-3 text-[10px] font-bold">
            <button onClick={() => setLang("it")} className={lang === "it" ? "text-white" : "text-white/20"}>IT</button>
            <span className="text-white/10">|</span>
            <button onClick={() => setLang("en")} className={lang === "en" ? "text-white" : "text-white/20"}>EN</button>
          </div>
        </div>
      </div>
    </header>
  );
}