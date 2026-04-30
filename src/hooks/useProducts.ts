import { useMemo, useState } from "react";

import { SORT_OPTIONS } from "@/lib/constants";
import { products } from "@/lib/data/products";
import type { Product } from "@/lib/types";

type SortValue = (typeof SORT_OPTIONS)[number]["value"];

interface UseProductsResult {
  readonly products: Product[];
  readonly search: string;
  readonly selectedCategory: string;
  readonly sortBy: SortValue;
  readonly setSearch: (value: string) => void;
  readonly setSelectedCategory: (value: string) => void;
  readonly setSortBy: (value: SortValue) => void;
}

export function useProducts(): UseProductsResult {
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortValue>("newest");

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    let result = products.filter((product) => {
      const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
      const searchMatch =
        normalizedSearch.length === 0 ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.brand.toLowerCase().includes(normalizedSearch);

      return categoryMatch && searchMatch;
    });

    result = [...result].sort((a, b) => {
      if (sortBy === "price_asc") return a.price - b.price;
      if (sortBy === "price_desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return b.id.localeCompare(a.id);
    });

    return result;
  }, [search, selectedCategory, sortBy]);

  return {
    products: filteredProducts,
    search,
    selectedCategory,
    sortBy,
    setSearch,
    setSelectedCategory,
    setSortBy
  };
}
