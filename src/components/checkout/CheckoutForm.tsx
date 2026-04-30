"use client";

import { useMemo, useState } from "react";

import { useCart } from "@/hooks/useCart";
import type { ShippingAddress } from "@/lib/types";

import { OrderSummary } from "./OrderSummary";
import { StripeCheckoutButton } from "./StripeCheckoutButton";

const INITIAL_ADDRESS: ShippingAddress = {
  name: "",
  line1: "",
  city: "",
  state: "",
  postalCode: "",
  country: ""
};

export function CheckoutForm(): JSX.Element {
  const { getTotalItems, getTotalPrice } = useCart();
  const [address, setAddress] = useState<ShippingAddress>(INITIAL_ADDRESS);

  const isValid = useMemo(() => {
    return Boolean(address.name && address.line1 && address.city && address.state && address.postalCode && address.country);
  }, [address]);

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  const setField = (field: keyof ShippingAddress, value: string): void => {
    setAddress((current) => ({ ...current, [field]: value }));
  };

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
        <section className="rounded-xl border border-border bg-white p-5 md:p-6">
          <h1 className="text-xl font-semibold text-text-primary">Checkout</h1>
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            <input className="h-10 rounded-md border border-border px-3" placeholder="Full name" value={address.name} onChange={(e) => setField("name", e.target.value)} />
            <input className="h-10 rounded-md border border-border px-3" placeholder="Address line 1" value={address.line1} onChange={(e) => setField("line1", e.target.value)} />
            <input className="h-10 rounded-md border border-border px-3" placeholder="Address line 2 (optional)" value={address.line2 ?? ""} onChange={(e) => setField("line2", e.target.value)} />
            <input className="h-10 rounded-md border border-border px-3" placeholder="City" value={address.city} onChange={(e) => setField("city", e.target.value)} />
            <input className="h-10 rounded-md border border-border px-3" placeholder="State" value={address.state} onChange={(e) => setField("state", e.target.value)} />
            <input className="h-10 rounded-md border border-border px-3" placeholder="Postal code" value={address.postalCode} onChange={(e) => setField("postalCode", e.target.value)} />
            <input className="h-10 rounded-md border border-border px-3 md:col-span-2" placeholder="Country" value={address.country} onChange={(e) => setField("country", e.target.value)} />
          </div>
          <div className="mt-4">
            {isValid ? <StripeCheckoutButton shippingAddress={address} /> : <p className="text-sm text-danger">Please complete all required shipping fields to continue.</p>}
          </div>
        </section>

        <OrderSummary totalItems={totalItems} totalPrice={totalPrice} />
      </div>
    </main>
  );
}
