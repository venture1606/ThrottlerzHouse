"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, PackageCheck, ShoppingCart, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";

export function ProductDetails({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]?.url ?? product.image);
  const addToCart = useCartStore((state) => state.addToCart);
  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="space-y-8">
      <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-orange-300">
        <ArrowLeft className="h-4 w-4" />
        Back to products
      </Link>

      <section className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/75 p-4 shadow-xl shadow-black/25 sm:p-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white">
            <Image src={selectedImage} alt={product.name} fill className="object-cover" unoptimized priority />
            <span className="absolute left-4 top-4 rounded-full bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-orange-300">
              {discountPercentage}% off
            </span>
          </div>

          <div className="grid grid-cols-5 gap-3">
            {product.images.map((image) => (
              <button
                key={image.public_id}
                type="button"
                onClick={() => setSelectedImage(image.url)}
                className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white transition hover:border-orange-300"
                aria-label={`View ${product.name} image ${image.public_id}`}
              >
                <Image src={image.url} alt="" fill className="object-cover" unoptimized />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-[0.14em]">
              <span className="rounded-full border border-orange-300/25 bg-orange-500/10 px-3 py-1 text-orange-300">{product.category}</span>
              <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-slate-300">{product.service}</span>
              <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-slate-300">{product.brand}</span>
            </div>
            <h1 className="text-4xl font-black uppercase leading-tight text-slate-100 sm:text-5xl">{product.name}</h1>
            <p className="text-base leading-7 text-slate-400">{product.description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm font-bold text-orange-300">
              <Star className="h-4 w-4 fill-current" />
              {product.ratings} rating
            </span>
            <span className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm font-semibold text-slate-300">
              {product.numOfReview} reviews
            </span>
            <span className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm font-semibold text-slate-300">
              Model: {product.model}
            </span>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Current price</p>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="text-4xl font-black text-orange-300">{formatCurrency(product.price)}</span>
                  <span className="text-lg font-semibold text-slate-500 line-through">{formatCurrency(product.originalPrice)}</span>
                </div>
              </div>
              <Button
                className="gap-2 bg-orange-500 text-slate-950 hover:bg-orange-400"
                size="lg"
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
              >
                <ShoppingCart className="h-5 w-5" />
                Add To Cart
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <ProductInfoTile icon={PackageCheck} label="Stock" value={`${product.stock} units`} />
            <ProductInfoTile icon={Truck} label="Support" value="Store pickup" />
            <ProductInfoTile icon={CheckCircle2} label="Checked for" value={product.service} />
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/75 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Product details</p>
          <dl className="mt-5 grid gap-4 text-sm">
            <DetailRow label="Brand" value={product.brand} />
            <DetailRow label="Model" value={product.model} />
            <DetailRow label="Category" value={product.category} />
            <DetailRow label="Service Match" value={product.service} />
            <DetailRow label="Created At" value={new Date(product.createdAt).toLocaleDateString()} />
          </dl>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/75 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Customer reviews</p>
          <div className="mt-5 grid gap-4">
            {product.reviews.map((review) => (
              <article key={review.id} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-bold text-slate-100">{review.name}</h3>
                  <span className="flex items-center gap-1 text-sm font-bold text-orange-300">
                    <Star className="h-4 w-4 fill-current" />
                    {review.rating}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">{review.comment}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

type IconComponent = React.ComponentType<{ className?: string }>;

function ProductInfoTile({ icon: Icon, label, value }: { icon: IconComponent; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
      <Icon className="h-5 w-5 text-orange-300" />
      <p className="mt-3 text-xs uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-bold text-slate-100">{value}</p>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
      <dt className="font-medium text-slate-500">{label}</dt>
      <dd className="text-right font-semibold text-slate-200">{value}</dd>
    </div>
  );
}
