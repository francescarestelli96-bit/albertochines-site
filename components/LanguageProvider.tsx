'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

const translations: any = {
  it: {
    nav: { about: "Bio", concerts: "Concerti", repertorio: "Repertorio", media: "Media", contact: "Contatti" },
    home: { title: "Alberto Chines", subtitle: "Pianist", tagline: "Steinway Artist" },
    about: {
      title: "Biografia",
      content: `Alberto Chines, Steinway Artist dal 2020, è un pianista poliedrico che unisce all'attività solistica un profondo interesse per la musica da camera e per la didattica.

Il suo percorso formativo, ricco di incontri e masterclass con artisti di fama mondiale, si è consolidato presso l’Accademia di Imola sotto la guida di Franco Scala e Piero Rattalino, e al Conservatorio di Bolzano con Davide Cabassi. Dopo il debutto a soli quindici anni al Teatro Massimo di Palermo, si è imposto all’attenzione della critica vincendo il primo premio al Concorso Internazionale Palma d’Oro di Finale Ligure (2011), il Sony Classical Talent Scout di Madesimo (2013) e il secondo premio all’Euregio Piano Award di Geilenkirchen (2014).

La sua attività concertistica lo ha portato a esibirsi in sedi di prestigio internazionale, tra cui la Van Cliburn Recital Hall di Fort Worth (USA), la Sala Mozart dell’Accademia Filarmonica di Bologna, il Teatro Olimpico di Vicenza, il Politeama Garibaldi di Palermo e il Teatro alla Scala di Milano. Ha suonato a Londra per il Keyboard Charitable Trust e ai Klaviertage del Tiroler Festspiele Erl (Austria), e ha recentemente debuttato al Festival Bartolomeo Cristofori di Padova eseguendo il Pierrot Lunaire di Schönberg per voce e pianoforte solo, insieme alla propria trascrizione del Sacre du Printemps di Stravinkskij.

Alberto Chines è inoltre un camerista appassionato. Collabora regolarmente con artisti quali Anna Serova, Eugenio Della Chiara, Emanuele Delucchi, Rebecca Taio, Danilo Pastore e il Quartetto Nôus, esplorando il repertorio dal duo al quintetto con grandi aperture verso la nuova musica. La sua discografia include un album di debutto per BAM International con opere di Bach, Schumann, Ravel e Bartók.

Attivo anche nella promozione culturale, è stato l’ideatore del Musica Manent Festival di Ustica e collabora stabilmente con la Primavera di Baggio di Milano.

Alberto Chines è docente di pianoforte presso il Conservatorio “Francesco Venezze” di Rovigo.`
    },
    media: { title: "Media" },
    contact: { title: "Contatti", inquiries: "" },
    concerts: { title: "Concerti", message: "Date in aggiornamento" }
  },
  en: {
    nav: { about: "Bio", concerts: "Concerts", repertorio: "Repertoire", media: "Media", contact: "Contact" },
    home: { title: "Alberto Chines", subtitle: "Pianist", tagline: "Steinway Artist" },
    about: {
      title: "Biography",
      content: `Alberto Chines, a Steinway Artist since 2020, is a versatile pianist who balances an extensive solo career with a profound dedication to chamber music and education.

His artistic development, deeply enriched by masterclasses with world-renowned artists, was shaped at the Accademia di Imola under the guidance of Franco Scala and Piero Rattalino, and at the Bolzano Conservatory with Davide Cabassi. Following his debut at the Teatro Massimo in Palermo at just fifteen years old, he gained critical acclaim by winning first prize at the Palma d’Oro International Competition in Finale Ligure (2011), the Sony Classical Talent Scout in Madesimo (2013), and second prize at the Euregio Piano Award in Geilenkirchen (2014).

His concert engagements have taken him to prestigious international venues, including the Van Cliburn Recital Hall in Fort Worth (USA), the Sala Mozart of the Accademia Filarmonica in Bologna, the Teatro Olimpico in Vicenza, the Politeama Garibaldi in Palermo, and the Teatro alla Scala in Milan. He has performed in London for the Keyboard Charitable Trust and at the Klaviertage of the Tiroler Festspiele Erl in Austria. Recently, he debuted at the Bartolomeo Cristofori Festival in Padua, performing Schoenberg’s Pierrot Lunaire for voice and solo piano, alongside his own transcription of Stravinsky’s Le Sacre du Printemps.

A passionate chamber musician, Alberto collaborates regularly with artists such as Anna Serova, Eugenio Della Chiara, Emanuele Delucchi, Rebecca Taio, Danilo Pastore, and the Quartetto Nôus, exploring repertoire ranging from duos to quintets with a strong emphasis on contemporary music. His discography includes a debut album for BAM International featuring works by Bach, Schumann, Ravel, and Bartók.

Beyond the stage, he is deeply involved in cultural promotion; he founded the Musica Manent Festival in Ustica and is a long-standing collaborator of the Primavera di Baggio in Milan.

Alberto Chines currently serves as a Professor of Piano at the “Francesco Venezze” Conservatory in Rovigo.`
    },
    media: { title: "Media" },
    contact: { title: "Contact", inquiries: "" },
    concerts: { title: "Concerts", message: "Dates coming soon" }
  }
};

const LanguageContext = createContext<any>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('it');
  const t = (path: string) => {
    const keys = path.split('.');
    let result = translations[language];
    for (const key of keys) { if (result) result = result[key]; }
    return result || path;
  };
  const toggleLanguage = () => setLanguage((prev) => (prev === 'it' ? 'en' : 'it'));

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