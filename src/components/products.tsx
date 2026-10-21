"use client";

import { useMemo, useRef, useState } from "react";
import { products, formatRupiah, type Category, type Product } from "@/data/products";
import { useCart } from "./cart-context";
import { Shoe } from "./shoe";
import { Toast } from "./toast";

const categories: Category[] = ["Semua", "Lari", "Basket", "Casual"];
type Sort = "default" | "price-asc" | "price-desc" | "rating";

export function Products() {
  const [category, setCategory] = useState<Category>("Semua");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("default");
  const [toast, setToast] = useState<string | null>(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = products.filter(
      (p) =>
        (category === "Semua" || p.category === category) &&
        (q === "" || p.name.toLowerCase().includes(q))
    );
    switch (sort) {
      case "price-asc":
        return [...list].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...list].sort((a, b) => b.price - a.price);
      case "rating":
        return [...list].sort((a, b) => b.rating - a.rating);
      default:
        return list;
    }
  }, [category, query, sort]);

  const timer = useRef<number | undefined>(undefined);
  const notify = (msg: string) => {
    setToast(msg);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(null), 2400);
  };

  return (
    <section id="koleksi" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl">KOLEKSI</h2>
          <p className="text-muted">Pilih warna, ukuran, lalu masukkan ke keranjang.</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari sepatu..."
            aria-label="Cari sepatu"
            className="neo-input h-11 rounded-xl px-4 font-semibold"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            aria-label="Urutkan"
            className="neo-input h-11 rounded-xl px-3 font-semibold"
          >
            <option value="default">Urutan default</option>
            <option value="price-asc">Harga terendah</option>
            <option value="price-desc">Harga tertinggi</option>
            <option value="rating">Rating tertinggi</option>
          </select>
        </div>
      </div>

      <div className="mb-10 flex flex-wrap gap-3" role="tablist" aria-label="Kategori">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={category === c}
            type="button"
            onClick={() => setCategory(c)}
            className={`neo-btn rounded-full px-5 py-2 font-bold ${
              category === c ? "bg-ink text-background" : "bg-surface"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="neo-card rounded-2xl p-10 text-center">
          <p className="font-display text-2xl">Tidak ada sepatu yang cocok.</p>
          <p className="text-muted">Coba kata kunci atau kategori lain.</p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} onAdded={notify} />
          ))}
        </div>
      )}

      <Toast message={toast} />
    </section>
  );
}

function ProductCard({ product, onAdded }: { product: Product; onAdded: (msg: string) => void }) {
  const { add } = useCart();
  const [color, setColor] = useState(0);
  const [size, setSize] = useState<number | null>(null);
  const [qty, setQty] = useState(1);
  const [error, setError] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleAdd = () => {
    if (size === null) {
      setError(true);
      return;
    }
    setError(false);
    add(qty);
    onAdded(`${product.name} (${product.colors[color].name}, ${size}) x${qty} ditambahkan`);
  };

  return (
    <article className="neo-card neo-card-hover group flex flex-col rounded-2xl bg-surface p-5">
      <div className="relative mb-4 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border-[3px] border-ink" style={{ backgroundColor: product.colors[color].hex }}>
        <Shoe color="#ffffff" className="w-3/4 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
        {product.tag && (
          <span className="absolute right-3 top-3 rotate-3 border-2 border-ink bg-white px-2 py-0.5 text-xs font-bold text-black">
            {product.tag}
          </span>
        )}
        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-pressed={liked}
          aria-label={liked ? "Hapus dari favorit" : "Tambah ke favorit"}
          className="neo-btn absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black"
        >
          {liked ? "♥" : "♡"}
        </button>
      </div>

      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-xl">{product.name}</h3>
          <p className="text-sm font-semibold text-muted">
            {product.category} · ★ {product.rating}
          </p>
        </div>
        <p className="whitespace-nowrap font-bold">{formatRupiah(product.price)}</p>
      </div>

      <div className="mt-4 space-y-3">
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-wide">Warna: {product.colors[color].name}</p>
          <div className="flex gap-2">
            {product.colors.map((c, i) => (
              <button
                key={c.name}
                type="button"
                aria-label={`Warna ${c.name}`}
                aria-pressed={color === i}
                onClick={() => setColor(i)}
                className={`h-8 w-8 rounded-full border-[3px] border-ink transition-transform hover:scale-110 ${
                  color === i ? "scale-110 shadow-neo-sm" : ""
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-wide">Ukuran</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                aria-pressed={size === s}
                onClick={() => {
                  setSize(s);
                  setError(false);
                }}
                className={`h-9 min-w-9 rounded-lg border-[3px] border-ink px-2 text-sm font-bold transition-colors ${
                  size === s ? "bg-ink text-background" : "bg-surface hover:bg-yellow hover:text-black"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          {error && (
            <p role="alert" className="mt-2 text-sm font-bold text-pink">
              Pilih ukuran dulu.
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-12 items-center rounded-xl border-[3px] border-ink bg-surface">
          <button
            type="button"
            aria-label="Kurangi jumlah"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="h-full px-3 font-bold hover:bg-yellow hover:text-black"
          >
            −
          </button>
          <span className="w-8 text-center font-bold" aria-live="polite">
            {qty}
          </span>
          <button
            type="button"
            aria-label="Tambah jumlah"
            onClick={() => setQty((q) => Math.min(10, q + 1))}
            className="h-full px-3 font-bold hover:bg-yellow hover:text-black"
          >
            +
          </button>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="neo-btn h-12 flex-1 rounded-xl bg-pink font-bold text-black"
        >
          Tambah ke Keranjang
        </button>
      </div>
    </article>
  );
}
