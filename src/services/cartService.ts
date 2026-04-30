import { apiFetch } from "./api";

export type CartResponse = {
  success: boolean;
  user: {
    cart: { product: Record<string, unknown>; quantity: number }[];
    wishlist: Record<string, unknown>[];
  };
};

export const cartService = {
  addToCart: (productId: string, quantity = 1) =>
    apiFetch<CartResponse>("/cart", {
      method: "POST",
      body: JSON.stringify({ productId, quantity }),
    }),

  getCart: () => apiFetch<CartResponse>("/cart/items"),

  removeFromCart: (productId: string) =>
    apiFetch<CartResponse>("/cart/remove", {
      method: "DELETE",
      body: JSON.stringify({ productId }),
    }),

  addToWishlist: (productId: string) =>
    apiFetch<CartResponse>("/wishlist", {
      method: "POST",
      body: JSON.stringify({ productId }),
    }),

  getWishlist: () => apiFetch<CartResponse>("/wishlist/items"),

  removeFromWishlist: (productId: string) =>
    apiFetch<CartResponse>("/wishlist/remove", {
      method: "DELETE",
      body: JSON.stringify({ productId }),
    }),
};
