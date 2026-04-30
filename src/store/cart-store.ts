"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartItem, Product } from "@/lib/types";

type CartState = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addToCart: (product) =>
        set((state) => {
          const existing = state.items.find((item) => item.product.id === product.id);
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
              )
            };
          }
          return { items: [...state.items, { product, quantity: 1 }] };
        }),
      removeFromCart: (productId) =>
        set((state) => ({ items: state.items.filter((item) => item.product.id !== productId) })),
      clearCart: () => set({ items: [] })
    }),
    {
      name: "thollerz-cart",
      storage: createJSONStorage(() => localStorage)
    }
  )
);