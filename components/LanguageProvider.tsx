'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

const translations: any = {
  it: {
    nav: { about: "Bio", concerts: "Concerti", repertorio: "Repertorio", media: "Media", contact: "Contatti" },
    home: { title: "Alberto Chines", subtitle: "Pianist", tagline: "Steinway Artist" },
    about: {
      title: "Biografia",
      content: `Alberto Chines, Steinway Artist dal 2020, è un pianista poliedrico che unisce all'attività solistica un profondo interesse per la musica da camera e per la didattica.

Il suo percorso formativo si è consolidato presso l'Accademia di Imola e al Conservatorio di Bolzano. Dopo il debutto a soli quindici anni al Teatro Massimo di Palermo, si è imposto all'attenzione della critica vincendo il primo premio al Concorso Internazionale Palma d'Oro di Finale Ligure (2011), il Sony Classical Talent Scout di Madesimo (2013) e il secondo premio all'Euregio Piano Award di Geilenkirchen (2014).

La sua attività concertistica lo ha portato a esibirsi in sedi di prestigio internazionale, tra cui la Van Cliburn Recital Hall di Fort Worth (USA), il Teatro alla Scala di Milano e il Politeama Garibaldi di Palermo. Alberto Chines è docente di pianoforte presso il Conservatorio "Francesco Venezze" di Rovigo.`
    },
    repertorio: {
      title: "Repertorio",
      solisticoTitle: "Repertorio solistico e cameristico",
      orchestraTitle: "Repertorio con orchestra",
      solistico: `Thomas Adès | Darknesse Visible (after John Dowland)
Carl Philipp Emanuel Bach | Variazioni sulla Follia di Spagna H. 263
Johann Christian Bach | Sonata in do minore Op. 5 N. 6\nQuartetto con pianoforte in sol maggiore W B66
Johann Sebastian Bach | Partita N. 2 BWV 826\nSuite Inglese N. 2 BWV 807\nSuite Ingese N. 3 BWV 808\nSuite Francese N.5 BWV 816\nToccata in mi minore BWV 914\nSonata in re maggiore BWV 963\nDas wohltemperierte Klavier I&II (selezione)\nDie Kunst der Fuge (selezione)\nFantasia e Fuga in sol minore BWV 542 (tr. Liszt)\nPartita per violino N. 3 (tr. Rachmaninov)\nPassacaglia e Fuga in do minore BWV 582 (tr. D'Albert)\nToccata e Fuga in re minore BWV 565 (tr. Busoni)\nConcerto Brandeburghese No. 3 BWV 1048 (tr. Friedman)
Béla Bartók | Suite Op. 14\nSuite di Danze Sz. 77 BB86b
Ludwig van Beethoven | Sonate Op. 2 Nn.1 e 3\nSonata Op. 53 "Waldstein"\nSonata Op. 81a "Les Adieux"\nSonata Op.111\nVariazioni e Fuga Op. 35 "Eroica"
Fryderyk Chopin | Ballade N. 2 Op. 38\nBerceuse Op. 57\nBarcarolle Op. 60
Wolfgang Amadeus Mozart | Sonata KV 331\nVariazioni KV 455
Robert Schumann | Kreisleriana Op. 16\nQuintetto Op. 44`,
      orchestra: `Johann Sebastian Bach | Concerto in re minore BWV 1052
Ludwig van Beethoven | Concerto N. 4 Op. 58
Sergei Rachmaninov | Concerto N. 2 Op. 18`
    },
    concerts: { title: "Concerti", message: "Date in aggiornamento" },
    media: { title: "Media" },
    contact: { title: "Contatti" }
  },
  en: {
    nav: { about: "Bio", concerts: "Concerts", repertorio: "Repertoire", media: "Media", contact: "Contact" },
    home: { title: "Alberto Chines", subtitle: "Pianist", tagline: "Steinway Artist" },
    about: {
      title: "Biography",
      content: `Alberto Chines, a Steinway Artist since 2020, is a versatile pianist who balances an extensive solo career with a profound dedication to chamber music and education.

His training was consolidated at the Imola Academy and at the Bolzano Conservatory. After debuting at fifteen at the Teatro Massimo in Palermo, he won first prize at the International Palma d'Oro Competition (2011) and the Sony Classical Talent Scout (2013).

He has performed at venues including the Van Cliburn Recital Hall (USA), Teatro alla Scala in Milan, and Politeama Garibaldi in Palermo. Alberto Chines currently serves as a Professor of Piano at the "Francesco Venezze" Conservatory in Rovigo.`
    },
    repertorio: {
      title: "Repertoire",
      solisticoTitle: "Solo and chamber music",
      orchestraTitle: "Piano and orchestra",
      solistico: `Thomas Adès | Darknesse Visible\nJohann Sebastian Bach | Partita No. 2\nLudwig van Beethoven | Sonata Op. 53\nRobert Schumann | Piano Quintet Op. 44`,
      orchestra: `Johann Sebastian Bach | Concerto in D minor\nLudwig van Beethoven | Concerto No. 4\nSergei Rachmaninov | Concerto No. 2`
    },
    concerts: { title: "Concerts", message: "Dates coming soon" },
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
  const toggleLanguage = () => setLanguage((prev) => (prev === 'it' ? 'en' : 'it'));

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) throw new Error('useLanguage error');
  return context;
}