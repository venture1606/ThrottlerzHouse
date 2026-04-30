export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  brand: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  originalPrice?: number;
  stock: number;
  images: string[];
  rating: number;
  reviewCount: number;
  badge?: "New" | "Sale" | "Bestseller" | "Limited";
  isFeatured?: boolean;
  features?: string[];
  specifications?: Record<string, string>;
  stripePriceId: string;
}

export interface ProductReview {
  id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  total: number;
  shippingAddress: ShippingAddress;
  stripeSessionId: string;
  createdAt: Date;
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface ShippingAddress {
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Category {
  slug: string;
  label: string;
  icon: string;
  imageUrl: string;
}
