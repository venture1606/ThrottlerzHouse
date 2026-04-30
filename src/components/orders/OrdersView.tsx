import { Card } from "@/components/ui/card";

export function OrdersView({ createdId }: { createdId?: string }) {
  if (!createdId) {
    return <Card>No recent order created in this session.</Card>;
  }

  return (
    <Card>
      <h2 className="text-xl font-semibold">Order Confirmed</h2>
      <p className="mt-2 text-slate-600">Your order ID is {createdId}. We have started processing it.</p>
    </Card>
  );
}