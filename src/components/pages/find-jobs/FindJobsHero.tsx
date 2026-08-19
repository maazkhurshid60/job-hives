import React from "react";
import HeroSpiderCanvas from "@/components/pages/find-jobs/HeroSpiderCanvas";
import HeroSearchBar from "@/components/pages/find-jobs/HeroSearchBar";
import type { FindJobsFilters, FindJobsFilterChange } from "@/components/pages/find-jobs/types";

interface FindJobsHeroProps {
  filters: Pick<FindJobsFilters, "searchText" | "searchLocation">;
  onChange: FindJobsFilterChange;
}

const FindJobsHero: React.FC<FindJobsHeroProps> = ({ filters, onChange }) => {
  return (
    <section className="relative text-center pt-[104px] pb-16 px-6 min-h-[340px] flex flex-col items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#fff_0%,var(--primary-50)_100%)] page-hero">
      <HeroSpiderCanvas />
      <h1 className="relative z-[2] font-heading font-extrabold text-[clamp(28px,4.4vw,44px)] leading-[1.15] tracking-[-0.02em] text-neutral-900">
        Your next gig is closer than you think
      </h1>
      <p className="relative z-[2] text-[clamp(15px,1.6vw,17px)] text-neutral-600 mt-3.5 max-w-[520px] mx-auto">
        Real jobs. Real pay. No fluff.
      </p>
      <HeroSearchBar filters={filters} onChange={onChange} />
    </section>
  );
};

export default FindJobsHero;
