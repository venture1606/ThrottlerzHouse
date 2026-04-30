import { OrdersView } from "@/components/orders/OrdersView";

export default function OrdersPage({ searchParams }: { searchParams: { created?: string } }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Orders</h1>
      <OrdersView createdId={searchParams.created} />
    </main>
  );
}