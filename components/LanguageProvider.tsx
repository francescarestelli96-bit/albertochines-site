'use client';
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext<any>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<'it' | 'en'>('it');

  const translations: any = {
    it: {
      nav: { about: "Bio", concerts: "Concerti", repertorio: "Repertorio", media: "Media", contact: "Contatti" },
      about: {
        title: "Bio",
        content: `Alberto Chines, Steinway Artist dal 2020, è un pianista poliedrico che unisce all'attività solistica un profondo interesse per la musica da camera e per la didattica.

Il suo percorso formativo, ricco di incontri e masterclass con artisti di fama mondiale, si è consolidato presso l'Accademia di Imola sotto la guida di Franco Scala e Piero Rattalino, e al Conservatorio di Bolzano con Davide Cabassi. Dopo il debutto a soli quindici anni al Teatro Massimo di Palermo, si è imposto all'attenzione della critica vincendo il primo premio al Concorso Internazionale Palma d'Oro di Finale Ligure (2011), il Sony Classical Talent Scout di Madesimo (2013) e il secondo premio all'Euregio Piano Award di Geilenkirchen (2014).

La sua attività concertistica lo ha portato a esibirsi in sedi di prestigio internazionale, tra cui la Van Cliburn Recital Hall di Fort Worth (USA), la Sala Mozart dell'Accademia Filarmonica di Bologna, il Teatro Olimpico di Vicenza, il Politeama Garibaldi di Palermo e il Teatro alla Scala di Milano. Ha suonato a Londra per il Keyboard Charitable Trust e ai Klaviertage del Tiroler Festspiele Erl (Austria), e ha recentemente debuttato al Festival Bartolomeo Cristofori di Padova eseguendo il Pierrot Lunaire di Schönberg per voce e pianoforte solo, insieme alla propria trascrizione del Sacre du Printemps di Stravinkskij.

Alberto Chines è inoltre un camerista appassionato. Collabora regolarmente con artisti quali Anna Serova, Eugenio Della Chiara, Emanuele Delucchi, Rebecca Taio, Danilo Pastore e il Quartetto Nôus, esplorando il repertorio dal duo al quintetto con grandi aperture verso la nuova musica. La sua discografia include un album di debutto per BAM International con opere di Bach, Schumann, Ravel e Bartók.

Attivo anche nella promozione culturale, è stato l'ideatore del Musica Manent Festival di Ustica e collabora stabilmente con la Primavera di Baggio di Milano.

Alberto Chines è docente di pianoforte presso il Conservatorio "Francesco Venezze" di Rovigo.`
      },
      concerts: { 
        title: "Concerti", 
        upcoming: "Prossimi Appuntamenti", 
        message: "Nuove date in fase di definizione.",
        noConcerts: "Nuove date in fase di definizione." 
      },
      contact: { title: "Contatti", getInTouch: "Mettiamoci in contatto", email: "Email", follow: "Segui" },
      repertorio: {
        title: "Repertorio",
        soloChamber: "Repertorio solistico e cameristico",
        orchestra: "Repertorio con orchestra",
        content: {
          ades: "Darknesse Visible (after John Dowland)",
          cpebach: "Variazioni sulla Follia di Spagna H. 263",
          jcbach: "Sonata in do minore Op. 5 N. 6\nQuartetto con pianoforte in sol maggiore W B66",
          jsbach: "Partita N. 2 BWV 826\nSuite Inglese N. 2 BWV 807\nSuite Ingese N. 3 BWV 808\nSuite Francese N.5 BWV 816\nToccata in mi minore BWV 914\nSonata in re maggiore BWV 963\nDas wohltemperierte Klavier I&II (selezione)\nDie Kunst der Fuge (selezione)\nFantasia e Fuga in sol minore BWV 542 (tr. Liszt)\nPartita per violino N. 3 (tr. Rachmaninov)\nPassacaglia e Fuga in do minore BWV 582 (tr. D’Albert)\nToccata e Fuga in re minore BWV 565 (tr. Busoni)\nConcerto Brandeburghese N. 3 BWV 1048 (tr. Friedman)",
          bartok: "Suite Op. 14\nSuite di Danze Sz. 77 BB86b",
          bauer: "Sonata per violoncello e pianoforte",
          beethoven: "Sonate Op. 2 Nn.1 e 3\nSonata Op. 14 N.2\nSonata Op. 22\nSonata Op. 27 N.2\nSonata Op. 28\nSonata Op. 31 N.1\nSonata Op. 53 “Waldstein”\nSonata Op. 81a “Les Adieux”\nSonata Op.111\nVariazioni e Fuga Op. 35 “Eroica”\nVariazioni in do minore WoO 80\nVariazioni su “Es war einmal ein alter Mann” WoO 66\nSerenata per flauto e pianoforte Op. 41\nSonata per violoncello e pianoforte N. 3 Op. 69\nSonata per violino e pianoforte N. 5 Op. 24\nTrio Op. 1 N. 1",
          boulez: "Douze Notations\nSonatina per flauto e pianoforte",
          brahms: "Rapsodie Op. 79\nSouvenir de la Russie Ans.4/6 per pianoforte a quattro mani\nDanze Ungheresi per pianoforte a quattro mani (selezione)\nTrio N. 1 Op. 8",
          byrd: "The Battell, BK 94\nPavana Lachrimae",
          cage: "In a landscape\nMysterious Adventure per pianoforte preparato\nFads and Fancies in the Academy per pianoforte e percussioni\nCredo in US per pianoforte, percussioni, radio e fonografo",
          carter: "Epigrams, per trio con pianoforte",
          casella: "Pupazzetti, per pianoforte a quattro mani",
          chopin: "Etudes Op. 10\nEtudes Op. 25 (selezione)\nSonata N.1 Op. 4\nBallade N. 2 Op. 38\nPolonaise Op. 44\nPolonaise KK IVa N.5 “Adieu! Á Guillaume Kolberg”\nVariations Brillantes Op. 12\nBerceuse Op. 57\nBarcarolle Op. 60",
          clementi: "Sonata Op. 50 N. 3 “Didone Abbandonata”",
          debussy: "Children’s Corner\nSuite Bergamasque\nPreludes (selezione)",
          dvorak: "Quintetto con pianoforte N. 2 Op. 81",
          franck: "Prélude, Aria et Final",
          frescobaldi: "Aria detto Balletto",
          galante: "Domenico Fragments, per chitarra e pianoforte",
          giant: "Experience, per pianoforte (tr. Chines)\nExperience, per flauto, chitarra elettrica, violoncello e pianoforte (tr. Chines)",
          gesualdo: "Canzon Francese del Principe\nAestimatus sum (tr. Delucchi)\nMoro, lasso, al mio duolo (tr. Delucchi)",
          gottschalk: "Souvenir de la Havane Op. 39\nSouvenir de Porto Rico Op. 31",
          haydn: "Sonata in do minore Hob.XVI:20\nSonata in si minore Hob.XVI:32\nSonata in do maggiore Hob.XVI:50",
          herz: "Grandes Variations sul le choeur dei chasseurs d’Euriante (Weber)",
          hindemith: "Sonata per viola e pianoforte Op. 11 N.4",
          ligeti: "Musica Ricercata",
          liszt: "Réminescences de Lucia di Lammermoor S. 397\nAnnées de pèlerinage (selezione)\nTotentanz S. 525\nRapsodia Ungherese N.2 S. 244/2",
          mendelssohn: "Variations Sérieuses Op. 54\nRondo Capriccioso Op. 14\nFantasia in fa diesis minore Op. 28\nLieder Ohne Worte (selezione)",
          molinelli: "Milonga y Chacarera per viola e trio con pianoforte",
          mozart: "Sonata in la minore KV 310\nSonata in la maggiore KV 331\nSonata in do minore KV 457\nSonata in do maggiore KV 545\nSonata in si bemolle maggiore KV 570\nVariazioni su “Salve Tu Domine” (Paisiello) KV 398\nVariazioni su “Unser dummer Pobel Meint (Gluck) KV 455\nTrio mi maggiore KV 542",
          part: "Fratres",
          prokofiev: "Sonata N. 3 Op. 28\nSarcasms Op. 17\nQuattro Pezzi Op.4\nToccata Op. 11",
          rameau: "Suite in mi minore\nSuite in la minore",
          ravel: "Valses Nobles et sentimentales\nLa Valse, per due pianoforti",
          rihm: "Mehrere kurze Walzer, per pianoforte a quattro mani",
          saintsaens: "Le Carnaval dei Animaux",
          scarlatti: "30 Sonate",
          schnittke: "Hommage a Stravinsky, Prokofiev and Shostakovich, per pianoforte sei mani",
          schonberg: "Verklärte Nacht Op. 4 per trio con pianoforte (tr. Steuermann)",
          schubert: "Sonata in si bemolle maggiore D.960\nSonata in la minore D.784\nSonata in re maggiore D.850\nImpromptus Op. 90\nSonata Arpeggione D.821 per violoncello e pianoforte\nMarches Caractéristiques D.968b (D.886) per pianoforte a quattro mani\nFantasia in fa minore D.940 per pianoforte a quattro mani\nTrio Op. 100",
          schumann: "Variazioni Abegg Op. 1\nPapillons Op. 2\nKreisleriana, Op. 16\nArabeske Op. 18\nQuintetto con pianoforte Op. 44",
          sciarrino: "Perduto in una città d’acque\nAnamorfosi",
          sciortino: "Scarlattiana, per chitarra e pianoforte",
          scriabin: "Sonata N. 9 Op. 68 “Messa Nera”\nEtudes (selezione)",
          shostakovich: "Quintetto con pianoforte Op. 57\nTrio Op. 67\nPreludi e Fughe (selezione)",
          smetana: "Trio Op. 15",
          soler: "Fandango in re minore R.146\nSonate (selezione)",
          stravinsky: "L’Oiseau de Feu (tr. Agosti)",
          sweelinck: "Partite sopra “Mein Junges Leben hat ein End”, SwWV 324",
          tchaikovsky: "Scherzo dalla Sinfonia N. 6 (tr. Feinberg)",
          weber: "Sonata N. 3 Op. 49",
          orch_bach: "Concerto in re minore BWV 1052\nConcerto per due pianoforti in do minore BWV1060",
          orch_bartok: "Concerto N. 3 Sz.119",
          orch_beethoven: "Concerto N. 3 Op. 37\nConcerto N. 4 Op. 58\nTriplo Concerto Op. 56",
          orch_liszt: "Concerto N. 2 S.125\nTotentanz S.126",
          orch_mendelssohn: "Concerto N. 1 Op. 25",
          orch_mozart: "Concerto in la maggiore KV. 414\nConcerto in do maggiore KV. 415\nConcerto in la maggiore KV. 488",
          orch_rach: "Concerto N. 2 Op. 18"
        }
      },
      video: { handelTitle: "G.F. Händel - Lascia ch'io pianga", handelDescription: "Libera trascrizione per pianoforte", moreOnYoutube: "Scopri di più su YouTube" }
    },
    en: {
      nav: { about: "Bio", concerts: "Concerts", repertorio: "Repertoire", media: "Media", contact: "Contact" },
      about: {
        title: "Bio",
        content: `Alberto Chines, a Steinway Artist since 2020, is a multifaceted pianist who combines an extensive solo career with a profound interest in chamber music and education.

His training, enriched by encounters and masterclasses with world-renowned artists, was consolidated at the Imola Academy under the guidance of Franco Scala and Piero Rattalino, and at the Bolzano Conservatory with Davide Cabassi. After debuting at just fifteen years old at the Teatro Massimo in Palermo, he captured the attention of critics by winning first prize at the International "Palma d’Oro" Competition in Finale Ligure (2011), the Sony Classical Talent Scout in Madesimo (2013), and second prize at the Euregio Piano Award in Geilenkirchen (2014).

His concert activity has led him to perform at prestigious international venues, including the Van Cliburn Recital Hall in Fort Worth (USA), the Mozart Hall of the Accademia Filarmonica in Bologna, the Teatro Olimpico in Vicenza, the Politeama Garibaldi in Palermo, and the Teatro alla Scala in Milan. He has performed in London for the Keyboard Charitable Trust and at the Klaviertage of the Tiroler Festspiele Erl (Austria). He recently debuted at the Bartolomeo Cristofori Festival in Padua, performing Schönberg’s Pierrot Lunaire for voice and solo piano, alongside his own transcription of Stravinsky’s Sacre du Printemps.

Alberto Chines is also a passionate chamber musician. He regularly collaborates with artists such as Anna Serova, Eugenio Della Chiara, Emanuele Delucchi, Rebecca Taio, Danilo Pastore, and the Quartetto Nôus, exploring repertoire from duo to quintet with a strong emphasis on contemporary music. His discography includes a debut album for BAM International featuring works by Bach, Schumann, Ravel, and Bartók.

Also active in cultural promotion, he was the creator of the Musica Manent Festival in Ustica and collaborates regularly with the Primavera di Baggio in Milan.

Alberto Chines is a Professor of Piano at the "Francesco Venezze" Conservatory in Rovigo.`
      },
      concerts: { 
        title: "Concerts", 
        upcoming: "Upcoming Events", 
        message: "New dates are being scheduled.",
        noConcerts: "New dates are being scheduled." 
      },
      contact: { title: "Contact", getInTouch: "Get in touch", email: "Email", follow: "Follow" },
      repertorio: {
        title: "Repertoire",
        soloChamber: "Solo and chamber music",
        orchestra: "Piano and orchestra",
        content: {
          ades: "Darknesse Visible (after John Dowland)",
          cpebach: "Variations on Folie d’Espagne H. 263",
          jcbach: "Sonata in C minor Op. 5 No. 6\nPiano quartet in G major W B66",
          jsbach: "Partita No. 1 BWV 825\nPartita No. 2 BWV 826\nEnglish Suite No. 2 BWV 807\nEnglish Suite No. 3 BWV 808\nFrench Suite No.5 BWV 816\nToccata in E minor BWV 914\nSonata in D major BWV 963\nDas wohltemperierte Klavier I&II (selection)\nDie Kunst della Fuge (selection)\nFantasia and Fugue in G minor BWV 542 (tr. Liszt)\nViolin Partita No. 3 (tr. Rachmaninov)\nPassacaglia and Fugue in C minor BWV 582 (tr. D’Albert)\nToccata and Fugue in D minor BWV 565 (tr. Busoni)\nBrandenburg Concerto No. 3 BWV 1048 (tr. Friedman)",
          bartok: "Suite Op. 14\nDance Suite Sz. 77 BB86b",
          bauer: "Sonata for cello and piano",
          beethoven: "Sonatas Op. 2 Nos.1 & 3\nSonata Op. 14 No.2\nSonata Op. 22\nSonata Op. 27 No.2\nSonata Op. 28\nSonata Op. 31 No.1\nSonata Op. 53 “Waldstein”\nSonata Op. 81a “Les Adieux”\nSonata Op.111\nVariations and Fugue Op. 35 “Eroica”\nVariations in C minor WoO 80\nVariations on “Es war einmal ein alter Mann” WoO 66\nSerenade for flute and piano Op. 41\nSonata for cello and piano No. 3 Op. 69\nSonata for violin and piano No. 5 Op. 24\nTrio Op. 1 No.1",
          boulez: "Douze Notations\nSonatina for flute and piano",
          brahms: "Rhapsodies Op. 79\nSouvenir de la Russie Ans.4/6 for piano four hands\nHungarian Dances for piano four hands (selection)\nTrio No. 1 Op. 8",
          byrd: "The Battell, BK 94\nPavana Lachrimae",
          cage: "In a landscape\nMysterious Adventure for prepared piano\nFads and Fancies in the Academy for piano and percussions\nCredo in US for piano, percussions, radio and fonograph",
          carter: "Epigrams, for piano trio",
          casella: "Pupazzetti, for piano four hands",
          chopin: "Etudes Op. 10\nEtudes Op. 25 (selection)\nSonata No.1 Op. 4\nBallade No. 2 Op. 38\nPolonaise Op. 44\nPolonaise KK IVa N.5 “Adieu! Á Guillaume Kolberg”\nVariations Brillantes Op. 12\nBerceuse Op. 57\nBarcarolle Op. 60",
          clementi: "Sonata Op. 50 No. 3 “Didone Abbandonata”",
          debussy: "Children’s Corner\nSuite Bergamasque\nPreludes (selection)",
          dvorak: "Piano quintet No. 2 Op. 81",
          franck: "Prélude, Aria et Final",
          frescobaldi: "Aria detto Balletto",
          galante: "Domenico Fragments, for guitar and piano",
          giant: "Experience, for piano (tr. Chines)\nExperience, for flute, electric guitar, cello and piano (tr. Chines)",
          gesualdo: "Canzon Francese del Principe\nAestimatus sum (tr. Delucchi)\nMoro, lasso, al mio duolo (tr. Delucchi)",
          gottschalk: "Souvenir de la Havane Op. 39\nSouvenir de Porto Rico Op. 31",
          haydn: "Sonata in C minor Hob.XVI:20\nSonata in B minor Hob.XVI:32\nSonata in C major Hob.XVI:50",
          herz: "Grandes Variations sul le choeur dei chasseurs d’Euriante (Weber)",
          hindemith: "Sonata for viola and piano Op. 11 N.4",
          ligeti: "Musica Ricercata",
          liszt: "Réminescences de Lucia di Lammermoor S. 397\nAnnées de pèlerinage (selection)\nTotentanz S. 525\nHungarian Rhapsody N.2 S. 244/2",
          mendelssohn: "Variations Sérieuses Op. 54\nRondo Capriccioso Op. 14\nFantasia in F-sharp minor Op. 28\nLieder Ohne Worte (selection)",
          molinelli: "Milonga y Chacarera for viola and piano trio",
          mozart: "Sonata in A minor KV 310\nSonata in A major KV 331\nSonata in C minor KV457\nSonata in C major KV545\nSonata in B-flat major KV 570\nVariations on “Salve Tu Domine” (Paisiello) KV398\nVariations on “Unser dummer Pobel Meint (Gluck) KV455\nTrio E major KV 542",
          part: "Fratres",
          prokofiev: "Sonata No. 3 Op. 28\nSarcasms Op. 17\nFour Pieces Op.4\nToccata Op. 11",
          rameau: "Suite in E minor\nSuite in A minor",
          ravel: "Valses Nobles et sentimentales\nLa Valse, for two pianos",
          rihm: "Mehrere kurze Walzer, for piano four hands",
          saintsaens: "Le Carnaval des Animaux",
          scarlatti: "30 Sonatas",
          schnittke: "Hommage a Stravinsky, Prokofiev and Shostakovich, for piano six hands",
          schonberg: "Verklärte Nacht Op. 4 for piano trio (tr. Steuermann)",
          schubert: "Sonata in B-flat major D.960\nSonata in A minor D.784\nSonata in D major D.850\nImpromptus Op. 90\nSonata Arpeggione D.821 for cello and piano\nMarches Caractéristiques D.968b (D.886) for piano four hands\nFantasia in F minor D.940 for piano four hands\nPiano Trio Op. 100",
          schumann: "Abegg Variations Op. 1\nPapillons Op. 2\nKreisleriana, Op. 16\nArabeske Op. 18\nPiano Quintet Op. 44",
          sciarrino: "Perduto in una città d’acque\nAnamorfosi",
          sciortino: "Scarlattiana, for guitar and piano",
          scriabin: "Sonata N. 9 Op. 68 “Black Mass”\nEtudes (selection)",
          shostakovich: "Piano Quintet Op. 57\nPiano Trio Op. 67\nPreludes and Fugues (selection)",
          smetana: "Piano Trio Op. 15",
          soler: "Fandango in D minor R.146\nSonatas (selection)",
          stravinsky: "L’Oiseau de Feu (tr. Agosti)",
          sweelinck: "Partitas on “Mein Junges Leben hat ein End”, SwWV 324",
          tchaikovsky: "Scherzo from Symphony No. 6 (tr. Feinberg)",
          weber: "Sonata No. 3 Op. 49",
          orch_bach: "Concerto in D minor BWV 1052\nConcerto for two pianos in C minor BWV1060",
          orch_bartok: "Concerto No. 3 Sz.119",
          orch_beethoven: "Concerto No. 3 Op. 37\nConcerto No. 4 Op. 58\nTriple Concerto No. 56",
          orch_liszt: "Concerto No. 2 S.125\nTotentanz S.126",
          orch_mendelssohn: "Concerto No. 1 Op. 25",
          orch_mozart: "Concerto in A major KV. 414\nConcerto in C major KV. 415\nConcerto in A major KV. 488",
          orch_rach: "Concerto No. 2 Op. 18"
        }
      },
      video: { handelTitle: "G.F. Händel - Lascia ch'io pianga", handelDescription: "Free piano transcription", moreOnYoutube: "More on YouTube" }
    }
  };

  const toggleLanguage = () => setLanguage(language === 'it' ? 'en' : 'it');
  const t = (path: string) => {
    return path.split('.').reduce((obj, key) => obj && obj[key], translations[language]) || path;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);