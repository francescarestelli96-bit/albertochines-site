'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

const translations: any = {
  it: {
    nav: { about: "Bio", concerts: "Concerti", repertorio: "Repertorio", media: "Media", contact: "Contatti" },
    home: { title: "Alberto Chines", subtitle: "Pianista", tagline: "Steinway Artist dal 2020" },
    about: {
      title: "Biografia",
      content: `Una formazione solida e il confluire di tante esperienze didattiche e professionali assai diversificate hanno contribuito a fare di Alberto Chines un artista vivace e poliedrico.\n\nIl giovane pianista palermitano si è formato presso l’Accademia di Imola con Franco Scala e Piero Rattalino, e al Conservatorio di Bolzano con Davide Cabassi.\n\nA quindici anni ha debuttato presso il Teatro Massimo di Palermo e nel 2011 ha vinto il primo premio al Concorso Pianistico Internazionale “Palma d’Oro” di Finale Ligure. Nel 2013 è stato vincitore del Sony Classical Talent Scout di Madesimo e, nel 2014, del secondo premio all’Euregio Piano Award.\n\nSi è esibito presso la Sala Mozart di Bologna, al Teatro Olimpico di Vicenza, al Politeama di Palermo, alla Van Cliburn Recital Hall di Fort Worth e in tutta Europa.\n\nHa recentemente debuttato a Londra per il Keyboard Charitable Trust e al Tiroler Festspiele Erl (Austria), ed è da poco stato pubblicato il suo primo CD con musiche di Bach, Schumann, Ravel e Bartók (BAM International).\n\nAlberto Chines è molto attivo anche nell’ambito cameristico, collabora con la violista Anna Serova, col chitarrista Eugenio Della Chiara, col Quartetto Nôus e con il pianista Emanuele Delucchi.`
    },
    repertorio: {
      title: "Repertorio",
      solistico: `Thomas Adès: Darknesse Visible\nJ.S. Bach: Partite, Suite Inglesi, Suite Francesi, Il Clavicembalo Ben Temperato\nBéla Bartók: Suite op. 14, All’aperto, Sonatina\nL. van Beethoven: Sonate, Variazioni\nJohannes Brahms: Sonate, Ballate op. 10, Fantasie op. 116, Intermezzi op. 117, Pezzi op. 118 e 119\nFryderyk Chopin: Ballate, Scherzi, Mazurche, Notturni, Polacche, Studi\nClaude Debussy: Préludes, Images, Études, Suite Bergamasque\nFranz Liszt: Sonata in si minore, Anni di Pellegrinaggio, Studi trascendentali\nW.A. Mozart: Sonate, Fantasie, Rondò\nModest Musorgskij: Quadri di un’esposizione\nSergej Prokof’ev: Sonate n. 2, 3, 7\nMaurice Ravel: Gaspard de la nuit, Miroirs, Le Tombeau de Couperin, Valses nobles et sentimentales\nDomenico Scarlatti: Sonate\nFranz Schubert: Sonate, Impromptus, Moments musicaux\nRobert Schumann: Carnaval, Studi Sinfonici, Kreisleriana, Fantasia op. 17, Davidsbündlertänze, Humoreske`,
      orchestra: `J.S. Bach: Concerti BWV 1052, 1053, 1055, 1056\nL. van Beethoven: Concerti n. 1, 2, 3, 4, 5\nJohannes Brahms: Concerti n. 1, 2\nFryderyk Chopin: Concerti n. 1, 2\nW.A. Mozart: Concerti KV. 414, 449, 450, 453, 466, 467, 488, 491, 595\nMaurice Ravel: Concerto in sol, Concerto per la mano sinistra\nRobert Schumann: Concerto op. 54`
    },
    concerts: { title: "Concerti" },
    media: { title: "Media" },
    contact: { title: "Contatti" }
  },
  en: {
    nav: { about: "Bio", concerts: "Concerts", repertorio: "Repertoire", media: "Media", contact: "Contact" },
    home: { title: "Alberto Chines", subtitle: "Pianist", tagline: "Steinway Artist since 2020" },
    about: {
      title: "Biography",
      content: `A solid education and the merging of many diverse educational and professional experiences have contributed to making Alberto Chines a lively and multifaceted artist.\n\nThe young pianist from Palermo trained at the Imola Academy and at the Bolzano Conservatory.\n\nAt the age of fifteen he made his debut at the Teatro Massimo in Palermo and in 2011 he won first prize at the "Palma d'Oro" International Piano Competition. In 2013 he was the winner of the Sony Classical Talent Scout and, in 2014, of the second prize at the Euregio Piano Award.\n\nHe has performed at the Sala Mozart in Bologna, the Teatro Olimpico in Vicenza, the Politeama in Palermo, the Van Cliburn Recital Hall in Fort Worth (Texas) and throughout Europe.\n\nHe recently made his debut in London for the Keyboard Charitable Trust and at the Tiroler Festspiele Erl (Austria), and his first CD (BAM International) has recently been published.\n\nAlberto Chines is also very active in the chamber music field, collaborating with Anna Serova, Eugenio Della Chiara, the Quartetto Nôus and Emanuele Delucchi.`
    },
    repertorio: {
      title: "Repertoire",
      solistico: `Thomas Adès: Darknesse Visible\nJ.S. Bach: Partitas, English/French Suites, The Well-Tempered Clavier\nBéla Bartók: Suite op. 14, Out of Doors, Sonatina\nL. van Beethoven: Sonatas, Variations\nJohannes Brahms: Sonatas, Ballades op. 10, Fantasies op. 116, Pieces op. 118/119\nFryderyk Chopin: Ballades, Scherzos, Mazurkas, Nocturnes, Etudes\nClaude Debussy: Préludes, Images, Études, Suite Bergamasque\nFranz Liszt: Sonata in B minor, Years of Pilgrimage, Transcendental Etudes\nW.A. Mozart: Sonatas, Fantasies, Rondos\nModest Mussorgsky: Pictures at an Exhibition\nSergei Prokofiev: Sonatas n. 2, 3, 7\nMaurice Ravel: Gaspard de la nuit, Miroirs, Le Tombeau de Couperin\nDomenico Scarlatti: Sonatas\nFranz Schubert: Sonatas, Impromptus, Moments musicaux\nRobert Schumann: Carnaval, Symphonic Etudes, Kreisleriana, Fantasy op. 17`,
      orchestra: `J.S. Bach: Concertos BWV 1052, 1053, 1055, 1056\nL. van Beethoven: Concertos n. 1, 2, 3, 4, 5\nJohannes Brahms: Concertos n. 1, 2\nFryderyk Chopin: Concertos n. 1, 2\nW.A. Mozart: Concertos KV. 414-595\nMaurice Ravel: Concerto in G, Concerto for the Left Hand\nRobert Schumann: Concerto op. 54`
    },
    concerts: { title: "Concerts" },
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
    for (const key of keys) {
      if (result) result = result[key];
    }
    return result || path;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'it' ? 'en' : 'it'));
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      lang: language,      // Aggiunto per compatibilità
      setLang: setLanguage, // Aggiunto per compatibilità
      toggleLanguage, 
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}