'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

const translations: any = {
  it: {
    nav: { about: "Bio", concerts: "Concerti", repertorio: "Repertorio", media: "Media", contact: "Contatti" },
    home: { title: "Alberto Chines", subtitle: "Pianista", tagline: "Esplorando il repertorio pianistico con dedizione e passione." },
    about: { title: "Biografia" },
    concerts: { title: "Concerti" },
    repertorio: { title: "Repertorio" },
    media: { title: "Media" },
    contact: { title: "Contatti" }
  },
  en: {
    nav: { about: "About", concerts: "Concerts", repertorio: "Repertoire", media: "Media", contact: "Contact" },
    home: { title: "Alberto Chines", subtitle: "Pianist", tagline: "Exploring the piano repertoire with dedication and passion." },
    about: { title: "Biography" },
    concerts: { title: "Concerts" },
    repertorio: { title: "Repertoire" },
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
  const t = (path: string) => {
    const keys = path.split('.');
    let result: any = translations[language];
    for (const key of keys) {
      if (result && result[key] !== undefined) result = result[key];
      else return path;
    }
    return result;
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage, lang: language, setLang: setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}