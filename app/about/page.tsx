// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-noise bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-20">
        <h1 className="text-[11px] uppercase tracking-[0.4em] text-neutral-400">
          Bio
        </h1>

        {/* Colonna singola: niente sidebar */}
        <div className="mt-10 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-light tracking-[-0.01em]">
            Profilo artistico
          </h2>

          <div className="mt-6 space-y-5 text-sm md:text-base text-neutral-300/90 leading-relaxed">
            <p>
              Inserisci qui la bio completa (formazione, debutto, premi,
              collaborazioni, festival, ecc.).
            </p>
            <p>
              Mantieni paragrafi brevi: è più elegante e si legge meglio su
              mobile.
            </p>
            <p>
              Se vuoi, posso anche riscrivere tutta la bio in stile “press kit”
              (super raffinata e asciutta).
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
