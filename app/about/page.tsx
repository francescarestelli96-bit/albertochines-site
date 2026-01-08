// app/about/page.tsx
"use client";

import { useLanguage } from "../../components/LanguageProvider";

export default function AboutPage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-noise bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20">
        <h1 className="text-[11px] uppercase tracking-[0.4em] text-neutral-400">
          Bio
        </h1>

        <div className="mt-10 max-w-3xl space-y-6 text-sm md:text-base text-neutral-300/90 leading-relaxed">
          {lang === "it" && (
            <>
              <p>
                Alberto Chines è un pianista italiano attivo nel repertorio
                solistico e cameristico, con particolare attenzione alla musica
                romantica e del primo Novecento.
              </p>
              <p>
                Dopo la formazione accademica, ha intrapreso un’intensa attività
                concertistica esibendosi in contesti nazionali e internazionali,
                collaborando con musicisti e istituzioni culturali.
              </p>
              <p>
                Il suo lavoro interpretativo si concentra sull’equilibrio tra
                rigore formale e libertà espressiva, con una costante ricerca
                timbrica e strutturale.
              </p>
            </>
          )}

          {lang === "en" && (
            <>
              <p>
                Alberto Chines is an Italian pianist active in both solo and
                chamber repertoire, with a particular focus on Romantic and
                early 20th-century music.
              </p>
              <p>
                Following his academic training, he developed an intense concert
                activity, performing in national and international venues and
                collaborating with musicians and cultural institutions.
              </p>
              <p>
                His interpretative work focuses on the balance between formal
                rigor and expressive freedom, with constant attention to timbral
                and structural research.
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
