import { apiFetch } from "./api";

export type AuthUser = {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin" | "member";
  bikeName: string;
  phone: number;
  avatar: { public_id: string; url: string };
};

export type AuthResponse = {
  success: boolean;
  token: string;
  user: AuthUser;
};

export type ProfileResponse = {
  success: boolean;
  user: AuthUser;
};

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  bikeName: string;
  phone: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export const authService = {
  register: (payload: RegisterPayload) =>
    apiFetch<AuthResponse>("/register", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  login: (payload: LoginPayload) =>
    apiFetch<AuthResponse>("/login", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  logout: () =>
    apiFetch<{ success: boolean; message: string }>("/logout", {
      method: "GET",
    }),

  getProfile: () => apiFetch<ProfileResponse>("/me"),

  updateProfile: (payload: { name: string; email: string }) =>
    apiFetch<{ success: boolean }>("/me/update", {
      method: "PUT",
      body: JSON.stringify(payload),
    }),
};
