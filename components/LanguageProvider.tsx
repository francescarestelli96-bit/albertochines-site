'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

const translations: any = {
  it: {
    nav: { about: "Bio", concerts: "Concerti", repertorio: "Repertorio", media: "Media", contact: "Contatti" },
    home: { title: "Alberto Chines", subtitle: "Pianist", tagline: "Steinway Artist" },
    about: {
      title: "Biografia",
      content: `Alberto Chines, Steinway Artist dal 2020, è un pianista poliedrico che unisce all'attività solistica un profondo interesse per la musica da camera e per la didattica musicale.

Il suo percorso formativo, ricco di incontri e masterclass con artisti di fama mondiale, si è consolidato presso l’Accademia di Imola sotto la guida di Franco Scala e Piero Rattalino, e al Conservatorio di Bolzano con Davide Cabassi. Dopo il debutto a soli quindici anni al Teatro Massimo di Palermo, si è imposto all’attenzione della critica vincendo il primo premio al Concorso Internazionale Palma d’Oro di Finale Ligure (2011), il Sony Classical Talent Scout di Madesimo (2013) e il secondo premio all’Euregio Piano Award di Geilenkirchen (2014).

La sua attività concertistica lo ha portato a esibirsi in sedi di prestigio internazionale, tra cui la Van Cliburn Recital Hall di Fort Worth (USA), la Sala Mozart dell’Accademia Filarmonica di Bologna, il Teatro Olimpico di Vicenza, il Politeama Garibaldi di Palermo e il Teatro alla Scala di Milano. Ha suonato a Londra per il Keyboard Charitable Trust e ai Klaviertage del Tiroler Festspiele Erl (Austria), e ha recentemente debuttato al Festival Bartolomeo Cristofori di Padova eseguendo il Pierrot Lunaire di Schönberg per voce e pianoforte solo, insieme alla propria trascrizione del Sacre du Printemps di Stravinkskij.

Alberto Chines è inoltre un camerista appassionato. Collabora regolarmente con artisti quali Anna Serova, Eugenio Della Chiara, Emanuele Delucchi, Rebecca Taio, Danilo Pastore e il Quartetto Nôus, esplorando il repertorio dal duo al quintetto con grandi aperture verso la nuova musica. La sua discografia include un album di debutto per BAM International con opere di Bach, Schumann, Ravel e Bartók.

Attivo anche nella promozione culturale, è stato l’ideatore del Musica Manent Festival di Ustica e collabora stabilmente con la Primavera di Baggio di Milano.

Alberto Chines è docente di pianoforte presso il Conservatorio “Francesco Venezze” di Rovigo.`
    },
    repertorio: {
      title: "Repertorio",
      solisticoTitle: "Repertorio solistico e cameristico",
      orchestraTitle: "Repertorio con orchestra",
      solistico: `Thomas Adès: Darknesse Visible (after John Dowland)\nCarl Philipp Emanuel Bach: Variazioni sulla Follia di Spagna H. 263\nJohann Christian Bach: Sonata in do minore Op. 5 N. 6, Quartetto con pianoforte in sol maggiore W B66\nJohann Sebastian Bach: Partita N. 2 BWV 826, Suite Inglese N. 2 BWV 807, Suite Ingese N. 3 BWV 808, Suite Francese N.5 BWV 816, Toccata in mi minore BWV 914, Sonata in re maggiore BWV 963, Das wohltemperierte Klavier I&II (selezione), Die Kunst der Fuge (selezione), Fantasia e Fuga in sol minore BWV 542 (tr. Liszt), Partita per violino N. 3 (tr. Rachmaninov), Passacaglia e Fuga in do minore BWV 582 (tr. D’Albert), Toccata e Fuga in re minore BWV 565 (tr. Busoni), Concerto Brandeburghese N. 3 BWV 1048 (tr. Friedman)\nBéla Bartók: Suite Op. 14, Suite di Danze Sz. 77 BB86b\nJerzy Bauer: Sonata per violoncello e pianoforte\nLudwig van Beethoven: Sonate Op. 2 Nn.1 e 3, Sonata Op. 14 N.2, Sonata Op. 22, Sonata Op. 27 N.2, Sonata Op. 28, Sonata Op. 31 N.1, Sonata Op. 53 “Waldstein”, Sonata Op. 81a “Les Adieux”, Sonata Op.111, Variazioni e Fuga Op. 35 “Eroica”, Variazioni in do minore WoO 80, Variazioni su “Es war einmal ein alter Mann” WoO 66, Serenata per flauto e pianoforte Op. 41, Sonata per violoncello e pianoforte N. 3 Op. 69, Sonata per violino e pianoforte N. 5 Op. 24, Trio Op. 1 N. 1\nPierre Boulez: Douze Notations, Sonatina per flauto e pianoforte\nJohannes Brahms: Rapsodie Op. 79, Souvenir de la Russie Ans.4/6 per pianoforte a quattro mani, Danze Ungheresi per pianoforte a quattro mani (selezione), Trio N. 1 Op. 8\nWilliam Byrd: The Battell, BK 94, Pavana Lachrimae\nJohn Cage: In a landscape, Mysterious Adventure per pianoforte preparato, Fads and Fancies in the Academy per pianoforte e percussioni, Credo in US per pianoforte, percussioni, radio e fonografo\nElliott Carter: Epigrams, per trio con pianoforte\nAlfredo Casella: Pupazzetti, per pianoforte a quattro mani\nFryderyk Chopin: Etudes Op. 10, Etudes Op. 25 (selezione), Sonata N.1 Op. 4, Ballade N. 2 Op. 38, Polonaise Op. 44, Polonaise KK IVa N.5 “Adieu! Á Guillaume Kolberg”, Variations Brillantes Op. 12, Berceuse Op. 57, Barcarolle Op. 60\nMuzio Clementi: Sonata Op. 50 N. 3 “Didone Abbandonata”\nClaude Debussy: Children’s Corner, Suite Bergamasque, Preludes (selezione)\nAntonin Dvořák: Quintetto con pianoforte N. 2 Op. 81\nCésar Franck: Prélude, Aria et Final\nGirolamo Frescobaldi: Aria detto Balletto\nCarlo Galante: Domenico Fragments, per chitarra e pianoforte\nGentle Giant: Experience, per pianoforte (tr. Chines), Experience, per flauto, chitarra elettrica, violoncello e pianoforte (tr. Chines)\nCarlo Gesualdo: Canzon Francese del Principe, Aestimatus sum (tr. Delucchi), Moro, lasso, al mio duolo (tr. Delucchi)\nLouis Moreau Gottschalk: Souvenir de la Havane Op. 39, Souvenir de Porto Rico Op. 31\nFranz Josef Haydn: Sonata in do minore Hob.XVI:20, Sonata in si minore Hob.XVI:32, Sonata in do maggiore Hob.XVI:50\nHenri Herz: Grandes Variations sul le choeur des chasseurs d’Euriante (Weber)\nPaul Hindemith: Sonata per viola e pianoforte Op. 11 N.4\nGyörgy Ligeti: Musica Ricercata\nFranz Liszt: Réminescences de Lucia di Lammermoor S. 397, Années de pèlerinage (selezione), Totentanz S. 525, Rapsodia Ungherese N.2 S. 244/2\nFelix Mendelssohn: Variations Sérieuses Op. 54, Rondo Capriccioso Op. 14, Fantasia in fa diesis minore Op. 28, Lieder Ohne Worte (selezione)\nRoberto Molinelli: Milonga y Chacarera per viola e trio con pianoforte\nWolfgang Amadeus Mozart: Sonata in la minore KV 310, Sonata in la maggiore KV 331, Sonata in do minore KV 457, Sonata in do maggiore KV 545, Sonata in si bemolle maggiore KV 570, Variazioni su “Salve Tu Domine” (Paisiello) KV 398, Variazioni su “Unser dummer Pobel Meint (Gluck) KV 455, Trio mi maggiore KV 542\nArvo Pärt: Fratres\nSergei Prokofiev: Sonata N. 3 Op. 28, Sarcasms Op. 17, Quattro Pezzi Op.4, Toccata Op. 11\nJean-Philippe Rameau: Suite in mi minore, Suite in la minore, Les Indes Galantes (arr. Dukas) - selezione\nMaurice Ravel: Valses Nobles et sentimentales, La Valse, per due pianoforti\nWolfgang Rihm: Mehrere kurze Walzer, per pianoforte a quattro mani\nCamille Saint-Saens: Le Carnaval des Animaux\nDomenico Scarlatti: 30 Sonate\nArnold Schönberg: Verklärte Nacht Op. 4 per trio con pianoforte (tr. Steuermann), Pierrot Lunaire, op. 21 (versione per voce e pianoforte solo di Erwin Stein)\nAlfred Schnittke: Hommage a Stravinsky, Prokofiev and Shostakovich, per pianoforte sei mani\nFranz Schubert: Sonata in si bemolle maggiore D.960, Sonata in la minore D.784, Sonata in re maggiore D.850, Impromptus Op. 90, Sonata Arpeggione D.821 per violoncello e pianoforte, Marches Caractéristiques D.968b (D.886) per pianoforte a quattro mani, Fantasia in fa minore D.940 per pianoforte a quattro mani, Trio Op. 100\nRobert Schumann: Variazioni Abegg Op. 1, Papillons Op. 2, Kreisleriana, Op. 16, Arabeske Op. 18, Quintetto con pianoforte Op. 44\nSalvatore Sciarrino: Perduto in una città d’acque, Anamorfosi\nOrazio Sciortino: Scarlattiana, per chitarra e pianoforte\nAlexander Scriabin: Sonata N. 9 Op. 68 “Messa Nera”, Etudes (selezione)\nDmitri Shostakovich: Quintetto con pianoforte Op. 57, Trio Op. 67, Preludi e Fughe (selezione)\nBedřich Smetana: Trio Op. 15\nAntonio Soler: Fandango in re minore R.146, Sonate (selezione)\nIgor Stravinskij: L’Oiseau de Feu (tr. Agosti)\nJan Pieterszoon Sweelinck: Partite sopra “Mein Junges Leben hat ein End”, SwWV 324\nPyotr Ilyich Tchaikovsky: Scherzo dalla Sinfonia N. 6 (tr. Feinberg)\nCarl Maria von Weber: Sonata N. 3 Op. 49`,
      orchestra: `Johann Sebastian Bach: Concerto in re minore BWV 1052, Concerto per due pianoforti in do minore BWV1060\nBéla Bartók: Concerto N. 3 Sz.119\nLudwig van Beethoven: Concerto N. 3 Op. 37, Concerto N. 4 Op. 58, Triplo Concerto Op. 56\nFranz Liszt: Concerto N. 2 S.125, Totentanz S.126\nFelix Mendelssohn: Concerto N. 1 Op. 25\nWolfgang Amadeus Mozart: Concerto in la maggiore KV. 414, Concerto in do maggiore KV. 415, Concerto in la maggiore KV. 488\nSergei Vasilyevic Rachmaninov: Concerto N. 2 Op. 18`
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
      content: `Alberto Chines, a Steinway Artist since 2020, is a versatile pianist who balances an extensive solo career with a profound dedication to chamber music and music education.

His artistic development, deeply enriched by masterclasses with world-renowned artists, was shaped at the Accademia di Imola under the guidance of Franco Scala and Piero Rattalino, and at the Bolzano Conservatory with Davide Cabassi. Following his debut at the Teatro Massimo in Palermo at just fifteen years old, he gained critical acclaim by winning first prize at the Palma d’Oro International Competition in Finale Ligure (2011), the Sony Classical Talent Scout in Madesimo (2013), and second prize at the Euregio Piano Award in Geilenkirchen (2014).

His concert engagements have taken him to prestigious international venues, including the Van Cliburn Recital Hall in Fort Worth (USA), the Sala Mozart of the Accademia Filarmonica in Bologna, the Teatro Olimpico in Vicenza, the Politeama Garibaldi in Palermo, and the Teatro alla Scala in Milan. He has performed in London for the Keyboard Charitable Trust and at the Klaviertage of the Tiroler Festspiele Erl in Austria. Recently, he debuted at the Bartolomeo Cristofori Festival in Padua, performing Schoenberg’s Pierrot Lunaire for voice and solo piano, alongside his own transcription of Stravinsky’s Le Sacre du Printemps.

A passionate chamber musician, Alberto collaborates regularly with artists such as Anna Serova, Eugenio Della Chiara, Emanuele Delucchi, Rebecca Taio, Danilo Pastore, and the Quartetto Nôus, exploring repertoire ranging from duos to quintets with a strong emphasis on contemporary music. His discography includes a debut album for BAM International featuring works by Bach, Schumann, Ravel, and Bartók.

Beyond the stage, he is deeply involved in cultural promotion; he founded the Musica Manent Festival in Ustica and is a long-standing collaborator of the Primavera di Baggio in Milan.

Alberto Chines currently serves as a Professor of Piano at the “Francesco Venezze” Conservatory in Rovigo.`
    },
    repertorio: {
      title: "Repertoire",
      solisticoTitle: "Solo and chamber music",
      orchestraTitle: "Piano and orchestra",
      solistico: `Thomas Adès: Darknesse Visible (after John Dowland)\nCarl Philipp Emanuel Bach: Variations on Folie d’Espagne H. 263\nJohann Christian Bach: Sonata in C minor Op. 5 No. 6, Piano quartet in G major W B66\nJohann Sebastian Bach: Partita No. 1 BWV 825, Partita No. 2 BWV 826, English Suite No. 2 BWV 807, English Suite No. 3 BWV 808, French Suite No.5 BWV 816, Toccata in E minor BWV 914, Sonata in D major BWV 963, Das wohltemperierte Klavier I&II (selection), Die Kunst della Fuge (selection), Fantasia and Fugue in G minor BWV 542 (tr. Liszt), Violin Partita No. 3 (tr. Rachmaninov), Passacaglia and Fugue in C minor BWV 582 (tr. D’Albert), Toccata and Fugue in D minor BWV 565 (tr. Busoni), Brandenburg Concerto No. 3 BWV 1048 (tr. Friedman)\nBéla Bartók: Suite Op. 14, Dance Suite Sz. 77 BB86b\nJerzy Bauer: Sonata for cello and piano\nLudwig van Beethoven: Sonatas Op. 2 Nos.1 & 3, Sonata Op. 14 No.2, Sonata Op. 22, Sonata Op. 27 No.2, Sonata Op. 28, Sonata Op. 31 No.1, Sonata Op. 53 “Waldstein”, Sonata Op. 81a “Les Adieux”, Sonata Op.111, Variations and Fugue Op. 35 “Eroica”, Variations in C minor WoO 80, Variations on “Es war einmal ein alter Mann” WoO 66, Serenade for flute and piano Op. 41, Sonata for cello and piano No. 3 Op. 69, Sonata for violin and piano No. 5 Op. 24, Trio Op. 1 No.1\nPierre Boulez: Douze Notations, Sonatina for flute and piano\nJohannes Brahms: Rhapsodies Op. 79, Souvenir de la Russie Ans.4/6 for piano four hands, Hungarian Dances for piano four hands (selection), Trio No. 1 Op. 8\nWilliam Byrd: The Battell, BK 94, Pavana Lachrimae\nJohn Cage: In a landscape, Mysterious Adventure for prepared piano, Fads and Fancies in the Academy for piano and percussions, Credo in US for piano, percussions, radio and phonograph\nElliott Carter: Epigrams, for piano trio\nAlfredo Casella: Pupazzetti, for piano four hands\nFryderyk Chopin: Etudes Op. 10, Etudes Op. 25 (selection), Sonata No.1 Op. 4, Ballade No. 2 Op. 38, Polonaise Op. 44, Polonaise KK IVa N.5 “Adieu! Á Guillaume Kolberg”, Variations Brillantes Op. 12, Berceuse Op. 57, Barcarolle Op. 60\nMuzio Clementi: Sonata Op. 50 No. 3 “Didone Abbandonata”\nClaude Debussy: Children’s Corner, Suite Bergamasque, Preludes (selection)\nAntonin Dvořák: Piano quintet No. 2 Op. 81\nCésar Franck: Prélude, Aria et Final\nGirolamo Frescobaldi: Aria detto Balletto\nCarlo Galante: Domenico Fragments, for guitar and piano\nGentle Giant: Experience, for piano (tr. Chines), Experience, for flute, electric guitar, cello and piano (tr. Chines)\nCarlo Gesualdo: Canzon Francese del Principe, Aestimatus sum (tr. Delucchi), Moro, lasso, al mio duolo (tr. Delucchi)\nLouis Moreau Gottschalk: Souvenir de la Havane Op. 39, Souvenir de Porto Rico Op. 31\nFranz Josef Haydn: Sonata in C minor Hob.XVI:20, Sonata in B minor Hob.XVI:32, Sonata in C major Hob.XVI:50\nHenri Herz: Grandes Variations sul le choeur des chasseurs d’Euriante (Weber)\nPaul Hindemith: Sonata for viola and piano Op. 11 N.4\nGyörgy Ligeti: Musica Ricercata\nFranz Liszt: Réminescences de Lucia di Lammermoor S. 397, Années de pèlerinage (selection), Totentanz S. 525, Hungarian Rhapsody N.2 S. 244/2\nFelix Mendelssohn: Variations Sérieuses Op. 54, Rondo Capriccioso Op. 14, Fantasia in F-sharp minor Op. 28, Lieder Ohne Worte (selection)\nRoberto Molinelli: Milonga y Chacarera for viola and piano trio\nWolfgang Amadeus Mozart: Sonata in A minor KV 310, Sonata in A major KV 331, Sonata in C minor KV457, Sonata in C major KV545, Sonata in B-flat major KV 570, Variations on “Salve Tu Domine” (Paisiello) KV398, Variations on “Unser dummer Pobel Meint (Gluck) KV455, Trio E major KV 542\nArvo Pärt: Fratres\nSergei Prokofiev: Sonata No. 3 Op. 28, Sarcasms Op. 17, Four Pieces Op.4, Toccata Op. 11\nJean-Philippe Rameau: Suite in E minor, Suite in A minor, Les Indes Galantes (arr. Dukas) - selection\nMaurice Ravel: Valses Nobles et sentimentales, La Valse, for two pianos\nWolfgang Rihm: Mehrere kurze Walzer, for piano four hands\nCamille Saint-Saens: Le Carnaval des Animaux\nDomenico Scarlatti: 30 Sonatas\nArnold Schönberg: Verklärte Nacht Op. 4 for piano trio (tr. Steuermann), Pierrot Lunaire, op. 21 (voice and piano solo version by Erwin Stein)\nAlfred Schnittke: Hommage a Stravinsky, Prokofiev and Shostakovich, for piano six hands\nFranz Schubert: Sonata in B-flat major D.960, Sonata in A minor D.784, Sonata in D major D.850, Impromptus Op. 90, Sonata Arpeggione D.821 per violoncello e pianoforte, Marches Caractéristiques D.968b (D.886) for piano four hands, Fantasia in F minor D.940 for piano four hands, Piano Trio Op. 100\nRobert Schumann: Abegg Variations Op. 1, Papillons Op. 2, Kreisleriana, Op. 16, Arabeske Op. 18, Piano Quintet Op. 44\nSalvatore Sciarrino: Perduto in una città d’acque, Anamorfosi\nOrazio Sciortino: Scarlattiana, for guitar and piano\nAlexander Scriabin: Sonata N. 9 Op. 68 “Black Mass”, Etudes (selection)\nDmitri Shostakovich: Piano Quintet Op. 57, Piano Trio Op. 67, Preludes and Fugues (selection)\nBedřich Smetana: Piano Trio Op. 15\nAntonio Soler: Fandango in D minor R.146, Sonatas (selection)\nIgor Stravinskij: L’Oiseau de Feu (tr. Agosti)\nJan Pieterszoon Sweelinck: Partitas on “Mein Junges Leben hat ein End”, SwWV 324\nPyotr Ilyich Tchaikovsky: Scherzo from Symphony No. 6 (tr. Feinberg)\nCarl Maria von Weber: Sonata No. 3 Op. 49`,
      orchestra: `Johann Sebastian Bach: Concerto in D minor BWV 1052, Concerto for two pianos in C minor BWV1060\nBéla Bartók: Concerto No. 3 Sz.119\nLudwig van Beethoven: Concerto No. 3 Op. 37, Concerto No. 4 Op. 58, Triple Concerto Op. 56\nFranz Liszt: Concerto No. 2 S.125, Totentanz S.126\nFelix Mendelssohn: Concerto No. 1 Op. 25\nWolfgang Amadeus Mozart: Concerto in A major KV. 414, Concerto in C major KV. 415, Concerto in A major KV. 488\nSergei Vasilyevic Rachmaninov: Concerto No. 2 Op. 18`
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
    for (const key of keys) {
      if (result) result = result[key];
    }
    return result || path;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'it' ? 'en' : 'it'));
  };

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