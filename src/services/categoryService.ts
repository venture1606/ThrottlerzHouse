import { apiFetch } from "./api";

export type ApiCategory = {
  _id: string;
  name: string;
  image: { public_id: string; url: string };
  productsCount: number;
  createdAt: string;
};

export type CategoriesResponse = {
  success: boolean;
  count: number;
  categories: ApiCategory[];
};

export type SingleCategoryResponse = {
  success: boolean;
  category: ApiCategory;
};

export const categoryService = {
  getAll: () => apiFetch<CategoriesResponse>("/categories"),

  getById: (id: string) =>
    apiFetch<SingleCategoryResponse>(`/category/${id}`),

  create: (formData: FormData) =>
    apiFetch<SingleCategoryResponse>("/category/new", {
      method: "POST",
      body: formData,
    }),

  update: (id: string, payload: { name?: string; productsCount?: number }) =>
    apiFetch<SingleCategoryResponse>(`/category/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    }),

  delete: (id: string) =>
    apiFetch<{ success: boolean; message: string }>(`/category/${id}`, {
      method: "DELETE",
    }),
};
