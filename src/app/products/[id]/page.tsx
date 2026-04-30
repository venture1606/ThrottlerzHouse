import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/products/ProductDetails";
import { getProductById, products } from "@/lib/data/products";

type ProductViewPageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id
  }));
}

export default function ProductViewPage({ params }: ProductViewPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <ProductDetails product={product} />
    </main>
  );
}
