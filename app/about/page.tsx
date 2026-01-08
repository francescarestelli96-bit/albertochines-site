"use client";

import { useLanguage } from "../../components/LanguageProvider";

export default function AboutPage() {
  const { lang } = useLanguage();

  return (
    <main className="bg-noise min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-[12px] uppercase tracking-[0.45em] text-white/60">
          Biography
        </h1>

        <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-white/70">
          {lang === "it" ? (
            <>
              <p>
                Una formazione solida e il confluire di tante esperienze didattiche
                e professionali assai diversificate hanno contribuito a fare di
                Alberto Chines un artista vivace e poliedrico.
              </p>

              <p>
                Il giovane pianista palermitano si è formato presso l’Accademia di
                Imola con Franco Scala e Piero Rattalino, e al Conservatorio di
                Bolzano con Davide Cabassi.
              </p>

              <p>
                A quindici anni ha debuttato presso il Teatro Massimo di Palermo e
                nel 2011 ha vinto il primo premio al Concorso Pianistico
                Internazionale “Palma d’Oro” di Finale Ligure. Nel 2013 è stato
                vincitore del Sony Classical Talent Scout di Madesimo e, nel 2014,
                del secondo premio all’Euregio Piano Award (Geilenkirchen,
                Germania).
              </p>

              <p>
                Si è esibito presso la Sala Mozart dell’Accademia Filarmonica di
                Bologna, al Teatro Olimpico di Vicenza, al Politeama Garibaldi di
                Palermo, alla Van Cliburn Recital Hall di Fort Worth (Texas) e in
                Spagna, Portogallo, Inghilterra, Francia e Germania.
              </p>

              <p>
                Ha recentemente debuttato a Londra per il Keyboard Charitable
                Trust e al Tiroler Festspiele Erl (Austria), ed è da poco stato
                pubblicato il suo primo CD con musiche di Bach, Schumann, Ravel e
                Bartók (BAM International).
              </p>

              <p>
                Alberto Chines è molto attivo anche nell’ambito cameristico,
                collabora con la violista Anna Serova, col chitarrista Eugenio
                Della Chiara, col Quartetto Nôus e con il pianista Emanuele
                Delucchi.
              </p>

              <p>
                Ha inoltre ideato la rassegna concertistica internazionale Musica
                Manent Festival (Ustica) e collabora con la Primavera di Baggio di
                Milano.
              </p>

              <p>Alberto Chines è Steinway Artist dal 2020.</p>
            </>
          ) : (
            <>
              <p>
                A solid education and the merging of many diversified learning and
                professional experiences have contributed to make Alberto Chines
                a smart and many sided artist.
              </p>

              <p>
                He studied at the Imola Academy with Franco Scala and Piero
                Rattalino, and at the Bolzano Conservatory with Davide Cabassi.
              </p>

              <p>
                At the age of 15 he made his debut at Teatro Massimo in Palermo and
                in 2011 he won the first prize at the “Palma d’Oro” International
                Piano Competition.
              </p>

              <p>
                He performed in prestigious venues such as the Mozart Hall of
                Accademia Filarmonica di Bologna, Teatro Olimpico in Vicenza,
                Politeama Garibaldi in Palermo, Van Cliburn Recital Hall in Fort
                Worth (Texas).
              </p>

              <p>
                He has recently appeared at Tiroler Festspiele Erl (Austria) and
                made his London debut for the Keyboard Charitable Trust.
              </p>

              <p>
                Alberto Chines is a very passionate chamber musician and he is
                Steinway Artist since 2020.
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
