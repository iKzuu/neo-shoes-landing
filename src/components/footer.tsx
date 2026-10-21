export function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-3xl">
            STOMP<span className="text-pink">!</span>
          </p>
          <p className="mt-2 max-w-xs text-muted">
            Sepatu berani untuk orang yang tidak suka tampil biasa saja.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          <div className="space-y-2">
            <p className="font-bold">Belanja</p>
            <a href="#koleksi" className="block hover:underline">Lari</a>
            <a href="#koleksi" className="block hover:underline">Basket</a>
            <a href="#koleksi" className="block hover:underline">Casual</a>
          </div>
          <div className="space-y-2">
            <p className="font-bold">Bantuan</p>
            <a href="#" className="block hover:underline">Ukuran</a>
            <a href="#" className="block hover:underline">Pengiriman</a>
            <a href="#" className="block hover:underline">Retur</a>
          </div>
          <div className="space-y-2">
            <p className="font-bold">Ikuti</p>
            <a href="#" className="block hover:underline">Instagram</a>
            <a href="#" className="block hover:underline">TikTok</a>
          </div>
        </nav>
      </div>
      <div className="border-t-[3px] border-ink py-4 text-center text-sm font-semibold">
        © 2026 STOMP Footwear. Hak cipta dilindungi.
      </div>
    </footer>
  );
}

export function Marquee() {
  const items = ["LARI", "BASKET", "CASUAL", "NEO", "BRUTAL", "STOMP"];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-b-[3px] border-ink bg-yellow py-3 text-black">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-display text-2xl">
        {row.map((t, i) => (
          <span key={i}>
            {t} <span className="text-pink">✶</span>
          </span>
        ))}
      </div>
    </div>
  );
}
