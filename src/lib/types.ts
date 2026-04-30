export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "helmet" | "gloves" | "jacket" | "accessory";
};

export type Category = {
  id: string;
  name: string;
  image: string;
  productCount: number;
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
