"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Mail, Lock, User, Bike, Phone, Eye, EyeOff, Loader2, LogIn } from "lucide-react";
import { useAuthStore } from "@/store/auth-store";

type Tab = "login" | "register";

type FieldProps = {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  icon: React.ReactNode;
  required?: boolean;
  autoComplete?: string;
};

function Field({ id, label, type, value, onChange, placeholder, icon, required, autoComplete }: FieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-orange-400/70">{icon}</span>
        <input
          id={id}
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          className="h-11 w-full rounded-xl border border-white/10 bg-slate-900/80 pl-10 pr-10 text-sm text-slate-100 placeholder-slate-600 outline-none transition focus:border-orange-400/60 focus:bg-slate-900 focus:ring-2 focus:ring-orange-400/20"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-orange-300 transition"
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
          </button>
        )}
      </div>
    </div>
  );
}

function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const { login, isLoading, error, clearError } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    try {
      await login({ email, password });
      onSuccess();
    } catch {
      // error is set in store
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field
        id="login-email"
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
        placeholder="you@example.com"
        icon={<Mail size={15} />}
        required
        autoComplete="email"
      />
      <Field
        id="login-password"
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
        placeholder="••••••••"
        icon={<Lock size={15} />}
        required
        autoComplete="current-password"
      />

      {error && (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs font-medium text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        id="auth-login-submit"
        className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:from-orange-400 hover:to-orange-500 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? <Loader2 size={16} className="animate-spin" /> : <LogIn size={16} />}
        {isLoading ? "Signing in…" : "Sign In"}
      </button>
    </form>
  );
}

function RegisterForm({ onSuccess }: { onSuccess: () => void }) {
  const { register, isLoading, error, clearError } = useAuthStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bikeName, setBikeName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    try {
      await register({ name, email, password, bikeName, phone });
      onSuccess();
    } catch {
      // error is set in store
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field
        id="reg-name"
        label="Full Name"
        type="text"
        value={name}
        onChange={setName}
        placeholder="John Rider"
        icon={<User size={15} />}
        required
        autoComplete="name"
      />
      <Field
        id="reg-email"
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
        placeholder="you@example.com"
        icon={<Mail size={15} />}
        required
        autoComplete="email"
      />
      <Field
        id="reg-password"
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
        placeholder="Min 6 characters"
        icon={<Lock size={15} />}
        required
        autoComplete="new-password"
      />
      <Field
        id="reg-bike"
        label="Bike Name"
        type="text"
        value={bikeName}
        onChange={setBikeName}
        placeholder="e.g. Yamaha R1"
        icon={<Bike size={15} />}
        required
      />
      <Field
        id="reg-phone"
        label="Phone Number"
        type="tel"
        value={phone}
        onChange={setPhone}
        placeholder="+1 234 567 8900"
        icon={<Phone size={15} />}
        required
      />

      {error && (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs font-medium text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        id="auth-register-submit"
        className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:from-orange-400 hover:to-orange-500 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? <Loader2 size={16} className="animate-spin" /> : <User size={16} />}
        {isLoading ? "Creating account…" : "Create Account"}
      </button>
    </form>
  );
}

type AuthModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const [tab, setTab] = useState<Tab>("login");
  const { clearError } = useAuthStore();

  const handleSuccess = () => {
    onOpenChange(false);
  };

  const switchTab = (t: Tab) => {
    clearError();
    setTab(t);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 flex w-full max-w-md -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          style={{ maxHeight: "90vh" }}
          aria-describedby="auth-modal-description"
        >
          {/* ── Sticky Header (never scrolls away) ─────────────────────── */}
          <div className="relative shrink-0 px-8 pt-8">
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />

            <Dialog.Close
              id="auth-modal-close"
              className="absolute right-4 top-4 rounded-full p-1.5 text-slate-500 transition hover:bg-white/10 hover:text-slate-200"
            >
              <X size={18} />
            </Dialog.Close>

            {/* Brand */}
            <div className="relative mb-5 text-center">
              <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 ring-1 ring-orange-400/30">
                <span className="text-2xl">🏍️</span>
              </div>
              <Dialog.Title className="text-xl font-black uppercase tracking-wide text-slate-100">
                Thollerz House
              </Dialog.Title>
              <p id="auth-modal-description" className="mt-1 text-xs text-slate-500">
                {tab === "login" ? "Sign in to your account" : "Join the riding community"}
              </p>
            </div>

            {/* Tab switcher */}
            <div className="flex rounded-2xl bg-slate-900/60 p-1">
              <button
                id="auth-tab-login"
                onClick={() => switchTab("login")}
                className={`flex-1 rounded-xl py-2 text-sm font-semibold transition ${
                  tab === "login"
                    ? "bg-orange-500 text-white shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Sign In
              </button>
              <button
                id="auth-tab-register"
                onClick={() => switchTab("register")}
                className={`flex-1 rounded-xl py-2 text-sm font-semibold transition ${
                  tab === "register"
                    ? "bg-orange-500 text-white shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Divider */}
            <div className="mt-5 border-t border-white/8" />
          </div>

          {/* ── Scrollable form body ────────────────────────────────────── */}
          <div className="flex-1 min-h-0 overflow-y-auto px-8 py-5 [scrollbar-width:thin] [scrollbar-color:rgba(249,115,22,0.5)_transparent]">
            {tab === "login" ? (
              <LoginForm onSuccess={handleSuccess} />
            ) : (
              <RegisterForm onSuccess={handleSuccess} />
            )}
          </div>

          {/* Bottom safe-area padding */}
          <div className="shrink-0 pb-2" />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
