import type { ChangeEvent } from "react";

interface ProductSearchProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
}

export function ProductSearch({ value, onChange }: ProductSearchProps): JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  return (
    <label className="flex w-full flex-col gap-2 text-sm font-medium text-text-primary">
      Search products
      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder="Search by name or brand"
        className="h-10 rounded-md border border-border bg-white px-3 text-sm text-text-primary outline-none ring-offset-2 placeholder:text-text-muted focus:ring-2 focus:ring-primary"
      />
    </label>
  );
}
