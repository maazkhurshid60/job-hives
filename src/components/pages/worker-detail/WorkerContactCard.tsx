"use client";

import React from "react";
import clsx from "clsx";
import { Lock, MessageCircle, Phone } from "lucide-react";
import type { WorkerListing } from "@/constant/findWorkersData";
import { useWorkerUnlock } from "@/context/WorkerUnlockContext";

interface WorkerContactCardProps {
  worker: WorkerListing;
  className?: string;
}

// Contact/message actions stay locked until an employer has an active subscription unlock —
// enforced server-side in a real build. This mock build has no auth/billing yet, so the state
// comes from the page's demo unlock filter instead of a real check.
const WorkerContactCard: React.FC<WorkerContactCardProps> = ({ worker, className }) => {
  const { unlocked } = useWorkerUnlock();

  const facts = [
    { label: "Employment type", value: worker.employmentType },
    { label: "Languages", value: worker.languages.join(", ") },
    { label: "Top skill", value: worker.topSkill },
    { label: "Experience", value: `${worker.experienceYears} years` },
    { label: "Response time", value: worker.responseTimeLabel.replace(/^Usually replies within /, "") },
    { label: "Joined", value: worker.joinedLabel.replace(/^Joined /, "") },
  ];

  return (
    <aside className={clsx("bg-neutral-0 border border-solid border-neutral-200 rounded-lg p-6 min-[1024px]:self-start min-[1024px]:sticky min-[1024px]:top-[92px] contact-card", className)}>
      <button
        type="button"
        disabled={!unlocked}
        className={clsx(
          "w-full mb-2.5 flex items-center justify-center gap-2 font-body font-semibold text-base rounded-md py-[15px] px-[30px] border-none transition-colors duration-150 message-btn",
          unlocked ? "text-neutral-0 bg-primary-500 hover:bg-primary-600 cursor-pointer" : "text-neutral-500 bg-neutral-100 cursor-not-allowed"
        )}
      >
        {unlocked ? <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" /> : <Lock className="w-3.5 h-3.5 flex-shrink-0" />}
        {unlocked ? `Message ${worker.name}` : "Message"}
      </button>
      <button
        type="button"
        disabled={!unlocked}
        className={clsx(
          "w-full mb-1 flex items-center justify-center gap-2 font-body font-semibold text-sm rounded-md py-[11px] px-[22px] border-none transition-colors duration-150 contact-btn",
          unlocked ? "text-primary-700 bg-primary-50 hover:bg-primary-100 cursor-pointer" : "text-neutral-500 bg-neutral-100 cursor-not-allowed"
        )}
      >
        {unlocked ? <Phone className="w-3.5 h-3.5 flex-shrink-0" /> : <Lock className="w-3.5 h-3.5 flex-shrink-0" />}
        {unlocked ? "View Contact Details" : "Contact Details"}
      </button>
      {unlocked ? (
        <div className="text-[13px] font-semibold text-neutral-800 bg-primary-50 rounded-md px-3.5 py-3 mb-4 flex flex-col gap-1.5">
          <span>{worker.phone}</span>
          <span>{worker.email}</span>
        </div>
      ) : (
        <p className="text-[11.5px] text-neutral-400 text-center mb-4 lock-note">Requires an active subscription with unused unlock credits.</p>
      )}

      <div className="text-[13px] text-neutral-600 facts">
        {facts.map((fact) => (
          <div key={fact.label} className="flex justify-between py-2 border-b border-solid border-neutral-100 last:border-b-0">
            <span className="text-neutral-500">{fact.label}</span>
            <span className="font-semibold text-neutral-800 text-right">{fact.value}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default WorkerContactCard;
