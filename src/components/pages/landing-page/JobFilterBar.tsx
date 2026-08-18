import React from "react";
import SegmentedTabs from "@/components/tabs/SegmentedTabs";

export type JobFilter = "latest" | "premium";

interface JobFilterBarProps {
  activeFilter: JobFilter;
  onFilterChange: (filter: JobFilter) => void;
}

const JobFilterBar: React.FC<JobFilterBarProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex items-center max-[520px]:items-start justify-between gap-4 mb-5 flex-wrap jobs-main-head">
      <h3 className="text-lg font-extrabold text-neutral-900">Recommended Jobs</h3>
      <SegmentedTabs
        size="sm"
        options={[
          { value: "latest", label: "Latest Job" },
          { value: "premium", label: "Premium Jobs" },
        ]}
        value={activeFilter}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default JobFilterBar;
