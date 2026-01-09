"use client";

export default function PlaceholderMedia({
  label,
  ratio,
}: {
  label: string;
  ratio?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-black/40 overflow-hidden",
        ratio ?? "aspect-[16/10]",
      ].join(" ")}
    >
      <div className="p-4">
        <div className="text-xs tracking-[0.28em] uppercase text-white/55">
          {label}
        </div>
        <div className="mt-3 h-24 rounded-xl bg-gradient-to-br from-white/10 to-white/0" />
        <div className="mt-3 h-3 w-3/4 rounded bg-white/10" />
        <div className="mt-2 h-3 w-1/2 rounded bg-white/10" />
      </div>
    </div>
  );
}
