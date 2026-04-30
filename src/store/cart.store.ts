import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { CartItem, Product } from "@/lib/types";

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        set((state) => {
          const existing = state.items.find((item) => item.product.id === product.id);
          if (!existing) return { items: [...state.items, { product, quantity }] };
          return {
            items: state.items.map((item) =>
              item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            )
          };
        });
      },
      removeItem: (productId) => {
        set((state) => ({ items: state.items.filter((item) => item.product.id !== productId) }));
      },
      updateQuantity: (productId, quantity) => {
        if (quantity < 1) return;
        set((state) => ({
          items: state.items.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
        }));
      },
      clearCart: () => set({ items: [] }),
      getTotalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
      getTotalPrice: () => get().items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    }),
    {
      name: "shopnest-cart"
    }
  )
);
