"use client";

import Link from "next/link";

import { useCart } from "@/hooks/useCart";

import { CartEmpty } from "./CartEmpty";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";

export function CartDrawer(): JSX.Element {
  const { items, removeItem, updateQuantity, clearCart, getTotalItems, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <CartEmpty ctaHref="/products" />
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <section className="space-y-3">
          {items.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
              onRemove={removeItem}
              onUpdateQuantity={updateQuantity}
            />
          ))}
          <Link href="/products" className="inline-flex text-sm font-medium text-primary hover:underline">
            Continue shopping
          </Link>
        </section>
        <CartSummary totalItems={getTotalItems()} totalPrice={getTotalPrice()} onClear={clearCart} />
      </div>
    </main>
  );
}
