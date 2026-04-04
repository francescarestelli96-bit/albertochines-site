'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

const LanguageContext = createContext<any>(null);
const PRESS_KIT_URL = "/downloads/presskit.zip?v=20260404";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'it' | 'en'>('it');

  const translations: any = {
    it: {
      nav: { bio: "BIO", repertoire: "REPERTORIO", media: "MEDIA", concerts: "CONCERTI", contact: "CONTATTI" },
      bio: {
        title: "BIO",
        pressKitBtn: "DOWNLOAD PRESS KIT",
        pressKitUrl: PRESS_KIT_URL,
        content: `Alberto Chines, Steinway Artist dal 2020, è un pianista poliedrico che unisce all'attività solistica un profondo interesse per la musica da camera e per la didattica.

Il suo percorso formativo, ricco di incontri e masterclass con artisti di fama mondiale, si è consolidato presso l'Accademia di Imola sotto la guida di Franco Scala e Piero Rattalino, e al Conservatorio di Bolzano con Davide Cabassi. Dopo il debutto a soli quindici anni al Teatro Massimo di Palermo, si è imposto all'attenzione della critica vincendo il primo premio al Concorso Internazionale Palma d'Oro di Finale Ligure (2011), il Sony Classical Talent Scout di Madesimo (2013) e il secondo premio all'Euregio Piano Award di Geilenkirchen (2014).

La sua attività concertistica lo ha portato a esibirsi in sedi di prestigio internazionale, tra cui la Van Cliburn Recital Hall di Fort Worth (USA), la Sala Mozart dell'Accademia Filarmonica di Bologna, il Teatro Olimpico di Vicenza, il Politeama Garibaldi di Palermo e il Teatro alla Scala di Milano. Ha suonato a Londra per il Keyboard Charitable Trust e ai Klaviertage del Tiroler Festspiele Erl (Austria), e ha recentemente debuttato al Festival Bartolomeo Cristofori di Padova eseguendo il Pierrot Lunaire di Schönberg per voce e pianoforte solo, insieme alla propria trascrizione del Sacre du Printemps di Stravinskij.

Alberto Chines è inoltre un camerista appassionato. Collabora regolarmente con artisti quali Anna Serova, Eugenio Della Chiara, Emanuele Delucchi, Rebecca Taio, Danilo Pastore e il Quartetto Noûs, esplorando il repertorio dal duo al quintetto con grandi aperture verso la nuova musica. La sua discografia include un album di debutto per BAM International con opere di Bach, Schumann, Ravel e Bartók.

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
      concerts: { title: "CONCERTI", message: "SEZIONE IN AGGIORNAMENTO" },
      contact: { title: "CONTATTI", email: "EMAIL", follow: "SEGUI" }
    },
    en: {
      nav: { bio: "BIO", repertoire: "REPERTOIRE", media: "MEDIA", concerts: "CONCERTS", contact: "CONTACT" },
      bio: {
        title: "BIO",
        pressKitBtn: "DOWNLOAD PRESS KIT",
        pressKitUrl: PRESS_KIT_URL,
        content: `Alberto Chines, a Steinway Artist since 2020, is a multifaceted pianist who combines an extensive solo career with a profound interest in chamber music and education.

His artistic journey, shaped by encounters and masterclasses with world-renowned artists, was consolidated at the Imola Academy under the guidance of Franco Scala and Piero Rattalino, and at the Bolzano Conservatory with Davide Cabassi. Following his debut at the age of fifteen at the Teatro Massimo in Palermo, he gained critical attention by winning first prize at the International "Palma d’Oro" Competition in Finale Ligure (2011), the Sony Classical Talent Scout in Madesimo (2013), and second prize at the Euregio Piano Award in Geilenkirchen (2014).

His concert activity has led him to perform at prestigious international venues, including the Van Cliburn Recital Hall in Fort Worth (USA), the Sala Mozart of the Accademia Filarmonica in Bologna, the Teatro Olimpico in Vicenza, the Politeama Garibaldi in Palermo, and the Teatro alla Scala in Milan. He has performed in London for the Keyboard Charitable Trust and at the Klaviertage of the Tiroler Festspiele Erl (Austria). He recently debuted at the Festival Bartolomeo Cristofori in Padua, performing Schönberg's Pierrot Lunaire for voice and solo piano, alongside his own transcription of Stravinsky’s Rite of Spring.

Alberto Chines is also a passionate chamber musician. He regularly collaborates with artists such as Anna Serova, Eugenio Della Chiara, Emanuele Delucchi, Rebecca Taio, Danilo Pastore, and the Quartetto Noûs, exploring repertoire from duo to quintet with a strong emphasis on contemporary music. His discography includes a debut album for BAM International featuring works by Bach, Schumann, Ravel, and Bartók.

Active in cultural promotion, he was the creator of the Musica Manent Festival in Ustica and stably collaborates with the Primavera di Baggio in Milan.

Alberto Chines is a Piano Professor at the "Francesco Venezze" Conservatory in Rovigo.`
      },
      repertoire: {
        title: "REPERTOIRE",
        subtitle: "CHAMBER AND SOLO MUSIC",
        orchestraTitle: "PIANO AND ORCHESTRA",
        content: [
          { composer: "THOMAS ADÈS", works: "Darknesse Visible (after John Dowland)" },
          { composer: "C.P.E. BACH", works: "Variations on La Folia H. 263" },
          { composer: "J.C. BACH", works: "Sonata in C minor Op. 5 No. 6, Piano Quartet in G major W B66" },
          { composer: "J.S. BACH", works: "Partita No. 2 BWV 826, English Suites No. 2 & 3, French Suite No. 5, Toccata in E minor BWV 914, The Well-Tempered Clavier (selection), The Art of Fugue (selection), Fantasia and Fugue in G minor (arr. Liszt), Passacaglia and Fugue in C minor (arr. D’Albert), Toccata and Fugue in D minor (arr. Busoni), Brandenburg Concerto No. 3 (arr. Friedman)" },
          { composer: "BÉLA BARTÓK", works: "Suite Op. 14, Dance Suite Sz. 77 BB86b" },
          { composer: "LUDWIG VAN BEETHOVEN", works: "Sonatas Op. 2, 14, 22, 27, 28, 31, 53 “Waldstein”, 81a “Les Adieux”, 111, Variations and Fugue Op. 35 “Eroica”, Variations WoO 80, Serenade Op. 41, Trio Op. 1 No. 1" },
          { composer: "PIERRE BOULEZ", works: "Douze Notations, Sonatina for flute and piano" },
          { composer: "JOHANNES BRAHMS", works: "Rhapsodies Op. 79, Souvenir de la Russie, Hungarian Dances, Trio No. 1 Op. 8" },
          { composer: "FERRUCCIO BUSONI", works: "Albumblatt BV272 for flute and piano" },
          { composer: "WILLIAM BYRD", works: "The Battell BK 94, Pavana Lachrimae" },
          { composer: "JOHN CAGE", works: "Bacchanale for prepared piano, In a landscape, Mysterious Adventure, Credo in US" },
          { composer: "ALFREDO CASELLA", works: "Barcarola et Scherzo Op. 4 for flute and piano, Pupazzetti" },
          { composer: "FRYDERYK CHOPIN", works: "Ballade No. 2 Op. 38, Barcarolle Op. 60, Variations Brillantes Op. 12, Berceuse Op. 57, Etudes Op. 10 & 25, Polonaises" },
          { composer: "MUZIO CLEMENTI", works: "Sonata Op. 50 No. 3 “Didone Abbandonata”" },
          { composer: "CLAUDE DEBUSSY", works: "Children’s Corner, Suite Bergamasque, Preludes" },
          { composer: "FRANCESCO FILIDEI", works: "Toccata" },
          { composer: "CÉSAR FRANCK", works: "Prélude, Aria et Final" },
          { composer: "CARLO GESUALDO", works: "Sparge la morte (arr. Delucchi), Moro lasso (arr. Delucchi), Canzon Francese del Principe" },
          { composer: "FRANZ JOSEPH HAYDN", works: "Sonata in C minor Hob.XVI:20, Sonata in B minor Hob.XVI:32, Sonata in C major Hob.XVI:50" },
          { composer: "GYÖRGY LIGETI", works: "Musica Ricercata" },
          { composer: "FRANZ LISZT", works: "Réminescences de Lucia di Lammermoor S. 397, Années de pèlerinage, Totentanz S. 525, Hungarian Rhapsody No. 2" },
          { composer: "W.A. MOZART", works: "Sonatas KV 310, 331, 457, 545, 570, Variations KV 398 & 455, Trio KV 542" },
          { composer: "MARIO PILATI", works: "Sonata for flute and piano" },
          { composer: "SERGEJ PROKOFIEV", works: "Sonata No. 3 Op. 28, Sarcasms Op. 17, Toccata Op. 11, Four Pieces Op. 4" },
          { composer: "JEAN-PHILIPPE RAMEAU", works: "Les Indes Galantes (arr. Dukas) - selection, Suite in E minor, Suite in A minor" },
          { composer: "MAURICE RAVEL", works: "Valses Nobles et sentimentales, La Valse (for two pianos)" },
          { composer: "OTTORINO RESPIGHI", works: "Ancient Airs and Dances, Sonata for violin and piano P. 110" },
          { composer: "CAMILLE SAINT-SAËNS", works: "The Carnival of the Animals, 6 Duos Op. 8 for harmonium and piano" },
          { composer: "ALFRED SCHNITTKE", works: "Sonata No. 1 for cello and piano, Hommage a Stravinsky, Prokofiev and Shostakovich" },
          { composer: "ARNOLD SCHÖNBERG", works: "Pierrot Lunaire (arr. Stein), Verklärte Nacht Op. 4 (arr. Steuermann), 6 Stücke for piano four hands" },
          { composer: "FRANZ SCHUBERT", works: "Sonata D. 960, D. 784, D. 850, Impromptus Op. 90, Fantasy in F minor D. 940, Trio Op. 100" },
          { composer: "ROBERT SCHUMANN", works: "Abegg Variations Op. 1, Papillons Op. 2, Kreisleriana Op. 16, Arabeske Op. 18, Quintet Op. 44" },
          { composer: "SALVATORE SCIARRINO", works: "Perduto in una città d’acque, Anamorfosi" },
          { composer: "DMITRI SHOSTAKOVICH", works: "Sonata Op. 147 for viola and piano, Quintet Op. 57, Trio Op. 67, Preludes and Fugues" },
          { composer: "ANTONIO SOLER", works: "Fandango in D minor R. 146, Sonatas (selection)" },
          { composer: "IGOR STRAVINSKY", works: "The Rite of Spring (arr. Alberto Chines), The Firebird (arr. Agosti)" },
          { composer: "PYOTR ILYICH TCHAIKOVSKY", works: "Scherzo from Symphony No. 6 (arr. Feinberg)" }
        ],
        orchestra: [
          { composer: "J.S. BACH", works: "Concerto in D minor BWV 1052" },
          { composer: "BÉLA BARTÓK", works: "Concerto No. 3 Sz. 119" },
          { composer: "L. VAN BEETHOVEN", works: "Concerto No. 3 Op. 37, No. 4 Op. 58, Triple Concerto" },
          { composer: "W.A. MOZART", works: "Concertos KV 414, 415, 488" },
          { composer: "SERGEI RACHMANINOFF", works: "Concerto No. 2 Op. 18" }
        ]
      },
      concerts: { title: "CONCERTS", message: "SECTION UNDER UPDATE" },
      contact: { title: "CONTACT", email: "EMAIL", follow: "FOLLOW" }
    }
  };

  const t = (path: string) => {
    return path.split('.').reduce((obj, key) => obj && obj[key], translations[language]) || path;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'it' ? 'en' : 'it'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
