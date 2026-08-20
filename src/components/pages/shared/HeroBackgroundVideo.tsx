import React from "react";

interface HeroBackgroundVideoProps {
  src: string;
  poster?: string;
}

/**
 * Full-bleed looping background video for a page hero — muted/autoplay/loop so it plays
 * without a user gesture, with a dark grey scrim so white title/search-bar text stays
 * readable over busy footage instead of the raw clip.
 */
const HeroBackgroundVideo: React.FC<HeroBackgroundVideoProps> = ({ src, poster }) => (
  <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
    <video
      className="w-full h-full object-cover"
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
    />
    <div className="absolute inset-0 bg-[rgba(20,25,28,0.8)]" />
  </div>
);

export default HeroBackgroundVideo;
