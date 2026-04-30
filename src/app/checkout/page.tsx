import type { Metadata } from "next";

import { CheckoutForm } from "@/components/checkout/CheckoutForm";

export const metadata: Metadata = {
  title: "Checkout | ShopNest",
  description: "Complete shipping details and proceed to payment."
};

export default function CheckoutPage(): JSX.Element {
  return <CheckoutForm />;
}
