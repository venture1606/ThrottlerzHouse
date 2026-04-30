import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/category", label: "Category" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
  { href: "/orders", label: "Orders" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-lg font-black uppercase tracking-[0.2em] text-orange-400">
          {APP_NAME}
        </Link>
        <nav className="flex items-center gap-2 text-sm font-medium text-slate-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-transparent px-3 py-2 transition hover:border-orange-400/40 hover:bg-orange-500/10 hover:text-orange-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
