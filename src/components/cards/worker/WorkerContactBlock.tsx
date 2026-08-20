"use client";

import React from "react";
import { Phone, Mail, Lock, MessageCircle } from "lucide-react";
import clsx from "clsx";
import type { WorkerListing } from "@/constant/findWorkersData";
import { useWorkerUnlock } from "@/context/WorkerUnlockContext";

interface WorkerContactBlockProps {
  worker: WorkerListing;
}

// Contact details stay masked until an employer has an active subscription unlock — enforced
// server-side in production, never just hidden in the UI. This mock build has no auth/billing
// yet, so the state comes from the page's demo unlock filter instead of a real check.
const WorkerContactBlock: React.FC<WorkerContactBlockProps> = ({ worker }) => {
  const { unlocked } = useWorkerUnlock();

  return (
    <div className="flex flex-col gap-3.5 wc-actions-wrap">
      <div className="bg-neutral-50 rounded-md px-4 py-3.5 flex flex-col gap-2.5 wc-contact">
        <h5 className="text-[11px] font-bold text-neutral-500 uppercase tracking-[0.03em]">Contact Detail</h5>
        <div className="flex items-center gap-2.5 text-[13px] font-semibold text-neutral-700 contact-row">
          <Phone className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
          <span className={clsx(!unlocked && "blur-[4px] select-none")}>{worker.phone}</span>
        </div>
        <div className="flex items-center gap-2.5 text-[13px] font-semibold text-neutral-700 contact-row">
          <Mail className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
          <span className={clsx(!unlocked && "blur-[4px] select-none")}>{worker.email}</span>
        </div>
      </div>

      <button
        type="button"
        disabled={!unlocked}
        className={clsx(
          "w-full flex items-center justify-center gap-2 font-body font-semibold text-[13px] rounded-md py-[11px] px-[22px] border-none transition-colors duration-150 message-btn",
          unlocked ? "text-neutral-0 bg-primary-500 hover:bg-primary-600 cursor-pointer" : "text-neutral-500 bg-neutral-100 cursor-not-allowed"
        )}
      >
        {unlocked ? <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" /> : <Lock className="w-3.5 h-3.5 flex-shrink-0" />}
        {unlocked ? `Message ${worker.name}` : "Message"}
      </button>
    </div>
  );
};

export default WorkerContactBlock;
