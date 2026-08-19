"use client";

import React from "react";
import { Search, MapPin } from "lucide-react";
import type { FindJobsFilters, FindJobsFilterChange } from "@/components/pages/find-jobs/types";

interface HeroSearchBarProps {
  filters: Pick<FindJobsFilters, "searchText" | "searchLocation">;
  onChange: FindJobsFilterChange;
}

const HeroSearchBar: React.FC<HeroSearchBarProps> = ({ filters, onChange }) => {
  return (
    <div className="relative z-[2] w-full max-w-[720px] mx-auto mt-8 hero-search-bar">
      <div className="flex items-center gap-2 bg-neutral-0 rounded-lg shadow-lg border border-solid border-neutral-200 px-2 py-2 flex-wrap search-row">
        <div className="flex-1 flex items-center gap-2.5 min-w-[180px] px-3 py-2.5 search-field">
          <span className="text-neutral-400 flex-shrink-0 flex icon">
            <Search className="w-[18px] h-[18px]" />
          </span>
          <input
            type="text"
            placeholder="Search by title or company"
            value={filters.searchText}
            onChange={(e) => onChange("searchText", e.target.value)}
            className="flex-1 border-none outline-none text-[14.5px] text-neutral-800 bg-transparent min-w-0"
          />
        </div>
        <div className="hidden sm:block w-px h-[26px] bg-neutral-200 flex-shrink-0 search-divider" />
        <div className="flex-1 flex items-center gap-2.5 min-w-[180px] px-3 py-2.5 search-field">
          <span className="text-neutral-400 flex-shrink-0 flex icon">
            <MapPin className="w-[18px] h-[18px]" />
          </span>
          <input
            type="text"
            placeholder="Search by city or country"
            value={filters.searchLocation}
            onChange={(e) => onChange("searchLocation", e.target.value)}
            className="flex-1 border-none outline-none text-[14.5px] text-neutral-800 bg-transparent min-w-0"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSearchBar;
