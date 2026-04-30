import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetailView } from "@/components/products/ProductDetailView";
import { products } from "@/lib/data/products";

interface ProductDetailPageProps {
  readonly params: {
    slug: string;
  };
}

export function generateMetadata({ params }: ProductDetailPageProps): Metadata {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found | ShopNest",
      description: "The requested product could not be found."
    };
  }

  return {
    title: `${product.name} | ShopNest`,
    description: product.shortDescription
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps): JSX.Element {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
