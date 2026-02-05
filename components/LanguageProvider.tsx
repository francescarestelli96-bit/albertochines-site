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
          { composer: "J.S. BACH", works: "Partita N. 2 BWV 826, Suite Inglese N. 2 & 3, Suite Francese N. 5, Toccata in mi minore BWV 914, Das wohltemperierte Klavier (selezione), Die Kunst der Fuge (selezione), Fantasia e Fuga in sol minore (tr. Liszt), Passacaglia e Fuga in do minore (tr. D’Albert), Toccata e Fuga in re minore (tr. Busoni)" },
          { composer: "BÉLA BARTÓK", works: "Suite Op. 14, Suite di Danze Sz. 77 BB86b" },
          { composer: "LUDWIG VAN BEETHOVEN", works: "Sonate Op. 2, 14, 22, 27, 28, 31, 53 “Waldstein”, 81a “Les Adieux”, 111, Variazioni e Fuga Op. 35 “Eroica”, Variazioni WoO 80, Serenata Op. 41" },
          { composer: "PIERRE BOULEZ", works: "Douze Notations, Sonatina per flauto e pianoforte" },
          { composer: "JOHANNES BRAHMS", works: "Rapsodie Op. 79, Souvenir de la Russie, Danze Ungheresi, Trio N. 1 Op. 8" },
          { composer: "JOHN CAGE", works: "In a landscape, Mysterious Adventure, Bacchanale, Credo in US" },
          { composer: "FRYDERYK CHOPIN", works: "Etudes Op. 10 & 25, Sonata N. 1, Variations Brillantes Op. 12, Berceuse Op. 57, Barcarolle Op. 60" },
          { composer: "CLAUDE DEBUSSY", works: "Children’s Corner, Suite Bergamasque, Preludes" },
          { composer: "CARLO GESUALDO", works: "Canzon Francese del Principe, Moro lasso, Sparge la morte (tr. Delucchi)" },
          { composer: "GYÖRGY LIGETI", works: "Musica Ricercata" },
          { composer: "FRANZ LISZT", works: "Réminescences de Lucia di Lammermoor S. 397, Années de pèlerinage, Totentanz S. 525" },
          { composer: "W.A. MOZART", works: "Sonate KV 310, 331, 457, 545, 570, Variazioni KV 398 & 455" },
          { composer: "MAURICE RAVEL", works: "Valses Nobles et sentimentales, La Valse" },
          { composer: "CAMILLE SAINT-SAËNS", works: "Le Carnaval des Animaux, 6 Duos Op. 8 per harmonium e pianoforte" },
          { composer: "ALFRED SCHNITTKE", works: "Hommage a Stravinsky, Prokofiev and Shostakovich, Sonata N. 1 per violoncello" },
          { composer: "ARNOLD SCHÖNBERG", works: "Verklärte Nacht Op. 4 (tr. Steuermann), Pierrot Lunaire (tr. Stein)" },
          { composer: "FRANZ SCHUBERT", works: "Sonate D. 960, D. 784, D. 850, Impromptus Op. 90, Fantasia in fa minore D. 940" },
          { composer: "ROBERT SCHUMANN", works: "Variazioni Abegg Op. 1, Papillons Op. 2, Kreisleriana Op. 16, Arabeske Op. 18" },
          { composer: "DMITRIJ ŠOSTAKOVIČ", works: "Quintetto Op. 57, Trio Op. 67, Sonata Op. 147, Preludi e Fughe" },
          { composer: "IGOR STRAVINSKY", works: "L’Oiseau de Feu (tr. Agosti), Le Sacre du Printemps (tr. Chines)" },
          { composer: "ANTONIO SOLER", works: "Fandango in re minore R. 146, Sonate (selezione)" },
          { composer: "P.I. ČAJKOVSKIJ", works: "Scherzo dalla Sinfonia N. 6 (tr. Feinberg)" }
        ],
        orchestra: [
          { composer: "J.S. BACH", works: "Concerto in re minore BWV 1052" },
          { composer: "BÉLA BARTÓK", works: "Concerto N. 3 Sz. 119" },
          { composer: "L. VAN BEETHOVEN", works: "Concerto N. 3 Op. 37, N. 4 Op. 58, Triplo Concerto" },
          { composer: "W.A. MOZART", works: "Concerti KV 414, 415, 488" },
          { composer: "SERGEJ RACHMANINOV", works: "Concerto N. 2 Op. 18" }
        ]
      },
      concerts: { title: "CONCERTI", message: "DATE IN AGGIORNAMENTO PER LA STAGIONE 2026." },
      contact: { title: "CONTATTI", email: "EMAIL", follow: "SEGUI" }
    },
    en: {
      nav: { bio: "BIO", repertoire: "REPERTOIRE", media: "MEDIA", concerts: "CONCERTS", contact: "CONTACT" },
      bio: {
        title: "BIO",
        pressKitBtn: "DOWNLOAD PRESS KIT",
        pressKitUrl: "/downloads/presskit.zip",
        content: `Alberto Chines, a Steinway Artist since 2020, is a multifaceted pianist...`
      },
      repertoire: {
        title: "REPERTOIRE",
        subtitle: "CHAMBER AND SOLO MUSIC",
        orchestraTitle: "PIANO AND ORCHESTRA",
        content: [
          { composer: "THOMAS ADÈS", works: "Darknesse Visible" },
          { composer: "CAMILLE SAINT-SAËNS", works: "Carnival of the Animals" },
          { composer: "IGOR STRAVINSKY", works: "The Rite of Spring (tr. Chines)" }
        ],
        orchestra: [
          { composer: "W.A. MOZART", works: "Concerto KV 488" }
        ]
      },
      concerts: { title: "CONCERTS", message: "DATES UPDATING FOR THE 2026 SEASON." }
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

export const useLanguage = () => useContext(LanguageContext);