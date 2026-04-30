"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImageGalleryProps {
  readonly images: string[];
  readonly alt: string;
}

export function ProductImageGallery({ images, alt }: ProductImageGalleryProps): JSX.Element {
  const [selected, setSelected] = useState<number>(0);
  const safeImages = images.length > 0 ? images : ["/images/products/placeholder.jpg"];

  return (
    <section className="space-y-4">
      <div className="relative h-80 w-full overflow-hidden rounded-xl border border-border bg-white md:h-96">
        <Image
          src={safeImages[selected]}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {safeImages.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setSelected(index)}
            className="relative h-20 overflow-hidden rounded-md border border-border"
            aria-label={`View image ${index + 1}`}
          >
            <Image src={image} alt={`${alt} ${index + 1}`} fill className="object-cover" sizes="120px" />
          </button>
        ))}
      </div>
    </section>
  );
}
