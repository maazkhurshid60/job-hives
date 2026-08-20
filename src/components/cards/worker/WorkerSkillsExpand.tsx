"use client";

import React, { useState } from "react";
import { Lock, Check, ChevronDown } from "lucide-react";
import clsx from "clsx";
import type { WorkerListing } from "@/constant/findWorkersData";
import { useWorkerUnlock } from "@/context/WorkerUnlockContext";

interface WorkerSkillsExpandProps {
  worker: WorkerListing;
}

const WorkerSkillsExpand: React.FC<WorkerSkillsExpandProps> = ({ worker }) => {
  const [open, setOpen] = useState(false);
  const { unlocked } = useWorkerUnlock();

  return (
    <div className="flex flex-col gap-3 worker-expand-wrap">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-1 text-[12.5px] font-semibold text-primary-600 bg-none border-none cursor-pointer px-0.5 py-1 self-start whitespace-nowrap view-more-link"
      >
        {open ? "Hide Experience & Skills" : "View Experience & Skills"}
        <ChevronDown className={clsx("w-3 h-3 transition-transform duration-200", open && "rotate-180")} />
      </button>

      {open && (
        <div className="flex flex-col gap-4 worker-expand">
          <div className="flex flex-col gap-3 exp-list">
            {worker.experience.slice(0, 2).map((exp) => (
              <div key={exp.title} className="flex flex-col gap-0.5 pb-3 border-b border-solid border-neutral-100 last:border-b-0 last:pb-0 exp-entry">
                <div className="text-[13.5px] font-bold text-neutral-900 exp-title">{exp.title}</div>
                <div className="text-xs text-neutral-500 exp-meta">
                  {exp.employer} · {exp.period} · {exp.duration}
                </div>
                <div className="text-[12.5px] text-neutral-600 mt-1 leading-normal exp-desc">{exp.description}</div>
              </div>
            ))}
          </div>

          <div className="skills-block">
            <h5 className="text-xs font-bold text-neutral-500 uppercase tracking-[0.04em] mb-2">Verified Skills</h5>
            <div className="flex flex-wrap gap-1.5 skills-row">
              {worker.verifiedSkills.map((name) => (
                <span
                  key={name}
                  className={clsx(
                    "text-xs font-semibold px-3 py-1.5 rounded-full inline-flex items-center gap-1 skill-chip",
                    unlocked ? "bg-primary-50 text-primary-700 border border-solid border-primary-100" : "bg-neutral-100 text-neutral-500 border border-solid border-neutral-200"
                  )}
                >
                  {unlocked ? <Check className="w-2.5 h-2.5" strokeWidth={3} /> : <Lock className="w-2.5 h-2.5" />}
                  {unlocked ? name : "Verified skill"}
                </span>
              ))}
            </div>
            {!unlocked && <p className="text-[11px] text-neutral-400 mt-1.5">Requires an active subscription to reveal.</p>}
          </div>

          <div className="skills-block">
            <h5 className="text-xs font-bold text-neutral-500 uppercase tracking-[0.04em] mb-2">Self-Reported Skills</h5>
            <div className="flex flex-wrap gap-1.5 skills-row">
              {worker.selfReportedSkills.map((name) => (
                <span key={name} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-700 skill-chip">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkerSkillsExpand;
