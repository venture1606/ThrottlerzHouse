"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-orange-300 focus:ring-2 focus:ring-orange-400/20";

export function ServiceBookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <form className="space-y-5 rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-black/25 sm:p-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Booking request</p>
        <h2 className="text-2xl font-black text-slate-100">Schedule a service</h2>
        <p className="text-sm leading-6 text-slate-400">Share the basics and the team can confirm availability, price, and next steps.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-300">
          Full name
          <input className={fieldClass} name="fullName" placeholder="Your name" />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-300">
          Phone number
          <input className={fieldClass} name="phone" placeholder="+91 98765 43210" />
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-slate-300">
        Service type
        <select className={fieldClass} name="service">
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-300">
          Bike model
          <input className={fieldClass} name="bikeModel" placeholder="Example: Royal Enfield Hunter 350" />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-300">
          Preferred date
          <input className={fieldClass} name="preferredDate" type="date" />
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-slate-300">
        Service notes
        <textarea className={`${fieldClass} min-h-28 resize-y`} name="notes" placeholder="Tell us what you want checked or installed." />
      </label>

      <Button className="w-full bg-orange-500 text-slate-950 hover:bg-orange-400" type="submit">
        Send Booking Request
      </Button>

      {isSubmitted ? (
        <p className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-200">
          Request captured. The team can connect this form to a booking action when the backend is ready.
        </p>
      ) : null}
    </form>
  );
}
