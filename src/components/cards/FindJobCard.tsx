"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bookmark, Sparkles, Users } from "lucide-react";
import clsx from "clsx";
import type { JobListing } from "@/constant/findJobsData";
import FlagIcon from "@/components/icons/FlagIcon";

interface FindJobCardProps {
  job: JobListing;
  isList?: boolean;
  /** Cycles the card's background between a light brand tint and a greyish tint. */
  variantIndex?: number;
}

// Only two color families, per the brand: light primary tint, and greyish neutral tint.
const CARD_BG_VARIANTS = ["bg-primary-50", "bg-neutral-100", "bg-primary-100", "bg-neutral-50"];

const FindJobCard: React.FC<FindJobCardProps> = ({ job, isList = false, variantIndex = 0 }) => {
  const href = `/job/${job.id}`;
  const [saved, setSaved] = useState(false);

  const tags = [job.type, job.categoryLabel, ...job.software.slice(0, 1)].filter(Boolean).slice(0, 3);
  const bgClass = CARD_BG_VARIANTS[variantIndex % CARD_BG_VARIANTS.length];

  return (
    <div
      className={clsx(
        "relative h-full rounded-2xl overflow-hidden border-2 border-solid flex flex-col transition-all duration-200 hover:shadow-lg  job-card",
        isList && "min-[1120px]:flex-row",
        job.isPremium ? "border-warning-400" : "border-neutral-200/70",
        bgClass
      )}
    >
      <Link href={href} aria-label={`View job: ${job.title}`} className="absolute inset-0 z-[1] job-card-link" />

      <div className={clsx("relative z-[2] flex flex-col gap-3.5 p-5 pb-4 flex-1", isList && "min-[1120px]:pb-5")}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-semibold text-neutral-700 bg-neutral-0 rounded-full px-3 py-1.5 shadow-sm whitespace-nowrap posted">
              {job.postedLabel.replace(/^Posted /, "")}
            </span>
            {job.isPremium && (
              <span className="text-xs font-bold text-warning-700 bg-warning-50 rounded-full px-2.5 py-1.5 shadow-sm whitespace-nowrap inline-flex items-center gap-1 featured-badge">
                <Sparkles className="w-3 h-3" /> Featured
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => setSaved((v) => !v)}
            aria-label={saved ? "Remove from saved jobs" : "Save job"}
            aria-pressed={saved}
            className="pointer-events-auto relative z-[2] w-8 h-8 rounded-full bg-neutral-0 shadow-sm flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors duration-150 flex-shrink-0"
          >
            <Bookmark className="w-4 h-4" fill={saved ? "currentColor" : "none"} />
          </button>
        </div>

        <div className="min-w-0">
          <div className="text-[13px] text-neutral-600 mb-1 employer">{job.employer}</div>
          <h3 className={clsx("text-[19px] font-bold text-neutral-900 leading-snug", !isList && "line-clamp-2")}>
            <Link href={href} className="pointer-events-auto relative z-[2] hover:underline">
              {job.title}
            </Link>
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5 tags">
          {tags.map((tag) => (
            <span key={tag} className="text-[11.5px] font-semibold text-neutral-700 bg-neutral-0/70 border border-solid border-neutral-0 rounded-full px-2.5 py-1 tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1 text-[11.5px] font-medium text-neutral-600 applicants">
          <Users className="w-3 h-3" />
          {job.applicantCount} applicants
        </div>
      </div>

      <div
        className={clsx(
          "relative z-[2] bg-neutral-0 px-5 py-4 flex items-center justify-between gap-3",
          isList && "min-[1120px]:flex-col min-[1120px]:items-end min-[1120px]:justify-center min-[1120px]:w-[220px] min-[1120px]:flex-shrink-0 min-[1120px]:gap-2 min-[1120px]:text-right"
        )}
      >
        <div>
          <div className="text-base font-bold text-neutral-900 comp">{job.compensationShort}</div>
          <div className={clsx("text-xs text-neutral-500 loc flex items-center justify-start gap-1.5", isList && "min-[1120px]:justify-end")}>
            <FlagIcon countryCode={job.countryCode} />
            {job.location}
            <span className="w-[3px] h-[3px] rounded-full bg-neutral-400 flex-shrink-0" />
            {job.language}
          </div>
        </div>
        <Link
          href={href}
          className="pointer-events-auto relative z-[2] text-xs font-bold text-neutral-0 bg-neutral-900 px-4 py-2.5 rounded-full whitespace-nowrap hover:bg-neutral-800 transition-colors duration-150"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default FindJobCard;
