"use client";

import React from "react";
import { ChevronDown, Briefcase, Sparkles, Laptop, Share2, Wallet, Globe, Languages, Users } from "lucide-react";
import type { ComponentType } from "react";
import {
  EMPLOYMENT_TYPES,
  SKILL_CATEGORIES,
  SOFTWARE_OPTIONS,
  SOCIAL_MEDIA_OPTIONS,
  PAYMENT_OPTIONS,
  COUNTRY_OPTIONS,
  LANGUAGE_OPTIONS,
  GENDER_OPTIONS,
} from "@/constant/findWorkersData";
import type { FindWorkersFilters, FindWorkersFilterChange } from "@/components/pages/find-workers/types";

interface FilterBarProps {
  filters: FindWorkersFilters;
  onChange: FindWorkersFilterChange;
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
              ariaLabel="Skills & Expertise"
              placeholder="Skills & Expertise"
              options={SKILL_CATEGORIES}
              icon={Sparkles}
              value={filters.skillCategory}
              onChange={(v) => onChange("skillCategory", v)}
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
              ariaLabel="Preferred Payment"
              placeholder="Preferred Payment"
              options={PAYMENT_OPTIONS}
              icon={Wallet}
              value={filters.paymentMethod}
              onChange={(v) => onChange("paymentMethod", v)}
            />
          </div>
          <div className="min-[1024px]:col-span-3">
            <SelectPill
              ariaLabel="Country"
              placeholder="Country"
              options={COUNTRY_OPTIONS}
              icon={Globe}
              value={filters.country}
              onChange={(v) => onChange("country", v)}
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
          <div className="min-[1024px]:col-span-3">
            <SelectPill
              ariaLabel="Gender"
              placeholder="Gender"
              options={GENDER_OPTIONS}
              icon={Users}
              value={filters.gender}
              onChange={(v) => onChange("gender", v)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
