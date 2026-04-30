import type { ProductReview } from "@/lib/types";

export const PRODUCT_REVIEWS: Record<string, ProductReview[]> = {
  "pulse-pro-smartwatch": [
    { id: "r1", name: "Nisha", rating: 5, comment: "Excellent battery life and display quality.", createdAt: "2026-02-01" },
    { id: "r2", name: "Rohan", rating: 4, comment: "Great fitness tracking, app could be faster.", createdAt: "2026-02-08" }
  ],
  "nova-wireless-earbuds": [
    { id: "r3", name: "Aman", rating: 5, comment: "ANC works really well during commute.", createdAt: "2026-01-19" },
    { id: "r4", name: "Diya", rating: 4, comment: "Comfortable fit and clear calls.", createdAt: "2026-01-24" }
  ]
};
