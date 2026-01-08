"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "it" | "en";

const BIO_IT = `Una formazione solida e il confluire di tante esperienze didattiche e professionali assai diversificate hanno contribuito a fare di Alberto Chines un artista vivace e poliedrico.

Il giovane pianista palermitano si è formato presso l’Accademia di Imola con Franco Scala e Piero Rattalino, e al Conservatorio di Bolzano con Davide Cabassi.

A quindici anni ha debuttato presso il Teatro Massimo di Palermo e nel 2011 ha vinto il primo premio al Concorso Pianistico Internazionale “Palma d’Oro” di Finale Ligure. Nel 2013 è stato vincitore del Sony Classical Talent Scout di Madesimo e, nel 2014, del secondo premio all’Euregio Piano Award (Geilenkirchen, Germania).

Si è esibito presso la Sala Mozart dell’Accademia Filarmonica di Bologna, al Teatro Olimpico di Vicenza, al Politeama Garibaldi di Palermo, alla Van Cliburn Recital Hall di Fort Worth (Texas) e in Spagna, Portogallo, Inghilterra, Francia e Germania.

Alberto Chines è Steinway Artist dal 2020.`;

const BIO_EN = `A solid education and the merging of many diversified learning and professional experiences have contributed to make Alberto Chines a smart and many sided artist.

He studied at the Imola Academy with Franco Scala and Piero Rattalino, and at the Bolzano Conservatory with Davide Cabassi.

At the age of 15 he made his debut at Teatro Massimo in Palermo and in 2011 he won the first prize at the “Palma d’Oro” International Piano Competition. In 2013 he won the Sony Classical Talent Scout in Madesimo and, in 2014, the second prize at the Euregio Piano Award (Geilenkirchen, Germany).

He performed in prestigious venues such as the Mozart Hall of Accademia Filarmonica di Bologna, Teatro Olimpico in Vicenza, Politeama Garibaldi in Palermo, Van Cliburn Recital Hall in Fort Worth (Texas), and in Spain, Portugal, UK, France and Germany.

Alberto Chines is Steinway Artist since 2020.`;

export const DICTS = {
  it: {
    nav: { home: "Home", bio: "Bio", repertorio: "Repertorio", media: "Media", concerti: "Concerti", contatti: "Contatti" },
    home: { title: "ALBERTO CHINES", subtitle: "PIANIST", tagline: "Un profilo essenziale dedicato all’interpretazione, al repertorio e all’attività concertistica." },
    about: { title: "Biografia", body: BIO_IT }, // <--- Questo è quello che mancava!
    common: { comingSoon: "In aggiornamento." }
  },
  en: {
    nav: { home: "Home", bio: "Bio", repertorio: "Repertoire", media: "Media", concerti: "Concerts", contatti: "Contacts" },
    home: { title: "ALBERTO CHINES", subtitle: "PIANIST", tagline: "An essential profile dedicated to interpretation, repertoire and concert activity." },
    about: { title: "Biography", body: BIO_EN }, // <--- E qui
    common: { comingSoon: "Coming soon." }
  }
};

type Dictionary = typeof DICTS.it;
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dictionary };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("it");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang;
    if (saved === "it" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const value = useMemo(() => ({ lang, setLang, t: DICTS[lang] }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};