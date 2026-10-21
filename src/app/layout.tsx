import type { Metadata } from "next";
import { Space_Grotesk, Archivo_Black } from "next/font/google";
import { CartProvider } from "@/components/cart-context";
import "./globals.css";

const body = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const display = Archivo_Black({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "STOMP! — Sepatu Berani untuk Langkahmu",
  description:
    "Koleksi sepatu neobrutalism: lari, basket, dan casual dengan desain tegas dan warna berani.",
};

// Terapkan tema sebelum render pertama agar tidak ada kedipan (FOUC).
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${body.variable} ${display.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
