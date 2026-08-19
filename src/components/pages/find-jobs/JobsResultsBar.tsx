"use client";

import React from "react";
import { LayoutGrid, List, ChevronDown } from "lucide-react";
import clsx from "clsx";

export type SortOrder = "newest" | "oldest";
export type ViewMode = "grid" | "list";

interface JobsResultsBarProps {
  count: number;
  sort: SortOrder;
  onSortChange: (sort: SortOrder) => void;
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

const JobsResultsBar: React.FC<JobsResultsBarProps> = ({ count, sort, onSortChange, view, onViewChange }) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-3 mb-5 results-bar">
      <h2 className="text-lg font-bold text-neutral-900">
        <span className="text-primary-600 count">{count}</span> job{count === 1 ? "" : "s"} found
      </h2>
      <div className="flex items-center gap-3 results-controls">
        <div className="relative select-pill">
          <select
            aria-label="Sort by date"
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortOrder)}
            className="appearance-none font-body text-[13.5px] font-semibold text-neutral-700 bg-neutral-50 border border-solid border-neutral-200 rounded-full py-2.5 pl-3.5 pr-9 cursor-pointer transition-colors duration-150 hover:border-primary-300 hover:bg-primary-50"
          >
            <option value="newest">Sort by date: Newest first</option>
            <option value="oldest">Sort by date: Oldest first</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-500 pointer-events-none" />
        </div>

        <div className="flex items-center gap-1 bg-neutral-100 rounded-lg p-1 view-toggle" role="group" aria-label="Job layout">
          <button
            type="button"
            onClick={() => onViewChange("grid")}
            aria-label="Grid view"
            aria-pressed={view === "grid"}
            title="Grid view"
            className={clsx(
              "flex items-center justify-center w-[34px] h-[30px] rounded-md border-none cursor-pointer transition-colors duration-150",
              view === "grid" ? "bg-neutral-0 text-primary-600 shadow-sm" : "bg-transparent text-neutral-500 hover:text-neutral-700"
            )}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => onViewChange("list")}
            aria-label="List view"
            aria-pressed={view === "list"}
            title="List view"
            className={clsx(
              "flex items-center justify-center w-[34px] h-[30px] rounded-md border-none cursor-pointer transition-colors duration-150",
              view === "list" ? "bg-neutral-0 text-primary-600 shadow-sm" : "bg-transparent text-neutral-500 hover:text-neutral-700"
            )}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobsResultsBar;
