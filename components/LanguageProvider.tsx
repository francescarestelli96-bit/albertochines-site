"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "it" | "en";

interface RepertoireItem {
  composer: string;
  works: string;
}

const translations = {
  it: {
    nav: { bio: "BIO", repertoire: "REPERTORIO", media: "MEDIA", concerts: "CONCERTI", contact: "CONTATTI" },
    bio: {
      title: "BIOGRAFIA",
      content: `Alberto Chines si è formato con i Maestri Franco Scala e Piero Rattalino presso l'Accademia di Imola, perfezionandosi successivamente con Riccardo Risaliti e ottenendo il Diploma di Master presso l'Accademia Nazionale di Santa Cecilia sotto la guida di Benedetto Lupo. 

La sua attività concertistica lo ha portato a esibirsi in contesti prestigiosi quali la Sala Verdi del Conservatorio di Milano, il Teatro La Fenice di Venezia, il Gasteig di Monaco di Baviera e il Palau de la Música Catalana di Barcellona. Vincitore del primo premio al Concorso Pianistico Internazionale 'Palma d'Oro' di Finale Ligure e del Concorso Europeo di Esecuzione Musicale 'Città di Moncalieri', Alberto si distingue per un eclettismo che spazia dal classicismo viennese alla musica contemporanea, con una particolare attenzione alla ricerca timbrica e alla fedeltà testuale.`,
      pressKitBtn: "DOWNLOAD PRESS KIT",
      pressKitUrl: "/downloads/presskit.zip"
    },
    repertoire: {
      title: "REPERTORIO",
      soloChamber: "SOLO & MUSICA DA CAMERA",
      orchestra: "ORCHESTRA",
      items: [
        { composer: "Thomas Adès", works: "Darknesse Visible, Mazurkas Op. 27" },
        { composer: "Carl Philipp Emanuel Bach", works: "Selezione di Sonate" },
        { composer: "Johann Sebastian Bach", works: "Partite, Suites Inglesi e Francesi" },
        { composer: "Béla Bartók", works: "Dance Suite Sz. 77, Out of Doors" },
        { composer: "Ludwig van Beethoven", works: "Variazioni 'Eroica' Op. 35, Sonate Op. 109, 110" },
        { composer: "Johannes Brahms", works: "Sonata Op. 5, Klavierstücke Op. 116-119" },
        { composer: "Fryderyk Chopin", works: "Polacca-Fantasia Op. 61, Variations Brillantes Op. 12" },
        { composer: "Girolamo Frescobaldi", works: "Aria detto Balletto" },
        { composer: "W.A. Mozart", works: "Concerto K 488, Concerto K 466" },
        { composer: "Igor Stravinsky / Agosti", works: "L'Oiseau de Feu" }
      ]
    }
  },
  en: {
    nav: { bio: "BIO", repertoire: "REPERTOIRE", media: "MEDIA", concerts: "CONCERTS", contact: "CONTACT" },
    bio: {
      title: "BIOGRAPHY",
      content: `Alberto Chines trained with Masters Franco Scala and Piero Rattalino at the Imola Academy, later specializing with Riccardo Risaliti and obtaining a Master's Diploma from the Accademia Nazionale di Santa Cecilia.

His concert career has led him to perform in prestigious venues such as the Sala Verdi in Milan, Teatro La Fenice in Venice, Gasteig in Munich, and the Palau de la Música Catalana in Barcelona. Winner of the 'Palma d'Oro' International Competition, Alberto is known for an eclecticism ranging from Viennese Classicism to contemporary music.`,
      pressKitBtn: "DOWNLOAD PRESS KIT",
      pressKitUrl: "/downloads/presskit.zip"
    },
    repertoire: {
      title: "REPERTOIRE",
      soloChamber: "SOLO & CHAMBER MUSIC",
      orchestra: "ORCHESTRA",
      items: [
        { composer: "Thomas Adès", works: "Darknesse Visible, Mazurkas Op. 27" },
        { composer: "Carl Philipp Emanuel Bach", works: "Selected Sonatas" },
        { composer: "Johann Sebastian Bach", works: "Partitas, English and French Suites" },
        { composer: "Béla Bartók", works: "Dance Suite Sz. 77, Out of Doors" },
        { composer: "Ludwig van Beethoven", works: "Eroica Variations Op. 35, Sonatas Op. 109, 110" },
        { composer: "Johannes Brahms", works: "Sonata Op. 5, Klavierstücke Op. 116-119" },
        { composer: "Fryderyk Chopin", works: "Polonaise-Fantasy Op. 61, Variations Brillantes Op. 12" },
        { composer: "Girolamo Frescobaldi", works: "Aria detto Balletto" },
        { composer: "W.A. Mozart", works: "Concerto K 488, Concerto K 466" },
        { composer: "Igor Stravinsky / Agosti", works: "The Firebird" }
      ]
    }
  }
};

const LanguageContext = createContext<any>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("it");
  const t = (path: string) => {
    const keys = path.toLowerCase().split(".");
    let result: any = translations[language];
    for (const key of keys) {
      if (result && result[key]) result = result[key];
      else return path;
    }
    return result;
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);