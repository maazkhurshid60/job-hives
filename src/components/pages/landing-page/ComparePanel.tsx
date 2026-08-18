import React from "react";
import clsx from "clsx";
import CardHeading from "@/components/pages/typography/CardHeading";
import CardDesc from "@/components/pages/typography/CardDesc";
import { CheckIcon, XCircleIcon } from "@/components/icons/CommonIcons";
import type { ComparePanelData } from "@/constant/compareData";

interface ComparePanelProps {
  data: ComparePanelData;
}

const ComparePanel: React.FC<ComparePanelProps> = ({ data }) => {
  const isNew = data.variant === "new";
  const Icon = isNew ? CheckIcon : XCircleIcon;

  return (
    <div
      className={clsx(
        "rounded-xl py-9 px-8 max-[520px]:py-7 max-[520px]:px-[22px] flex flex-col justify-between compare-panel",
        isNew
          ? "bg-neutral-0 border-2 border-solid border-primary-300 shadow-lg relative new"
          : "bg-neutral-50 border border-solid border-neutral-200 old"
      )}
    >
      <div>
        <div
          className={clsx(
            "flex items-center justify-between pb-5 border-b mb-6 compare-head",
            isNew ? "border-primary-100" : "border-neutral-200"
          )}
        >
          <div className="flex items-center gap-3 text-[19px] font-extrabold text-neutral-900 compare-title">
            <span
              className={clsx(
                "w-[34px] h-[34px] rounded-full border-[1.5px] border-solid flex items-center justify-center flex-shrink-0 badge-icon",
                isNew ? "border-primary-400 text-primary-500" : "border-neutral-300 text-neutral-400"
              )}
            >
              <Icon className="w-[18px] h-[18px]" />
            </span>
            {data.badgeLabel}
          </div>
          {data.speedBadge && (
            <span className="bg-primary-50 text-primary-700 text-xs font-bold px-3.5 py-1.5 rounded-full whitespace-nowrap speed-badge">
              {data.speedBadge}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-5 mb-6 compare-list">
          {data.items.map((item, idx) => (
            <div key={idx} className="flex gap-3 compare-item">
              <Icon className={clsx("w-5 h-5 mt-0.5 flex-shrink-0 ic", isNew ? "text-primary-500" : "text-neutral-400")} />
              <div>
                <CardHeading className="text-[15px] font-bold mb-1">{item.title}</CardHeading>
                <CardDesc className={clsx("text-[13px]", isNew ? "text-neutral-600" : "text-neutral-400")}>
                  {item.desc}
                </CardDesc>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={clsx(
          "flex flex-col min-[521px]:flex-row gap-4 min-[521px]:gap-8 pt-5 border-t border-solid compare-stats",
          isNew ? "border-primary-100" : "border-neutral-200"
        )}
      >
        {data.stats.map((stat, idx) => (
          <div key={idx} className="compare-stat">
            <div className="text-[11px] font-bold tracking-wider uppercase text-neutral-400 mb-1.5 label">
              {stat.label}
            </div>
            <div className={clsx("text-[17px] font-extrabold leading-tight value", isNew ? "text-neutral-900" : "text-neutral-600")}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparePanel;
