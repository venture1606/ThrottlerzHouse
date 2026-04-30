import type { ChangeEvent } from "react";

import { SORT_OPTIONS } from "@/lib/constants";

type SortValue = (typeof SORT_OPTIONS)[number]["value"];

interface ProductSortProps {
  readonly value: SortValue;
  readonly onChange: (value: SortValue) => void;
}

export function ProductSort({ value, onChange }: ProductSortProps): JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    onChange(event.target.value as SortValue);
  };

  return (
    <label className="flex w-full flex-col gap-2 text-sm font-medium text-text-primary">
      Sort by
      <select
        value={value}
        onChange={handleChange}
        className="h-10 rounded-md border border-border bg-white px-3 text-sm text-text-primary outline-none ring-offset-2 focus:ring-2 focus:ring-primary"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
