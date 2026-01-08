// app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-noise bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-20">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">

          {/* TESTO */}
          <div className="flex flex-col gap-6">
            <h1 className="uppercase tracking-[0.4em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              ALBERTO CHINES <span className="text-neutral-400">– PIANIST</span>
            </h1>

            <p className="max-w-md text-sm md:text-base text-neutral-300/90 leading-relaxed">
              Un profilo essenziale dedicato all’interpretazione,
              al repertorio e all’attività concertistica.
            </p>
          </div>

          {/* FOTO */}
          <div className="relative">
         <div className="relative overflow-hidden rounded-3xl border border-white/25 bg-white/[0.02]">
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
    </main>
  );
}
