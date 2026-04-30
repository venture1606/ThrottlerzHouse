import type { Metadata } from "next";

import { CartDrawer } from "@/components/cart/CartDrawer";

export const metadata: Metadata = {
  title: "Cart | ShopNest",
  description: "Review your items before checkout."
};

export default function CartPage(): JSX.Element {
  return <CartDrawer />;
}
