import Image from "next/image";

import { formatPrice } from "@/lib/utils";
import type { OrderItem } from "@/lib/types";

interface OrderItemRowProps {
  readonly item: OrderItem;
}

export function OrderItemRow({ item }: OrderItemRowProps): JSX.Element {
  return (
    <article className="flex items-center gap-3 rounded-lg border border-border bg-white p-3">
      <div className="relative h-14 w-14 overflow-hidden rounded-md bg-surface">
        <Image src={item.imageUrl} alt={item.name} fill className="object-cover" sizes="56px" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-text-primary">{item.name}</p>
        <p className="text-xs text-text-secondary">Qty: {item.quantity}</p>
      </div>
      <p className="text-sm font-semibold text-text-primary">{formatPrice(item.price * item.quantity)}</p>
    </article>
  );
}
