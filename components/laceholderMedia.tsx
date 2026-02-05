"use client";

import React from "react";

interface PlaceholderMediaProps {
  label: string;
  ratio?: string;
}

export default function PlaceholderMedia({ label, ratio }: PlaceholderMediaProps) {
  return (
    <div 
      className={[
        "rounded-2xl border border-white/10 bg-black/40 overflow-hidden flex items-center justify-center",
        ratio ?? "aspect-[16/10]",
      ].join(" ")}
    >
      <span className="text-[10px] tracking-[0.3em] text-zinc-600 uppercase">
        {label}
      </span>
    </div>
  );
}