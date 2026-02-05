'use client';
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext<any>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<'it' | 'en'>('it');

  const translations: any = {
    it: {
      nav: { bio: "BIO", repertoire: "REPERTORIO", media: "MEDIA", concerts: "CONCERTI", contact: "CONTATTI" },
      bio: {
        title: "BIO",
        pressKitBtn: "DOWNLOAD PRESS KIT",
        pressKitUrl: "/downloads/presskit.zip",
        content: `Alberto Chines, Steinway Artist dal 2020, è un pianista poliedrico che unisce all'attività solistica un profondo interesse per la musica da camera e per la didattica.

Il suo percorso formativo, ricco di incontri e masterclass con artisti di fama mondiale, si è consolidato presso l'Accademia di Imola sotto la guida di Franco Scala e Piero Rattalino, e al Conservatorio di Bolzano con Davide Cabassi. Dopo il debutto a soli quindici anni al Teatro Massimo di Palermo, si è imposto all'attenzione della critica vincendo il primo premio al Concorso Internazionale Palma d'Oro di Finale Ligure (2011), il Sony Classical Talent Scout di Madesimo (2013) e il secondo premio all'Euregio Piano Award di Geilenkirchen (2014).

La sua attività concertistica lo ha portato a esibirsi in sedi di prestigio internazionale, tra cui la Van Cliburn Recital Hall di Fort Worth (USA), la Sala Mozart dell'Accademia Filarmonica di Bologna, il Teatro Olimpico di Vicenza, il Politeama Garibaldi di Palermo e il Teatro alla Scala di Milano. Ha suonato a Londra per il Keyboard Charitable Trust e ai Klaviertage del Tiroler Festspiele Erl (Austria), e ha recentemente debuttato al Festival Bartolomeo Cristofori di Padova eseguendo il Pierrot Lunaire di Schönberg per voce e pianoforte solo, insieme alla propria trascrizione del Sacre du Printemps di Stravinskij.

Alberto Chines è inoltre un camerista appassionato. Collabora regolarmente con artisti quali Anna Serova, Eugenio Della Chiara, Emanuele Delucchi, Rebecca Taio, Danilo Pastore e il Quartetto Nôus, esplorando il repertorio dal duo al quintetto con grandi aperture verso la nuova musica. La sua discografia include un album di debutto per BAM International con opere di Bach, Schumann, Ravel e Bartók.

Attivo anche nella promozione culturale, è stato l'ideatore del Musica Manent Festival di Ustica e collabora stabilmente con la Primavera di Baggio di Milano.

Alberto Chines è docente di pianoforte presso il Conservatorio "Francesco Venezze" di Rovigo.`
      },
      repertoire: {
        title: "REPERTORIO",
        subtitle: "MUSICA DA CAMERA E SOLISTICO",
        orchestraTitle: "REPERTORIO CON ORCHESTRA",
        content: [
          { composer: "THOMAS ADÈS", works: "Darknesse Visible (after John Dowland)" },
          { composer: "C.P.E. BACH", works: "Variazioni sulla Follia di Spagna H. 263" },
          { composer: "J.C. BACH", works: "Sonata in do minore Op. 5 N. 6, Quartetto con pianoforte in sol maggiore W B66" },
          { composer: "J.S. BACH", works: "Partita N. 2 BWV 826, Suite Inglese N. 2 & 3, Suite Francese N. 5, Toccata in mi minore BWV 914, Das wohltemperierte Klavier (selezione), Die Kunst der Fuge (selezione), Fantasia e Fuga in sol minore (tr. Liszt), Passacaglia e Fuga in do minore (tr. D’Albert), Toccata e Fuga in re minore (tr. Busoni), Concerto Brandeburghese N. 3 (tr. Friedman)" },
          { composer: "BÉLA BARTÓK", works: "Suite Op. 14, Suite di Danze Sz. 77 BB86b" },
          { composer: "LUDWIG VAN BEETHOVEN", works: "Sonate Op. 2, 14, 22, 27, 28, 31, 53 “Waldstein”, 81a “Les Adieux”, 111, Variazioni e Fuga Op. 35 “Eroica”, Variazioni WoO 80, Serenata Op. 41, Trio Op. 1 N. 1" },
          { composer: "PIERRE BOULEZ", works: "Douze Notations, Sonatina per flauto e pianoforte" },
          { composer: "JOHANNES BRAHMS", works: "Rapsodie Op. 79, Souvenir de la Russie, Danze Ungheresi, Trio N. 1 Op. 8" },
          { composer: "FERRUCCIO BUSONI", works: "Albumblatt BV272 per flauto e pianoforte" },
          { composer: "WILLIAM BYRD", works: "The Battell BK 94, Pavana Lachrimae" },
          { composer: "JOHN CAGE", works: "Bacchanale per pianoforte preparato, In a landscape, Mysterious Adventure, Credo in US" },
          { composer: "ALFREDO CASELLA", works: "Barcarola et Scherzo Op. 4 per flauto e pianoforte, Pupazzetti" },
          { composer: "FRYDERYK CHOPIN", works: "Ballata N. 2 Op. 38, Barcarolle Op. 60, Variations Brillantes Op. 12, Berceuse Op. 57, Etudes Op. 10 & 25, Polonaises" },
          { composer: "MUZIO CLEMENTI", works: "Sonata Op. 50 N. 3 “Didone Abbandonata”" },
          { composer: "CLAUDE DEBUSSY", works: "Children’s Corner, Suite Bergamasque, Preludes" },
          { composer: "FRANCESCO FILIDEI", works: "Toccata" },
          { composer: "CÉSAR FRANCK", works: "Prélude, Aria et Final" },
          { composer: "CARLO GESUALDO", works: "Sparge la morte (tr. Delucchi), Moro lasso (tr. Delucchi), Canzon Francese del Principe" },
          { composer: "FRANZ JOSEPH HAYDN", works: "Sonata in do minore Hob.XVI:20, Sonata in si minore Hob.XVI:32, Sonata in do maggiore Hob.XVI:50" },
          { composer: "GYÖRGY LIGETI", works: "Musica Ricercata" },
          { composer: "FRANZ LISZT", works: "Réminescences de Lucia di Lammermoor S. 397, Années de pèlerinage, Totentanz S. 525, Rapsodia Ungherese N. 2" },
          { composer: "W.A. MOZART", works: "Sonate KV 310, 331, 457, 545, 570, Variazioni KV 398 & 455, Trio KV 542" },
          { composer: "MARIO PILATI", works: "Sonata per flauto e pianoforte" },
          { composer: "SERGEJ PROKOF'EV", works: "Sonata N. 3 Op. 28, Sarcasms Op. 17, Toccata Op. 11, Quattro Pezzi Op. 4" },
          { composer: "JEAN-PHILIPPE RAMEAU", works: "Les Indes Galantes (tr. Dukas) - selezione, Suite in mi minore, Suite in la minore" },
          { composer: "MAURICE RAVEL", works: "Valses Nobles et sentimentales, La Valse (per due pianoforti)" },
          { composer: "OTTORINO RESPIGHI", works: "Antiche Arie e Danze, Sonata per violino e pianoforte P. 110" },
          { composer: "CAMILLE SAINT-SAËNS", works: "Le Carnaval des Animaux, 6 Duos Op. 8 per harmonium e pianoforte" },
          { composer: "ALFRED SCHNITTKE", works: "Sonata N. 1 per violoncello e pianoforte, Hommage a Stravinsky, Prokofiev and Shostakovich" },
          { composer: "ARNOLD SCHÖNBERG", works: "Pierrot Lunaire (tr. Stein), Verklärte Nacht Op. 4 (tr. Steuermann), 6 Stücke per pianoforte a quattro mani" },
          { composer: "FRANZ SCHUBERT", works: "Sonata D. 960, D. 784, D. 850, Impromptus Op. 90, Fantasia in fa minore D. 940, Trio Op. 100" },
          { composer: "ROBERT SCHUMANN", works: "Variazioni Abegg Op. 1, Papillons Op. 2, Kreisleriana Op. 16, Arabeske Op. 18, Quintetto Op. 44" },
          { composer: "SALVATORE SCIARRINO", works: "Perduto in una città d’acque, Anamorfosi" },
          { composer: "DMÍTRIJ ŠOSTAKÓVIČ", works: "Sonata Op. 147 per viola e pianoforte, Quintetto Op. 57, Trio Op. 67, Preludi e Fughe" },
          { composer: "ANTONIO SOLER", works: "Fandango in re minore R. 146, Sonate (selezione)" },
          { composer: "IGOR STRAVINSKIJ", works: "Le Sacre du Printemps (tr. Alberto Chines), L'Oiseau de Feu (tr. Agosti)" },
          { composer: "PËTR IL'IČ ČAJKOVSKIJ", works: "Scherzo dalla Sinfonia N. 6 (tr. Feinberg)" }
        ],
        orchestra: [
          { composer: "J.S. BACH", works: "Concerto in re minore BWV 1052" },
          { composer: "BÉLA BARTÓK", works: "Concerto N. 3 Sz. 119" },
          { composer: "L. VAN BEETHOVEN", works: "Concerto N. 3 Op. 37, N. 4 Op. 58, Triplo Concerto" },
          { composer: "W.A. MOZART", works: "Concerti KV 414, 415, 488" },
          { composer: "SERGEJ RACHMANINOV", works: "Concerto N. 2 Op. 18" }
        ]
      },
      concerts: { title: "CONCERTI", message: "DATE IN AGGIORNAMENTO PER IL 2026." },
      contact: { title: "CONTATTI", email: "EMAIL", follow: "SEGUI" }
    },
    en: {
      nav: { bio: "BIO", repertoire: "REPERTOIRE", media: "MEDIA", concerts: "CONCERTS", contact: "CONTACT" },
      bio: {
        title: "BIO",
        pressKitBtn: "DOWNLOAD PRESS KIT",
        pressKitUrl: "/downloads/presskit.zip",
        content: `Alberto Chines, a Steinway Artist since 2020...`
      },
      repertoire: {
        title: "REPERTOIRE",
        subtitle: "CHAMBER AND SOLO MUSIC",
        orchestraTitle: "PIANO AND ORCHESTRA",
        content: [
          { composer: "THOMAS ADÈS", works: "Darknesse Visible" },
          { composer: "CAMILLE SAINT-SAËNS", works: "Carnival of the Animals, 6 Duos Op. 8" },
          { composer: "IGOR STRAVINSKY", works: "The Rite of Spring (tr. Alberto Chines)" }
        ],
        orchestra: []
      }
    }
  };

  const t = (path: string) => {
    return path.split('.').reduce((obj, key) => obj && obj[key], translations[language]) || path;
  };

  const setLang = (lang: 'it' | 'en') => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => React.useContext(LanguageContext);