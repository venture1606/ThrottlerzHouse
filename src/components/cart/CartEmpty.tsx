import Link from "next/link";

interface CartEmptyProps {
  readonly ctaHref: string;
}

export function CartEmpty({ ctaHref }: CartEmptyProps): JSX.Element {
  return (
    <section className="rounded-xl border border-dashed border-border bg-white p-8 text-center">
      <h2 className="text-lg font-semibold text-text-primary">Your cart is empty</h2>
      <p className="mt-2 text-sm text-text-secondary">Add products to review pricing and checkout details.</p>
      <Link
        href={ctaHref}
        className="mt-4 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover"
      >
        Continue Shopping
      </Link>
    </section>
  );
}
