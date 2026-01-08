import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-72px)]">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text */}
          <div className="lg:col-span-6">
            <div className="text-[11px] uppercase tracking-[0.45em] text-white/50">
              ALBERTO CHINES
            </div>

            <h1 className="mt-4 text-white/95 uppercase tracking-[0.35em] leading-[1.05]">
              <span className="block text-[clamp(28px,4vw,56px)] whitespace-nowrap">
                ALBERTO CHINES — PIANIST
              </span>
            </h1>

            <p className="mt-6 text-white/60 max-w-xl">
              Un profilo essenziale dedicato all’interpretazione, al repertorio e all’attività
              concertistica.
            </p>
          </div>

          {/* Image */}
          <div className="lg:col-span-6">
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/15 bg-white/[0.02]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/media/05-hands.jpeg"
                  alt="Alberto Chines"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
