"use client";

import React from "react";
import CardHeading from "@/components/pages/typography/CardHeading";
import { HeartIcon, LocationPinIcon, ListIcon } from "@/components/icons/JobCardIcons";
import clsx from "clsx";

export interface JobCardProps {
  id?: string;
  title: string;
  type: string;
  timeAgo: string;
  pay: string;
  paySuffix?: string;
  location: string;
  category: string;
  isPremium?: boolean;
  accentVariant?: "primary" | "warning" | "danger" | "success";
  isSaved?: boolean;
  onSaveToggle?: () => void;
  onApply?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  type,
  timeAgo,
  pay,
  paySuffix = "/hr",
  location,
  category,
  isPremium = false,
  accentVariant = "primary",
  isSaved = false,
  onSaveToggle,
  onApply,
}) => {
  const accentBorderClass = {
    primary: "border-l-primary-500",
    warning: "border-l-warning-500",
    danger: "border-l-danger-500",
    success: "border-l-success-500",
  }[accentVariant];

  const accentTextClass = {
    primary: "text-primary-600",
    warning: "text-warning-600",
    danger: "text-danger-600",
    success: "text-success-600",
  }[accentVariant];

  const accentBgClass = {
    primary: "bg-primary-500 hover:brightness-92",
    warning: "bg-warning-500 hover:brightness-92",
    danger: "bg-danger-500 hover:brightness-92",
    success: "bg-success-500 hover:brightness-92",
  }[accentVariant];

  return (
    <div
      className={clsx(
        "bg-neutral-0 border border-solid border-neutral-200 border-l-4 rounded-lg py-5 px-[22px] shadow-sm relative cursor-pointer",
        "transition duration-200 hover:shadow-lg hover:-translate-y-0.5",
        accentBorderClass
      )}
    >
      {/* Save Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onSaveToggle?.();
        }}
        className={clsx(
          "absolute top-[18px] right-[18px] max-[520px]:top-4 max-[520px]:right-4 w-8 h-8 rounded-full bg-neutral-50 border border-solid border-neutral-200 flex items-center justify-center transition duration-150 cursor-pointer",
          isSaved
            ? "text-danger-500 border-danger-50 bg-danger-50"
            : "text-neutral-400 hover:text-danger-500 hover:border-danger-50 hover:bg-danger-50"
        )}
        aria-label="Save job"
      >
        <HeartIcon filled={isSaved} className="w-4 h-4" />
      </button>

      {/* Meta Row */}
      <div className="flex gap-[18px] text-xs font-semibold text-neutral-500 mb-2.5">
        <span>Type: {type}</span>
        <span>Posted: {timeAgo}</span>
      </div>

      {/* Title & Badge */}
      <div className="flex items-center gap-[9px] flex-wrap mb-2 max-w-[80%] max-[520px]:max-w-[74%]">
        <CardHeading className="text-[16.5px] max-[520px]:text-[15.5px] font-extrabold leading-tight text-neutral-900">
          {title}
        </CardHeading>
        {isPremium && (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-warning-600 bg-warning-50 px-[9px] py-[3px] rounded-full">
            ★ Premium
          </span>
        )}
      </div>

      {/* Pricing / Pay */}
      <div className={clsx("font-extrabold text-sm mb-3.5", accentTextClass)}>
        {pay}
        <span className="font-semibold text-neutral-500 text-xs">{paySuffix}</span>
      </div>

      {/* Bottom info row */}
      <div className="flex items-center justify-between gap-3.5 flex-wrap">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-[5px] text-[12px] font-semibold text-neutral-600 bg-neutral-50 border border-solid border-neutral-200 px-[11px] py-[5px] rounded-full">
            <LocationPinIcon className="w-3 h-3 flex-shrink-0" />
            {location}
          </span>
          <span className="inline-flex items-center gap-[5px] text-[12px] font-semibold text-neutral-600 bg-neutral-50 border border-solid border-neutral-200 px-[11px] py-[5px] rounded-full">
            <ListIcon className="w-3 h-3 flex-shrink-0" />
            {category}
          </span>
        </div>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            onApply?.();
          }}
          className={clsx(
            "text-[13px] font-bold text-neutral-0 px-5 py-[9px] rounded-full border-none cursor-pointer whitespace-nowrap transition duration-150 -translate-y-[1px]",
            accentBgClass
          )}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
