import { Features, Testimonials } from "@/components/features";
import { Footer, Marquee } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Newsletter } from "@/components/newsletter";
import { Products } from "@/components/products";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Products />
        <Features />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
