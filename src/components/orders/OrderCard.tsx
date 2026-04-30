import Link from "next/link";

import { formatPrice } from "@/lib/utils";
import type { Order } from "@/lib/types";

import { OrderItemRow } from "./OrderItemRow";
import { OrderTimeline } from "./OrderTimeline";

interface OrderCardProps {
  readonly order: Order;
}

export function OrderCard({ order }: OrderCardProps): JSX.Element {
  return (
    <article className="rounded-xl border border-border bg-white p-5 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-text-primary">Order #{order.id}</h2>
          <p className="text-xs text-text-secondary">Placed on {order.createdAt.toLocaleDateString("en-IN")}</p>
        </div>
        <p className="text-sm font-semibold text-text-primary">{formatPrice(order.total)}</p>
      </div>

      <div className="mt-4">
        <OrderTimeline status={order.status} />
      </div>

      <div className="mt-4 space-y-2">
        {order.items.slice(0, 2).map((item) => (
          <OrderItemRow key={item.productId} item={item} />
        ))}
      </div>

      <Link href={`/orders/${order.id}`} className="mt-4 inline-flex text-sm font-medium text-primary hover:underline">
        View details
      </Link>
    </article>
  );
}
