import Link from "next/link";
import {
  Bike,
  Boxes,
  Camera,
  Gauge,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  PackageSearch,
  Phone,
  Send,
  Settings,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Sparkles
} from "lucide-react";
import { TermsDialog } from "./TermsDialog";

const quickLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/products", label: "Products", icon: PackageSearch },
  { href: "/category", label: "Category", icon: Boxes },
  { href: "/services", label: "Services", icon: Settings },
  { href: "/cart", label: "Cart", icon: ShoppingCart }
];

const serviceLinks = [
  { href: "/services#performance-tune", label: "Performance Tune", icon: Gauge },
  { href: "/services#touring-prep", label: "Touring Prep", icon: Bike },
  { href: "/services#accessory-fitment", label: "Accessory Fitment", icon: Sparkles },
  { href: "/services#gear-consultation", label: "Gear Consultation", icon: ShieldCheck }
];

const contactItems = [
  { label: "+91 82488 97561", href: "tel:+918248897561", icon: Phone },
  { label: "throttlerzhouse@gmail.com", href: "mailto:throttlerzhouse@gmail.com", icon: Mail },
  { label: "No: 27, Teacher's colony, Moolakadai, Chennai, Tamil Nadu 600118", href: null, icon: MapPin }
];

const socialLinks = [
  { href: "https://www.instagram.com/throttlerz_house/", label: "Instagram", icon: Camera },
  { href: "https://www.facebook.com/", label: "Facebook", icon: MessageCircle },
  { href: "https://twitter.com/", label: "Twitter", icon: Send },
  { href: "https://www.instagram.com/throttlerz_house/", label: "Share", icon: Share2 }
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950 text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.9fr_1fr_1.15fr] lg:py-16">
        <div className="space-y-5">
          <Link href="/" className="inline-flex flex-col">
            <span className="text-sm font-black uppercase tracking-[0.45em] text-orange-300">Throttlerz</span>
            <span className="text-4xl font-black uppercase leading-none tracking-wide text-slate-100">House</span>
          </Link>
          <p className="max-w-sm text-sm leading-7 text-slate-400">
            A rider-focused bike shop for performance parts, service support, accessories, and gear guidance built around everyday use and
            long-route confidence.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-black uppercase tracking-wide text-slate-100">Quick Links</h2>
          <nav className="grid gap-3">
            {quickLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Link key={link.href} href={link.href} className="group flex items-center gap-3 text-sm font-semibold uppercase text-slate-300">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-xs font-black text-orange-300 transition group-hover:bg-orange-500 group-hover:text-slate-950">
                    <Icon className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                  <span className="transition group-hover:text-orange-300">{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-black uppercase tracking-wide text-slate-100">Services</h2>
          <nav className="grid gap-3">
            {serviceLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Link key={link.href} href={link.href} className="group flex items-center gap-3 text-sm font-semibold uppercase text-slate-300">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-[11px] font-black text-orange-300 transition group-hover:bg-orange-500 group-hover:text-slate-950">
                    <Icon className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                  <span className="transition group-hover:text-orange-300">{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-black uppercase tracking-wide text-slate-100">Contact</h2>
          <div className="grid gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-[11px] font-black text-orange-300">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <span className="leading-6">{item.label}</span>
                </>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="flex items-start gap-3 text-sm font-medium text-slate-300 transition hover:text-orange-300">
                  {content}
                </a>
              ) : (
                <p key={item.label} className="flex items-start gap-3 text-sm font-medium text-slate-300">
                  {content}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#30342c]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-7 text-center sm:px-6 lg:grid lg:grid-cols-3 lg:text-left">
          <p className="text-sm font-medium text-orange-300">2026 Throttlerz House. All rights reserved.</p>

          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-orange-300 shadow-lg shadow-black/25 transition hover:-translate-y-1 hover:bg-orange-500 hover:text-slate-950"
                >
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </a>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-medium text-orange-300 lg:justify-end">
            <TermsDialog />
            <span className="text-orange-300/50">|</span>
            <Link href="/" className="underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
