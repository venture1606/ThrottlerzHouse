import { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "p1",
    name: "Urban Shield Helmet",
    description: "Lightweight full-face helmet with anti-fog visor.",
    price: 199,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
    category: "helmet"
  },
  {
    id: "p2",
    name: "Rider Pro Gloves",
    description: "Breathable armored gloves for city and touring rides.",
    price: 59,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800",
    category: "gloves"
  },
  {
    id: "p3",
    name: "Stormguard Jacket",
    description: "Water-resistant jacket with CE shoulder and elbow protection.",
    price: 249,
    image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800",
    category: "jacket"
  },
  {
    id: "p4",
    name: "Moto Tank Bag",
    description: "Magnetic quick-release tank bag with rain cover.",
    price: 79,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    category: "accessory"
  }
];