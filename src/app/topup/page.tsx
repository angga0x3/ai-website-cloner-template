import { Header } from "@/components/topup/Header";
import { HeroBanner } from "@/components/topup/HeroBanner";
import { ProductGrid } from "@/components/topup/ProductGrid";
import { WaveTransition } from "@/components/topup/WaveTransition";
import { Footer } from "@/components/topup/Footer";

export default function TopupPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#743cdd]">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <ProductGrid />
      </main>
      <WaveTransition />
      <Footer />
    </div>
  );
}
