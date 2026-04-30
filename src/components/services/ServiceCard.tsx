import Link from "next/link";
import { Service } from "@/lib/types";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services#${service.id}`}
      className="group relative flex h-[430px] w-[320px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-orange-300/60 hover:shadow-orange-950/30"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${service.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
      <div className="relative z-10 mt-auto space-y-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">{service.eyebrow}</p>
        <h3 className="text-3xl font-black uppercase leading-none text-slate-100">{service.name}</h3>
        <p className="line-clamp-3 text-sm leading-6 text-slate-200">{service.description}</p>
        <div className="flex items-center justify-between gap-3 border-t border-white/15 pt-4 text-sm">
          <span className="font-semibold text-white">{service.startingPrice}</span>
          <span className="text-slate-300">{service.duration}</span>
        </div>
      </div>
    </Link>
  );
}
