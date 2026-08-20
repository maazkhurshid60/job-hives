"use client";

import React, { useEffect, useMemo, useState } from "react";
import LandingPageWrapper from "@/components/wrappers/LandingPageWrapper";
import Container from "@/components/common-layout/Container";
import PageHero from "@/components/pages/shared/PageHero";
import FilterBar from "@/components/pages/find-jobs/FilterBar";
import type { FindJobsFilters } from "@/components/pages/find-jobs/types";
import ResultsBar, { type ViewMode } from "@/components/pages/shared/ResultsBar";
import Pagination from "@/components/pages/shared/Pagination";
import FindJobCard from "@/components/cards/FindJobCard";
import { JOBS } from "@/constant/findJobsData";

type SortOrder = "newest" | "oldest";

const JOB_SORT_OPTIONS = [
  { value: "newest", label: "Sort by date: Newest first" },
  { value: "oldest", label: "Sort by date: Oldest first" },
];

const PAGE_SIZE = 8;

// Desktop-only bento layout on a 12-col grid.
// Below the xl breakpoint the grid drops to grid-cols-2 / grid-cols-1, where these spans don't apply.
const BENTO_SPANS = [
  "xl:col-span-6",
  "xl:col-span-6",
  "xl:col-span-3",
  "xl:col-span-6",
  "xl:col-span-3",
  "xl:col-span-4",
  "xl:col-span-4",
  "xl:col-span-4",
];

const EMPTY_FILTERS: FindJobsFilters = {
  searchText: "",
  searchLocation: "",
  employmentType: "",
  socialMedia: "",
  software: "",
  language: "",
  category: "all",
};

export default function FindJobsPage() {
  const [filters, setFilters] = useState<FindJobsFilters>(EMPTY_FILTERS);
  const [sort, setSort] = useState<SortOrder>("newest");
  const [view, setView] = useState<ViewMode>("grid");
  const [page, setPage] = useState(1);

  const handleFilterChange = <K extends keyof FindJobsFilters>(key: K, value: FindJobsFilters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredJobs = useMemo(() => {
    const searchText = filters.searchText.trim().toLowerCase();
    const searchLocation = filters.searchLocation.trim().toLowerCase();

    const filtered = JOBS.filter((job) => {
      if (filters.category !== "all" && job.categoryKey !== filters.category) return false;
      if (filters.employmentType && job.type !== filters.employmentType) return false;
      if (filters.socialMedia && !job.platforms.includes(filters.socialMedia)) return false;
      if (filters.software && !job.software.includes(filters.software)) return false;
      if (filters.language && job.language !== filters.language) return false;
      if (searchText && !job.title.toLowerCase().includes(searchText) && !job.employer.toLowerCase().includes(searchText)) return false;
      if (searchLocation && !job.location.toLowerCase().includes(searchLocation)) return false;
      return true;
    });

    return [...filtered].sort((a, b) =>
      sort === "newest" ? a.postedHoursAgo - b.postedHoursAgo : b.postedHoursAgo - a.postedHoursAgo
    );
  }, [filters, sort]);

  const totalPages = Math.max(1, Math.ceil(filteredJobs.length / PAGE_SIZE));

  // Reset to page 1 whenever the result set changes shape (any filter, or sort order).
  useEffect(() => {
    setPage(1);
  }, [filters, sort]);

  const pageJobs = filteredJobs.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <LandingPageWrapper>
      <PageHero
        title="Your next gig is closer than you think"
        subtitle="Real jobs. Real pay. No fluff."
        textValue={filters.searchText}
        onTextChange={(v) => handleFilterChange("searchText", v)}
        textPlaceholder="Search by title or company"
        locationValue={filters.searchLocation}
        onLocationChange={(v) => handleFilterChange("searchLocation", v)}
        locationPlaceholder="Search by city or country"
      />

      <Container>
        <FilterBar filters={filters} onChange={handleFilterChange} />
      </Container>

      <section className="py-[88px] section">
        <Container>
          <ResultsBar
            count={filteredJobs.length}
            itemLabel="job"
            sort={sort}
            sortOptions={JOB_SORT_OPTIONS}
            onSortChange={(v) => setSort(v as SortOrder)}
            view={view}
            onViewChange={setView}
          />

          {pageJobs.length > 0 ? (
            <div
              className={
                view === "list"
                  ? "flex flex-col gap-5 job-grid view-list"
                  : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5 job-grid"
              }
            >
              {pageJobs.map((job, i) => (
                <div key={job.id} className={view === "grid" ? BENTO_SPANS[i % BENTO_SPANS.length] : undefined}>
                  <FindJobCard job={job} isList={view === "list"} variantIndex={i} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-5 text-neutral-500 text-sm bg-neutral-0 border border-solid border-neutral-200 rounded-lg">
              No jobs match your filters right now — try clearing a few and searching again.
            </div>
          )}

          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </Container>
      </section>
    </LandingPageWrapper>
  );
}
