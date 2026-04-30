import { CategoryCarousel } from "@/components/category/CategoryCarousel";
import { categories } from "@/lib/data/categories";

type CategorySectionProps = {
  title?: string;
};

export function CategorySection({ title = "Category" }: CategorySectionProps) {
  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Browse</p>
        <h2 className="text-3xl font-black uppercase tracking-wide text-slate-100">{title}</h2>
      </div>
      <CategoryCarousel categories={categories} />
    </section>
  );
}
