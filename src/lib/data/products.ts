import { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "p1",
    name: "Urban Shield Helmet",
    description: "Lightweight full-face helmet with anti-fog visor.",
    price: 199,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=900",
    images: [
      { public_id: "urban-shield-1", url: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200" },
      { public_id: "urban-shield-2", url: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1000" },
      { public_id: "urban-shield-3", url: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=950" },
      { public_id: "urban-shield-4", url: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=850" },
      { public_id: "urban-shield-5", url: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=750" }
    ],
    category: "Helmets",
    service: "Gear Consultation",
    brand: "Throttlerz",
    model: "Urban Shield V2",
    stock: 18,
    ratings: 4.8,
    numOfReview: 42,
    reviews: [
      { id: "r1", name: "Arun", rating: 5, comment: "Comfortable fit and the visor clarity is excellent for city rides." },
      { id: "r2", name: "Kavin", rating: 4.5, comment: "Good weight balance and looks premium in hand." }
    ],
    createdAt: "2026-01-12"
  },
  {
    id: "p2",
    name: "Rider Pro Gloves",
    description: "Breathable armored gloves for city and touring rides.",
    price: 59,
    originalPrice: 79,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=900",
    images: [
      { public_id: "rider-pro-1", url: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=1200" },
      { public_id: "rider-pro-2", url: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=1000" },
      { public_id: "rider-pro-3", url: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=950" },
      { public_id: "rider-pro-4", url: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=850" },
      { public_id: "rider-pro-5", url: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=750" }
    ],
    category: "Gloves",
    service: "Gear Consultation",
    brand: "RiderPro",
    model: "Air Armor",
    stock: 32,
    ratings: 4.5,
    numOfReview: 28,
    reviews: [{ id: "r3", name: "Nithin", rating: 4.5, comment: "Nice airflow and easy to use with phone screens." }],
    createdAt: "2026-01-26"
  },
  {
    id: "p3",
    name: "Stormguard Jacket",
    description: "Water-resistant jacket with CE shoulder and elbow protection.",
    price: 249,
    originalPrice: 299,
    image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=900",
    images: [
      { public_id: "stormguard-1", url: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=1200" },
      { public_id: "stormguard-2", url: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=1000" },
      { public_id: "stormguard-3", url: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=950" },
      { public_id: "stormguard-4", url: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=850" },
      { public_id: "stormguard-5", url: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=750" }
    ],
    category: "Jackets",
    service: "Touring Prep",
    brand: "Stormguard",
    model: "Tour Shell",
    stock: 11,
    ratings: 4.7,
    numOfReview: 35,
    reviews: [{ id: "r4", name: "Deepak", rating: 5, comment: "Perfect for highway rides and light rain." }],
    createdAt: "2026-02-04"
  },
  {
    id: "p4",
    name: "Moto Tank Bag",
    description: "Magnetic quick-release tank bag with rain cover.",
    price: 79,
    originalPrice: 99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900",
    images: [
      { public_id: "tank-bag-1", url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200" },
      { public_id: "tank-bag-2", url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000" },
      { public_id: "tank-bag-3", url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=950" },
      { public_id: "tank-bag-4", url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=850" },
      { public_id: "tank-bag-5", url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=750" }
    ],
    category: "Accessories",
    service: "Accessory Fitment",
    brand: "MotoPack",
    model: "Mag-Lock 12L",
    stock: 24,
    ratings: 4.4,
    numOfReview: 19,
    reviews: [{ id: "r5", name: "Vishal", rating: 4, comment: "Compact, sturdy, and the rain cover helps a lot." }],
    createdAt: "2026-02-15"
  },
  {
    id: "p5",
    name: "Performance Brake Kit",
    description: "Responsive brake upgrade kit for sharper city control and reliable touring stops.",
    price: 149,
    originalPrice: 189,
    image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=900",
    images: [
      { public_id: "brake-kit-1", url: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=1200" },
      { public_id: "brake-kit-2", url: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=1000" },
      { public_id: "brake-kit-3", url: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=950" },
      { public_id: "brake-kit-4", url: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=850" },
      { public_id: "brake-kit-5", url: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=750" }
    ],
    category: "Brake",
    service: "Performance Tune",
    brand: "TrackBite",
    model: "Street Pro",
    stock: 9,
    ratings: 4.9,
    numOfReview: 51,
    reviews: [{ id: "r6", name: "Hari", rating: 5, comment: "The braking feel is much more predictable now." }],
    createdAt: "2026-03-02"
  }
];

export const productCategories = Array.from(new Set(products.map((product) => product.category)));
export const productBrands = Array.from(new Set(products.map((product) => product.brand)));
export const productServices = Array.from(new Set(products.map((product) => product.service)));

export function getProductById(productId: string) {
  return products.find((product) => product.id === productId);
}
