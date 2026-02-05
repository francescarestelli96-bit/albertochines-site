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
}

const translations: Record<Language, Translations> = {
  it: {
    nav: { bio: "BIO", repertoire: "REPERTORIO", media: "MEDIA", concerts: "CONCERTI", contact: "CONTATTI" },
    bio: {
      title: "BIOGRAFIA",
      content: "Alberto Chines si è formato con i Maestri Franco Scala e Piero Rattalino presso l'Accademia di Imola, perfezionandosi successivamente con Riccardo Risaliti e ottenendo il Diploma di Master presso l'Accademia Nazionale di Santa Cecilia sotto la guida di Benedetto Lupo.",
      pressKitBtn: "SCARICA PRESS KIT",
      pressKitUrl: "/downloads/presskit.zip",
    },
    repertoire: {
      title: "REPERTORIO",
      soloChamber: "SOLO & MUSICA DA CAMERA",
      orchestra: "ORCHESTRA",
      list: [
        { composer: "Antonio Soler", works: ["Fandango in re minore R.146"], category: "solo" },
        { composer: "Ludwig van Beethoven", works: ["Variazioni e Fuga Op. 35 'Eroica'"], category: "solo" },
        { composer: "Thomas Adès", works: ["Darknesse Visible"], category: "solo" },
        { composer: "Pëtr Il'ič Čajkovskij / Feinberg", works: ["Scherzo dalla Sinfonia n. 6"], category: "solo" },
        { composer: "Jean-Philippe Rameau", works: ["La Villageoise"], category: "solo" },
        { composer: "Fryderyk Chopin", works: ["Variations Brillantes Op. 12"], category: "solo" },
        { composer: "Béla Bartók", works: ["Dance Suite Sz.77"], category: "solo" },
        { composer: "Girolamo Frescobaldi", works: ["Aria detto Balletto"], category: "solo" },
        { composer: "Igor Stravinsky / Agosti", works: ["L'Oiseau de Feu"], category: "solo" }
      ],
    },
    media: { photos: "FOTOGRAFIA", videos: "VIDEO" },
    contact: { title: "CONTATTI", name: "NOME", email: "EMAIL", message: "MESSAGGIO", send: "INVIA" },
  },
  en: {
    nav: { bio: "BIO", repertoire: "REPERTOIRE", media: "MEDIA", concerts: "CONCERTS", contact: "CONTACT" },
    bio: {
      title: "BIOGRAPHY",
      content: "Alberto Chines trained with Masters Franco Scala and Piero Rattalino at the Imola Academy, further specializing with Riccardo Risaliti.",
      pressKitBtn: "DOWNLOAD PRESS KIT",
      pressKitUrl: "/downloads/presskit.zip",
    },
    repertoire: {
      title: "REPERTOIRE",
      soloChamber: "SOLO & CHAMBER MUSIC",
      orchestra: "ORCHESTRA",
      list: [
        { composer: "Antonio Soler", works: ["Fandango in D minor R.146"], category: "solo" },
        { composer: "Ludwig van Beethoven", works: ["Eroica Variations and Fugue Op. 35"], category: "solo" },
        { composer: "Thomas Adès", works: ["Darknesse Visible"], category: "solo" },
        { composer: "Pyotr Ilyich Tchaikovsky / Feinberg", works: ["Scherzo from Symphony No. 6"], category: "solo" },
        { composer: "Jean-Philippe Rameau", works: ["La Villageoise"], category: "solo" },
        { composer: "Fryderyk Chopin", works: ["Variations Brillantes Op. 12"], category: "solo" },
        { composer: "Béla Bartók", works: ["Dance Suite Sz.77"], category: "solo" },
        { composer: "Girolamo Frescobaldi", works: ["Aria detto Balletto"], category: "solo" },
        { composer: "Igor Stravinsky / Agosti", works: ["The Firebird"], category: "solo" }
      ],
    },
    media: { photos: "PHOTOGRAPHY", videos: "VIDEO" },
    contact: { title: "CONTACT", name: "NAME", email: "EMAIL", message: "MESSAGE", send: "SEND" },
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
    const keys = path.split(".");
    let result: any = translations[language];
    for (const key of keys) {
      if (result && result[key] !== undefined) result = result[key];
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
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};