"use client";

import { useState } from "react";

interface AddToCartButtonProps {
  readonly productId: string;
}

export function AddToCartButton({ productId }: AddToCartButtonProps): JSX.Element {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <section className="rounded-xl border border-border bg-white p-5 md:p-6">
      <input type="hidden" value={productId} readOnly />
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="h-9 w-9 rounded-md border border-border text-text-primary"
          onClick={() => setQuantity((value) => Math.max(1, value - 1))}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="min-w-10 text-center text-sm font-medium text-text-primary">{quantity}</span>
        <button
          type="button"
          className="h-9 w-9 rounded-md border border-border text-text-primary"
          onClick={() => setQuantity((value) => value + 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <button
        type="button"
        className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-white hover:bg-primary-hover"
      >
        Add to Cart
      </button>
    </section>
  );
}
