import { apiFetch } from "./api";

export type ApiProduct = {
  _id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  category: string;
  brand: string;
  model: string;
  stock: number;
  ratings: number;
  numOfReview: number;
  images: { public_id: string; url: string }[];
  reviews: {
    _id: string;
    user: string;
    name: string;
    rating: number;
    comment: string;
  }[];
  createdAt: string;
};

export type ProductsResponse = {
  success: boolean;
  count: number;
  productsCount: number;
  resPerPage: number;
  products: ApiProduct[];
};

export type SingleProductResponse = {
  success: boolean;
  product: ApiProduct;
};

export type CreateProductResponse = {
  success: boolean;
  message: string;
  product: ApiProduct;
};

export type ProductQueryParams = {
  keyword?: string;
  category?: string;
  page?: number;
};

export const productService = {
  getAll: (params?: ProductQueryParams) => {
    const query = new URLSearchParams();
    if (params?.keyword) query.set("keyword", params.keyword);
    if (params?.category) query.set("category", params.category);
    if (params?.page) query.set("page", String(params.page));
    return apiFetch<ProductsResponse>(`/products${query.toString() ? `?${query}` : ""}`);
  },

  getById: (id: string) => apiFetch<SingleProductResponse>(`/product/${id}`),

  create: (formData: FormData) =>
    apiFetch<CreateProductResponse>("/admin/product/new", {
      method: "POST",
      body: formData,
    }),

  update: (id: string, payload: Partial<ApiProduct>) =>
    apiFetch<SingleProductResponse>(`/admin/product/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    }),

  delete: (id: string) =>
    apiFetch<{ success: boolean; message: string }>(`/admin/product/${id}`, {
      method: "DELETE",
    }),

  createReview: (payload: { rating: number; comment: string; productId: string }) =>
    apiFetch<{ success: boolean }>("/writeReview", {
      method: "PUT",
      body: JSON.stringify(payload),
    }),

  getReviews: (productId: string) =>
    apiFetch<{ success: boolean; reviews: ApiProduct["reviews"] }>(`/reviews?id=${productId}`),
};
