import Link from "next/link";
import { Button } from "@/components/ui/button";
import HomePhotoOne from "@/assets/HomePhotoOne.jpg";

const NUM_TILES = 8;

export function HomeHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 text-white shadow-xl shadow-black/30">
      <div className="absolute inset-0">
        {Array.from({ length: NUM_TILES }).map((_, index) => (
          <div
            key={index}
            className="hero-image-slice"
            style={{
              backgroundImage: `url(${HomePhotoOne.src})`,
              backgroundSize: `100% ${NUM_TILES * 100}%`,
              backgroundPositionY: `calc(${index} * 100% / ${NUM_TILES - 1})`,
              top: `calc(${index} * 100% / ${NUM_TILES})`,
              height: `calc(100% / ${NUM_TILES} + 1px)`,
              animationDelay: `${index * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/75" />

      <div className="relative z-10 flex min-h-[68vh] items-center px-6 py-12 sm:px-10">
        <div className="ml-auto max-w-md text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Throttlerz Performance Line</p>
          <h1 className="mt-3 text-4xl font-black uppercase leading-tight text-slate-100 sm:text-6xl">Throttlerz House</h1>
          <p className="mt-4 text-sm text-slate-200 sm:text-base">
            Performance motorcycle accessories and riding gear built for long routes, city control, and all-weather confidence.
          </p>
          <div className="mt-7 flex justify-end gap-3">
            <Button asChild className="bg-orange-500 text-slate-950 hover:bg-orange-400">
              <Link href="/products">Shop Products</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
              <Link href="/orders">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
