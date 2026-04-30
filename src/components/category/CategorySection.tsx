import { CategoryCarousel } from "@/components/category/CategoryCarousel";
import { categories } from "@/lib/data/categories";

type CategorySectionProps = {
  title?: string;
};

export function CategorySection({ title = "Category" }: CategorySectionProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/75 px-6 py-8 text-white shadow-xl shadow-black/30 sm:px-10">
      <div className="absolute -right-14 -top-20 h-64 w-64 rounded-full bg-orange-500/15 blur-3xl" />
      <div className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 space-y-5">
        <div className="space-y-2">
          <h2 className="text-3xl font-black uppercase tracking-wide text-slate-100">{title}</h2>
        </div>
        <CategoryCarousel categories={categories} />
      </div>
    </section>
  );
}
