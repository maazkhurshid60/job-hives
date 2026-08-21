"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BadgeCheck, Bookmark, Clock, CalendarDays, Lock, MessageCircle, ArrowRight } from "lucide-react";
import clsx from "clsx";
import type { WorkerListing } from "@/constant/findWorkersData";
import FlagIcon from "@/components/icons/FlagIcon";
import WorkerStatsStrip from "@/components/cards/worker/WorkerStatsStrip";
import WorkerAvatar from "@/components/cards/worker/WorkerAvatar";
import { useWorkerUnlock } from "@/context/WorkerUnlockContext";

interface SimilarWorkerCardProps {
  worker: WorkerListing;
}

// A trimmed-down worker card for the similar-workers slider — same header/stats/intro as the
// full card, but only the Message + View Details actions instead of the full skills/contact block.
const SimilarWorkerCard: React.FC<SimilarWorkerCardProps> = ({ worker }) => {
  const href = `/worker/${worker.id}`;
  const [saved, setSaved] = useState(false);
  const { unlocked } = useWorkerUnlock();

  return (
    <div className="h-full bg-neutral-0 border border-solid border-neutral-200 rounded-2xl p-5 flex flex-col gap-4 transition-all duration-200 hover:shadow-lg hover:border-primary-200 worker-card">
      <div className="flex items-start gap-3 wc-top">
        <WorkerAvatar worker={worker} size={60} />
        <div className="flex-1 min-w-0 wc-id">
          <div className="flex items-center gap-1.5 flex-wrap wc-name-row">
            <h3 className="font-bold text-[16.5px] text-neutral-900 name">
              <Link href={href} className="hover:underline">
                {worker.name}
              </Link>
            </h3>
            {worker.isVerified && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-success-600 bg-success-50 rounded-full pl-1.5 pr-2 py-0.5 verified-badge">
                <BadgeCheck className="w-3 h-3" />
                Verified
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 mt-0.5 wc-location">
            <FlagIcon countryCode={worker.countryCode} className="w-3.5 h-2.5" />
            {worker.city}, {worker.country}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setSaved((v) => !v)}
          aria-label={saved ? "Remove from shortlist" : "Add to shortlist"}
          aria-pressed={saved}
          className={clsx(
            "flex-shrink-0 w-[34px] h-[34px] rounded-full border border-solid flex items-center justify-center cursor-pointer transition-all duration-150 shortlist-btn",
            saved ? "bg-primary-50 border-primary-300 text-primary-600" : "bg-neutral-0 border-neutral-200 text-neutral-400 hover:border-primary-300 hover:text-primary-500"
          )}
        >
          <Bookmark className="w-4 h-4" fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      <WorkerStatsStrip worker={worker} />

      <p className="text-sm text-neutral-700 leading-normal worker-intro">{worker.intro}</p>

      <div className="flex flex-col gap-1 text-[12.5px] text-neutral-500 worker-signals">
        <span className="flex items-center gap-1.5 text-success-600 font-semibold response-time">
          <Clock className="w-3.5 h-3.5" />
          {worker.responseTimeLabel}
        </span>
        <span className="flex items-center gap-1.5 joined">
          <CalendarDays className="w-3.5 h-3.5" />
          {worker.joinedLabel}
        </span>
      </div>

      <div className="flex items-center gap-2 mt-auto">
        <button
          type="button"
          disabled={!unlocked}
          className={clsx(
            "flex-1 flex items-center justify-center gap-1.5 font-body font-semibold text-[13px] rounded-md py-2.5 px-[18px] border-none transition-colors duration-150",
            unlocked ? "text-neutral-0 bg-primary-500 hover:bg-primary-600 cursor-pointer" : "text-neutral-500 bg-neutral-100 cursor-not-allowed"
          )}
        >
          {unlocked ? <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" /> : <Lock className="w-3.5 h-3.5 flex-shrink-0" />}
          Message
        </button>
        <Link
          href={href}
          className="flex-1 flex items-center justify-center gap-1.5 font-body font-semibold text-[13px] text-primary-600 border border-solid border-primary-500 rounded-md py-2.5 px-[18px] hover:bg-primary-50 transition-colors duration-150"
        >
          View Details
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};

export default SimilarWorkerCard;
