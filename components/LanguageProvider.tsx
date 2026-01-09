'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

const translations: any = {
  it: {
    nav: { 
      about: "Bio", 
      concerts: "Concerti", 
      repertorio: "Repertorio", 
      media: "Media", 
      contact: "Contatti" 
    },
    home: { 
      title: "Alberto Chines", 
      subtitle: "Pianista", 
      tagline: "Steinway Artist dal 2020" 
    },
    about: {
      title: "Biografia",
      content: `Una formazione solida e il confluire di tante esperienze didattiche e professionali assai diversificate hanno contribuito a fare di Alberto Chines un artista vivace e poliedrico.
Il giovane pianista palermitano si è formato presso l’Accademia di Imola con Franco Scala e Piero Rattalino, e al Conservatorio di Bolzano con Davide Cabassi.
A quindici anni ha debuttato presso il Teatro Massimo di Palermo e nel 2011 ha vinto il primo premio al Concorso Pianistico Internazionale “Palma d’Oro” di Finale Ligure. Nel 2013 è stato vincitore del Sony Classical Talent Scout di Madesimo e, nel 2014, del secondo premio all’Euregio Piano Award (Geilenkirchen, Germania).
Si è esibito presso la Sala Mozart dell’Accademia Filarmonica di Bologna, al Teatro Olimpico di Vicenza, al Politeama Garibaldi di Palermo, alla Van Cliburn Recital Hall di Fort Worth (Texas) e in Spagna, Portogallo, Inghilterra, Francia e Germania.
Ha recentemente debuttato a Londra per il Keyboard Charitable Trust e al Tiroler Festspiele Erl (Austria), ed è da poco stato pubblicato il suo primo CD con musiche di Bach, Schumann, Ravel e Bartók (BAM International).
Alberto Chines è molto attivo anche nell’ambito cameristico, collabora con la violista Anna Serova, col chitarrista Eugenio Della Chiara, col Quartetto Nôus e con il pianista Emanuele Delucchi, e ha negli anni seguito diversi progetti in trio (Trio Casa Bernardini), quartetto e quintetto.
Ha inoltre ideato la rassegna concertistica internazionale Musica Manent Festival (Ustica) e collabora con la Primavera di Baggio di Milano.
Alberto Chines è Steinway Artist dal 2020.`
    },
    repertorio: {
      title: "Repertorio",
      subtitle: "Repertorio solistico e cameristico",
      orchestraTitle: "Repertorio con orchestra",
      content: `Thomas Adès: Darknesse Visible (after John Dowland)
C.P.E. Bach: Variazioni sulla Follia di Spagna H. 263
J.C. Bach: Sonata Op. 5 N. 6, Quartetto W B66
J.S. Bach: Partita N. 2 BWV 826; Suite Inglese N. 2 & 3; Suite Francese N.5; Toccata BWV 914; Sonata BWV 963; Das wohltemperierte Klavier I&II; Die Kunst der Fuge; Trascrizioni (Liszt, Rachmaninov, D’Albert, Busoni, Friedman)
Béla Bartók: Suite Op. 14; Suite di Danze Sz. 77
Beethoven: Sonate (Op. 2, 14, 22, 27, 28, 31, 53, 81a, 111); Variazioni Op. 35 “Eroica”; Variazioni WoO 80 & 66; Musica da camera
Chopin: Studi Op. 10 & 25; Sonate; Ballata N. 2; Polonaises; Variations Brillantes Op. 12; Berceuse; Barcarolle
Debussy: Children’s Corner; Suite Bergamasque; Preludes
Liszt: Réminescences de Lucia di Lammermoor; Années de pèlerinage; Totentanz; Rapsodia Ungherese N.2
Schubert: Sonate D.960, 784, 850; Impromptus Op. 90; Fantasia D.940; Trio Op. 100
Schumann: Variazioni Abegg; Papillons; Kreisleriana; Arabeske; Quintetto Op. 44
Stravinskij: L’Oiseau de Feu (tr. Agosti)
E opere di: Bauer, Boulez, Brahms, Byrd, Cage, Carter, Casella, Clementi, Dvořák, Franck, Frescobaldi, Galante, Gentle Giant, Gesualdo, Gottschalk, Haydn, Herz, Hindemith, Ligeti, Mendelssohn, Molinelli, Mozart, Pärt, Prokofiev, Rameau, Ravel, Rihm, Saint-Saens, Scarlatti, Schnittke, Schönberg, Sciarrino, Sciortino, Scriabin, Shostakovich, Smetana, Soler, Sweelinck, Tchaikovsky, Weber.`,
      orchestraContent: `J.S. Bach: Concerto BWV 1052, 1060
Béla Bartók: Concerto N. 3
Ludwig van Beethoven: Concerto N. 3, 4, Triplo Concerto Op. 56
Franz Liszt: Concerto N. 2, Totentanz
W.A. Mozart: Concerti KV. 414, 415, 488
S.V. Rachmaninov: Concerto N. 2 Op. 18`
    },
    media: { title: "Media" },
    contact: { title: "Contatti" }
  },
  en: {
    nav: { 
      about: "About", 
      concerts: "Concerts", 
      repertorio: "Repertoire", 
      media: "Media", 
      contact: "Contact" 
    },
    home: { 
      title: "Alberto Chines", 
      subtitle: "Pianist", 
      tagline: "Steinway Artist since 2020" 
    },
    about: {
      title: "Biography",
      content: `A solid education and the merging of many diversified learning and professional experiences have contributed to make Alberto Chines a smart and many sided artist.
He studied at the Imola Academy with Franco Scala and Piero Rattalino, and at the Bolzano Conservatory with Davide Cabassi.
At the age of 15 he made his debut at Teatro Massimo in Palermo and in 2011 he won the first prize at the “Palma d’Oro” International Piano Competition. In 2013 he won the Sony Classical Talent Scout in Madesimo and, in 2014, the second prize at the Euregio Piano Award (Geilenkirchen, Germany).
He performed in prestigious venues such as the Mozart Hall of Accademia Filarmonica di Bologna, Teatro Olimpico in Vicenza, Politeama Garibaldi in Palermo, Van Cliburn Recital Hall in Fort Worth (Texas), and in Spain, Portugal, UK, France and Germany.
He has recently appeared at Tiroler Festspiele Erl (Austria) and he made his London debut for the Keyboard Charitable Trust. His first CD with music by Bach, Schumann, Ravel and Bartók has been recently released on BAM International.
Alberto Chines is a very passionate chamber musician, he collaborates with violist Anna Serova, with Guitarist Eugenio Della Chiara, with Quartetto Nôus, with pianist Emanuele Delucchi and, over the years, he followed several projects in trio (Trio Casa Bernardini), quartet and quintet.
He is also the creator and artistic director of Musica Manent Festival in Ustica (Sicily) and he collaborates with international concert series Primavera di Baggio in Milan.
Alberto Chines is Steinway Artist since 2020.`
    },
    repertorio: {
      title: "Repertoire",
      subtitle: "Solo and chamber music",
      orchestraTitle: "Piano and orchestra",
      content: `Thomas Adès: Darknesse Visible (after John Dowland)
C.P.E. Bach: Variations on Folie d’Espagne H. 263
J.C. Bach: Sonata Op. 5 No. 6, Piano quartet W B66
J.S. Bach: Partita No. 1 & 2; English Suite No. 2 & 3; French Suite No.5; Toccata BWV 914; Sonata BWV 963; Das wohltemperierte Klavier I&II; Die Kunst der Fuge; Transcriptions (Liszt, Rachmaninov, D’Albert, Busoni, Friedman)
Béla Bartók: Suite Op. 14, Dance Suite Sz. 77
Beethoven: Sonatas (Op. 2, 14, 22, 27, 28, 31, 53, 81a, 111); Variations and Fugue Op. 35 “Eroica”; Variations WoO 80 & 66; Chamber music
Chopin: Etudes Op. 10 & 25; Sonata No.1; Ballade No. 2; Polonaises; Variations Brillantes Op. 12; Berceuse; Barcarolle
Debussy: Children’s Corner; Suite Bergamasque; Preludes
Liszt: Réminescences de Lucia di Lammermoor; Années de pèlerinage; Totentanz; Hungarian Rhapsody No.2
Schubert: Sonatas D.960, 784, 850; Impromptus Op. 90; Fantasia D.940; Piano Trio Op. 100
Schumann: Abegg Variations; Papillons; Kreisleriana; Arabeske; Piano Quintet Op. 44
Stravinskij: L’Oiseau de Feu (tr. Agosti)
And works by: Bauer, Boulez, Brahms, Byrd, Cage, Carter, Casella, Clementi, Dvořák, Franck, Frescobaldi, Galante, Gentle Giant, Gesualdo, Gottschalk, Haydn, Herz, Hindemith, Ligeti, Mendelssohn, Molinelli, Mozart, Pärt, Prokofiev, Rameau, Ravel, Rihm, Saint-Saens, Scarlatti, Schnittke, Schönberg, Sciarrino, Sciortino, Scriabin, Shostakovich, Smetana, Soler, Sweelinck, Tchaikovsky, Weber.`,
      orchestraContent: `J.S. Bach: Concertos BWV 1052, 1060
Béla Bartók: Concerto No. 3
Ludwig van Beethoven: Concerto No. 3, 4, Triple Concerto Op. 56
Franz Liszt: Concerto No. 2, Totentanz
W.A. Mozart: Concertos KV. 414, 415, 488
S.V. Rachmaninov: Concerto No. 2 Op. 18`
    },
    media: { title: "Media" },
    contact: { title: "Contact" }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (l: Language) => void;
  lang: Language;
  setLang: (l: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('it');

  const t = (path: string) => {
    const keys = path.split('.');
    let result: any = translations[language];
    for (const key of keys) {
      if (result && result[key] !== undefined) result = result[key];
      else return path;
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, setLanguage, lang: language, setLang: setLanguage, t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}