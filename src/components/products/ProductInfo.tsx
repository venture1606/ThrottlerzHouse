import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/types";

interface ProductInfoProps {
  readonly product: Product;
}

export function ProductInfo({ product }: ProductInfoProps): JSX.Element {
  return (
    <section className="rounded-xl border border-border bg-white p-5 md:p-6">
      <p className="text-xs uppercase tracking-wide text-text-muted">{product.category}</p>
      <h1 className="mt-2 text-2xl font-semibold text-text-primary md:text-3xl">{product.name}</h1>
      <p className="mt-3 text-sm text-text-secondary md:text-base">{product.fullDescription}</p>

      <div className="mt-4 flex items-center gap-3">
        <span className="text-xl font-semibold text-text-primary">{formatPrice(product.price)}</span>
        {product.originalPrice ? (
          <span className="text-sm text-text-muted line-through">{formatPrice(product.originalPrice)}</span>
        ) : null}
      </div>

      <p className="mt-3 text-sm text-text-secondary">Rating: {product.rating.toFixed(1)} ({product.reviewCount} reviews)</p>
      <p className="mt-1 text-sm text-text-secondary">Stock: {product.stock}</p>
    </section>
  );
}
