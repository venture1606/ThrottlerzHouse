import Image from "next/image";
import Link from "next/link";

import { featuredProducts } from "@/lib/data/home";
import { formatPrice } from "@/lib/utils";

export function FeaturedProducts(): JSX.Element {
  return (
    <section aria-labelledby="featured-products-heading" className="py-12 md:py-16">
      <div className="mb-6 flex items-end justify-between">
        <h2 id="featured-products-heading" className="text-2xl font-semibold text-text-primary md:text-3xl">
          Featured Products
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {featuredProducts.map((product) => (
          <article key={product.id} className="overflow-hidden rounded-xl border border-border bg-white">
            <div className="relative h-52 w-full bg-surface">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 280px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="p-4">
              <p className="text-xs uppercase tracking-wide text-text-muted">{product.category}</p>
              <h3 className="mt-1 line-clamp-2 text-base font-semibold text-text-primary">{product.name}</h3>
              <p className="mt-2 text-sm text-text-secondary">{product.shortDescription}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-text-primary">{formatPrice(product.price)}</span>
                <Link href={`/products/${product.slug}`} className="text-sm font-medium text-primary hover:underline">
                  View
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
