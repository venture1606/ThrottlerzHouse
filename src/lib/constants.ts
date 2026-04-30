import type { Category, NavLink } from "@/lib/types";

export const SITE_NAME = "ShopNest";
export const SITE_TAGLINE = "Everything you need, delivered fast.";
export const CURRENCY = "INR";
export const PRODUCTS_PER_PAGE = 12;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Orders", href: "/orders" },
  { label: "Contact", href: "#contact" }
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Products", href: "/products" },
  { label: "Orders", href: "/orders" },
  { label: "Account", href: "/account" }
];

export const CATEGORIES: Category[] = [
  { slug: "electronics", label: "Electronics", icon: "Cpu", imageUrl: "/images/categories/electronics.jpg" },
  { slug: "clothing", label: "Clothing", icon: "Shirt", imageUrl: "/images/categories/clothing.jpg" },
  { slug: "home", label: "Home & Living", icon: "House", imageUrl: "/images/categories/home.jpg" },
  { slug: "sports", label: "Sports", icon: "Dumbbell", imageUrl: "/images/categories/sports.jpg" },
  { slug: "books", label: "Books", icon: "BookOpen", imageUrl: "/images/categories/books.jpg" },
  { slug: "beauty", label: "Beauty", icon: "Sparkles", imageUrl: "/images/categories/beauty.jpg" }
];

export const SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Best Rated", value: "rating" }
] as const;

export const ORDER_STATUS_STEPS = ["pending", "processing", "shipped", "delivered"] as const;
