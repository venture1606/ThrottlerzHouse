"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

interface CartIconProps {
  readonly itemCount: number;
  readonly href?: string;
}

export function CartIcon({ itemCount, href = "/cart" }: CartIconProps): JSX.Element {
  return (
    <Link
      href={href}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text-primary transition-colors hover:bg-accent-light"
      aria-label="Open cart"
    >
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 ? (
        <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-xs font-semibold text-primary">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      ) : null}
    </Link>
  );
}
