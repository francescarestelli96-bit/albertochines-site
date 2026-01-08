"use client";

import { useLanguage } from "@/components/LanguageProvider";

function KeyValue({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-6 py-5 border-b border-white/10 last:border-b-0">
      <div className="text-xs tracking-[0.28em] uppercase text-white/45">
        {label}
      </div>
      <div className="text-white/85 leading-relaxed">{value}</div>
    </div>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen px-6 py-16">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-light tracking-wide">{t.bio.title}</h1>
        <p className="mt-3 text-white/55">{t.bio.subtitle}</p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <div className="text-xs tracking-[0.28em] uppercase text-white/55">
              {t.bio.summaryLabel}
            </div>

            <div className="mt-6">
              <KeyValue label={t.bio.sections.education.label} value={t.bio.sections.education.value} />
              <KeyValue label={t.bio.sections.debut.label} value={t.bio.sections.debut.value} />
              <KeyValue label={t.bio.sections.awards.label} value={t.bio.sections.awards.value} />
              <KeyValue label={t.bio.sections.activity.label} value={t.bio.sections.activity.value} />
              <KeyValue label={t.bio.sections.steinway.label} value={t.bio.sections.steinway.value} />
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 text-white/60 text-sm leading-relaxed">
              Nota: pagina pensata per stampa e lettura lunga: pochi effetti, tanta chiarezza.
            </div>
          </aside>

          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <div className="text-white/80 leading-relaxed space-y-6">
              <p>
                Una formazione solida e il confluire di tante esperienze didattiche e professionali assai diversificate
                hanno contribuito a fare di Alberto Chines un artista vivace e poliedrico.
              </p>
              <p>
                Il giovane pianista palermitano si è formato presso l’Accademia di Imola con Franco Scala e Piero Rattalino,
                e al Conservatorio di Bolzano con Davide Cabassi.
              </p>
              <p>
                A quindici anni ha debuttato presso il Teatro Massimo di Palermo e nel 2011 ha vinto il primo premio al Concorso
                Pianistico Internazionale “Palma d’Oro” di Finale Ligure. Nel 2013 è stato vincitore del Sony Classical Talent Scout
                di Madesimo e, nel 2014, del secondo premio all’Euregio Piano Award (Geilenkirchen, Germania).
              </p>
              <p>
                Si è esibito presso la Sala Mozart dell’Accademia Filarmonica di Bologna, al Teatro Olimpico di Vicenza,
                al Politeama Garibaldi di Palermo, alla Van Cliburn Recital Hall di Fort Worth (Texas) e in Spagna, Portogallo,
                Inghilterra, Francia e Germania.
              </p>
              <p>
                Ha recentemente debuttato a Londra per il Keyboard Charitable Trust e al Tiroler Festspiele Erl (Austria),
                ed è da poco stato pubblicato il suo primo CD con musiche di Bach, Schumann, Ravel e Bartók (BAM International).
              </p>
              <p>
                Alberto Chines è molto attivo anche nell’ambito cameristico, collabora con la violista Anna Serova,
                col chitarrista Eugenio Della Chiara, col Quartetto Nôus e con il pianista Emanuele Delucchi.
              </p>
              <p>
                Ha inoltre ideato la rassegna concertistica internazionale Musica Manent Festival (Ustica) e collabora con la Primavera
                di Baggio di Milano. Alberto Chines è Steinway Artist dal 2020.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
