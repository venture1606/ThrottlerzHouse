import type { ChangeEvent } from "react";

import { CATEGORIES } from "@/lib/constants";

interface ProductFilterProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
}

export function ProductFilter({ value, onChange }: ProductFilterProps): JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    onChange(event.target.value);
  };

  return (
    <label className="flex w-full flex-col gap-2 text-sm font-medium text-text-primary">
      Category
      <select
        value={value}
        onChange={handleChange}
        className="h-10 rounded-md border border-border bg-white px-3 text-sm text-text-primary outline-none ring-offset-2 focus:ring-2 focus:ring-primary"
      >
        <option value="all">All Categories</option>
        {CATEGORIES.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.label}
          </option>
        ))}
      </select>
    </label>
  );
}
