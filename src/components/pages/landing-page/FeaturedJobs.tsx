"use client";

import React, { useState } from "react";
import Container from "@/components/common-layout/Container";
import SubHeading from "@/components/pages/typography/SubHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import JobCard from "@/components/cards/JobCard";
import CategorySidebar from "@/components/pages/landing-page/CategorySidebar";
import JobFilterBar, { type JobFilter } from "@/components/pages/landing-page/JobFilterBar";
import clsx from "clsx";
import { useReveal } from "@/hooks/useReveal";
import { CATEGORIES_DATA, INITIAL_JOBS } from "@/constant/featuredJobsData";

const FeaturedJobs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Chat Management");
  const [activeFilter, setActiveFilter] = useState<JobFilter>("latest");
  const [savedJobs, setSavedJobs] = useState<Record<string, boolean>>({ "job-3": true });
  const sectionHeadReveal = useReveal<HTMLDivElement>();
  const jobsLayoutReveal = useReveal<HTMLDivElement>();

  const toggleSaveJob = (id: string) => {
    setSavedJobs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredJobs = INITIAL_JOBS.filter(
    (job) =>
      job.category === activeCategory &&
      (activeFilter === "latest" || (activeFilter === "premium" && job.isPremium))
  );

  return (
    <section className="py-[88px] bg-neutral-50 section" id="find-jobs">
      <Container>
        <div
          ref={sectionHeadReveal.ref}
          className={clsx("text-center max-w-[640px] mx-auto mb-12 section-head", sectionHeadReveal.className)}
        >
          <span className="text-primary-600 font-bold text-xs uppercase tracking-wider mb-3 block kicker">
            Featured roles
          </span>
          <SubHeading className="mb-3">Fresh jobs, updated daily</SubHeading>
          <Paragraph className="text-neutral-600 text-base">
            Browse by category, platform or pay type — a sample of what&apos;s live right now.
          </Paragraph>
        </div>

        <div
          ref={jobsLayoutReveal.ref}
          className={clsx(
            "grid grid-cols-1 min-[861px]:grid-cols-[4fr_8fr] gap-7 items-start jobs-layout",
            jobsLayoutReveal.className
          )}
        >
          <CategorySidebar categories={CATEGORIES_DATA} activeCategory={activeCategory} onSelect={setActiveCategory} />

          <div className="w-full jobs-main">
            <JobFilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

            <div className="flex flex-col gap-3.5 job-list">
              {filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  {...job}
                  isSaved={!!savedJobs[job.id]}
                  onSaveToggle={() => toggleSaveJob(job.id)}
                />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-10 px-5 text-neutral-500 text-sm jobs-empty-state">
                No {activeFilter === "premium" ? "premium " : ""}roles in this category right now — check back soon.
              </div>
            )}

            <div className="text-center mt-9 view-all-wrap">
              <button className="font-body font-semibold text-sm cursor-pointer select-none inline-flex items-center justify-center gap-2 transition duration-150 px-5 py-3 border border-solid border-primary-500 text-primary-600 hover:bg-primary-50 rounded-full bg-neutral-0">
                View All Jobs
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedJobs;
