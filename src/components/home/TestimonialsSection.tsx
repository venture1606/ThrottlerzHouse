import { testimonials } from "@/lib/data/home";

export function TestimonialsSection(): JSX.Element {
  return (
    <section aria-labelledby="testimonials-heading" className="py-12 md:py-16">
      <div className="mb-6 flex items-end justify-between">
        <h2 id="testimonials-heading" className="text-2xl font-semibold text-text-primary md:text-3xl">
          Customer Stories
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="rounded-xl border border-border bg-white p-5">
            <p className="text-sm text-text-secondary">"{testimonial.quote}"</p>
            <div className="mt-4">
              <p className="text-sm font-semibold text-text-primary">{testimonial.name}</p>
              <p className="text-xs text-text-muted">{testimonial.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
