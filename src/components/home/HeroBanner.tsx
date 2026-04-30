import Link from "next/link";

export function HeroBanner(): JSX.Element {
  return (
    <section className="rounded-2xl border border-border bg-gradient-to-br from-white to-accent-light px-6 py-12 md:px-10 md:py-16">
      <p className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-text-secondary">
        Limited Time Offer
      </p>
      <h1 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-text-primary md:text-5xl">
        Discover everyday essentials and premium picks in one place.
      </h1>
      <p className="mt-4 max-w-2xl text-sm text-text-secondary md:text-base">
        Shop curated products with transparent pricing, fast delivery, and a checkout flow built for trust.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          href="/products"
          className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
        >
          Shop Products
        </Link>
        <Link
          href="/orders"
          className="inline-flex items-center rounded-md border border-border bg-white px-5 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:bg-accent-light"
        >
          Track Orders
        </Link>
      </div>
    </section>
  );
}
