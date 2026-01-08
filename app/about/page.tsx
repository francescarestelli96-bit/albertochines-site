"use client";

import { useLanguage } from "../../components/LanguageProvider";

const BIO_IT = [
  "Una formazione solida e il confluire di tante esperienze didattiche e professionali assai diversificate hanno contribuito a fare di Alberto Chines un artista vivace e poliedrico.",
  "Il giovane pianista palermitano si è formato presso l’Accademia di Imola con Franco Scala e Piero Rattalino, e al Conservatorio di Bolzano con Davide Cabassi.",
  "A quindici anni ha debuttato presso il Teatro Massimo di Palermo e nel 2011 ha vinto il primo premio al Concorso Pianistico Internazionale “Palma d’Oro” di Finale Ligure. Nel 2013 è stato vincitore del Sony Classical Talent Scout di Madesimo e, nel 2014, del secondo premio all’Euregio Piano Award (Geilenkirchen, Germania).",
  "Si è esibito presso la Sala Mozart dell’Accademia Filarmonica di Bologna, al Teatro Olimpico di Vicenza, al Politeama Garibaldi di Palermo, alla Van Cliburn Recital Hall di Fort Worth (Texas) e in Spagna, Portogallo, Inghilterra, Francia e Germania.",
  "Ha recentemente debuttato a Londra per il Keyboard Charitable Trust e al Tiroler Festspiele Erl (Austria), ed è da poco stato pubblicato il suo primo CD con musiche di Bach, Schumann, Ravel e Bartók (BAM International)",
  "Alberto Chines è molto attivo anche nell’ambito cameristico, collabora con la violista Anna Serova, col chitarrista Eugenio Della Chiara, col Quartetto Nôus e con il pianista Emanuele Delucchi, e ha negli anni seguito diversi progetti in trio (Trio Casa Bernardini), quartetto e quintetto.",
  "Ha inoltre ideato la rassegna concertistica internazionale Musica Manent Festival (Ustica) e collabora con la Primavera di Baggio di Milano.",
  "Alberto Chines è Steinway Artist dal 2020.",
];

const BIO_EN = [
  "A solid education and the merging of many diversified learning and professional experiences have contributed to make Alberto Chines a smart and many sided artist.",
  "He studied at the Imola Academy with Franco Scala and Piero Rattalino, and at the Bolzano Conservatory with Davide Cabassi.",
  "At the age of 15 he made his debut at Teatro Massimo in Palermo and in 2011 he won the first prize at the “Palma d’Oro” International Piano Competition. In 2013 he won the Sony Classical Talent Scout in Madesimo and, in 2014, the second prize at the Euregio Piano Award (Geilenkirchen, Germany).",
  "He performed in prestigious venues such as the Mozart Hall of Accademia Filarmonica di Bologna, Teatro Olimpico in Vicenza, Politeama Garibaldi in Palermo, Van Cliburn Recital Hall in Fort Worth (Texas), and in Spain, Portugal, UK, France and Germany.",
  "He has recently appeared at Tiroler Festspiele Erl (Austria) and he made his London debut for the Keyboard Charitable Trust. His first CD with music by Bach, Schumann, Ravel and Bartók has been recently released on BAM International.",
  "Alberto Chines is a very passionate chamber musician, he collaborates with violist Anna Serova, with Guitarist Eugenio Della Chiara, with Quartetto Nôus, with pianist Emanuele Delucchi and, over the years, he followed several projects in trio (Trio Casa Bernardini), quartet and quintet.",
  "He is also the creator and artistic director of Musica Manent Festival in Ustica (Sicily) and he collaborates with international concert series Primavera di Baggio in Milan.",
  "Alberto Chines is Steinway Artist since 2020.",
];

export default function AboutPage() {
  const { lang } = useLanguage();
  const paragraphs = lang === "it" ? BIO_IT : BIO_EN;

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-[12px] uppercase tracking-[0.45em] text-white/50">
          {lang === "it" ? "BIOGRAFIA" : "BIOGRAPHY"}
        </h1>

        <div className="mt-8 space-y-5 text-white/80 leading-relaxed">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
