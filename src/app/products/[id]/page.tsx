"use client";

import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/products/ProductDetails";
import { useSingleProduct } from "@/hooks/use-products";
import { Loader2, AlertCircle } from "lucide-react";
import { ApiProduct } from "@/services/productService";
import { Product } from "@/lib/types";

// Map API product → local Product type for ProductDetails compatibility
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
    service: "", // Handle if needed
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

export default function ProductViewPage({ params }: { params: { id: string } }) {
  const { product: rawProduct, isLoading, error } = useSingleProduct(params.id);

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center gap-3 text-slate-400">
        <Loader2 className="h-6 w-6 animate-spin text-orange-400" />
        <span className="text-sm font-medium">Loading product details...</span>
      </div>
    );
  }

  if (error || !rawProduct) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-red-500">
          <AlertCircle size={32} />
        </div>
        <h1 className="text-2xl font-black text-slate-100">Product Not Found</h1>
        <p className="mt-2 text-slate-400">{error || "The requested product could not be located."}</p>
      </div>
    );
  }

  const product = mapProduct(rawProduct);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <ProductDetails product={product} />
    </main>
  );
}
