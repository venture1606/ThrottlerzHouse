"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Filter, Sparkles, Loader2, AlertCircle } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { useProducts } from "@/hooks/use-products";
import { ApiProduct } from "@/services/productService";
import { Product } from "@/lib/types";

const allOption = "All";

// Map API product → local Product type for ProductCard compatibility
function mapProduct(p: ApiProduct): Product {
  return {
    id: p._id,
    name: p.name,
    description: p.description,
    price: p.price,
    originalPrice: p.originalPrice,
    image: p.images?.[0]?.url ?? "",
    images: p.images ?? [],
    category: p.category,
    service: "",
    brand: p.brand,
    model: p.model,
    stock: p.stock,
    ratings: p.ratings,
    numOfReview: p.numOfReview,
    reviews: p.reviews?.map((r) => ({
      id: r._id,
      name: r.name,
      rating: r.rating,
      comment: r.comment,
    })) ?? [],
    createdAt: p.createdAt,
  };
}

export function ProductCatalog() {
  const { products: rawProducts, count, isLoading, error } = useProducts();

  const products = rawProducts.map(mapProduct);

  // Derive filter options from live data
  const productCategories = useMemo(() => [...new Set(products.map((p) => p.category))], [products]);
  const productBrands = useMemo(() => [...new Set(products.map((p) => p.brand))], [products]);

  const [category, setCategory] = useState(allOption);
  const [brand, setBrand] = useState(allOption);

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const categoryMatches = category === allOption || product.category === category;
        const brandMatches = brand === allOption || product.brand === brand;
        return categoryMatches && brandMatches;
      }),
    [brand, category, products]
  );

  return (
    <div className="space-y-8">
      {/* Filters */}
      <section className="rounded-3xl border border-white/10 bg-slate-900/75 p-4 shadow-xl shadow-black/25 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3 text-slate-200">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-300">
              <Filter className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Filter products</p>
              <p className="text-sm text-slate-400">
                {isLoading ? "Loading products from API…" : `${count} products in store`}
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[420px]">
            <FilterSelect label="Category" value={category} options={productCategories} onChange={setCategory} />
            <FilterSelect label="Brands" value={brand} options={productBrands} onChange={setBrand} />
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950 px-6 py-10 shadow-xl shadow-black/30 sm:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(249,115,22,0.28),transparent_34%),linear-gradient(120deg,rgba(15,23,42,0.35),rgba(0,0,0,0.78))]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(135deg,transparent_0%,transparent_45%,rgba(249,115,22,0.45)_46%,transparent_48%,transparent_100%)]" />
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
            <Sparkles className="h-4 w-4" />
            Live offer
          </div>
          <h2 className="text-3xl font-black uppercase leading-tight text-slate-100 sm:text-5xl">Get 20% off your first order</h2>
          <p className="text-sm leading-7 text-slate-300 sm:text-base">
            Upgrade your ride with selected parts, gear, and service-ready accessories.
          </p>
        </div>
      </section>

      {/* Results Header */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Results</p>
          <h2 className="mt-1 text-2xl font-black text-slate-100">
            {isLoading ? "Loading…" : `${filteredProducts.length} products available`}
          </h2>
        </div>
      </div>

      {/* States */}
      {isLoading && (
        <div className="flex items-center justify-center gap-3 py-16 text-slate-400">
          <Loader2 className="animate-spin" size={22} />
          <span className="text-sm">Fetching products…</span>
        </div>
      )}

      {error && !isLoading && (
        <div className="flex items-center gap-3 rounded-3xl border border-red-500/20 bg-red-500/10 px-6 py-5 text-red-400">
          <AlertCircle size={18} />
          <div>
            <p className="text-sm font-semibold">Failed to load products</p>
            <p className="text-xs text-red-500/80">{error}</p>
          </div>
        </div>
      )}

      {!isLoading && !error && filteredProducts.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {!isLoading && !error && filteredProducts.length === 0 && (
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-center text-slate-300">
          No products match these filters.
        </div>
      )}
    </div>
  );
}

// ─── FilterSelect ────────────────────────────────────────────────────────────

type FilterSelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  return (
    <label className="relative block">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/80 px-4 pr-10 text-sm font-semibold text-slate-100 outline-none transition hover:border-orange-300/50 focus:border-orange-300 focus:ring-2 focus:ring-orange-400/20"
      >
        <option value={allOption}>{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-orange-300" />
    </label>
  );
}
