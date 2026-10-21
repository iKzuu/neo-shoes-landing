"use client";

import { useState } from "react";
import { Shoe } from "./shoe";

const colors = ["#ff5c8a", "#ffd93d", "#4dd9ff", "#7cff6b", "#b68cff"];

export function Hero() {
  const [active, setActive] = useState(1);
  const [spin, setSpin] = useState(false);

  const cycle = () => {
    setActive((a) => (a + 1) % colors.length);
    setSpin(true);
    setTimeout(() => setSpin(false), 400);
  };

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
      <div className="space-y-6">
        <span className="neo-border inline-block rotate-[-2deg] bg-yellow px-3 py-1 font-bold text-black shadow-neo-sm">
          Koleksi Musim 2026
        </span>

        <h1 className="font-display text-5xl leading-[0.95] sm:text-7xl">
          LANGKAH <span className="bg-pink px-2 text-black">BERANI</span>, TANPA
          BASA-BASI.
        </h1>

        <p className="max-w-lg text-lg text-muted">
          Sepatu dengan siluet tebal, warna mencolok, dan kenyamanan untuk lari,
          basket, atau sekadar nongkrong. Tidak perlu tampil halus.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#koleksi" className="neo-btn rounded-xl bg-green px-6 py-3 text-lg font-bold text-black">
            Belanja Sekarang
          </a>
          <a href="#fitur" className="neo-btn rounded-xl bg-surface px-6 py-3 text-lg font-bold">
            Lihat Fitur
          </a>
        </div>

        <div className="flex gap-6 pt-2">
          <Stat value="12K+" label="Pelanggan" />
          <Stat value="4.8★" label="Rating" />
          <Stat value="30hr" label="Retur" />
        </div>
      </div>

      <div className="relative">
        <div className="neo-card relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-surface p-8">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent 0 18px, var(--ink) 18px 20px)",
            }}
          />
          <div className={`relative w-full ${spin ? "animate-spin-once" : "animate-float"}`}>
            <Shoe color={colors[active]} className="mx-auto w-full max-w-sm drop-shadow-[6px_6px_0_var(--ink)]" />
          </div>

          <span className="absolute left-4 top-4 rotate-[-6deg] bg-cyan px-3 py-1 font-bold text-black neo-border">
            Baru!
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex gap-3" role="group" aria-label="Pilih warna">
            {colors.map((c, i) => (
              <button
                key={c}
                type="button"
                aria-label={`Warna ${i + 1}`}
                aria-pressed={active === i}
                onClick={() => setActive(i)}
                className={`h-10 w-10 rounded-full border-[3px] border-ink transition-transform hover:scale-110 ${
                  active === i ? "scale-110 shadow-neo-sm" : ""
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
          <button type="button" onClick={cycle} className="neo-btn rounded-xl bg-purple px-4 py-2 font-bold text-black">
            Ganti Warna ↻
          </button>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl">{value}</p>
      <p className="text-sm font-semibold text-muted">{label}</p>
    </div>
  );
}
