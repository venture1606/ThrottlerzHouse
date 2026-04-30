import Link from "next/link";
import { ServiceBookingForm } from "@/components/services/ServiceBookingForm";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:py-10">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 text-white shadow-xl shadow-black/30">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-55"
          style={{ backgroundImage: `url(${services[0].image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-slate-950/70" />
        <div className="relative z-10 grid min-h-[430px] gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-2xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Throttlerz service bay</p>
            <h1 className="text-4xl font-black uppercase leading-tight text-slate-100 sm:text-6xl">Services for ride-ready machines</h1>
            <p className="text-base leading-7 text-slate-200">
              Book motorcycle service support for performance checks, touring preparation, accessory fitment, and practical gear guidance.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-orange-500 text-slate-950 hover:bg-orange-400">
                <a href="#booking">Book Now</a>
              </Button>
              <Button asChild variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
                <Link href="/products">Shop Parts</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
            {["Certified fitment checks", "Transparent starting prices", "Practical ride-readiness reports"].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm font-semibold text-slate-100">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        {services.map((service) => (
          <article
            id={service.id}
            key={service.id}
            className="scroll-mt-28 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-xl shadow-black/25"
          >
            <div className="grid min-h-full sm:grid-cols-[0.9fr_1.1fr]">
              <div className="min-h-64 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }} />
              <div className="space-y-5 p-5 sm:p-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">{service.eyebrow}</p>
                  <h2 className="text-2xl font-black text-slate-100">{service.name}</h2>
                  <p className="text-sm leading-6 text-slate-400">{service.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Duration</p>
                    <p className="mt-1 font-bold text-slate-100">{service.duration}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Starts at</p>
                    <p className="mt-1 font-bold text-orange-300">{service.startingPrice}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-slate-200">{service.idealFor}</p>
                  <ul className="grid gap-2 text-sm text-slate-400">
                    {service.inclusions.map((inclusion) => (
                      <li key={inclusion} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-300" />
                        <span>{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section id="booking" className="scroll-mt-28 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">What happens next</p>
          <h2 className="text-3xl font-black text-slate-100">Simple booking, cleaner handoff</h2>
          <p className="text-sm leading-6 text-slate-400">
            Submit your request with the service type, motorcycle model, and notes. The service team can review parts, tools, and slot
            availability before confirming the visit.
          </p>
          <div className="grid gap-3 text-sm text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">1. Choose the service that matches your ride.</div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">2. Add bike details and preferred visit date.</div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">3. Receive confirmation with final timing and estimate.</div>
          </div>
        </div>
        <ServiceBookingForm />
      </section>
    </main>
  );
}
