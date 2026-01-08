"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "it" | "en";

type Dictionary = {
  nav: {
    home: string;
    bio: string;
    repertorio: string;
    media: string;
    concerts: string;
    contact: string;
  };
  common: {
    lang: string;
  };
  pages: {
    mediaTitle: string;
    bioTitle: string;
  };
};

const DICT: Record<Lang, Dictionary> = {
  it: {
    nav: {
      home: "Home",
      bio: "Bio",
      repertorio: "Repertorio",
      media: "Media",
      concerts: "Concerti",
      contact: "Contatti",
    },
    common: { lang: "Lang" },
    pages: {
      mediaTitle: "Media",
      bioTitle: "Biografia",
    },
  },
  en: {
    nav: {
      home: "Home",
      bio: "Bio",
      repertorio: "Repertoire",
      media: "Media",
      concerts: "Concerts",
      contact: "Contacts",
    },
    common: { lang: "Lang" },
    pages: {
      mediaTitle: "Media",
      bioTitle: "Biography",
    },
  },
};

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("it");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("lang") : null;
    if (saved === "it" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("lang", l);
  };

  const value = useMemo<LanguageContextType>(() => {
    return { lang, setLang, t: DICT[lang] };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
