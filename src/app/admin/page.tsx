import Link from "next/link";
import { Package, Tags, ArrowRight } from "lucide-react";

const cards = [
  {
    href: "/admin/products/new",
    icon: Package,
    title: "Add Product",
    description: "Upload a new product with images, pricing, and details.",
    color: "from-orange-500/20 to-orange-600/10",
    ring: "ring-orange-400/30",
    iconColor: "text-orange-400",
  },
  {
    href: "/admin/categories/new",
    icon: Tags,
    title: "Add Category",
    description: "Create a new product category with an image.",
    color: "from-blue-500/15 to-blue-600/5",
    ring: "ring-blue-400/25",
    iconColor: "text-blue-400",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Admin</p>
        <h1 className="mt-1 text-3xl font-black uppercase text-slate-100">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">Manage your store content.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map(({ href, icon: Icon, title, description, color, ring, iconColor }) => (
          <Link
            key={href}
            href={href}
            className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${color} ring-1 ${ring} p-6 transition hover:scale-[1.01] hover:shadow-xl hover:shadow-black/30`}
          >
            <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ${iconColor}`}>
              <Icon size={22} />
            </div>
            <h2 className="text-lg font-bold text-slate-100">{title}</h2>
            <p className="mt-1 text-sm leading-6 text-slate-400">{description}</p>
            <ArrowRight
              size={16}
              className={`mt-4 ${iconColor} transition group-hover:translate-x-1`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
