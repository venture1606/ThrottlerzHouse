"use client";

import { useState } from "react";

import { useCart } from "@/hooks/useCart";
import type { ShippingAddress } from "@/lib/types";

interface StripeCheckoutButtonProps {
  readonly shippingAddress: ShippingAddress;
}

export function StripeCheckoutButton({ shippingAddress }: StripeCheckoutButtonProps): JSX.Element {
  const { items } = useCart();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleCheckout = async (): Promise<void> => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: items.map((item) => ({ productId: item.product.id, quantity: item.quantity })),
          shippingAddress
        })
      });

      const data = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !data.url) {
        throw new Error(data.error ?? "Checkout session could not be created.");
      }

      window.location.href = data.url;
    } catch {
      setErrorMessage("We could not start checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        disabled={loading || items.length === 0}
        onClick={handleCheckout}
        className="inline-flex h-11 w-full items-center justify-center rounded-md bg-stripe-blue px-4 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Processing..." : "Proceed to Stripe Checkout"}
      </button>
      {errorMessage ? <p className="text-xs text-danger">{errorMessage}</p> : null}
    </div>
  );
}
