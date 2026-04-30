import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

export const metadata = {
  title: "Account | ShopNest",
  description: "Manage your account settings."
};

export default async function AccountPage(): Promise<JSX.Element> {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-xl border border-border bg-white p-6">
        <h1 className="text-2xl font-semibold text-text-primary">Account</h1>
        <p className="mt-2 text-sm text-text-secondary">Signed in as {session.user.email ?? "user"}.</p>
      </section>
    </main>
  );
}
