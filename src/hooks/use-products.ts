"use client";

import { useEffect, useState, useCallback } from "react";
import { productService, ApiProduct, ProductQueryParams } from "@/services/productService";

export function useProducts(params?: ProductQueryParams) {
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [count, setCount] = useState(0);
  const [resPerPage, setResPerPage] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await productService.getAll(params);
      setProducts(data.products);
      setCount(data.productsCount);
      setResPerPage(data.resPerPage);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [params?.keyword, params?.category, params?.page]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { products, count, resPerPage, isLoading, error, refetch: fetch };
}

export function useSingleProduct(id: string) {
  const [product, setProduct] = useState<ApiProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    productService
      .getById(id)
      .then((data) => setProduct(data.product))
      .catch((err) => setError((err as Error).message))
      .finally(() => setIsLoading(false));
  }, [id]);

  return { product, isLoading, error };
}
