import { AddToCartButton } from "@/components/products/AddToCartButton";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import { ProductInfo } from "@/components/products/ProductInfo";
import { ProductReviews } from "@/components/products/ProductReviews";
import { PRODUCT_REVIEWS } from "@/lib/data/reviews";
import type { Product } from "@/lib/types";

interface ProductDetailViewProps {
  readonly product: Product;
}

export function ProductDetailView({ product }: ProductDetailViewProps): JSX.Element {
  const reviews = PRODUCT_REVIEWS[product.slug] ?? [];

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ProductImageGallery images={product.images} alt={product.name} />
        <div className="space-y-4">
          <ProductInfo product={product} />
          <AddToCartButton productId={product.id} />
        </div>
      </section>
      <section className="mt-8">
        <ProductReviews reviews={reviews} />
      </section>
    </main>
  );
}
