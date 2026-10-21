export type Category = "Semua" | "Lari" | "Basket" | "Casual";

export type Product = {
  id: string;
  name: string;
  category: Exclude<Category, "Semua">;
  price: number;
  tag?: string;
  colors: { name: string; hex: string }[];
  sizes: number[];
  rating: number;
};

export const products: Product[] = [
  {
    id: "blitz-runner",
    name: "Blitz Runner",
    category: "Lari",
    price: 899000,
    tag: "Terlaris",
    colors: [
      { name: "Pink", hex: "#ff5c8a" },
      { name: "Kuning", hex: "#ffd93d" },
      { name: "Cyan", hex: "#4dd9ff" },
    ],
    sizes: [39, 40, 41, 42, 43, 44],
    rating: 4.8,
  },
  {
    id: "slam-hoop",
    name: "Slam Hoop",
    category: "Basket",
    price: 1249000,
    tag: "Baru",
    colors: [
      { name: "Hijau", hex: "#7cff6b" },
      { name: "Ungu", hex: "#b68cff" },
      { name: "Hitam", hex: "#111111" },
    ],
    sizes: [40, 41, 42, 43, 44, 45],
    rating: 4.9,
  },
  {
    id: "boom-street",
    name: "Boom Street",
    category: "Casual",
    price: 649000,
    colors: [
      { name: "Kuning", hex: "#ffd93d" },
      { name: "Putih", hex: "#ffffff" },
      { name: "Pink", hex: "#ff5c8a" },
    ],
    sizes: [38, 39, 40, 41, 42],
    rating: 4.6,
  },
  {
    id: "zap-trail",
    name: "Zap Trail",
    category: "Lari",
    price: 1099000,
    tag: "Limited",
    colors: [
      { name: "Cyan", hex: "#4dd9ff" },
      { name: "Hijau", hex: "#7cff6b" },
    ],
    sizes: [39, 40, 41, 42, 43],
    rating: 4.7,
  },
  {
    id: "dunk-brick",
    name: "Dunk Brick",
    category: "Basket",
    price: 999000,
    colors: [
      { name: "Ungu", hex: "#b68cff" },
      { name: "Pink", hex: "#ff5c8a" },
    ],
    sizes: [40, 41, 42, 43, 44],
    rating: 4.5,
  },
  {
    id: "chill-block",
    name: "Chill Block",
    category: "Casual",
    price: 549000,
    tag: "Diskon",
    colors: [
      { name: "Cyan", hex: "#4dd9ff" },
      { name: "Kuning", hex: "#ffd93d" },
      { name: "Hitam", hex: "#111111" },
    ],
    sizes: [38, 39, 40, 41, 42, 43],
    rating: 4.4,
  },
];

export const testimonials = [
  {
    name: "Rafi Pratama",
    role: "Pelari Maraton",
    quote: "Bentuknya nyentrik tapi nyaman dipakai lari 15K. Warnanya bikin orang noleh terus.",
  },
  {
    name: "Dina Ayu",
    role: "Desainer Grafis",
    quote: "Akhirnya ada sepatu yang tampilannya sejujur brutalisme. Kotak, tebal, dan jelas.",
  },
  {
    name: "Kevin Saputra",
    role: "Pemain Basket Amatur",
    quote: "Grip-nya mantap saat crossover. Sol-nya tidak licin di lapangan indoor.",
  },
];

export const formatRupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
