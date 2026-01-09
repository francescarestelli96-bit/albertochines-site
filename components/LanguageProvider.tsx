'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

const translations: any = {
  it: {
    nav: { about: "Bio", concerts: "Concerti", repertorio: "Repertorio", media: "Media", contact: "Contatti" },
    home: { title: "Alberto Chines", subtitle: "Pianista", tagline: "Steinway Artist dal 2020" },
    about: {
      title: "Biografia",
      content: `Una formazione solida e il confluire di tante esperienze didattiche e professionali assai diversificate hanno contribuito a fare di Alberto Chines un artista vivace e poliedrico. Il giovane pianista palermitano si è formato presso l’Accademia di Imola con Franco Scala e Piero Rattalino, e al Conservatorio di Bolzano con Davide Cabassi. A quindici anni ha debuttato presso il Teatro Massimo di Palermo e nel 2011 ha vinto il primo premio al Concorso Pianistico Internazionale “Palma d’Oro” di Finale Ligure. Nel 2013 è stato vincitore del Sony Classical Talent Scout di Madesimo e, nel 2014, del secondo premio all’Euregio Piano Award. Si è esibito presso la Sala Mozart di Bologna, al Teatro Olimpico di Vicenza, al Politeama di Palermo, alla Van Cliburn Recital Hall di Fort Worth e in tutta Europa. Ha debuttato a Londra per il Keyboard Charitable Trust e al Tiroler Festspiele Erl, ed è stato pubblicato il suo primo CD con musiche di Bach, Schumann, Ravel e Bartók (BAM International). Alberto Chines è molto attivo anche nell’ambito cameristico, collabora con Anna Serova, Eugenio Della Chiara, il Quartetto Nôus ed Emanuele Delucchi.`
    },
    repertorio: {
      title: "Repertorio",
      solistico: `Thomas Adès: Darknesse Visible\nJ.S. Bach: Partite, Suite Inglesi, Suite Francesi\nBéla Bartók: Suite op. 14, All’aperto\nL. van Beethoven: Sonate, Variazioni\nJohannes Brahms: Sonate, Fantasie op. 116\nFryderyk Chopin: Ballate, Scherzi, Studi\nClaude Debussy: Préludes, Images\nFranz Liszt: Sonata in si minore\nW.A. Mozart: Sonate, Fantasie\nModest Musorgskij: Quadri di un’esposizione\nSergej Prokof’ev: Sonate n. 2, 3, 7\nMaurice Ravel: Gaspard de la nuit, Miroirs\nFranz Schubert: Sonate, Impromptus\nRobert Schumann: Carnaval, Kreisleriana`,
      orchestra: `J.S. Bach: Concerti BWV 1052-1056\nL. van Beethoven: Concerti n. 1-5\nJohannes Brahms: Concerti n. 1-2\nFryderyk Chopin: Concerti n. 1-2\nW.A. Mozart: Concerti KV. 414-595\nMaurice Ravel: Concerto in sol\nRobert Schumann: Concerto op. 54`
    },
    concerts: { title: "Concerti", message: "Date dei concerti in aggiornamento" },
    media: { title: "Media" },
    contact: { title: "Contatti" }
  },
  en: {
    nav: { about: "Bio", concerts: "Concerts", repertorio: "Repertoire", media: "Media", contact: "Contact" },
    home: { title: "Alberto Chines", subtitle: "Pianist", tagline: "Steinway Artist since 2020" },
    about: {
      title: "Biography",
      content: `A solid education and the merging of many diverse educational and professional experiences have contributed to making Alberto Chines a lively and multifaceted artist. Trained at the Imola Academy and Bolzano Conservatory, he debuted at fifteen at Teatro Massimo in Palermo. He won prizes like the 'Palma d'Oro' and Sony Classical Talent Scout. He performed at Van Cliburn Recital Hall (Texas) and across Europe. He recently debuted in London and released his first CD (BAM International). He is active in chamber music with partners like Anna Serova and Quartetto Nôus.`
    },
    repertorio: {
      title: "Repertoire",
      solistico: `Thomas Adès: Darknesse Visible\nJ.S. Bach: Partitas, English/French Suites\nBéla Bartók: Suite op. 14, Out of Doors\nL. van Beethoven: Sonatas, Variations\nJohannes Brahms: Sonatas, Fantasies op. 116\nFryderyk Chopin: Ballades, Scherzos, Etudes\nClaude Debussy: Préludes, Images\nFranz Liszt: Sonata in B minor\nW.A. Mozart: Sonatas, Fantasies\nModest Mussorgsky: Pictures at an Exhibition\nSergei Prokofiev: Sonatas n. 2, 3, 7\nMaurice Ravel: Gaspard de la nuit, Miroirs\nFranz Schubert: Sonatas, Impromptus\nRobert Schumann: Carnaval, Kreisleriana`,
      orchestra: `J.S. Bach: Concertos BWV 1052-1056\nL. van Beethoven: Concertos n. 1-5\nJohannes Brahms: Concertos n. 1-2\nFryderyk Chopin: Concertos n. 1-2\nW.A. Mozart: Concertos KV. 414-595\nMaurice Ravel: Concerto in G\nRobert Schumann: Concerto op. 54`
    },
    concerts: { title: "Concerts", message: "Concert dates coming soon" },
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
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}