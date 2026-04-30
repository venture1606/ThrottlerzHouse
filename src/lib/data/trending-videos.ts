export type TrendingVideo = {
  id: string;
  title: string;
  tag: string;
  src: string;
  views: string;
  size: "sm" | "md" | "lg";
};

const videoSrc = "/videos/throttlerz-trending-1.mp4";

export const trendingVideos: TrendingVideo[] = [
  {
    id: "paint-care",
    title: "Tank polish finish",
    tag: "Detailing",
    src: videoSrc,
    views: "18K views",
    size: "sm"
  },
  {
    id: "daily-care",
    title: "Daily ride care",
    tag: "Workshop",
    src: videoSrc,
    views: "24K views",
    size: "md"
  },
  {
    id: "service-bay",
    title: "Service bay moments",
    tag: "Trending",
    src: videoSrc,
    views: "31K views",
    size: "lg"
  },
  {
    id: "bike-detail",
    title: "Gloss restoration",
    tag: "Detailing",
    src: videoSrc,
    views: "21K views",
    size: "md"
  },
  {
    id: "quick-check",
    title: "Quick care reel",
    tag: "Reels",
    src: videoSrc,
    views: "16K views",
    size: "sm"
  }
];
