"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { submitOrder } from "@/actions/checkout";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";

export function CheckoutForm() {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const clearCart = useCartStore((state) => state.clearCart);

  function onSubmit(formData: FormData) {
    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      address: String(formData.get("address") ?? "")
    };

    setError(null);
    startTransition(async () => {
      const result = await submitOrder(payload);
      if (!result.ok) {
        setError("Please correct all fields before placing the order.");
        return;
      }

      clearCart();
      router.push(`/orders?created=${result.orderId}`);
    });
  }

  return (
    <form action={onSubmit} className="space-y-4 rounded-xl border bg-white p-6">
      <input name="fullName" placeholder="Full name" className="w-full rounded-md border p-2" />
      <input name="email" type="email" placeholder="Email" className="w-full rounded-md border p-2" />
      <input name="phone" placeholder="Phone" className="w-full rounded-md border p-2" />
      <textarea name="address" placeholder="Address" className="w-full rounded-md border p-2" rows={4} />
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <Button type="submit" disabled={pending}>{pending ? "Placing order..." : "Place order"}</Button>
    </form>
  );
}