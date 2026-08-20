"use client";

import React from "react";
import { Check, Lock } from "lucide-react";
import clsx from "clsx";
import type { WorkerListing } from "@/constant/findWorkersData";
import { useWorkerUnlock } from "@/context/WorkerUnlockContext";

interface WorkerDetailBodyProps {
  worker: WorkerListing;
}

const WorkerDetailBody: React.FC<WorkerDetailBodyProps> = ({ worker }) => {
  const { unlocked } = useWorkerUnlock();

  return (
    <div className="bg-neutral-0 border border-solid border-neutral-200 rounded-lg p-7 profile-body">
      <h2 className="font-heading text-[17px] text-neutral-900 mb-3.5">Work Experience</h2>
      {worker.experience.map((exp) => (
        <div key={exp.title} className="flex flex-col gap-0.5 pb-4 mb-4 border-b border-solid border-neutral-100 last:border-b-0 last:pb-0 last:mb-0 exp-entry">
          <div className="text-[14.5px] font-bold text-neutral-900 exp-title">{exp.title}</div>
          <div className="text-xs text-neutral-500 mt-0.5 exp-meta">
            {exp.employer} · {exp.period} · <span className="font-semibold text-primary-600 exp-duration">{exp.duration}</span>
          </div>
          <div className="text-[13.5px] text-neutral-600 mt-1.5 leading-relaxed exp-desc">{exp.description}</div>
        </div>
      ))}

      <h2 className="font-heading text-[17px] text-neutral-900 mt-7 mb-3.5">Skills</h2>
      <div className="skills-block">
        <h5 className="text-xs font-bold text-neutral-500 uppercase tracking-[0.04em] mb-2.5">Verified Skills</h5>
        <div className="flex flex-wrap gap-1.5 skills-row">
          {worker.verifiedSkills.map((name) => (
            <span
              key={name}
              className={clsx(
                "text-[12.5px] font-semibold px-3 py-1.5 rounded-full inline-flex items-center gap-1 skill-chip",
                unlocked ? "bg-success-50 text-success-600" : "bg-neutral-100 text-neutral-500 border border-solid border-neutral-200"
              )}
            >
              {unlocked ? <Check className="w-2.5 h-2.5" strokeWidth={3} /> : <Lock className="w-2.5 h-2.5" />}
              {unlocked ? name : "Verified skill"}
            </span>
          ))}
        </div>
        {!unlocked && <p className="text-[11px] text-neutral-400 mt-1.5">Requires an active subscription to reveal.</p>}
      </div>
      <div className="skills-block mt-4">
        <h5 className="text-xs font-bold text-neutral-500 uppercase tracking-[0.04em] mb-2.5">Self-Reported Skills</h5>
        <div className="flex flex-wrap gap-1.5 skills-row">
          {worker.selfReportedSkills.map((name) => (
            <span
              key={name}
              className={clsx(
                "text-[12.5px] font-semibold px-3 py-1.5 rounded-full inline-flex items-center gap-1 skill-chip",
                unlocked ? "bg-neutral-100 text-neutral-700" : "bg-neutral-100 text-neutral-500 border border-solid border-neutral-200"
              )}
            >
              {!unlocked && <Lock className="w-2.5 h-2.5" />}
              {unlocked ? name : "Self-reported skill"}
            </span>
          ))}
        </div>
        {!unlocked && <p className="text-[11px] text-neutral-400 mt-1.5">Requires an active subscription to reveal.</p>}
      </div>
    </div>
  );
};

export default WorkerDetailBody;
