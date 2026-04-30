"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AuthUser, authService, LoginPayload, RegisterPayload } from "@/services/authService";

type AuthState = {
  user: AuthUser | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;

  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  logout: () => Promise<void>;
  fetchProfile: () => Promise<void>;
  clearError: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isLoading: false,
      error: null,

      login: async (payload) => {
        set({ isLoading: true, error: null });
        try {
          const data = await authService.login(payload);
          localStorage.setItem("th_token", data.token);
          set({ user: data.user, token: data.token, isLoading: false });
        } catch (err) {
          set({ error: (err as Error).message, isLoading: false });
          throw err;
        }
      },

      register: async (payload) => {
        set({ isLoading: true, error: null });
        try {
          const data = await authService.register(payload);
          localStorage.setItem("th_token", data.token);
          set({ user: data.user, token: data.token, isLoading: false });
        } catch (err) {
          set({ error: (err as Error).message, isLoading: false });
          throw err;
        }
      },

      logout: async () => {
        try {
          await authService.logout();
        } catch {
          // ignore network errors on logout
        }
        localStorage.removeItem("th_token");
        set({ user: null, token: null });
      },

      fetchProfile: async () => {
        if (!get().token) return;
        try {
          const data = await authService.getProfile();
          set({ user: data.user });
        } catch {
          set({ user: null, token: null });
          localStorage.removeItem("th_token");
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: "thollerz-auth",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ token: state.token, user: state.user }),
    }
  )
);
