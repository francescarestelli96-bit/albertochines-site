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
    <header className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-start">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-sm tracking-[0.3em] font-light text-white uppercase">
              ALBERTO CHINES
            </Link>
            <div className="flex gap-4 text-[10px] tracking-widest text-white/40 uppercase">
              <button onClick={() => setLang("it")} className={lang === "it" ? "text-white" : ""}>IT</button>
              <span>/</span>
              <button onClick={() => setLang("en")} className={lang === "en" ? "text-white" : ""}>EN</button>
            </div>
          </div>
          
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-white/60">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}