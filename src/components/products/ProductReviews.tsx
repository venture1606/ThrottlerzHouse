import type { ProductReview } from "@/lib/types";

interface ProductReviewsProps {
  readonly reviews: ProductReview[];
}

export function ProductReviews({ reviews }: ProductReviewsProps): JSX.Element {
  return (
    <section className="rounded-xl border border-border bg-white p-5 md:p-6">
      <h2 className="text-xl font-semibold text-text-primary">Reviews</h2>
      <div className="mt-4 space-y-4">
        {reviews.map((review) => (
          <article key={review.id} className="rounded-md border border-border p-4">
            <p className="text-sm font-semibold text-text-primary">{review.name}</p>
            <p className="text-xs text-text-muted">{review.createdAt}</p>
            <p className="mt-1 text-sm text-text-secondary">Rating: {review.rating}/5</p>
            <p className="mt-2 text-sm text-text-secondary">{review.comment}</p>
          </article>
        ))}
        {reviews.length === 0 ? <p className="text-sm text-text-secondary">No reviews yet.</p> : null}
      </div>
    </section>
  );
}
