"use client";

import Image from "next/image";
import { Product } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";

export function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Card className="overflow-hidden border-white/10 bg-slate-900/70 p-0 text-slate-100">
      <div className="relative h-44 w-full">
        <Image src={product.image} alt={product.name} fill className="object-cover" unoptimized />
      </div>
      <div className="space-y-3 p-4">
        <h3 className="line-clamp-1 text-base font-semibold">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-slate-400">{product.description}</p>
        <div className="flex items-center justify-between gap-2">
          <span className="text-lg font-bold text-orange-300">{formatCurrency(product.price)}</span>
          <Button size="sm" className="bg-orange-500 text-slate-950 hover:bg-orange-400" onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}
