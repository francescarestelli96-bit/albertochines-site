"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "it" | "en";

interface RepertoireItem {
  composer: string;
  works: string;
  category: "solo" | "orchestra";
}

const translations = {
  it: {
    nav: { bio: "BIO", repertoire: "REPERTORIO", media: "MEDIA", concerts: "CONCERTI", contact: "CONTATTI" },
    bio: {
      title: "BIOGRAFIA",
      content: `Alberto Chines si è formato con i Maestri Franco Scala e Piero Rattalino presso l'Accademia di Imola, perfezionandosi successivamente con Riccardo Risaliti e ottenendo il Diploma di Master presso l'Accademia Nazionale di Santa Cecilia sotto la guida di Benedetto Lupo. 

La sua attività concertistica lo ha portato a esibirsi in contesti prestigiosi quali la Sala Verdi del Conservatorio di Milano, il Teatro La Fenice di Venezia, il Gasteig di Monaco di Baviera e il Palau de la Música Catalana di Barcellona. Vincitore del primo premio al Concorso Pianistico Internazionale 'Palma d'Oro' di Finale Ligure e del Concorso Europeo di Esecuzione Musicale 'Città di Moncalieri', Alberto si distingue per un eclettismo che spazia dal classicismo viennese alla musica contemporanea, con una particolare attenzione alla ricerca timbrica e alla fedeltà testuale.

Collabora regolarmente con formazioni cameristiche di rilievo e ha inciso per prestigiose etichette discografiche, portando avanti una ricerca artistica che unisce il rigore analitico a una sensibilità interpretativa profonda e mai scontata.`,
      pressKitBtn: "SCARICA PRESS KIT",
      pressKitUrl: "/downloads/presskit.zip"
    },
    repertoire: {
      title: "REPERTORIO",
      soloChamber: "SOLO & MUSICA DA CAMERA",
      orchestra: "ORCHESTRA",
      items: [
        { composer: "Thomas Adès", works: "Darknesse Visible, Mazurkas Op. 27", category: "solo" },
        { composer: "Carl Philipp Emanuel Bach", works: "Selezione di Sonate", category: "solo" },
        { composer: "Johann Sebastian Bach", works: "Partite, Suites Inglesi e Francesi", category: "solo" },
        { composer: "Béla Bartók", works: "Dance Suite Sz. 77, Out of Doors", category: "solo" },
        { composer: "Ludwig van Beethoven", works: "Variazioni 'Eroica' Op. 35, Sonate Op. 109, 110", category: "solo" },
        { composer: "Johannes Brahms", works: "Sonata Op. 5, Klavierstücke Op. 116-119", category: "solo" },
        { composer: "Fryderyk Chopin", works: "Polacca-Fantasia Op. 61, Variations Brillantes Op. 12", category: "solo" },
        { composer: "Girolamo Frescobaldi", works: "Aria detto Balletto", category: "solo" },
        { composer: "Igor Stravinsky / Agosti", works: "L'Oiseau de Feu", category: "solo" },
        { composer: "W.A. Mozart", works: "Concerto K 488, Concerto K 466", category: "orchestra" }
      ]
    },
    media: { photos: "FOTOGRAFIA", videos: "VIDEO" },
    concerts: { title: "CONCERTI", message: "Calendario in aggiornamento per la stagione 2026." },
    contact: { title: "CONTATTI", name: "NOME", email: "EMAIL", message: "MESSAGGIO", send: "INVIA" }
  },
  en: {
    nav: { bio: "BIO", repertoire: "REPERTOIRE", media: "MEDIA", concerts: "CONCERTS", contact: "CONTACT" },
    bio: {
      title: "BIOGRAPHY",
      content: `Alberto Chines trained with Masters Franco Scala and Piero Rattalino at the Imola Academy, later specializing with Riccardo Risaliti and obtaining a Master's Diploma from the Accademia Nazionale di Santa Cecilia under the guidance of Benedetto Lupo.

His concert career has led him to perform in prestigious venues such as the Sala Verdi in Milan, Teatro La Fenice in Venice, Gasteig in Munich, and the Palau de la Música Catalana in Barcelona. Winner of the 'Palma d'Oro' International Competition, Alberto is known for an eclecticism ranging from Viennese Classicism to contemporary music, with a focus on tonal research and textual fidelity.

He regularly collaborates with prominent chamber ensembles and has recorded for prestigious labels, pursuing an artistic research that combines analytical rigor with a deep and never predictable interpretive sensitivity.`,
      pressKitBtn: "DOWNLOAD PRESS KIT",
      pressKitUrl: "/downloads/presskit.zip"
    },
    repertoire: {
      title: "REPERTOIRE",
      soloChamber: "SOLO & CHAMBER MUSIC",
      orchestra: "ORCHESTRA",
      items: [
        { composer: "Thomas Adès", works: "Darknesse Visible, Mazurkas Op. 27", category: "solo" },
        { composer: "Carl Philipp Emanuel Bach", works: "Selected Sonatas", category: "solo" },
        { composer: "Johann Sebastian Bach", works: "Partitas, English and French Suites", category: "solo" },
        { composer: "Béla Bartók", works: "Dance Suite Sz. 77, Out of Doors", category: "solo" },
        { composer: "Ludwig van Beethoven", works: "Eroica Variations Op. 35, Sonatas Op. 109, 110", category: "solo" },
        { composer: "Johannes Brahms", works: "Sonata Op. 5, Klavierstücke Op. 116-119", category: "solo" },
        { composer: "Fryderyk Chopin", works: "Polonaise-Fantasy Op. 61, Variations Brillantes Op. 12", category: "solo" },
        { composer: "Girolamo Frescobaldi", works: "Aria detto Balletto", category: "solo" },
        { composer: "Igor Stravinsky / Agosti", works: "The Firebird", category: "solo" },
        { composer: "W.A. Mozart", works: "Concerto K 488, Concerto K 466", category: "orchestra" }
      ]
    },
    media: { photos: "PHOTOGRAPHY", videos: "VIDEO" },
    concerts: { title: "CONCERTS", message: "Calendar being updated for the 2026 season." },
    contact: { title: "CONTACT", name: "NAME", email: "EMAIL", message: "MESSAGE", send: "SEND" }
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

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};