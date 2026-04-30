import { formatPrice } from "@/lib/utils";

interface CartSummaryProps {
  readonly totalItems: number;
  readonly totalPrice: number;
  readonly onClear: () => void;
}

export function CartSummary({ totalItems, totalPrice, onClear }: CartSummaryProps): JSX.Element {
  return (
    <aside className="rounded-xl border border-border bg-white p-5 md:p-6">
      <h2 className="text-lg font-semibold text-text-primary">Summary</h2>
      <div className="mt-4 space-y-2 text-sm text-text-secondary">
        <p>Items: {totalItems}</p>
        <p>Total: {formatPrice(totalPrice)}</p>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-2">
        <button type="button" className="h-10 rounded-md bg-primary text-sm font-semibold text-white hover:bg-primary-hover">
          Proceed to Checkout
        </button>
        <button
          type="button"
          onClick={onClear}
          className="h-10 rounded-md border border-border text-sm font-semibold text-text-primary hover:bg-accent-light"
        >
          Clear Cart
        </button>
      </div>
    </aside>
  );
}
