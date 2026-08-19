import React from "react";
import type { JobListing } from "@/constant/findJobsData";

interface JobDetailBodyProps {
  job: JobListing;
}

const JobDetailBody: React.FC<JobDetailBodyProps> = ({ job }) => {
  return (
    <div className="bg-neutral-0 border border-solid border-neutral-200 rounded-lg p-7 detail-body">
      <h2 className="font-heading text-[17px] text-neutral-900 mb-3">About the role</h2>
      <p className="text-neutral-600 text-[14.5px] mb-2.5">{job.about}</p>

      <h2 className="font-heading text-[17px] text-neutral-900 mt-7 mb-3">Responsibilities</h2>
      <ul className="text-neutral-600 text-[14.5px]">
        {job.responsibilities.map((item, i) => (
          <li key={i} className="pl-5 relative mb-2 before:content-['•'] before:text-primary-500 before:font-extrabold before:absolute before:left-1">
            {item}
          </li>
        ))}
      </ul>

      <h2 className="font-heading text-[17px] text-neutral-900 mt-7 mb-3">Requirements</h2>
      <ul className="text-neutral-600 text-[14.5px]">
        {job.requirements.map((item, i) => (
          <li key={i} className="pl-5 relative mb-2 before:content-['•'] before:text-primary-500 before:font-extrabold before:absolute before:left-1">
            {item}
          </li>
        ))}
      </ul>

      <h2 className="font-heading text-[17px] text-neutral-900 mt-7 mb-3">About {job.employer}</h2>
      <p className="text-neutral-600 text-[14.5px] mb-2.5">{job.employerBlurb}</p>
    </div>
  );
};

export default JobDetailBody;
