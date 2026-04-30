import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-xl border border-white/10 bg-slate-900/70 p-4 shadow-lg shadow-black/25", className)} {...props} />;
}
