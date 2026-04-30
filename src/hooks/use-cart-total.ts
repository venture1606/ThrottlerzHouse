"use client";

import { useMemo } from "react";
import { useCartStore } from "@/store/cart-store";

export function useCartTotal() {
  const items = useCartStore((state) => state.items);
  return useMemo(() => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0), [items]);
}