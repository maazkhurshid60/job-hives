import React from "react";
import HeroBackgroundVideo from "@/components/pages/shared/HeroBackgroundVideo";
import HeroSearchBar from "@/components/pages/shared/HeroSearchBar";

interface PageHeroProps {
  title: string;
  subtitle: string;
  videoSrc: string;
  textValue: string;
  onTextChange: (value: string) => void;
  textPlaceholder: string;
  locationValue: string;
  onLocationChange: (value: string) => void;
  locationPlaceholder: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  videoSrc,
  textValue,
  onTextChange,
  textPlaceholder,
  locationValue,
  onLocationChange,
  locationPlaceholder,
}) => {
  return (
    <section className="relative text-center pt-16 pb-16 px-6 min-h-[340px] flex flex-col items-center justify-center overflow-hidden bg-neutral-900 page-hero">
      <HeroBackgroundVideo src={videoSrc} />
      <h1 className="relative z-[2] font-heading font-extrabold text-[clamp(28px,4.4vw,44px)] leading-[1.15] tracking-[-0.02em] text-neutral-0">
        {title}
      </h1>
      <p className="relative z-[2] text-[clamp(15px,1.6vw,17px)] text-neutral-100 mt-3.5 max-w-[520px] mx-auto">{subtitle}</p>
      <HeroSearchBar
        textValue={textValue}
        onTextChange={onTextChange}
        textPlaceholder={textPlaceholder}
        locationValue={locationValue}
        onLocationChange={onLocationChange}
        locationPlaceholder={locationPlaceholder}
      />
    </section>
  );
};

export default PageHero;
