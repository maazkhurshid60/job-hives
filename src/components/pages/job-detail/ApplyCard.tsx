"use client";

import React, { useState } from "react";
import clsx from "clsx";
import type { JobListing } from "@/constant/findJobsData";

interface ApplyCardProps {
  job: JobListing;
  className?: string;
}

const ApplyCard: React.FC<ApplyCardProps> = ({ job, className }) => {
  const [applied, setApplied] = useState(false);
  const [saved, setSaved] = useState(false);

  const facts = [
    { label: "Employment type", value: job.type },
    { label: "Compensation", value: job.compensationShort },
    { label: "Language", value: job.language },
    { label: "Location", value: job.location },
    { label: "Posted", value: job.postedLabel.replace(/^Posted /, "") },
  ];

  return (
    <aside className={clsx("bg-neutral-0 border border-solid border-neutral-200 rounded-lg p-6 min-[1024px]:self-start min-[1024px]:sticky min-[1024px]:top-[92px] apply-card", className)}>
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-solid border-neutral-100 employer-mini">
        <div className="w-11 h-11 rounded-full bg-[linear-gradient(160deg,var(--primary-400),var(--primary-600))] flex-shrink-0 flex items-center justify-center text-neutral-0 font-bold text-base avatar">
          {job.employer.charAt(0)}
        </div>
        <div>
          <h4 className="text-[14.5px] font-heading text-neutral-900">{job.employer}</h4>
          <p className="text-[12.5px] text-neutral-500">{job.categoryLabel}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setApplied(true)}
        disabled={applied}
        className={clsx(
          "w-full mb-3 font-body font-semibold text-base rounded-md py-[15px] px-[30px] border-none cursor-pointer transition-all duration-150",
          applied ? "bg-success-50 text-success-600 cursor-default" : "bg-primary-500 text-neutral-0 shadow-sm hover:bg-primary-600 hover:-translate-y-0.5"
        )}
      >
        {applied ? "Application Sent ✓" : "Apply Now"}
      </button>
      <button
        type="button"
        onClick={() => setSaved((prev) => !prev)}
        className={clsx(
          "w-full mb-3 font-body font-semibold text-sm rounded-md py-[11px] px-[22px] border-[1.5px] border-solid cursor-pointer transition-colors duration-150",
          saved ? "bg-primary-50 border-primary-600 text-primary-700" : "bg-neutral-0 border-primary-500 text-primary-600 hover:bg-primary-50"
        )}
      >
        {saved ? "Saved ✓" : "Save Job"}
      </button>

      <div className="text-[13px] text-neutral-600 facts">
        {facts.map((fact) => (
          <div key={fact.label} className="flex justify-between py-2 border-b border-solid border-neutral-100 last:border-b-0">
            <span className="text-neutral-500">{fact.label}</span>
            <span className="font-semibold text-neutral-800">{fact.value}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ApplyCard;
