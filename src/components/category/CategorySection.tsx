"use client";

import { Loader2, AlertCircle } from "lucide-react";
import { useCategories } from "@/hooks/use-categories";
import { ApiCategory } from "@/services/categoryService";

type CategorySectionProps = {
  title?: string;
};

export function CategorySection({ title = "Category" }: CategorySectionProps) {
  const { categories, isLoading, error } = useCategories();

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/75 px-6 py-8 text-white shadow-xl shadow-black/30 sm:px-10">
      <div className="absolute -right-14 -top-20 h-64 w-64 rounded-full bg-orange-500/15 blur-3xl" />
      <div className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 space-y-5">
        <div className="space-y-2">
          <h2 className="text-3xl font-black uppercase tracking-wide text-slate-100">{title}</h2>
        </div>

        {isLoading && (
          <div className="flex items-center gap-3 py-10 text-slate-400">
            <Loader2 className="animate-spin" size={18} />
            <span className="text-sm">Loading categories…</span>
          </div>
        )}

        {error && !isLoading && (
          <div className="flex items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-red-400">
            <AlertCircle size={16} />
            <span className="text-sm">{error}</span>
          </div>
        )}

        {!isLoading && !error && (
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-2">
            {categories.length === 0 ? (
              <p className="text-sm text-slate-500">No categories yet.</p>
            ) : (
              categories.map((category) => (
                <CategoryCard key={category._id} category={category} />
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function CategoryCard({ category }: { category: ApiCategory }) {
  return (
    <article className="group relative h-[450px] w-[360px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/15 bg-white text-slate-900 shadow-lg shadow-black/30">
      <div
        className="h-[320px] w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${category.image?.url ?? ""})` }}
      />
      <div className="space-y-2 px-6 py-5">
        <h3 className="text-5xl font-black lowercase leading-none tracking-tight text-slate-900">
          {category.name}
        </h3>
        <p className="text-2xl font-semibold text-slate-700">
          {category.productsCount} products available
        </p>
      </div>
    </article>
  );
}
