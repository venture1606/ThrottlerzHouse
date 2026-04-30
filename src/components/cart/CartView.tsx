"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { useCartTotal } from "@/hooks/use-cart-total";

export function CartView() {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const total = useCartTotal();

  if (items.length === 0) {
    return <Card className="border-white/10 bg-slate-900/70 text-slate-300">Your cart is empty.</Card>;
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.product.id} className="flex items-center justify-between gap-4 border-white/10 bg-slate-900/70 text-slate-100">
          <div>
            <h3 className="font-semibold">{item.product.name}</h3>
            <p className="text-sm text-slate-400">Qty: {item.quantity}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-orange-300">{formatCurrency(item.product.price * item.quantity)}</span>
            <Button variant="outline" size="sm" className="border-white/20 bg-transparent text-slate-200 hover:bg-white/10" onClick={() => removeFromCart(item.product.id)}>
              Remove
            </Button>
          </div>
        </Card>
      ))}

      <Card className="flex items-center justify-between border-white/10 bg-slate-900/70 text-slate-100">
        <span className="font-semibold">Total: {formatCurrency(total)}</span>
        <Button asChild className="bg-orange-500 text-slate-950 hover:bg-orange-400">
          <Link href="/checkout">Continue To Checkout</Link>
        </Button>
      </Card>
    </div>
  );
}
