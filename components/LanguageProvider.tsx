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

Il suo percorso formativo, ricco di incontri e masterclass con artisti di fama mondiale, si è consolidato presso l'Accademia di Imola sotto la guida di Franco Scala e Piero Rattalino, e al Conservatorio di Bolzano con Davide Cabassi. Dopo il debutto a soli quindici anni al Teatro Massimo di Palermo, si è imposto all'attenzione della critica vincendo il primo premio al Concorso Internazionale Palma d'Oro di Finale Ligure (2011), il Sony Classical Talent Scout di Madesimo (2013) e il secondo premio all'Euregio Piano Award di Geilenkirchen (2014).

La sua attività concertistica lo ha portato a esibirsi in sedi di prestigio internazionale, tra cui la Van Cliburn Recital Hall di Fort Worth (USA), la Sala Mozart dell'Accademia Filarmonica di Bologna, il Teatro Olimpico di Vicenza, il Politeama Garibaldi di Palermo e il Teatro alla Scala di Milano. Ha suonato a Londra per il Keyboard Charitable Trust e ai Klaviertage del Tiroler Festspiele Erl (Austria), e ha recentemente debuttato al Festival Bartolomeo Cristofori di Padova eseguendo il Pierrot Lunaire di Schönberg per voce e pianoforte solo, insieme alla propria trascrizione del Sacre du Printemps di Stravinkskij.

Alberto Chines è inoltre un camerista appassionato. Collabora regolarmente con artisti quali Anna Serova, Eugenio Della Chiara, Emanuele Delucchi, Rebecca Taio, Danilo Pastore e il Quartetto Nôus, esplorando il repertorio dal duo al quintetto con grandi aperture verso la nuova musica. La sua discografia include un album di debutto per BAM International con opere di Bach, Schumann, Ravel e Bartók.

Attivo anche nella promozione culturale, è stato l'ideatore del Musica Manent Festival di Ustica e collabora stabilmente con la Primavera di Baggio di Milano.

Alberto Chines è docente di pianoforte presso il Conservatorio "Francesco Venezze" di Rovigo.`
    },
    repertorio: {
      title: "Repertorio",
      solisticoTitle: "Repertorio solistico e cameristico",
      orchestraTitle: "Repertorio con orchestra",
      solistico: `Thomas Adès | Darknesse Visible (after John Dowland)
Carl Philipp Emanuel Bach | Variazioni sulla Follia di Spagna H. 263
Johann Christian Bach | Sonata in do minore Op. 5 N. 6, Quartetto con pianoforte in sol maggiore W B66
Johann Sebastian Bach | Partita N. 2 BWV 826, Suite Inglese N. 2 BWV 807, Suite Ingese N. 3 BWV 808, Suite Francese N.5 BWV 816, Toccata in mi minore BWV 914, Sonata in re maggiore BWV 963, Das wohltemperierte Klavier I&II (selezione), Die Kunst della Fuga (selezione)
Béla Bartók | Suite Op. 14, Suite di Danze Sz. 77 BB86b
Ludwig van Beethoven | Sonate Op. 2 Nn.1 e 3, Sonata Op. 14 N.2, Sonata Op. 22, Sonata Op. 27 N.2, Sonata Op. 28, Sonata Op. 31 N.1, Sonata Op. 53 "Waldstein", Sonata Op. 81a "Les Adieux", Sonata Op.111, Variazioni e Fuga Op. 35 "Eroica"
Johannes Brahms | Rapsodie Op. 79, Trio N. 1 Op. 8
Fryderyk Chopin | Etudes Op. 10, Etudes Op. 25 (selezione), Sonata N.1 Op. 4, Ballade N. 2 Op. 38, Polonaise Op. 44, Berceuse Op. 57, Barcarolle Op. 60
Maurice Ravel | Valses nobles et sentimentales, Gaspard de la nuit`,
      orchestra: `Johann Sebastian Bach | Concerto in re minore BWV 1052
Béla Bartók | Concerto N. 3 Sz.119
Ludwig van Beethoven | Concerto N. 3 Op. 37, Concerto N. 4 Op. 58
Wolfgang Amadeus Mozart | Concerto KV 414, KV 415, KV 488`
    },
    media: { title: "Media" },
    contact: { title: "Contatti", inquiries: "" }
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
      solisticoTitle: "Solo and Chamber music",
      orchestraTitle: "Piano and orchestra",
      solistico: `Thomas Adès | Darknesse Visible...`,
      orchestra: `Johann Sebastian Bach | Concerto in D minor...`
    },
    media: { title: "Media" },
    contact: { title: "Contact", inquiries: "" }
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