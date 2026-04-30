import { CATEGORIES } from "@/lib/constants";

export function CategoryGrid(): JSX.Element {
  return (
    <section aria-labelledby="category-grid-heading" className="py-12 md:py-16">
      <div className="mb-6 flex items-end justify-between">
        <h2 id="category-grid-heading" className="text-2xl font-semibold text-text-primary md:text-3xl">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {CATEGORIES.map((category) => (
          <article
            key={category.slug}
            className="rounded-xl border border-border bg-white p-4 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-text-muted">{category.slug}</p>
            <h3 className="mt-2 text-base font-semibold text-text-primary">{category.label}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
