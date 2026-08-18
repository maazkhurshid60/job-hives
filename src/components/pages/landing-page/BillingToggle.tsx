import React from "react";
import clsx from "clsx";
import type { BillingPeriod } from "@/constant/pricingData";

interface BillingToggleProps {
  billing: BillingPeriod;
  onChange: (billing: BillingPeriod) => void;
}

const BillingToggle: React.FC<BillingToggleProps> = ({ billing, onChange }) => {
  return (
    <div className="flex flex-col items-center gap-2.5 mb-10 billing-toggle">
      <div className="flex items-center gap-3">
        <span className={clsx("text-sm font-semibold transition-colors", billing === "monthly" ? "text-neutral-900" : "text-neutral-400")}>
          Monthly
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={billing === "yearly"}
          onClick={() => onChange(billing === "monthly" ? "yearly" : "monthly")}
          className={clsx(
            "relative w-[52px] h-7 rounded-full transition-colors duration-200 cursor-pointer",
            billing === "yearly" ? "bg-primary-500" : "bg-neutral-300"
          )}
        >
          <span
            className={clsx(
              "absolute top-1 left-1 w-5 h-5 rounded-full bg-neutral-0 shadow-sm transition-transform duration-200",
              billing === "yearly" && "translate-x-[22px]"
            )}
          />
        </button>
        <span className={clsx("text-sm font-semibold transition-colors", billing === "yearly" ? "text-neutral-900" : "text-neutral-400")}>
          Yearly
        </span>
        <span className="text-[11px] font-extrabold text-danger-600 bg-danger-50 px-2.5 py-1 rounded-full whitespace-nowrap">
          SAVE
        </span>
      </div>
      <p className="text-[13.5px] text-neutral-500">Save more when you commit to a yearly plan.</p>
    </div>
  );
};

export default BillingToggle;
