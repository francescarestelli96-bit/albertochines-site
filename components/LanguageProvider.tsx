'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

const translations: any = {
  it: {
    nav: { about: "Bio", concerts: "Concerti", repertorio: "Repertorio", media: "Media", contact: "Contatti" },
    home: { subtitle: "Pianista", tagline: "Steinway Artist dal 2020" },
    about: {
      title: "Biografia",
      content: "Una formazione solida e il confluire di esperienze diversificate hanno fatto di Alberto Chines un artista poliedrico. Steinway Artist dal 2020."
    },
    concerts: {
      title: "Concerti",
      message: "Date di concerti presto in arrivo"
    },
    repertorio: {
      title: "Repertorio",
      subtitle: "Repertorio solistico e cameristico",
      orchestraTitle: "Repertorio con orchestra",
      content: "Thomas Adès: Darknesse Visible...\nJ.S. Bach: Partite, Suite Inglesi...",
      orchestraContent: "J.S. Bach: Concerto BWV 1052...\nW.A. Mozart: Concerti KV. 488..."
    },
    media: { title: "Media" },
    contact: { title: "Contatti" }
  },
  en: {
    nav: { about: "Bio", concerts: "Concerts", repertorio: "Repertoire", media: "Media", contact: "Contact" },
    home: { subtitle: "Pianist", tagline: "Steinway Artist since 2020" },
    about: {
      title: "Biography",
      content: "A solid education and diversified experiences have made Alberto Chines a multifaceted artist. Steinway Artist since 2020."
    },
    concerts: {
      title: "Concerts",
      message: "Concert dates coming soon"
    },
    repertorio: {
      title: "Repertoire",
      subtitle: "Solo and chamber music",
      orchestraTitle: "Piano and orchestra",
      content: "Thomas Adès: Darknesse Visible...\nJ.S. Bach: Partitas, English Suites...",
      orchestraContent: "J.S. Bach: Concerto BWV 1052...\nW.A. Mozart: Concertos KV. 488..."
    },
    media: { title: "Media" },
    contact: { title: "Contact" }
  }
};

const LanguageContext = createContext<any>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('it');
  const t = (path: string) => {
    const keys = path.split('.');
    let result = translations[language];
    for (const key of keys) { if (result) result = result[key]; }
    return result || path;
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage, lang: language, setLang: setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}