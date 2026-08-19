import React from "react";
import { Languages } from "lucide-react";
import { type JobListing, getCategoryIcon, getPlatformIcon } from "@/constant/findJobsData";
import FlagIcon from "@/components/icons/FlagIcon";

interface JobDetailHeaderProps {
  job: JobListing;
}

const JobDetailHeader: React.FC<JobDetailHeaderProps> = ({ job }) => {
  const CategoryIcon = getCategoryIcon(job.categoryKey);

  return (
    <div className="bg-neutral-0 border border-solid border-neutral-200 rounded-lg p-7 mb-6 detail-header">
      <span className="text-xs font-bold text-primary-700 bg-primary-50 rounded-full px-2.5 py-1 inline-flex items-center gap-1.5 mb-3.5 cat-chip">
        <CategoryIcon className="w-3.5 h-3.5" /> {job.categoryLabel}
      </span>
      <h1 className="font-heading text-[clamp(22px,3vw,28px)] leading-[1.3] text-neutral-900 mb-2.5">{job.title}</h1>
      <div className="text-[14.5px] text-neutral-600 flex items-center gap-2 flex-wrap mb-4 employer-row">
        {job.employer} <span className="w-[3px] h-[3px] rounded-full bg-neutral-400 dot-sep" /> {job.type}
        <span className="w-[3px] h-[3px] rounded-full bg-neutral-400 dot-sep" /> {job.postedLabel}
      </div>
      <div className="text-[19px] font-bold text-success-600 mb-4 comp-lg">{job.compensation}</div>
      <div className="flex flex-wrap gap-1.5 mb-2 platform-tags">
        {job.platforms.map((name) => {
          const PlatformIcon = getPlatformIcon(name);
          return (
            <span key={name} className="text-[11.5px] font-semibold text-neutral-700 bg-neutral-100 rounded-full px-2.5 py-1 inline-flex items-center gap-1 tag">
              <PlatformIcon className="w-3 h-3" /> {name}
            </span>
          );
        })}
      </div>
      <div className="flex items-center gap-4.5 mt-4 pt-4 border-t border-solid border-neutral-100 text-[13px] text-neutral-500 flex-wrap meta-row">
        <span className="flex items-center gap-1.5">
          <Languages className="w-3.5 h-3.5" /> {job.language} required
        </span>
        <span className="flex items-center gap-1.5">
          <FlagIcon countryCode={job.countryCode} /> {job.location}
        </span>
      </div>
    </div>
  );
};

export default JobDetailHeader;
