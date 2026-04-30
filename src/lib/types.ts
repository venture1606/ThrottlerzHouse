export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  images: ProductImage[];
  category: string;
  service: string;
  brand: string;
  model: string;
  stock: number;
  ratings: number;
  numOfReview: number;
  reviews: ProductReview[];
  createdAt: string;
};

export type ProductImage = {
  public_id: string;
  url: string;
};

export type ProductReview = {
  id: string;
  name: string;
  rating: number;
  comment: string;
};

export type Category = {
  id: string;
  name: string;
  image: string;
  productCount: number;
};

export type Service = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  duration: string;
  startingPrice: string;
  inclusions: string[];
  idealFor: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CheckoutPayload = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
};

export type Order = {
  id: string;
  items: CartItem[];
  total: number;
  createdAt: string;
  customerName: string;
};
