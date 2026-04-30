import Link from "next/link";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";

type ServicesSectionProps = {
  title?: string;
  showAction?: boolean;
};

export function ServicesSection({ title = "Services", showAction = true }: ServicesSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/75 px-6 py-8 text-white shadow-xl shadow-black/30 sm:px-10">
      <div className="absolute -right-14 -top-20 h-64 w-64 rounded-full bg-orange-500/15 blur-3xl" />
      <div className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Workshop care</p>
            <h2 className="text-3xl font-black uppercase tracking-wide text-slate-100">{title}</h2>
            <p className="text-sm leading-6 text-slate-300">
              Practical motorcycle services for fitment, touring preparation, gear guidance, and performance-ready checks.
            </p>
          </div>
          {showAction ? (
            <Button asChild className="w-fit bg-orange-500 text-slate-950 hover:bg-orange-400">
              <Link href="/services">Book Service</Link>
            </Button>
          ) : null}
        </div>

        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
