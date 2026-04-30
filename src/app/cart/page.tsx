import { CartView } from "@/components/cart/CartView";

export default function CartPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:py-10">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Your Garage</p>
        <h1 className="text-3xl font-black text-slate-100">Cart</h1>
      </div>
      <CartView />
    </main>
  );
}
