'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

const translations: any = {
  it: {
    nav: { about: "Bio", concerts: "Concerti", repertorio: "Repertorio", media: "Media", contact: "Contatti" },
    home: { title: "Alberto Chines", subtitle: "Pianista", tagline: "Steinway Artist dal 2020" },
    about: {
      title: "Biografia",
      content: `Una formazione solida e il confluire di tante esperienze didattiche e professionali assai diversificate hanno contribuito a fare di Alberto Chines un artista vivace e poliedrico.

Il giovane pianista palermitano si è formato presso l’Accademia di Imola con Franco Scala e Piero Rattalino, e al Conservatorio di Bolzano con Davide Cabassi.

A quindici anni ha debuttato presso il Teatro Massimo di Palermo e nel 2011 ha vinto il primo premio al Concorso Pianistico Internazionale “Palma d’Oro” di Finale Ligure. Nel 2013 è stato vincitore del Sony Classical Talent Scout di Madesimo e, nel 2014, del secondo premio all’Euregio Piano Award (Geilenkirchen, Germania).

Si è esibito presso la Sala Mozart dell’Accademia Filarmonica di Bologna, al Teatro Olimpico di Vicenza, al Politeama Garibaldi di Palermo, alla Van Cliburn Recital Hall di Fort Worth (Texas) e in Spagna, Portogallo, Inghilterra, Francia e Germania.

Ha recentemente debuttato a Londra per il Keyboard Charitable Trust e al Tiroler Festspiele Erl (Austria), ed è da poco stato pubblicato il suo primo CD con musiche di Bach, Schumann, Ravel e Bartók (BAM International).

Alberto Chines è molto attivo anche nell’ambito cameristico, collabora con la violista Anna Serova, col chitarrista Eugenio Della Chiara, col Quartetto Nôus e con il pianista Emanuele Delucchi, e ha negli anni seguito diversi progetti in trio (Trio Casa Bernardini), quartetto e quintetto.`
    },
    repertorio: {
      title: "Repertorio",
      solistico: `Thomas Adès: Darknesse Visible
J.S. Bach: Partite, Suite Inglesi, Suite Francesi, Il Clavicembalo Ben Temperato
Béla Bartók: Suite op. 14, All’aperto, Sonatina
L. van Beethoven: Sonate, Variazioni
Johannes Brahms: Sonate, Ballate op. 10, Fantasie op. 116, Intermezzi op. 117, Pezzi op. 118 e 119
Fryderyk Chopin: Ballate, Scherzi, Mazurche, Notturni, Polacche, Studi
Claude Debussy: Préludes, Images, Études, Suite Bergamasque
Franz Liszt: Sonata in si minore, Anni di Pellegrinaggio, Studi trascendentali
W.A. Mozart: Sonate, Fantasie, Rondò
Modest Musorgskij: Quadri di un’esposizione
Sergej Prokof’ev: Sonate n. 2, 3, 7
Maurice Ravel: Gaspard de the nuit, Miroirs, Le Tombeau de Couperin, Valses nobles et sentimentales
Domenico Scarlatti: Sonate
Franz Schubert: Sonate, Impromptus, Moments musicaux
Robert Schumann: Carnaval, Studi Sinfonici, Kreisleriana, Fantasia op. 17, Davidsbündlertänze, Humoreske`,
      orchestra: `J.S. Bach: Concerti BWV 1052, 1053, 1055, 1056
L. van Beethoven: Concerti n. 1, 2, 3, 4, 5
Johannes Brahms: Concerti n. 1, 2
Fryderyk Chopin: Concerti n. 1, 2
W.A. Mozart: Concerti KV. 414, 449, 450, 453, 466, 467, 488, 491, 595
Maurice Ravel: Concerto in sol, Concerto per la mano sinistra
Robert Schumann: Concerto op. 54`
    },
  },
  en: {
    nav: { about: "Bio", concerts: "Concerts", repertorio: "Repertoire", media: "Media", contact: "Contact" },
    home: { title: "Alberto Chines", subtitle: "Pianist", tagline: "Steinway Artist since 2020" },
    about: {
      title: "Biography",
      content: `A solid education and the merging of many diverse educational and professional experiences have contributed to making Alberto Chines a lively and multifaceted artist.

The young pianist from Palermo trained at the Imola Academy with Franco Scala and Piero Rattalino, and at the Bolzano Conservatory with Davide Cabassi.

At the age of fifteen he made his debut at the Teatro Massimo in Palermo and in 2011 he won first prize at the "Palma d'Oro" International Piano Competition in Finale Ligure. In 2013 he was the winner of the Sony Classical Talent Scout in Madesimo and, in 2014, of the second prize at the Euregio Piano Award (Geilenkirchen, Germany).

He has performed at the Sala Mozart of the Accademia Filarmonica in Bologna, the Teatro Olimpico in Vicenza, the Politeama Garibaldi in Palermo, the Van Cliburn Recital Hall in Fort Worth (Texas) and in Spain, Portugal, England, France and Germany.

He recently made his debut in London for the Keyboard Charitable Trust and at the Tiroler Festspiele Erl (Austria), and his first CD with music by Bach, Schumann, Ravel and Bartók (BAM International) has recently been published.

Alberto Chines is also very active in the chamber music field, collaborating with violist Anna Serova, guitarist Eugenio Della Chiara, the Quartetto Nôus and pianist Emanuele Delucchi.`
    },
    repertorio: {
      title: "Repertoire",
      solistico: `Thomas Adès: Darknesse Visible
J.S. Bach: Partitas, English Suites, French Suites, The Well-Tempered Clavier
Béla Bartók: Suite op. 14, Out of Doors, Sonatina
L. van Beethoven: Sonatas, Variations
Johannes Brahms: Sonatas, Ballades op. 10, Fantasies op. 116, Intermezzos op. 117, Pieces op. 118 and 119
Fryderyk Chopin: Ballades, Scherzos, Mazurkas, Nocturnes, Polonaises, Etudes
Claude Debussy: Préludes, Images, Études, Suite Bergamasque
Franz Liszt: Sonata in B minor, Years of Pilgrimage, Transcendental Etudes
W.A. Mozart: Sonatas, Fantasies, Rondos
Modest Mussorgsky: Pictures at an Exhibition
Sergei Prokofiev: Sonatas n. 2, 3, 7
Maurice Ravel: Gaspard de la nuit, Miroirs, Le Tombeau de Couperin, Valses nobles et sentimentales
Domenico Scarlatti: Sonatas
Franz Schubert: Sonatas, Impromptus, Moments musicaux
Robert Schumann: Carnaval, Symphonic Etudes, Kreisleriana, Fantasy op. 17, Davidsbündlertänze, Humoreske`,
      orchestra: `J.S. Bach: Concertos BWV 1052, 1053, 1055, 1056
L. van Beethoven: Concertos n. 1, 2, 3, 4, 5
Johannes Brahms: Concertos n. 1, 2
Fryderyk Chopin: Concertos n. 1, 2
W.A. Mozart: Concertos KV. 414, 449, 450, 453, 466, 467, 488, 491, 595
Maurice Ravel: Concerto in G, Concerto for the Left Hand
Robert Schumann: Concerto op. 54`
    }
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