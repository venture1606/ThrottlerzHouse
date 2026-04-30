"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/auth-store";
import { Package, Tags, LayoutDashboard, ChevronRight } from "lucide-react";

const adminNav = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products/new", label: "Add Product", icon: Package },
  { href: "/admin/categories/new", label: "Add Category", icon: Tags },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/");
    } else if (user.role !== "admin") {
      router.push("/");
    }
  }, [user, router]);

  if (!user || user.role !== "admin") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-slate-500">Checking access…</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
        <span className="text-orange-400">Admin</span>
        <ChevronRight size={12} />
        <span>Panel</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="h-fit rounded-2xl border border-white/10 bg-slate-900/60 p-4">
          <p className="mb-3 px-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-500">Menu</p>
          <nav className="space-y-1">
            {adminNav.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-orange-500/10 hover:text-orange-300"
              >
                <Icon size={15} />
                {label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main>{children}</main>
      </div>
    </div>
  );
}
