"use client";

import { useState } from "react";
import { testimonials } from "@/data/products";

const features = [
  {
    title: "Bantalan Tebal",
    desc: "Peredam kejut yang empuk untuk lari jarak jauh maupun harian.",
    color: "bg-pink",
  },
  {
    title: "Grip Brutal",
    desc: "Pola outsole tajam untuk traksi maksimal di lantai basket dan aspal.",
    color: "bg-yellow",
  },
  {
    title: "Bahan Tahan Lama",
    desc: "Upper dari bahan sintetis berlapis yang tahan air dan mudah dibersihkan.",
    color: "bg-cyan",
  },
  {
    title: "Desain Tegas",
    desc: "Outline tebal dan bayangan keras. Terlihat jelas dari jarak jauh.",
    color: "bg-purple",
  },
];

export function Features() {
  return (
    <section id="fitur" className="scroll-mt-24 border-y-[3px] border-ink bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-10 font-display text-4xl sm:text-5xl">MENGAPA STOMP?</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`neo-card neo-card-hover rounded-2xl p-6 ${f.color} text-black`}
              style={{ rotate: i % 2 === 0 ? "-1deg" : "1deg" }}
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border-[3px] border-ink bg-white font-display text-xl">
                {i + 1}
              </span>
              <h3 className="mb-2 font-display text-xl">{f.title}</h3>
              <p className="font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <section id="testimoni" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16">
      <h2 className="mb-10 font-display text-4xl sm:text-5xl">KATA MEREKA</h2>

      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <figure key={index} className="neo-card animate-pop-in rounded-3xl bg-surface p-8 sm:p-10">
          <blockquote className="font-display text-2xl leading-snug sm:text-3xl">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-6">
            <p className="font-bold">{t.name}</p>
            <p className="text-sm text-muted">{t.role}</p>
          </figcaption>
        </figure>

        <div className="flex flex-col gap-3">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-pressed={index === i}
              className={`neo-btn rounded-xl p-4 text-left font-bold ${
                index === i ? "bg-yellow text-black" : "bg-surface"
              }`}
            >
              {item.name}
              <span className="block text-sm font-medium opacity-80">{item.role}</span>
            </button>
          ))}
          <div className="mt-auto flex gap-3 pt-2">
            <button
              type="button"
              aria-label="Sebelumnya"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="neo-btn h-12 flex-1 rounded-xl bg-cyan font-bold text-black"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Berikutnya"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="neo-btn h-12 flex-1 rounded-xl bg-green font-bold text-black"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
