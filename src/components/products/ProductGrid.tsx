"use client";

import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilter } from "@/components/products/ProductFilter";
import { ProductSearch } from "@/components/products/ProductSearch";
import { ProductSort } from "@/components/products/ProductSort";
import { useProducts } from "@/hooks/useProducts";

export function ProductGrid(): JSX.Element {
  const { products, search, selectedCategory, sortBy, setSearch, setSelectedCategory, setSortBy } = useProducts();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 rounded-xl border border-border bg-white p-4 md:grid-cols-3 md:p-6">
        <ProductSearch value={search} onChange={setSearch} />
        <ProductFilter value={selectedCategory} onChange={setSelectedCategory} />
        <ProductSort value={sortBy} onChange={setSortBy} />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 ? (
        <p className="mt-8 text-center text-sm text-text-secondary">No products match your filters.</p>
      ) : null}
    </section>
  );
}
