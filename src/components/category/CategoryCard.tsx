import { Category } from "@/lib/types";

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="group relative h-[450px] w-[360px] shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-white/95 text-slate-900 shadow-lg shadow-black/30">
      <div
        className="h-[320px] w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${category.image})` }}
      />
      <div className="space-y-2 px-6 py-5">
        <h3 className="text-5xl font-black lowercase leading-none tracking-tight">{category.name}</h3>
        <p className="text-3xl font-medium text-slate-800">{category.productCount} products available</p>
      </div>
    </article>
  );
}
