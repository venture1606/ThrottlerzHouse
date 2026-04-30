"use client";

import { Category } from "@/lib/types";
import { CategoryCard } from "@/components/category/CategoryCard";

type CategoryCarouselProps = {
  categories: Category[];
};

export function CategoryCarousel({ categories }: CategoryCarouselProps) {
  return (
    <div className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-2">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
