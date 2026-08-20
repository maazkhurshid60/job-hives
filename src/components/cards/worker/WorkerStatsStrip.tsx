import React from "react";
import type { WorkerListing } from "@/constant/findWorkersData";

interface WorkerStatsStripProps {
  worker: WorkerListing;
}

const WorkerStatsStrip: React.FC<WorkerStatsStripProps> = ({ worker }) => {
  const stats = [
    { label: "Employment", value: worker.employmentType },
    { label: "Languages", value: worker.languagesShort },
    { label: "Top Skill", value: worker.topSkill },
    { label: "Experience", value: worker.experienceLabel },
  ];

  return (
    <div className="flex items-stretch bg-neutral-50 rounded-md py-[11px] wc-stats">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`flex-1 min-w-0 flex flex-col items-center gap-[3px] px-1.5 text-center wc-stat ${i > 0 ? "border-l border-solid border-neutral-200" : ""}`}
        >
          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.03em] whitespace-nowrap wc-stat-label">{stat.label}</span>
          <span className="text-[12.5px] font-bold text-neutral-900 leading-tight wc-stat-value">{stat.value}</span>
        </div>
      ))}
    </div>
  );
};

export default WorkerStatsStrip;
