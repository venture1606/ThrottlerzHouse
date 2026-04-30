import { HomeHero } from "@/components/home/HomeHero";
import { CategorySection } from "@/components/category/CategorySection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ServicesSection } from "@/components/services/ServicesSection";
import { TrendingVideosSection } from "@/components/home/TrendingVideosSection";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-8 sm:py-10">
      <HomeHero />
      <CategorySection title="Category" />
      <ServicesSection title="Services" />
      <TrendingVideosSection />
      <FeaturedProducts />
    </main>
  );
}
