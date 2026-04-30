import { CategoryCarousel } from "@/components/category/CategoryCarousel";
import { categories } from "@/lib/data/categories";

type CategorySectionProps = {
  title?: string;
};

export function CategorySection({ title = "Category" }: CategorySectionProps) {
  return (
    <section className="space-y-5 rounded-3xl bg-gradient-to-r from-[#101a2f] to-[#15233f] px-5 py-6 md:px-7 md:py-8">
      <h2 className="text-3xl font-black uppercase tracking-wide text-slate-100">{title}</h2>
      <CategoryCarousel categories={categories} />
    </section>
  );
}
