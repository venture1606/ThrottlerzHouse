import HomePhotoOne from "@/assets/HomePhotoOne.jpg";
import { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "performance-tune",
    name: "Performance Tune",
    eyebrow: "Power and response",
    description:
      "A focused inspection and setup for riders who want sharper throttle response, cleaner braking feel, and dependable highway performance.",
    image: HomePhotoOne.src,
    duration: "2-3 hours",
    startingPrice: "From Rs. 1,499",
    idealFor: "Daily riders preparing for fast weekend routes.",
    inclusions: ["Throttle and idle check", "Brake bite inspection", "Chain clean, lube, and tension", "Road-readiness report"]
  },
  {
    id: "touring-prep",
    name: "Touring Prep",
    eyebrow: "Long-route confidence",
    description:
      "A route-ready service for motorcycles heading into longer rides, with attention on comfort accessories, safety checks, and luggage fitment.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200",
    duration: "3-4 hours",
    startingPrice: "From Rs. 2,199",
    idealFor: "Riders planning intercity trips or multi-day touring.",
    inclusions: ["Tyre and pressure check", "Lighting and electrical review", "Luggage mount inspection", "Essential fluid checks"]
  },
  {
    id: "accessory-fitment",
    name: "Accessory Fitment",
    eyebrow: "Clean installs",
    description:
      "Professional installation support for practical motorcycle upgrades, from protection parts to rider comfort and daily-use accessories.",
    image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=1200",
    duration: "45-120 minutes",
    startingPrice: "From Rs. 699",
    idealFor: "New accessories that need a secure, tidy install.",
    inclusions: ["Fitment compatibility check", "Mounting and alignment", "Fastener torque review", "Post-install safety check"]
  },
  {
    id: "gear-consultation",
    name: "Gear Consultation",
    eyebrow: "Safer buying decisions",
    description:
      "A guided gear selection session that matches helmets, gloves, jackets, and essentials to your bike, ride style, and comfort needs.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200",
    duration: "30-45 minutes",
    startingPrice: "Free with purchase",
    idealFor: "New riders or anyone upgrading protective gear.",
    inclusions: ["Fit and sizing guidance", "Use-case matching", "Material and safety overview", "Upgrade priority plan"]
  }
];
