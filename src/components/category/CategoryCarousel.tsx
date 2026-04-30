"use client";

import { useRef } from "react";
import { Category } from "@/lib/types";
import { CategoryCard } from "@/components/category/CategoryCard";

type CategoryCarouselProps = {
  categories: Category[];
};

const SCROLL_AMOUNT = 390;

export function CategoryCarousel({ categories }: CategoryCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    if (!trackRef.current) {
      return;
    }

    const amount = direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
    trackRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        aria-label="Previous categories"
        onClick={() => scrollByAmount("left")}
        className="absolute left-2 top-1/2 z-10 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-[#0f1a13]/90 text-2xl text-slate-100 shadow-lg shadow-black/40 transition hover:bg-[#18271d]"
      >
        &#8249;
      </button>

      <div ref={trackRef} className="hide-scrollbar flex gap-5 overflow-x-auto px-8 py-2 sm:px-10">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      <button
        aria-label="Next categories"
        onClick={() => scrollByAmount("right")}
        className="absolute right-2 top-1/2 z-10 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-[#0f1a13]/90 text-2xl text-slate-100 shadow-lg shadow-black/40 transition hover:bg-[#18271d]"
      >
        &#8250;
      </button>
    </div>
  );
}
