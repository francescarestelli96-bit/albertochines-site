"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "it" | "en";

interface RepertoireItem { 
  composer: string; 
  works: string[]; 
  category: "solo" | "orchestra"; 
}

interface Translations {
  nav: { bio: string; repertoire: string; media: string; concerts: string; contact: string; };
  bio: { title: string; content: string; pressKitBtn: string; pressKitUrl: string; };
  repertoire: { title: string; soloChamber: string; orchestra: string; list: RepertoireItem[]; };
  media: { photos: string; videos: string; };
  contact: { title: string; name: string; email: string; message: string; send: string; };
  concerts: { title: string; message: string; };
}

const translations: Record<Language, Translations> = {
  it: {
    nav: { bio: "BIO", repertoire: "REPERTORIO", media: "MEDIA", concerts: "CONCERTI", contact: "CONTATTI" },
    bio: {
      title: "BIOGRAFIA",
      content: "Alberto Chines si è formato con i Maestri Franco Scala e Piero Rattalino presso l'Accademia di Imola, perfezionandosi successivamente con Riccardo Risaliti e ottenendo il Diploma di Master presso l'Accademia Nazionale di Santa Cecilia sotto la guida di Benedetto Lupo. La sua attività concertistica lo ha portato a esibirsi in contesti prestigiosi quali la Sala Verdi del Conservatorio di Milano, il Teatro La Fenice di Venezia, il Gasteig di Monaco di Baviera e il Palau de la Música Catalana di Barcellona. Vincitore del primo premio al Concorso Pianistico Internazionale 'Palma d'Oro' di Finale Ligure e del Concorso Europeo di Esecuzione Musicale 'Città di Moncalieri', Alberto si distingue per un eclettismo che spazia dal classicismo viennese alla musica contemporanea, con una particolare attenzione alla ricerca timbrica e alla fedeltà testuale.",
      pressKitBtn: "SCARICA PRESS KIT",
      pressKitUrl: "/downloads/presskit.zip",
    },
    repertoire: {
      title: "REPERTORIO",
      soloChamber: "SOLO & MUSICA DA CAMERA",
      orchestra: "ORCHESTRA",
      list: [
        { composer: "ANTONIO SOLER", works: ["Fandango in re minore R.146", "Sonata in re minore"], category: "solo" },
        { composer: "LUDWIG VAN BEETHOVEN", works: ["Variazioni e Fuga Op. 35 'Eroica'", "Sonata Op. 109"], category: "solo" },
        { composer: "THOMAS ADÈS", works: ["Darknesse Visible", "Mazurkas Op. 27"], category: "solo" },
        { composer: "PËTR IL'IČ ČAJKOVSKIJ / FEINBERG", works: ["Scherzo dalla Sinfonia n. 6"], category: "solo" },
        { composer: "JEAN-PHILIPPE RAMEAU", works: ["La Villageoise"], category: "solo" },
        { composer: "FRYDERYK CHOPIN", works: ["Variations Brillantes Op. 12", "Polacca-Fantasia Op. 61"], category: "solo" },
        { composer: "BÉLA BARTÓK", works: ["Dance Suite Sz.77", "Suite Op. 14"], category: "solo" },
        { composer: "GIROLAMO FRESCOBALDI", works: ["Aria detto Balletto"], category: "solo" },
        { composer: "IGOR STRAVINSKY / AGOSTI", works: ["L'Oiseau de Feu"], category: "solo" },
        { composer: "W.A. MOZART", works: ["Concerto K 488", "Concerto K 466"], category: "orchestra" }
      ],
    },
    media: { photos: "FOTOGRAFIA", videos: "VIDEO" },
    contact: { title: "CONTATTI", name: "NOME", email: "EMAIL", message: "MESSAGGIO", send: "INVIA" },
    concerts: { title: "CONCERTI", message: "Calendario in aggiornamento per la stagione 2026." }
  },
  en: {
    nav: { bio: "BIO", repertoire: "REPERTOIRE", media: "MEDIA", concerts: "CONCERTS", contact: "CONTACT" },
    bio: {
      title: "BIOGRAPHY",
      content: "Alberto Chines trained at the Imola Academy and the Accademia Nazionale di Santa Cecilia under Benedetto Lupo. His concert career has taken him to prestigious venues such as the Sala Verdi in Milan, Teatro La Fenice in Venice, Gasteig in Munich, and the Palau de la Música Catalana in Barcelona. Winner of the 'Palma d'Oro' International Competition, Alberto is known for his tonal research and textual fidelity across a wide repertoire from Viennese Classicism to contemporary music.",
      pressKitBtn: "DOWNLOAD PRESS KIT",
      pressKitUrl: "/downloads/presskit.zip",
    },
    repertoire: {
      title: "REPERTOIRE",
      soloChamber: "SOLO & CHAMBER MUSIC",
      orchestra: "ORCHESTRA",
      list: [
        { composer: "ANTONIO SOLER", works: ["Fandango in D minor R.146", "Sonata in D minor"], category: "solo" },
        { composer: "LUDWIG VAN BEETHOVEN", works: ["Eroica Variations and Fugue Op. 35", "Sonata Op. 109"], category: "solo" },
        { composer: "THOMAS ADÈS", works: ["Darknesse Visible", "Mazurkas Op. 27"], category: "solo" },
        { composer: "PYOTR ILYICH TCHAIKOVSKY / FEINBERG", works: ["Scherzo from Symphony No. 6"], category: "solo" },
        { composer: "JEAN-PHILIPPE RAMEAU", works: ["La Villageoise"], category: "solo" },
        { composer: "FRYDERYK CHOPIN", works: ["Variations Brillantes Op. 12", "Polonaise-Fantaisie Op. 61"], category: "solo" },
        { composer: "BÉLA BARTÓK", works: ["Dance Suite Sz.77", "Suite Op. 14"], category: "solo" },
        { composer: "GIROLAMO FRESCOBALDI", works: ["Aria detto Balletto"], category: "solo" },
        { composer: "IGOR STRAVINSKY / AGOSTI", works: ["The Firebird Suite"], category: "solo" },
        { composer: "W.A. MOZART", works: ["Concerto K 488", "Concerto K 466"], category: "orchestra" }
      ],
    },
    media: { photos: "PHOTOGRAPHY", videos: "VIDEO" },
    contact: { title: "CONTACT", name: "NAME", email: "EMAIL", message: "MESSAGE", send: "SEND" },
    concerts: { title: "CONCERTS", message: "Calendar being updated for the 2026 season." }
  }
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("it");

  const t = (path: string): any => {
    const keys = path.toLowerCase().split(".");
    let result: any = translations[language];
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        return path;
      }
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
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};