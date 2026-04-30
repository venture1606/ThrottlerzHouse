import Link from "next/link";

import { FOOTER_LINKS, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-base font-semibold text-text-primary">{SITE_NAME}</h2>
          <p className="mt-2 text-sm text-text-secondary">{SITE_TAGLINE}</p>
        </div>

        <nav className="flex flex-wrap items-center gap-4 lg:justify-end">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-border py-4">
        <p className="text-center text-xs text-text-muted">Copyright {year} {SITE_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}
