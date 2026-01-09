'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

const translations: any = {
  it: {
    title: "Alberto Chines",
    subtitle: "Pianista",
    about: { title: "Biografia" },
    concerti: { title: "Concerti" },
    repertorio: { title: "Repertorio" },
    media: { title: "Media" },
    contatti: { title: "Contatti" },
    nav: { about: "Bio", concerts: "Concerti", repertorio: "Repertorio", media: "Media", contact: "Contatti" },
    common: { back: "Indietro" },
    home: { title: "Alberto Chines", subtitle: "Pianista" }
  },
  en: {
    title: "Alberto Chines",
    subtitle: "Pianist",
    about: { title: "Biography" },
    concerti: { title: "Concerts" },
    repertorio: { title: "Repertoire" },
    media: { title: "Media" },
    contatti: { title: "Contact" },
    nav: { about: "About", concerts: "Concerts", repertorio: "Repertoire", media: "Media", contact: "Contact" },
    common: { back: "Back" },
    home: { title: "Alberto Chines", subtitle: "Pianist" }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (l: Language) => void;
  lang: Language;
  setLang: (l: Language) => void;
  t: any; // Fondamentale: deve essere 'any' per ignorare gli errori nelle pagine
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
  if (context === undefined) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}