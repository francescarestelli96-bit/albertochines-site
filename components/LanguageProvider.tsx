'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

const translations = {
  it: {
    nav: {
      about: "Bio",
      concerts: "Concerti",
      repertorio: "Repertorio",
      media: "Media",
      contact: "Contatti"
    },
    home: {
      title: "Alberto Chines",
      subtitle: "Pianista"
    },
    common: {
      back: "Indietro",
      loading: "Caricamento..."
    }
  },
  en: {
    nav: {
      about: "About",
      concerts: "Concerts",
      repertorio: "Repertoire",
      media: "Media",
      contact: "Contact"
    },
    home: {
      title: "Alberto Chines",
      subtitle: "Pianist"
    },
    common: {
      back: "Back",
      loading: "Loading..."
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('it');

  const t = (path: string) => {
    const keys = path.split('.');
    let result: any = translations[language];
    for (const key of keys) {
      if (result[key]) {
        result = result[key];
      } else {
        return path;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}