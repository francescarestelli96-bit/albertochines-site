"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "it" | "en";

export type Dictionary = {
  nav: { home: string; bio: string; repertorio: string; media: string; concerti: string; contatti: string; };
  common: { comingSoon: string };
  home: { title: string; subtitle: string; tagline: string };
  about: { title: string; body: string };
};

const BIO_IT = `Una formazione solida e il confluire di tante esperienze didattiche e professionali assai diversificate hanno contribuito a fare di Alberto Chines un artista vivace e poliedrico... [continua col tuo testo]`;
const BIO_EN = `A solid education and the merging of many diversified learning and professional experiences... [continua col tuo testo]`;

const DICTS: Record<Lang, Dictionary> = {
  it: {
    nav: { home: "Home", bio: "Bio", repertorio: "Repertorio", media: "Media", concerti: "Concerti", contatti: "Contatti" },
    common: { comingSoon: "In aggiornamento." },
    home: { title: "ALBERTO CHINES", subtitle: "PIANIST", tagline: "Un profilo essenziale dedicato all’interpretazione, al repertorio e all’attività concertistica." },
    about: { title: "Biografia", body: BIO_IT },
  },
  en: {
    nav: { home: "Home", bio: "Bio", repertorio: "Repertoire", media: "Media", concerti: "Concerts", contatti: "Contacts" },
    common: { comingSoon: "Coming soon." },
    home: { title: "ALBERTO CHINES", subtitle: "PIANIST", tagline: "An essential profile dedicated to interpretation, repertoire and concert activity." },
    about: { title: "Biography", body: BIO_EN },
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dictionary };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("it");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "it" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const value = useMemo(() => ({ lang, setLang, t: DICTS[lang] }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}