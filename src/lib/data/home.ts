import { products } from "@/lib/data/products";
import type { Product } from "@/lib/types";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Priya Sharma",
    role: "Verified Buyer",
    quote: "Checkout was smooth and my order arrived earlier than expected."
  },
  {
    id: "t-2",
    name: "Arjun Mehta",
    role: "Returning Customer",
    quote: "Quality is consistent and the product pages are genuinely useful."
  },
  {
    id: "t-3",
    name: "Sana Khan",
    role: "First-time Shopper",
    quote: "Loved the clean experience on mobile and quick support response."
  }
];

export const featuredProducts: Product[] = products.filter((product) => product.isFeatured).slice(0, 4);
