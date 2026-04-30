import { products } from "@/lib/data/products";
import { ProductCard } from "@/components/products/ProductCard";

export function FeaturedProducts() {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-bold text-slate-100">Featured Products</h2>
        <p className="text-sm text-slate-400">Top picks for everyday riders</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
