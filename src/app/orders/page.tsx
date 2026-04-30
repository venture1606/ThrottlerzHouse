import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { OrderCard } from "@/components/orders/OrderCard";
import { orders } from "@/lib/data/orders";
import { auth } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Orders | ShopNest",
  description: "Track your order history and status."
};

export default async function OrdersPage(): Promise<JSX.Element> {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="mx-auto w-full max-w-7xl space-y-4 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-text-primary">Your Orders</h1>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </main>
  );
}
