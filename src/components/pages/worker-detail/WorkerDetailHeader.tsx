"use client";

import React, { useState } from "react";
import { BadgeCheck, Bookmark, Clock, CalendarDays } from "lucide-react";
import clsx from "clsx";
import type { WorkerListing } from "@/constant/findWorkersData";
import FlagIcon from "@/components/icons/FlagIcon";
import WorkerAvatar from "@/components/cards/worker/WorkerAvatar";

interface WorkerDetailHeaderProps {
  worker: WorkerListing;
}

const WorkerDetailHeader: React.FC<WorkerDetailHeaderProps> = ({ worker }) => {
  const [saved, setSaved] = useState(false);

  return (
    <div className="bg-neutral-0 border border-solid border-neutral-200 rounded-lg p-7 mb-6 profile-header">
      <div className="flex items-start gap-4 profile-head-row">
        <WorkerAvatar worker={worker} size={76} className="profile-avatar" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap profile-name-row">
            <span className="text-[22px] font-extrabold text-neutral-900 name">{worker.name}</span>
            <FlagIcon countryCode={worker.countryCode} className="w-5 h-3.5" />
            {worker.isVerified && (
              <span className="inline-flex items-center gap-1 text-[11.5px] font-bold text-success-600 bg-success-50 rounded-full pl-1.5 pr-2.5 py-1 verified-badge">
                <BadgeCheck className="w-3 h-3" />
                Verified
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-4 mt-2 text-[13px] text-neutral-500 profile-signals">
            <span className="flex items-center gap-1.5 text-success-600 font-semibold response-time">
              <Clock className="w-3.5 h-3.5" />
              {worker.responseTimeLabel}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5" />
              {worker.joinedLabel}
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setSaved((v) => !v)}
          aria-label={saved ? "Remove from shortlist" : "Add to shortlist"}
          aria-pressed={saved}
          className={clsx(
            "ml-auto flex-shrink-0 w-[38px] h-[38px] rounded-full border border-solid flex items-center justify-center cursor-pointer transition-all duration-150 shortlist-btn",
            saved ? "bg-primary-50 border-primary-300 text-primary-600" : "bg-neutral-0 border-neutral-200 text-neutral-400 hover:border-primary-300 hover:text-primary-500"
          )}
        >
          <Bookmark className="w-[17px] h-[17px]" fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      <p className="text-[14.5px] text-neutral-700 mt-4.5 leading-relaxed profile-intro">{worker.intro}</p>

      <div className="flex flex-wrap items-center gap-y-1 text-xs text-neutral-500 font-semibold mt-4 pt-4 border-t border-solid border-neutral-100 quick-facts">
        <span>{worker.employmentType}</span>
        <span className="mx-2 text-neutral-300 qf-sep">·</span>
        <span>{worker.languages.join(", ")}</span>
        <span className="mx-2 text-neutral-300 qf-sep">·</span>
        <span>Top skill: {worker.topSkill}</span>
        <span className="mx-2 text-neutral-300 qf-sep">·</span>
        <span>{worker.experienceYears} yrs experience</span>
      </div>
    </div>
  );
};

export default WorkerDetailHeader;
