import Link from "next/link";

export function PromoSection(): JSX.Element {
  return (
    <section className="rounded-2xl border border-border bg-primary px-6 py-10 text-white md:px-10 md:py-12">
      <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Weekend Deal</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Get up to 30% off selected essentials</h2>
      <p className="mt-3 max-w-2xl text-sm text-white/85 md:text-base">
        Build your cart with handpicked picks across electronics, home, and sports categories.
      </p>
      <Link
        href="/products"
        className="mt-6 inline-flex rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-amber-300"
      >
        Explore Deals
      </Link>
    </section>
  );
}
