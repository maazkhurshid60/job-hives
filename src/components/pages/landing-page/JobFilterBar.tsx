import React from "react";
import clsx from "clsx";

export type JobFilter = "latest" | "premium";

interface JobFilterBarProps {
  activeFilter: JobFilter;
  onFilterChange: (filter: JobFilter) => void;
}

const JobFilterBar: React.FC<JobFilterBarProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex items-center max-[520px]:items-start justify-between gap-4 mb-5 flex-wrap jobs-main-head">
      <h3 className="text-lg font-extrabold text-neutral-900">Recommended Jobs</h3>
      <div className="flex gap-2 filter-pills">
        <button
          onClick={() => onFilterChange("latest")}
          className={clsx(
            "text-xs font-bold px-5 py-[9px] rounded-full cursor-pointer transition duration-150 border border-solid select-none filter-pill",
            activeFilter === "latest"
              ? "bg-primary-500 border-primary-500 text-neutral-0 shadow-sm is-active"
              : "bg-neutral-0 border-neutral-200 text-neutral-700 hover:border-primary-300 hover:text-primary-700 is-outline"
          )}
        >
          Latest Job
        </button>
        <button
          onClick={() => onFilterChange("premium")}
          className={clsx(
            "text-xs font-bold px-5 py-[9px] rounded-full cursor-pointer transition duration-150 border border-solid select-none filter-pill",
            activeFilter === "premium"
              ? "bg-primary-500 border-primary-500 text-neutral-0 shadow-sm is-active"
              : "bg-neutral-0 border-neutral-200 text-neutral-700 hover:border-primary-300 hover:text-primary-700 is-outline"
          )}
        >
          Premium Jobs
        </button>
      </div>
    </div>
  );
};

export default JobFilterBar;
