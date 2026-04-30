"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Tags, Image as ImageIcon, Upload, Loader2, CheckCircle, AlertCircle, X } from "lucide-react";
import { categoryService } from "@/services/categoryService";

const inputClass =
  "h-11 w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 text-sm text-slate-100 placeholder-slate-600 outline-none transition focus:border-orange-400/60 focus:bg-slate-900 focus:ring-2 focus:ring-orange-400/20";

export default function NewCategoryPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setError(null);
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!image) {
      setError("Please upload a category image.");
      return;
    }

    const fd = new FormData();
    fd.append("name", name);
    fd.append("image", image);

    setIsSubmitting(true);
    try {
      await categoryService.create(fd);
      setSuccess(true);
      setName("");
      setImage(null);
      setPreview(null);
      setTimeout(() => router.push("/category"), 1800);
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
        <h2 className="text-2xl font-black text-slate-100">Category Created!</h2>
        <p className="text-sm text-slate-400">Redirecting to Categories…</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Admin › Categories</p>
        <h1 className="mt-1 text-3xl font-black uppercase text-slate-100">Add New Category</h1>
        <p className="mt-1 text-sm text-slate-500">Provide a name and a representative image.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        id="admin-category-form"
        className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8"
      >
        {/* Name */}
        <div className="space-y-1.5">
          <label
            htmlFor="cat-name"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400"
          >
            <Tags size={13} className="text-orange-400/70" />
            Category Name
          </label>
          <input
            id="cat-name"
            className={inputClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Exhaust Systems"
            required
          />
        </div>

        {/* Image */}
        <div className="space-y-3">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
            <ImageIcon size={13} className="text-orange-400/70" />
            Category Image <span className="text-orange-400">(1 required)</span>
          </p>

          {preview ? (
            <div className="group relative inline-block">
              <div className="h-36 w-36 overflow-hidden rounded-2xl ring-2 ring-orange-400/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={preview} alt="preview" className="h-full w-full object-cover" />
              </div>
              <button
                type="button"
                onClick={removeImage}
                className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white shadow transition hover:bg-red-400"
              >
                <X size={12} />
              </button>
            </div>
          ) : (
            <label
              htmlFor="cat-image"
              id="admin-category-image-upload"
              className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-white/15 bg-slate-900/40 py-10 text-slate-500 transition hover:border-orange-400/40 hover:text-orange-300"
            >
              <Upload size={28} />
              <span className="text-sm font-medium">Click to upload image</span>
              <span className="text-xs">PNG, JPG, WEBP · max 5MB</span>
              <input
                ref={fileRef}
                id="cat-image"
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={handleImage}
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
          id="admin-category-submit"
          disabled={isSubmitting}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:from-orange-400 hover:to-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Creating Category…
            </>
          ) : (
            <>
              <Tags size={16} />
              Create Category
            </>
          )}
        </button>
      </form>
    </div>
  );
}
