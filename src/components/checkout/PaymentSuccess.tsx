import Link from "next/link";

interface PaymentSuccessProps {
  readonly sessionId: string;
}

export function PaymentSuccess({ sessionId }: PaymentSuccessProps): JSX.Element {
  return (
    <section className="mx-auto w-full max-w-3xl rounded-xl border border-border bg-white p-8 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">OK</div>
      <h1 className="mt-4 text-2xl font-semibold text-text-primary">Payment Successful</h1>
      <p className="mt-2 text-sm text-text-secondary">Session ID: {sessionId}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link href="/orders" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover">
          View My Orders
        </Link>
        <Link href="/products" className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-text-primary hover:bg-accent-light">
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}
