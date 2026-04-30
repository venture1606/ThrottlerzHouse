import type { Metadata } from "next";

import { ProductGrid } from "@/components/products/ProductGrid";

export const metadata: Metadata = {
  title: "Products | ShopNest",
  description: "Browse all products with filters and sorting."
};

export default function ProductsPage(): JSX.Element {
  return <ProductGrid />;
}
