"use client";

import { formatPrice } from "@/lib/utils";

interface OrderSummaryProps {
  readonly totalItems: number;
  readonly totalPrice: number;
}

export function OrderSummary({ totalItems, totalPrice }: OrderSummaryProps): JSX.Element {
  const shipping = totalPrice > 0 ? 99 : 0;
  const grandTotal = totalPrice + shipping;

  return (
    <aside className="rounded-xl border border-border bg-white p-5 md:p-6">
      <h2 className="text-lg font-semibold text-text-primary">Order Summary</h2>
      <div className="mt-4 space-y-2 text-sm text-text-secondary">
        <p>Items: {totalItems}</p>
        <p>Subtotal: {formatPrice(totalPrice)}</p>
        <p>Shipping: {formatPrice(shipping)}</p>
      </div>
      <div className="mt-4 border-t border-border pt-4">
        <p className="text-sm font-semibold text-text-primary">Total: {formatPrice(grandTotal)}</p>
      </div>
    </aside>
  );
}
