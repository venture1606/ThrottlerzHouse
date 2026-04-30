import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { HeroBanner } from "@/components/home/HeroBanner";
import { PromoSection } from "@/components/home/PromoSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function HomePage(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <HeroBanner />
      <CategoryGrid />
      <FeaturedProducts />
      <PromoSection />
      <TestimonialsSection />
    </main>
  );
}
