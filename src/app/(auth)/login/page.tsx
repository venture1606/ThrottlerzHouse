import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | ShopNest",
  description: "Sign in to your ShopNest account."
};

export default function LoginPage(): JSX.Element {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-7xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full max-w-md rounded-xl border border-border bg-white p-6">
        <h1 className="text-xl font-semibold text-text-primary">Sign In</h1>
        <p className="mt-2 text-sm text-text-secondary">Authentication providers are configured. Continue to account after sign-in.</p>
        <Link href="/account" className="mt-4 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover">
          Continue
        </Link>
      </section>
    </main>
  );
}
