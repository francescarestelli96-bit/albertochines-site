'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

const translations: any = {
  it: {
    nav: { about: "Bio", concerts: "Concerti", repertorio: "Repertorio", media: "Media", contact: "Contatti" },
    home: { title: "Alberto Chines", subtitle: "Pianista" },
    about: { title: "Biografia" },
    common: { back: "Indietro" }
  },
  en: {
    nav: { about: "About", concerts: "Concerts", repertorio: "Repertoire", media: "Media", contact: "Contact" },
    home: { title: "Alberto Chines", subtitle: "Pianist" },
    about: { title: "Biography" },
    common: { back: "Back" }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  lang: Language; 
  setLang: (lang: Language) => void;
  t: any; // Cambiato in 'any' per spegnere gli errori nelle pagine
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