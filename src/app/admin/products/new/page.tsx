"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Package,
  DollarSign,
  Tag,
  FileText,
  Box,
  Image as ImageIcon,
  Loader2,
  CheckCircle,
  AlertCircle,
  X,
  Upload,
} from "lucide-react";
import { productService } from "@/services/productService";
import { useCategories } from "@/hooks/use-categories";

type FormField = {
  name: string;
  price: string;
  originalPrice: string;
  description: string;
  category: string;
  brand: string;
  model: string;
  stock: string;
};

const initialForm: FormField = {
  name: "",
  price: "",
  originalPrice: "",
  description: "",
  category: "",
  brand: "",
  model: "",
  stock: "",
};

function FormRow({
  label,
  htmlFor,
  icon,
  children,
}: {
  label: string;
  htmlFor: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={htmlFor}
        className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400"
      >
        <span className="text-orange-400/70">{icon}</span>
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "h-11 w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 text-sm text-slate-100 placeholder-slate-600 outline-none transition focus:border-orange-400/60 focus:bg-slate-900 focus:ring-2 focus:ring-orange-400/20";

export default function NewProductPage() {
  const router = useRouter();
  const { categories } = useCategories();
  const [form, setForm] = useState<FormField>(initialForm);
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const set = (field: keyof FormField) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length + images.length > 5) {
      setError("You can upload at most 5 images.");
      return;
    }
    const newFiles = [...images, ...files].slice(0, 5);
    setImages(newFiles);
    setPreviews(newFiles.map((f) => URL.createObjectURL(f)));
    setError(null);
  };

  const removeImage = (index: number) => {
    const newFiles = images.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    setImages(newFiles);
    setPreviews(newPreviews);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (images.length !== 5) {
      setError("Please upload exactly 5 product images.");
      return;
    }

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    images.forEach((img) => fd.append("images", img));

    setIsSubmitting(true);
    try {
      await productService.create(fd);
      setSuccess(true);
      setForm(initialForm);
      setImages([]);
      setPreviews([]);
      setTimeout(() => router.push("/products"), 1800);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 text-green-400">
          <CheckCircle size={32} />
        </div>
        <h2 className="text-2xl font-black text-slate-100">Product Created!</h2>
        <p className="text-sm text-slate-400">Redirecting to Products page…</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Admin › Products</p>
        <h1 className="mt-1 text-3xl font-black uppercase text-slate-100">Add New Product</h1>
        <p className="mt-1 text-sm text-slate-500">Fill in all fields and upload exactly 5 images.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        id="admin-product-form"
        className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8"
      >
        {/* Basic Info Grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <FormRow label="Product Name" htmlFor="p-name" icon={<Package size={13} />}>
              <input
                id="p-name"
                className={inputClass}
                value={form.name}
                onChange={set("name")}
                placeholder="e.g. Sport Exhaust System"
                required
              />
            </FormRow>
          </div>

          <FormRow label="Sale Price (USD)" htmlFor="p-price" icon={<DollarSign size={13} />}>
            <input
              id="p-price"
              type="number"
              min="0"
              step="0.01"
              className={inputClass}
              value={form.price}
              onChange={set("price")}
              placeholder="299.99"
              required
            />
          </FormRow>

          <FormRow label="Original Price (USD)" htmlFor="p-orig-price" icon={<DollarSign size={13} />}>
            <input
              id="p-orig-price"
              type="number"
              min="0"
              step="0.01"
              className={inputClass}
              value={form.originalPrice}
              onChange={set("originalPrice")}
              placeholder="399.99"
              required
            />
          </FormRow>

          <FormRow label="Brand" htmlFor="p-brand" icon={<Tag size={13} />}>
            <input
              id="p-brand"
              className={inputClass}
              value={form.brand}
              onChange={set("brand")}
              placeholder="e.g. Akrapovič"
              required
            />
          </FormRow>

          <FormRow label="Model" htmlFor="p-model" icon={<Tag size={13} />}>
            <input
              id="p-model"
              className={inputClass}
              value={form.model}
              onChange={set("model")}
              placeholder="e.g. S-H10SO18-HAPT"
              required
            />
          </FormRow>

          <FormRow label="Category" htmlFor="p-category" icon={<Tag size={13} />}>
            <select
              id="p-category"
              className={inputClass + " appearance-none"}
              value={form.category}
              onChange={set("category")}
              required
            >
              <option value="">Select category…</option>
              {categories.length > 0
                ? categories.map((c) => (
                    <option key={c._id} value={c.name}>
                      {c.name}
                    </option>
                  ))
                : (
                  <option value="" disabled>Loading categories…</option>
                )}
            </select>
          </FormRow>

          <FormRow label="Stock Quantity" htmlFor="p-stock" icon={<Box size={13} />}>
            <input
              id="p-stock"
              type="number"
              min="0"
              className={inputClass}
              value={form.stock}
              onChange={set("stock")}
              placeholder="50"
              required
            />
          </FormRow>
        </div>

        {/* Description */}
        <FormRow label="Description" htmlFor="p-description" icon={<FileText size={13} />}>
          <textarea
            id="p-description"
            className={inputClass + " h-28 resize-none py-3"}
            value={form.description}
            onChange={set("description")}
            placeholder="Detailed product description…"
            required
          />
        </FormRow>

        {/* Image Upload */}
        <div className="space-y-3">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
            <span className="text-orange-400/70">
              <ImageIcon size={13} />
            </span>
            Product Images{" "}
            <span className="text-orange-400">({images.length}/5 required)</span>
          </p>

          {/* Previews */}
          {previews.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {previews.map((src, i) => (
                <div key={i} className="group relative h-20 w-20 overflow-hidden rounded-2xl ring-1 ring-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`preview-${i}`} className="h-full w-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/70 text-white opacity-0 transition group-hover:opacity-100"
                  >
                    <X size={10} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {images.length < 5 && (
            <label
              htmlFor="p-images"
              id="admin-image-upload"
              className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-white/15 bg-slate-900/40 py-8 text-slate-500 transition hover:border-orange-400/40 hover:text-orange-300"
            >
              <Upload size={24} />
              <span className="text-sm font-medium">Click to add images ({5 - images.length} remaining)</span>
              <span className="text-xs">PNG, JPG, WEBP · max 5MB each</span>
              <input
                ref={fileRef}
                id="p-images"
                type="file"
                accept="image/*"
                multiple
                className="sr-only"
                onChange={handleImages}
              />
            </label>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            <AlertCircle size={15} />
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          id="admin-product-submit"
          disabled={isSubmitting}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:from-orange-400 hover:to-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Uploading Product…
            </>
          ) : (
            <>
              <Package size={16} />
              Publish Product
            </>
          )}
        </button>
      </form>
    </div>
  );
}
