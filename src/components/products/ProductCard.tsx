"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Product } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";

export function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <Card className="group overflow-hidden border-white/10 bg-slate-900/80 p-0 text-slate-100 transition hover:-translate-y-1 hover:border-orange-300/45 hover:shadow-orange-950/20">
      <div className="relative h-64 w-full overflow-hidden bg-white">
        <Link href={`/products/${product.id}`} aria-label={`View ${product.name}`}>
          <Image src={product.image} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-105" unoptimized />
        </Link>
        <div className="absolute left-4 top-4 rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-orange-300">
          {discountPercentage}% OFF
        </div>
        <button
          type="button"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-orange-300 transition hover:bg-orange-500 hover:text-slate-950"
          aria-label={`Save ${product.name}`}
        >
          <Heart className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-[0.14em]">
            <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-orange-300">{product.category}</span>
            <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-slate-300">{product.brand}</span>
          </div>
          <Link href={`/products/${product.id}`} className="block">
            <h3 className="line-clamp-1 text-lg font-black text-slate-100 transition hover:text-orange-300">{product.name}</h3>
          </Link>
          <p className="line-clamp-2 text-sm leading-6 text-slate-400">{product.description}</p>
        </div>

        <div className="flex items-center justify-between gap-3 border-y border-white/10 py-3 text-sm">
          <span className="text-slate-400">Model: <span className="font-semibold text-slate-200">{product.model}</span></span>
          <span className="flex items-center gap-1 font-bold text-orange-300">
            <Star className="h-4 w-4 fill-current" />
            {product.ratings}
          </span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-orange-300">{formatCurrency(product.price)}</span>
              <span className="text-sm font-semibold text-slate-500 line-through">{formatCurrency(product.originalPrice)}</span>
            </div>
            <p className="mt-1 text-xs font-medium text-slate-500">{product.stock} in stock</p>
          </div>
          <Button
            size="sm"
            className="gap-2 bg-orange-500 text-slate-950 hover:bg-orange-400"
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
}
