'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

const translations: any = {
  it: {
    nav: { about: "Bio", concerts: "Concerti", repertorio: "Repertorio", media: "Media", contact: "Contatti" },
    home: { title: "Alberto Chines", subtitle: "Pianist", tagline: "Steinway Artist" },
    about: {
      title: "Biografia",
      content: `Alberto Chines, Steinway Artist dal 2020, è un pianista poliedrico...` // (Troncato qui per brevità, usa la bio completa che hai già)
    },
    repertorio: {
      title: "Repertorio",
      solisticoTitle: "Repertorio solistico e cameristico",
      orchestraTitle: "Repertorio con orchestra",
      solistico: `...`,
      orchestra: `...`
    },
    concerts: { title: "Concerti", message: "Date in aggiornamento" },
    media: { title: "Media" },
    contact: { 
      title: "Contatti", 
      inquiries: "Per informazioni e contatti" 
    }
  },
  en: {
    nav: { about: "Bio", concerts: "Concerts", repertorio: "Repertoire", media: "Media", contact: "Contact" },
    home: { title: "Alberto Chines", subtitle: "Pianist", tagline: "Steinway Artist" },
    about: {
      title: "Biography",
      content: `Alberto Chines, a Steinway Artist since 2020...`
    },
    repertorio: {
      title: "Repertoire",
      solisticoTitle: "Solo and chamber music",
      orchestraTitle: "Piano and orchestra",
      solistico: `...`,
      orchestra: `...`
    },
    concerts: { title: "Concerts", message: "Dates coming soon" },
    media: { title: "Media" },
    contact: { 
      title: "Contact", 
      inquiries: "For inquiries contact" 
    }
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
  const toggleLanguage = () => setLanguage((prev) => (prev === 'it' ? 'en' : 'it'));

  return (
    <LanguageContext.Provider value={{ language, setLanguage, lang: language, setLang: setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}