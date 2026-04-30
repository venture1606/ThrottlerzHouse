import { ProductCatalog } from "@/components/products/ProductCatalog";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:py-10">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Catalog</p>
        <h1 className="text-4xl font-black uppercase text-slate-100">Products</h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-400">
          Browse performance parts, rider gear, and accessories with filters ready for category, service, and brand API keys.
        </p>
      </div>
      <ProductCatalog />
    </main>
  );
}
