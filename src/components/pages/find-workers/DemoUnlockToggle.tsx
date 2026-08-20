"use client";

import React from "react";
import clsx from "clsx";
import { useWorkerUnlock } from "@/context/WorkerUnlockContext";

const DemoUnlockToggle: React.FC = () => {
  const { unlocked, toggle } = useWorkerUnlock();

  return (
    <div className="max-w-[980px] mx-auto px-1 demo-toggle">
      <div className="flex items-center justify-between gap-3 flex-wrap bg-warning-50 border border-solid border-[#fde3b0] rounded-md px-4 py-3 text-[13px] text-neutral-700 demo-toggle-inner">
        <span>
          Preview as: <b className="text-neutral-900">{unlocked ? "Employer with an active unlock" : "Employer without an active unlock"}</b>
        </span>
        <span
          role="switch"
          tabIndex={0}
          aria-checked={unlocked}
          onClick={toggle}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggle();
            }
          }}
          className="inline-flex items-center gap-2 cursor-pointer select-none demo-switch"
        >
          <span className={clsx("w-[38px] h-[22px] rounded-full relative flex-shrink-0 transition-colors duration-150 track", unlocked ? "bg-success-500" : "bg-neutral-300")}>
            <span
              className={clsx(
                "absolute top-0.5 left-0.5 w-[18px] h-[18px] rounded-full bg-neutral-0 shadow-sm transition-transform duration-150 thumb",
                unlocked && "translate-x-4"
              )}
            />
          </span>
          Simulate unlocked contact access
        </span>
      </div>
    </div>
  );
};

export default DemoUnlockToggle;
