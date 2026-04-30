// Barrel export for all API services
export { apiFetch } from "./api";
export { authService } from "./authService";
export { productService } from "./productService";
export { categoryService } from "./categoryService";
export { cartService } from "./cartService";

export type { AuthUser, AuthResponse, LoginPayload, RegisterPayload } from "./authService";
export type { ApiProduct, ProductsResponse } from "./productService";
export type { ApiCategory, CategoriesResponse } from "./categoryService";
