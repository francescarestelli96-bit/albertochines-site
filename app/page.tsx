// app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-noise bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* TESTO - stesso “linguaggio” del brand header: uppercase + tracking */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-[0.12em] leading-[1.05]">
              ALBERTO CHINES
            </h1>

            <p className="text-[11px] md:text-xs uppercase tracking-[0.4em] text-neutral-400">
              PIANIST
            </p>

            <p className="max-w-md text-sm md:text-base text-neutral-300/90 leading-relaxed">
              Un profilo essenziale dedicato all’interpretazione, al repertorio e
              all’attività concertistica.
            </p>
          </div>

          {/* FOTO */}
          <div className="relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <Image
                src="/media/05-hands.jpeg"
                alt="Alberto Chines"
                fill
                priority
                className="object-cover grayscale transition duration-700 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER MINIMALE */}
      <footer className="mx-auto max-w-6xl px-6 pb-10">
        <div className="border-t border-white/10 pt-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="text-[11px] uppercase tracking-[0.4em] text-neutral-600">
            © {new Date().getFullYear()} Alberto Chines
          </div>
          <div className="text-xs text-neutral-500">Sito ufficiale</div>
        </div>
      </footer>
    </main>
  );
}
