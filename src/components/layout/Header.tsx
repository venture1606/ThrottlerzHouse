"use client";

import Link from "next/link";
import { useState } from "react";
import { Lock, LogIn, LogOut, User, ChevronDown, ShieldCheck } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import { useAuthStore } from "@/store/auth-store";
import { AuthModal } from "@/components/auth/AuthModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/category", label: "Category" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
  { href: "/orders", label: "Orders" },
];

export function Header() {
  const { user, logout } = useAuthStore();
  const [authOpen, setAuthOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const isAdmin = user?.role === "admin";

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">

          {/* Left — Brand + admin lock */}
          <div className="flex items-center gap-2">
            {isAdmin && (
              <Link
                href="/admin"
                id="header-admin-link"
                title="Admin Panel"
                className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400 ring-1 ring-orange-400/30 transition hover:bg-orange-500/25 hover:ring-orange-400/60"
              >
                <Lock size={14} />
              </Link>
            )}
            <Link
              href="/"
              id="header-brand"
              className="text-lg font-black uppercase tracking-[0.2em] text-orange-400"
            >
              {APP_NAME}
            </Link>
          </div>

          {/* Center — Nav */}
          <nav className="flex items-center gap-1 text-sm font-medium text-slate-200">
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

          {/* Right — Auth area */}
          <div className="flex items-center gap-2">
            {user ? (
              <div className="relative">
                <button
                  id="header-user-menu-btn"
                  onClick={() => setProfileOpen((p) => !p)}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-slate-200 transition hover:border-orange-400/40 hover:bg-orange-500/10"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/20 text-xs font-bold text-orange-300">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  <span className="hidden max-w-[100px] truncate sm:block">{user.name}</span>
                  {isAdmin && (
                    <ShieldCheck size={13} className="text-orange-400" />
                  )}
                  <ChevronDown size={13} className={`transition ${profileOpen ? "rotate-180" : ""}`} />
                </button>

                {profileOpen && (
                  <div
                    id="header-user-dropdown"
                    className="absolute right-0 top-full mt-2 w-52 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/50"
                  >
                    <div className="border-b border-white/10 px-4 py-3">
                      <p className="text-xs font-bold text-slate-100 truncate">{user.name}</p>
                      <p className="text-xs text-slate-500 truncate">{user.email}</p>
                      <span className="mt-1 inline-block rounded-full bg-orange-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-orange-400">
                        {user.role}
                      </span>
                    </div>

                    {isAdmin && (
                      <Link
                        href="/admin"
                        id="header-dropdown-admin"
                        onClick={() => setProfileOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-orange-300 transition hover:bg-orange-500/10"
                      >
                        <Lock size={13} />
                        Admin Panel
                      </Link>
                    )}

                    <Link
                      href="/orders"
                      id="header-dropdown-orders"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-300 transition hover:bg-white/5"
                    >
                      <User size={13} />
                      My Orders
                    </Link>

                    <button
                      id="header-logout-btn"
                      onClick={async () => {
                        setProfileOpen(false);
                        await logout();
                      }}
                      className="flex w-full items-center gap-2 border-t border-white/10 px-4 py-2.5 text-sm text-red-400 transition hover:bg-red-500/10"
                    >
                      <LogOut size={13} />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                id="header-login-btn"
                onClick={() => setAuthOpen(true)}
                className="flex items-center gap-2 rounded-2xl border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300 transition hover:border-orange-400/60 hover:bg-orange-500/20"
              >
                <LogIn size={15} />
                <span className="hidden sm:block">Sign In</span>
              </button>
            )}
          </div>
        </div>
      </header>

      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </>
  );
}
