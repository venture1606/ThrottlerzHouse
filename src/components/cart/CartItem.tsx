"use client";

import Image from "next/image";

import type { CartItem as CartItemType } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

interface CartItemProps {
  readonly item: CartItemType;
  readonly onRemove: (productId: string) => void;
  readonly onUpdateQuantity: (productId: string, quantity: number) => void;
}

export function CartItem({ item, onRemove, onUpdateQuantity }: CartItemProps): JSX.Element {
  return (
    <article className="flex gap-3 rounded-lg border border-border bg-white p-3">
      <div className="relative h-20 w-20 overflow-hidden rounded-md bg-surface">
        <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" sizes="80px" />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-text-primary">{item.product.name}</h3>
        <p className="mt-1 text-xs text-text-secondary">{formatPrice(item.product.price)}</p>
        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            className="h-8 w-8 rounded border border-border"
            onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
          >
            -
          </button>
          <span className="min-w-8 text-center text-sm">{item.quantity}</span>
          <button
            type="button"
            className="h-8 w-8 rounded border border-border"
            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
          >
            +
          </button>
          <button
            type="button"
            className="ml-auto text-xs font-medium text-danger"
            onClick={() => onRemove(item.product.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}
