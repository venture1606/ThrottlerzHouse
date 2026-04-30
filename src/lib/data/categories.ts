import HomePhotoOne from "@/assets/HomePhotoOne.jpg";
import { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "c1",
    name: "Brake",
    image: HomePhotoOne.src,
    productCount: 187
  },
  {
    id: "c2",
    name: "Helmets",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200",
    productCount: 100
  },
  {
    id: "c3",
    name: "Performance",
    image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=1200",
    productCount: 100
  },
  {
    id: "c4",
    name: "Touring",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200",
    productCount: 92
  }
];
