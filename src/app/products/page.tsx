import { ProductGrid } from "@/components/products/ProductGrid";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:py-10">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Catalog</p>
        <h1 className="text-3xl font-black text-slate-100">Products</h1>
      </div>
      <ProductGrid />
    </main>
  );
}
