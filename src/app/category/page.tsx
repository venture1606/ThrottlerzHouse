import { CategorySection } from "@/components/category/CategorySection";

export default function CategoryPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:py-10">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Browse</p>
        <h1 className="text-3xl font-black text-slate-100">Categories</h1>
      </div>
      <CategorySection title="All Categories" />
    </main>
  );
}
