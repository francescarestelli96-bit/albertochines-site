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
Johann Sebastian Bach | Partita N. 2 BWV 826\nSuite Inglese N. 2 BWV 807\nSuite Ingese N. 3 BWV 808\nSuite Francese N.5 BWV 816\nToccata in mi minore BWV 914\nSonata in re maggiore BWV 963\nDas wohltemperierte Klavier I&II (selezione)\nDie Kunst der Fuge (selezione)\nFantasia e Fuga in sol minore BWV 542 (tr. Liszt)\nPartita per violino N. 3 (tr. Rachmaninov)\nPassacaglia e Fuga in do minore BWV 582 (tr. D'Albert)\nToccata e Fuga in re minore BWV 565 (tr. Busoni)\nConcerto Brandeburghese N. 3 BWV 1048 (tr. Friedman)
Béla Bartók | Suite Op. 14\nSuite di Danze Sz. 77 BB86b
Jerzy Bauer | Sonata per violoncello e pianoforte
Ludwig van Beethoven | Sonate Op. 2 Nn.1 e 3\nSonata Op. 14 N.2\nSonata Op. 22\nSonata Op. 27 N.2\nSonata Op. 28\nSonata Op. 31 N.1\nSonata Op. 53 "Waldstein"\nSonata Op. 81a "Les Adieux"\nSonata Op.111\nVariazioni e Fuga Op. 35 "Eroica"\nVariazioni in do minore WoO 80\nVariazioni su "Es war einmal ein alter Mann" WoO 66\nSerenata per flauto e pianoforte Op. 41\nSonata per violoncello e pianoforte N. 3 Op. 69\nSonata per violino e pianoforte N. 5 Op. 24\nTrio Op. 1 N. 1
Pierre Boulez | Douze Notations\nSonatina per flauto e pianoforte
Johannes Brahms | Rapsodie Op. 79\nSouvenir de la Russie Ans.4/6 per pianoforte a quattro mani\nDanze Ungheresi per pianoforte a quattro mani (selezione)\nTrio N. 1 Op. 8
William Byrd | The Battell, BK 94\nPavana Lachrimae
John Cage | In a landscape\nMysterious Adventure per pianoforte preparato\nFads and Fancies in the Academy per pianoforte e percussioni\nCredo in US per pianoforte, percussioni, radio e fonografo
Elliott Carter | Epigrams, per trio con pianoforte
Alfredo Casella | Pupazzetti, per pianoforte a quattro mani
Fryderyk Chopin | Etudes Op. 10\nEtudes Op. 25 (selezione)\nSonata N.1 Op. 4\nBallade N. 2 Op. 38\nPolonaise Op. 44\nPolonaise KK IVa N.5 "Adieu! Á Guillaume Kolberg"\nVariations Brillantes Op. 12\nBerceuse Op. 57\nBarcarolle Op. 60
Muzio Clementi | Sonata Op. 50 N. 3 "Didone Abbandonata"
Claude Debussy | Children's Corner\nSuite Bergamasque\nPreludes (selezione)
Antonin Dvořák | Quintetto con pianoforte N. 2 Op. 81
César Franck | Prélude, Aria et Final
Girolamo Frescobaldi | Aria detto Balletto
Carlo Galante | Domenico Fragments, per chitarra e pianoforte
Gentle Giant | Experience, per pianoforte (tr. Chines)\nExperience, per flauto, chitarra elettrica, violoncello e pianoforte (tr. Chines)
Carlo Gesualdo | Canzon Francese del Principe\nAestimatus sum (tr. Delucchi)\nMoro, lasso, al mio duolo (tr. Delucchi)
Louis Moreau Gottschalk | Souvenir de la Havane Op. 39\nSouvenir de Porto Rico Op. 31
Franz Josef Haydn | Sonata in do minore Hob.XVI:20\nSonata in si minore Hob.XVI:32\nSonata in do maggiore Hob.XVI:50
Henri Herz | Grandes Variations sul le choeur des chasseurs d'Euriante (Weber)
Paul Hindemith | Sonata per viola e pianoforte Op. 11 N.4
György Ligeti | Musica Ricercata
Franz Liszt | Réminescences de Lucia di Lammermoor S. 397\nAnnées de pèlerinage (selezione)\nTotentanz S. 525\nRapsodia Ungherese N.2 S. 244/2
Felix Mendelssohn | Variations Sérieuses Op. 54\nRondo Capriccioso Op. 14\nFantasia in fa diesis minore Op. 28\nLieder Ohne Worte (selezione)
Roberto Molinelli | Milonga y Chacarera per viola e trio con pianoforte
Wolfgang Amadeus Mozart | Sonata in la minore KV 310\nSonata in la maggiore KV 331\nSonata in do minore KV 457\nSonata in do maggiore KV 545\nSonata in si bemolle maggiore KV 570\nVariazioni su "Salve Tu Domine" (Paisiello) KV 398\nVariazioni su "Unser dummer Pobel Meint (Gluck) KV 455\nTrio mi maggiore KV 542
Arvo Pärt | Fratres
Sergei Prokofiev | Sonata N. 3 Op. 28\nSarcasms Op. 17\nQuattro Pezzi Op.4\nToccata Op. 11
Jean-Philippe Rameau | Suite in mi minore\nSuite in la minore
Maurice Ravel | Valses Nobles et sentimentales\nLa Valse, per due pianoforti
Wolfgang Rihm | Mehrere kurze Walzer, per pianoforte a quattro mani
Camille Saint-Saëns | Le Carnaval des Animaux
Domenico Scarlatti | 30 Sonate
Alfred Schnittke | Hommage a Stravinsky, Prokofiev and Shostakovich, per pianoforte sei mani
Arnold Schönberg | Verklärte Nacht Op. 4 per trio con pianoforte (tr. Steuermann)\nPierrot Lunaire, op. 21 (versione di Erwin Stein)
Franz Schubert | Sonata in si bemolle maggiore D.960\nSonata in la minore D.784\nSonata in re maggiore D.850\nImpromptus Op. 90\nSonata Arpeggione D.821 per violoncello e pianoforte\nMarches Caractéristiques D.968b per pianoforte a quattro mani\nFantasia in fa minore D.940 per pianoforte a quattro mani\nTrio Op. 100
Robert Schumann | Variazioni Abegg Op. 1\nPapillons Op. 2\nKreisleriana, Op. 16\nArabeske Op. 18\nQuintetto con pianoforte Op. 44
Salvatore Sciarrino | Perduto in una città d'acque\nAnamorfosi
Orazio Sciortino | Scarlattiana, per chitarra e pianoforte
Alexander Scriabin | Sonata N. 9 Op. 68 "Messa Nera"
Dmitri Shostakovich | Quintetto con pianoforte Op. 57\nTrio Op. 67\nPreludi e Fughe (selezione)
Bedřich Smetana | Trio Op. 15
Antonio Soler | Fandango in re minore R.146\nSonate (selezione)
Igor Stravinskij | L'Oiseau de Feu (tr. Agosti)
Jan Pieterszoon Sweelinck | Mein Junges Leben hat ein End, SwWV 324
Pyotr Ilyich Tchaikovsky | Scherzo dalla Sinfonia N. 6 (tr. Feinberg)
Carl Maria von Weber | Sonata N. 3 Op. 49`,
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
    contact: { title: "Contatti" }
  },
  en: {
    nav: { about: "Bio", concerts: "Concerts", repertorio: "Repertoire", media: "Media", contact: "Contact" },
    home: { title: "Alberto Chines", subtitle: "Pianist", tagline: "Steinway Artist" },
    about: {
      title: "Biography",
      content: `Alberto Chines, a Steinway Artist since 2020, is a versatile pianist who balances an extensive solo career with a profound dedication to chamber music and education.

His training, enriched by world-renowned artists, was consolidated at the Imola Academy under the guidance of Franco Scala and Piero Rattalino, and at the Bolzano Conservatory with Davide Cabassi. After debuting at fifteen at the Teatro Massimo in Palermo, he won first prize at the International Palma d'Oro Competition (2011), the Sony Classical Talent Scout in Madesimo (2013), and second prize at the Euregio Piano Award (2014).

His concert activity has led him to prestigious venues including the Van Cliburn Recital Hall, Teatro alla Scala, and Politeama Garibaldi. He recently debuted at the Bartolomeo Cristofori Festival performing Schönberg’s Pierrot Lunaire.

He is a Professor of Piano at the "Francesco Venezze" Conservatory in Rovigo.`
    },
    repertorio: {
      title: "Repertoire",
      solisticoTitle: "Solo and Chamber Repertoire",
      orchestraTitle: "Piano and Orchestra",
      solistico: `Thomas Adès | Darknesse Visible (after John Dowland)
Carl Philipp Emanuel Bach | Variations on Folie d'Espagne H. 263
Johann Christian Bach | Sonata in C minor Op. 5 No. 6\nPiano quartet in G major W B66
Johann Sebastian Bach | Partita No. 1 BWV 825\nPartita No. 2 BWV 826\nEnglish Suite No. 2 BWV 807\nEnglish Suite No. 3 BWV 808\nFrench Suite No. 5 BWV 816\nToccata in E minor BWV 914\nSonata in D major BWV 963\nDas wohltemperierte Klavier I&II (selection)\nDie Kunst der Fuge (selection)\nFantasia and Fugue in G minor BWV 542 (tr. Liszt)\nViolin Partita No. 3 (tr. Rachmaninov)\nPassacaglia and Fugue in C minor BWV 582 (tr. D'Albert)\nToccata and Fugue in D minor BWV 565 (tr. Busoni)\nBrandenburg Concerto No. 3 BWV 1048 (tr. Friedman)
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
  if (context === undefined) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}