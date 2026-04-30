import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  readonly product: Product;
}

export function ProductCard({ product }: ProductCardProps): JSX.Element {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-white transition-shadow hover:shadow-md">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative h-52 w-full bg-surface">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 280px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          {product.badge ? (
            <span className="absolute left-3 top-3 rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-primary">
              {product.badge}
            </span>
          ) : null}
        </div>
      </Link>

      <div className="space-y-2 p-4">
        <p className="text-xs uppercase tracking-wide text-text-muted">{product.category}</p>
        <h3 className="line-clamp-2 text-base font-semibold text-text-primary">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-text-secondary">{product.shortDescription}</p>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold text-text-primary">{formatPrice(product.price)}</span>
            {product.originalPrice ? (
              <span className="text-xs text-text-muted line-through">{formatPrice(product.originalPrice)}</span>
            ) : null}
          </div>
          <span className="text-xs text-text-secondary">{product.rating.toFixed(1)} / 5</span>
        </div>
      </div>
    </article>
  );
}
