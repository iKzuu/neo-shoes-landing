"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { useCart } from "./cart-context";

const links = [
  { href: "#koleksi", label: "Koleksi" },
  { href: "#fitur", label: "Fitur" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#kontak", label: "Kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b-[3px] border-ink bg-surface transition-shadow duration-200 ${
        scrolled ? "shadow-neo-sm" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#" className="font-display text-2xl tracking-tight">
          STOMP<span className="text-pink">!</span>
        </a>

        <ul className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 font-semibold transition-colors hover:bg-yellow hover:text-black"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#koleksi"
            aria-label={`Keranjang, ${count} item`}
            className="neo-btn relative flex h-11 items-center gap-2 rounded-xl bg-cyan px-3 font-bold text-black"
          >
            <CartIcon />
            <span className="hidden sm:inline">Keranjang</span>
            <span className="flex h-6 min-w-6 items-center justify-center rounded-md border-2 border-ink bg-white px-1 text-sm text-black">
              {count}
            </span>
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Buka menu"
            className="neo-btn flex h-11 w-11 items-center justify-center rounded-xl bg-pink text-black md:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="animate-pop-in border-t-[3px] border-ink bg-surface px-4 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 font-semibold hover:bg-yellow hover:text-black"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
    </svg>
  );
}
