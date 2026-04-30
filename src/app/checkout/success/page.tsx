import type { Metadata } from "next";

import { PaymentSuccess } from "@/components/checkout/PaymentSuccess";

export const metadata: Metadata = {
  title: "Order Success | ShopNest",
  description: "Your payment was successful."
};

interface CheckoutSuccessPageProps {
  readonly searchParams: {
    session_id?: string;
  };
}

export default function CheckoutSuccessPage({ searchParams }: CheckoutSuccessPageProps): JSX.Element {
  const sessionId = searchParams.session_id ?? "unavailable";
  return <PaymentSuccess sessionId={sessionId} />;
}
