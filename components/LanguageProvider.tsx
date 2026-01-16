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
Johann Christian Bach | Sonata in do minore Op. 5 N. 6\nQuartetto con pianoforte in sol maggiore W B66
Johann Sebastian Bach | Partita N. 2 BWV 826\nSuite Inglese N. 2 BWV 807\nSuite Ingese N. 3 BWV 808\nSuite Francese N.5 BWV 816\nToccata in mi minore BWV 914\nSonata in re maggiore BWV 963\nDas wohltemperierte Klavier I&II (selezione)\nDie Kunst della Fuge (selezione)\nFantasia e Fuga in sol minore BWV 542 (tr. Liszt)\nPartita per violino N. 3 (tr. Rachmaninov)\nPassacaglia e Fuga in do minore BWV 582 (tr. D'Albert)\nToccata e Fuga in re minore BWV 565 (tr. Busoni)\nConcerto Brandeburghese N. 3 BWV 1048 (tr. Friedman)
Béla Bartók | Suite Op. 14\nSuite di Danze Sz. 77 BB86b
Jerzy Bauer | Sonata per violoncello e pianoforte
Ludwig van Beethoven | Sonate Op. 2 Nn.1 e 3\nSonata Op. 14 N.2\nSonata Op. 22\nSonata Op. 27 N.2\nSonata Op. 28\nSonata Op. 31 N.1\nSonata Op. 53 "Waldstein"\nSonata Op. 81a "Les Adieux"\nSonata Op.111\nVariazioni e Fuga Op. 35 "Eroica"
Johannes Brahms | Rapsodie Op. 79\nTrio N. 1 Op. 8
Fryderyk Chopin | Etudes Op. 10\nEtudes Op. 25 (selezione)\nSonata N.1 Op. 4\nBallade N. 2 Op. 38\nPolonaise Op. 44\nBerceuse Op. 57\nBarcarolle Op. 60
Franz Liszt | Années de pèlerinage (selezione)\nTotentanz S. 525\nRapsodia Ungherese N.2 S. 244/2
Wolfgang Amadeus Mozart | Sonata in la minore KV 310\nSonata in la maggiore KV 331\nSonata in do minore KV 457
Robert Schumann | Variazioni Abegg Op. 1\nPapillons Op. 2\nKreisleriana, Op. 16\nArabeske Op. 18\nQuintetto con pianoforte Op. 44`,
      orchestra: `Johann Sebastian Bach | Concerto in re minore BWV 1052\nConcerto per due pianoforti in do minore BWV1060
Béla Bartók | Concerto N. 3 Sz.119
Ludwig van Beethoven | Concerto N. 3 Op. 37\nConcerto N. 4 Op. 58\nTriplo Concerto Op. 56
Franz Liszt | Concerto N. 2 S.125\nTotentanz S.126
Felix Mendelssohn | Concerto N. 1 Op. 25
Wolfgang Amadeus Mozart | Concerto in la maggiore KV. 414\nConcerto in do maggiore KV. 415\nConcerto in la maggiore KV. 488
Sergei Rachmaninov | Concerto N. 2 Op. 18`
    },
    concerts: { title: "Concerti", message: "Date in aggiornamento" },
    media: { title: "Media" },
    contact: { title: "Contatti" },
    video: {
      performanceTitle: "Video Performance",
      handelTitle: "Händel - Lascia ch'io pianga",
      handelDescription: "Trascritto per pianoforte da Moszkowski/Chines",
      chopinTitle: "Chopin - Variations Brillantes",
      chopinDescription: "Tema di Hérold, Op. 12",
      bartokTitle: "Bartók - Suite Op. 14",
      bartokDescription: "Allegro Barbaro. Op. 14, Sz. 62, BB 70",
      moreOnYoutube: "Guarda altro su YouTube",
    }
  },
  en: {
    nav: { about: "Bio", concerts: "Concerts", repertorio: "Repertoire", media: "Media", contact: "Contact" },
    home: { title: "Alberto Chines", subtitle: "Pianist", tagline: "Steinway Artist" },
    about: {
      title: "Biography",
      content: `Alberto Chines, a Steinway Artist since 2020, is a multifaceted pianist who combines an extensive solo career with a profound interest in chamber music and education.

His training, enriched by encounters and masterclasses with world-renowned artists, was consolidated at the Imola Academy under the guidance of Franco Scala and Piero Rattalino, and at the Bolzano Conservatory with Davide Cabassi. After debuting at just fifteen years old at the Teatro Massimo in Palermo, he captured the attention of critics by winning first prize at the International "Palma d’Oro" Competition in Finale Ligure (2011), the Sony Classical Talent Scout in Madesimo (2013), and second prize at the Euregio Piano Award in Geilenkirchen (2014).

His concert activity has led him to perform at prestigious international venues, including the Van Cliburn Recital Hall in Fort Worth (USA), the Mozart Hall of the Accademia Filarmonica in Bologna, the Teatro Olimpico in Vicenza, the Politeama Garibaldi in Palermo, and the Teatro alla Scala in Milan. He has performed in London for the Keyboard Charitable Trust and at the Klaviertage of the Tiroler Festspiele Erl (Austria). He recently debuted at the Bartolomeo Cristofori Festival in Padua, performing Schönberg’s Pierrot Lunaire for voice and solo piano, alongside his own transcription of Stravinsky’s Sacre du Printemps.

Alberto Chines is also a passionate chamber musician. He regularly collaborates with artists such as Anna Serova, Eugenio Della Chiara, Emanuele Delucchi, Rebecca Taio, Danilo Pastore, and the Quartetto Nôus, exploring repertoire from duo to quintet with a strong emphasis on contemporary music. His discography includes a debut album for BAM International featuring works by Bach, Schumann, Ravel, and Bartók.

Also active in cultural promotion, he was the creator of the Musica Manent Festival in Ustica and collaborates regularly with the Primavera di Baggio in Milan.

Alberto Chines is a Professor of Piano at the "Francesco Venezze" Conservatory in Rovigo.`
    },
    repertorio: {
      title: "Repertoire",
      solisticoTitle: "Solo and Chamber Repertoire",
      orchestraTitle: "Piano and Orchestra",
      solistico: `Thomas Adès | Darknesse Visible (after John Dowland)
Carl Philipp Emanuel Bach | Variations on Folie d'Espagne H. 263
Johann Christian Bach | Sonata in C minor Op. 5 No. 6\nPiano quartet in G major W B66
Johann Sebastian Bach | Partita No. 1 BWV 825\nPartita No. 2 BWV 826\nEnglish Suite No. 2 BWV 807\nEnglish Suite No. 3 BWV 808\nFrench Suite No. 5 BWV 816\nToccata in E minor BWV 914\nSonata in D major BWV 963\nDas wohltemperierte Klavier I&II (selection)\nDie Kunst della Fuge (selection)\nFantasia and Fugue in G minor BWV 542 (tr. Liszt)\nViolin Partita No. 3 (tr. Rachmaninov)\nPassacaglia and Fugue in C minor BWV 582 (tr. D'Albert)\nToccata and Fugue in D minor BWV 565 (tr. Busoni)\nBrandenburg Concerto No. 3 BWV 1048 (tr. Friedman)
Béla Bartók | Suite Op. 14\nDance Suite Sz. 77 BB86b
Jerzy Bauer | Sonata for cello and piano
Ludwig van Beethoven | Sonatas Op. 2 Nos. 1 & 3\nSonata Op. 14 No. 2\nSonata Op. 22\nSonata Op. 27 No. 2\nSonata Op. 28\nSonata Op. 31 No. 1\nSonata Op. 53 "Waldstein"\nSonata Op. 81a "Les Adieux"\nSonata Op. 111\nVariations and Fugue Op. 35 "Eroica"
Johannes Brahms | Rhapsodies Op. 79\nTrio No. 1 Op. 8
Fryderyk Chopin | Etudes Op. 10\nEtudes Op. 25 (selection)\nSonata No. 1 Op. 4\nBallade No. 2 Op. 38\nPolonaise Op. 44\nBerceuse Op. 57\nBarcarolle Op. 60
Franz Liszt | Années de pèlerinage (selection)\nTotentanz S. 525\nHungarian Rhapsody No. 2 S. 244/2
Wolfgang Amadeus Mozart | Sonata in A minor KV 310\nSonata in A major KV 331\nSonata in C minor KV 457
Robert Schumann | Abegg Variations Op. 1\nPapillons Op. 2\nKreisleriana, Op. 16\nArabeske Op. 18\nPiano Quintet Op. 44`,
      orchestra: `Johann Sebastian Bach | Concerto in D minor BWV 1052\nConcerto for two pianos in C minor BWV 1060
Béla Bartók | Concerto No. 3 Sz. 119
Ludwig van Beethoven | Concerto No. 3 Op. 37\nConcerto No. 4 Op. 58
Franz Liszt | Totentanz S. 126
Wolfgang Amadeus Mozart | Concerto in A major KV. 488
Sergei Rachmaninov | Concerto No. 2 Op. 18`
    },
    concerts: { title: "Concerts", message: "Dates coming soon" },
    media: { title: "Media" },
    contact: { title: "Contact" },
    video: {
      performanceTitle: "Video Performances",
      handelTitle: "Händel - Lascia ch'io pianga",
      handelDescription: "Transcribed for piano by Moszkowski/Chines",
      chopinTitle: "Chopin - Variations Brillantes",
      chopinDescription: "Theme by Hérold, Op. 12",
      bartokTitle: "Bartók - Suite Op. 14",
      bartokDescription: "Allegro Barbaro. Op. 14, Sz. 62, BB 70",
      moreOnYoutube: "Watch more on YouTube",
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
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      lang: language, 
      setLang: setLanguage, 
      toggleLanguage, 
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) throw new Error('useLanguage Error');
  return context;
}