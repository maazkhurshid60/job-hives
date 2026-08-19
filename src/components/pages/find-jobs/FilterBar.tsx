"use client";

import React from "react";
import { ChevronDown, Briefcase, Share2, Laptop, Languages } from "lucide-react";
import clsx from "clsx";
import type { ComponentType } from "react";
import {
  CATEGORY_PILLS,
  EMPLOYMENT_TYPES,
  SOCIAL_MEDIA_OPTIONS,
  SOFTWARE_OPTIONS,
  LANGUAGE_OPTIONS,
  getCategoryIcon,
} from "@/constant/findJobsData";
import type { FindJobsFilters, FindJobsFilterChange } from "@/components/pages/find-jobs/types";

interface FilterBarProps {
  filters: FindJobsFilters;
  onChange: FindJobsFilterChange;
}

const SelectPill: React.FC<{
  ariaLabel: string;
  value: string;
  placeholder: string;
  options: string[];
  icon: ComponentType<{ className?: string }>;
  onChange: (value: string) => void;
}> = ({ ariaLabel, value, placeholder, options, icon: Icon, onChange }) => (
  <div className="relative select-pill">
    <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-500 pointer-events-none" />
    <select
      aria-label={ariaLabel}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full appearance-none font-body text-[13.5px] font-semibold text-neutral-700 bg-neutral-50 border border-solid border-neutral-200 rounded-full py-2.5 pl-9 pr-9 cursor-pointer transition-colors duration-150 hover:border-primary-300 hover:bg-primary-50"
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-500 pointer-events-none" />
  </div>
);

const FilterBar: React.FC<FilterBarProps> = ({ filters, onChange }) => {
  return (
    <div className="relative z-[3] pt-6 pb-2 filter-wrap">
      <div className="max-w-[980px] mx-auto filter-card">
        {/* Select row — 4 filters, each col-span-3 on desktop (4 x 3 = 12) */}
        <div className="grid grid-cols-1 min-[640px]:grid-cols-2 min-[1024px]:grid-cols-12 gap-2.5 select-row">
          <div className="min-[1024px]:col-span-3">
            <SelectPill
              ariaLabel="Employment Type"
              placeholder="Employment Type"
              options={EMPLOYMENT_TYPES}
              icon={Briefcase}
              value={filters.employmentType}
              onChange={(v) => onChange("employmentType", v)}
            />
          </div>
          <div className="min-[1024px]:col-span-3">
            <SelectPill
              ariaLabel="Social Media"
              placeholder="Social Media"
              options={SOCIAL_MEDIA_OPTIONS}
              icon={Share2}
              value={filters.socialMedia}
              onChange={(v) => onChange("socialMedia", v)}
            />
          </div>
          <div className="min-[1024px]:col-span-3">
            <SelectPill
              ariaLabel="Software"
              placeholder="Software"
              options={SOFTWARE_OPTIONS}
              icon={Laptop}
              value={filters.software}
              onChange={(v) => onChange("software", v)}
            />
          </div>
          <div className="min-[1024px]:col-span-3">
            <SelectPill
              ariaLabel="Languages"
              placeholder="Languages"
              options={LANGUAGE_OPTIONS}
              icon={Languages}
              value={filters.language}
              onChange={(v) => onChange("language", v)}
            />
          </div>
        </div>

        {/* Category pills — below the select filters */}
        <div className="flex flex-wrap gap-2 pt-4 category-row">
          {CATEGORY_PILLS.map((cat) => {
            const Icon = getCategoryIcon(cat.key);
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => onChange("category", cat.key)}
                className={clsx(
                  "font-body text-[13px] font-semibold rounded-full px-4 py-2 cursor-pointer inline-flex items-center gap-1.5 border-[1.5px] border-solid transition-all duration-150 cat-pill",
                  filters.category === cat.key
                    ? "bg-primary-500 border-primary-500 text-neutral-0 active"
                    : "bg-neutral-0 border-neutral-200 text-neutral-700 hover:border-primary-300"
                )}
              >
                <Icon className="w-[15px] h-[15px]" />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
