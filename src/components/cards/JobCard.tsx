"use client";

import React from "react";
import CardHeading from "@/components/pages/typography/CardHeading";
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
        <svg
          viewBox="0 0 24 24"
          fill={isSaved ? "currentColor" : "none"}
          stroke={isSaved ? "none" : "currentColor"}
          strokeWidth="2"
          className="w-4 h-4"
        >
          <path d="M12 21s-7.5-4.6-10-9.3C.5 8.4 2.2 5 5.6 5c2 0 3.4 1 6.4 4 3-3 4.4-4 6.4-4 3.4 0 5.1 3.4 3.6 6.7C19.5 16.4 12 21 12 21z" />
        </svg>
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
            <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {location}
          </span>
          <span className="inline-flex items-center gap-[5px] text-[12px] font-semibold text-neutral-600 bg-neutral-50 border border-solid border-neutral-200 px-[11px] py-[5px] rounded-full">
            <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
            </svg>
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
