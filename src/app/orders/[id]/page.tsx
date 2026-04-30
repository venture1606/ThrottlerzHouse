import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { OrderItemRow } from "@/components/orders/OrderItemRow";
import { OrderTimeline } from "@/components/orders/OrderTimeline";
import { orders } from "@/lib/data/orders";
import { auth } from "@/lib/auth";
import { formatPrice } from "@/lib/utils";

interface OrderDetailPageProps {
  readonly params: {
    id: string;
  };
}

export function generateMetadata({ params }: OrderDetailPageProps): Metadata {
  const order = orders.find((entry) => entry.id === params.id);
  return {
    title: order ? `Order ${order.id} | ShopNest` : "Order Not Found | ShopNest",
    description: "View order item breakdown and shipping status."
  };
}

export default async function OrderDetailPage({ params }: OrderDetailPageProps): Promise<JSX.Element> {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const order = orders.find((entry) => entry.id === params.id);
  if (!order) notFound();

  return (
    <main className="mx-auto w-full max-w-7xl space-y-4 px-4 py-10 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-border bg-white p-5 md:p-6">
        <h1 className="text-xl font-semibold text-text-primary">Order #{order.id}</h1>
        <p className="mt-1 text-sm text-text-secondary">Total: {formatPrice(order.total)}</p>
        <div className="mt-4">
          <OrderTimeline status={order.status} />
        </div>
      </header>
      <section className="space-y-2">
        {order.items.map((item) => (
          <OrderItemRow key={item.productId} item={item} />
        ))}
      </section>
    </main>
  );
}
