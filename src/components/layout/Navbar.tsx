import Link from "next/link";
import { CircleUserRound, Search } from "lucide-react";

import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

import { CartIcon } from "./CartIcon";
import { MobileMenu } from "./MobileMenu";

export function Navbar(): JSX.Element {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-text-primary">
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text-primary transition-colors hover:bg-accent-light"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <CartIcon itemCount={0} />
          <Link
            href="/login"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text-primary transition-colors hover:bg-accent-light"
            aria-label="Sign in"
          >
            <CircleUserRound className="h-5 w-5" />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <CartIcon itemCount={0} />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
