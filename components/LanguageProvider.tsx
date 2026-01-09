'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

const translations: Record<Language, any> = {
  it: {
    nav: { about: "Bio", concerts: "Concerti", repertorio: "Repertorio", media: "Media", contact: "Contatti" },
    home: { title: "Alberto Chines", subtitle: "Pianista", tagline: "Steinway Artist dal 2020" },
    about: {
      title: "Biografia",
      content: `Una formazione solida e il confluire di tante esperienze didattiche e professionali assai diversificate hanno contribuito a fare di Alberto Chines un artista vivace e poliedrico...`
    },
    repertorio: {
      title: "Repertorio",
      subtitle: "Repertorio solistico e cameristico",
      orchestraTitle: "Repertorio con orchestra",
      content: `Thomas Adès: Darknesse Visible...\n[Inserisci qui tutto il testo del repertorio IT]`,
      orchestraContent: `J.S. Bach: Concerto BWV 1052...`
    },
    media: { title: "Media" },
    contact: { title: "Contatti" }
  },
  en: {
    nav: { about: "About", concerts: "Concerts", repertorio: "Repertoire", media: "Media", contact: "Contact" },
    home: { title: "Alberto Chines", subtitle: "Pianist", tagline: "Steinway Artist since 2020" },
    about: {
      title: "Biography",
      content: `A solid education and the merging of many diversified learning and professional experiences...`
    },
    repertorio: {
      title: "Repertoire",
      subtitle: "Solo and chamber music",
      orchestraTitle: "Piano and orchestra",
      content: `Thomas Adès: Darknesse Visible...\n[Inserisci qui tutto il testo del repertorio EN]`,
      orchestraContent: `J.S. Bach: Concertos BWV 1052...`
    },
    media: { title: "Media" },
    contact: { title: "Contact" }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (l: Language) => void;
  lang: Language;
  setLang: (l: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('it');

  const t = (path: string): any => {
    const keys = path.split('.');
    let result: any = translations[language];
    for (const key of keys) {
      if (result && result[key] !== undefined) result = result[key];
      else return path;
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, setLanguage, lang: language, setLang: setLanguage, t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}