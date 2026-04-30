"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trendingVideos } from "@/lib/data/trending-videos";

const INSTAGRAM_URL = "https://www.instagram.com/throttlerz_house/";

const sizeClasses = {
  sm: "h-[340px] w-[220px] sm:h-[420px] sm:w-[250px] lg:mt-12",
  md: "h-[370px] w-[240px] sm:h-[470px] sm:w-[280px] lg:mt-6",
  lg: "h-[400px] w-[260px] sm:h-[520px] sm:w-[310px]"
};

export function TrendingVideosSection() {
  const listRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  function scrollVideos(direction: "left" | "right") {
    const list = listRef.current;

    if (!list) {
      return;
    }

    list.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth"
    });
  }

  function handlePlay(index: number, videoId: string) {
    videoRefs.current.forEach((video, currentIndex) => {
      if (video && currentIndex !== index) {
        video.pause();
      }
    });

    setActiveVideoId(videoId);
  }

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/75 px-6 py-8 text-white shadow-xl shadow-black/30 sm:px-10">
      <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />
      <div className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative z-10 space-y-7">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Company reels</p>
            <h2 className="text-3xl font-black uppercase tracking-wide text-slate-100">Trending Videos</h2>
            <p className="text-sm leading-6 text-slate-300">
              Short workshop clips, detailing shots, and service moments from the Throttlerz House floor.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              onClick={() => scrollVideos("left")}
            >
              Prev
            </Button>
            <Button
              type="button"
              className="bg-orange-500 text-slate-950 hover:bg-orange-400"
              onClick={() => scrollVideos("right")}
            >
              Next
            </Button>
          </div>
        </div>

        <div ref={listRef} className="flex snap-x snap-mandatory items-center gap-5 overflow-x-auto px-1 pb-3 lg:justify-center">
          {trendingVideos.map((video, index) => (
            <article
              key={video.id}
              className={cn(
                "group relative shrink-0 snap-center overflow-hidden rounded-2xl border border-white/15 bg-slate-950 shadow-lg shadow-black/35 transition hover:-translate-y-1 hover:border-orange-300/60",
                sizeClasses[video.size]
              )}
            >
              <video
                ref={(element) => {
                  videoRefs.current[index] = element;
                }}
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                title={video.title}
                onPlay={() => handlePlay(index, video.id)}
              >
                <source src={video.src} type="video/mp4" />
              </video>

              <div className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-300">{video.tag}</p>
                    <h3 className="mt-1 text-base font-black leading-tight text-white">{video.title}</h3>
                  </div>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold text-slate-100">
                    {video.views}
                  </span>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-4">
                <p className="text-xs font-medium text-slate-200">
                  {activeVideoId === video.id ? "Now playing" : "Throttlerz House"}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4 sm:flex-row sm:items-center">
          <p className="text-sm leading-6 text-slate-300">Follow the latest builds, product fitments, and service clips from the team.</p>
          <Button asChild className="bg-orange-500 text-slate-950 hover:bg-orange-400">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Watch More
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
