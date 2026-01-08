"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

type Lang = "it" | "en";

type Translations = {
  nav: {
    bio: string;
    repertoire: string;
    media: string;
    concerts: string;
    contact: string;
  };
  home: {
    headline: string;
    subheadline: string;
    ctaBio: string;
    ctaContact: string;
    open: string;
    bioTeaser: string;
    repertoireTeaser: string;
    mediaTeaser: string;
    concertsTeaser: string;
    contactTeaser: string;
  };
  bio: {
    title: string;
    subtitle: string;
    summaryLabel: string;
    sections: {
      education: { label: string; value: string };
      debut: { label: string; value: string };
      awards: { label: string; value: string };
      activity: { label: string; value: string };
      steinway: { label: string; value: string };
    };
  };
  common: {
    comingSoon: string;
  };
};

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const translationsByLang: Record<Lang, Translations> = {
  it: {
    nav: {
      bio: "Bio",
      repertoire: "Repertorio",
      media: "Media",
      concerts: "Concerti",
      contact: "Contatti",
    },
    home: {
      headline: "Pianista",
      subheadline: "Un profilo essenziale: bio, repertorio, media e contatti.",
      ctaBio: "Scopri la bio",
      ctaContact: "Contatti",
      open: "Apri",
      bioTeaser: "Profilo artistico",
      repertoireTeaser: "Programmi e progetti",
      mediaTeaser: "Foto e media",
      concertsTeaser: "Concerti",
      contactTeaser: "Booking & contatti",
    },
    bio: {
      title: "Bio",
      subtitle: "Profilo artistico",
      summaryLabel: "In sintesi",
      sections: {
        education: {
          label: "Formazione",
          value: "Accademia di Imola · Conservatorio di Bolzano",
        },
        debut: {
          label: "Debutto",
          value: "Teatro Massimo di Palermo (15 anni)",
        },
        awards: {
          label: "Riconoscimenti",
          value: "Palma d’Oro · Sony Classical Talent Scout · Euregio Piano Award",
        },
        activity: {
          label: "Attività",
          value: "Solista · Cameristica · Direzione artistica",
        },
        steinway: {
          label: "Steinway Artist",
          value: "Dal 2020",
        },
      },
    },
    common: {
      comingSoon: "In arrivo",
    },
  },

  en: {
    nav: {
      bio: "Bio",
      repertoire: "Repertoire",
      media: "Media",
      concerts: "Concerts",
      contact: "Contact",
    },
    home: {
      headline: "Pianist",
      subheadline: "An essential profile: bio, repertoire, media and contact.",
      ctaBio: "Read bio",
      ctaContact: "Contact",
      open: "Open",
      bioTeaser: "Artistic profile",
      repertoireTeaser: "Programs and projects",
      mediaTeaser: "Photos and media",
      concertsTeaser: "Concerts",
      contactTeaser: "Booking & info",
    },
    bio: {
      title: "Bio",
      subtitle: "Artistic profile",
      summaryLabel: "Summary",
      sections: {
        education: {
          label: "Education",
          value: "Accademia di Imola · Bolzano Conservatory",
        },
        debut: {
          label: "Debut",
          value: "Teatro Massimo of Palermo (age 15)",
        },
        awards: {
          label: "Awards",
          value: "Palma d’Oro · Sony Classical Talent Scout · Euregio Piano Award",
        },
        activity: {
          label: "Activity",
          value: "Soloist · Chamber music · Artistic direction",
        },
        steinway: {
          label: "Steinway Artist",
          value: "Since 2020",
        },
      },
    },
    common: {
      comingSoon: "Coming soon",
    },
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("it");

  const toggleLang = () => setLang((p) => (p === "it" ? "en" : "it"));

  const t = useMemo(() => translationsByLang[lang], [lang]);

  const value: LanguageContextType = useMemo(
    () => ({ lang, setLang, toggleLang, t }),
    [lang, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
