"use client";

import React, { useEffect, useMemo, useState } from "react";
import LandingPageWrapper from "@/components/wrappers/LandingPageWrapper";
import Container from "@/components/common-layout/Container";
import PageHero from "@/components/pages/shared/PageHero";
import FilterBar from "@/components/pages/find-workers/FilterBar";
import DemoUnlockToggle from "@/components/pages/find-workers/DemoUnlockToggle";
import type { FindWorkersFilters } from "@/components/pages/find-workers/types";
import ResultsBar from "@/components/pages/shared/ResultsBar";
import Pagination from "@/components/pages/shared/Pagination";
import WorkerCard from "@/components/cards/worker/WorkerCard";
import { WORKERS } from "@/constant/findWorkersData";
import { WorkerUnlockProvider } from "@/context/WorkerUnlockContext";
import { FIND_WORKERS_HERO_VIDEO } from "@/constant/heroVideos";

const PAGE_SIZE = 9;

type SortOrder = "best-match" | "recent" | "response";

const WORKER_SORT_OPTIONS = [
  { value: "best-match", label: "Sort by: Best match" },
  { value: "recent", label: "Sort by: Recently joined" },
  { value: "response", label: "Sort by: Fastest response" },
];

const EMPTY_FILTERS: FindWorkersFilters = {
  searchText: "",
  searchCountry: "",
  employmentType: "",
  skillCategory: "",
  software: "",
  socialMedia: "",
  paymentMethod: "",
  country: "",
  language: "",
  gender: "",
};

export default function FindWorkersPage() {
  const [filters, setFilters] = useState<FindWorkersFilters>(EMPTY_FILTERS);
  const [sort, setSort] = useState<SortOrder>("best-match");
  const [page, setPage] = useState(1);

  const handleFilterChange = <K extends keyof FindWorkersFilters>(key: K, value: FindWorkersFilters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredWorkers = useMemo(() => {
    const searchText = filters.searchText.trim().toLowerCase();
    const searchCountry = filters.searchCountry.trim().toLowerCase();

    const filtered = WORKERS.filter((worker) => {
      if (filters.employmentType && worker.employmentType !== filters.employmentType) return false;
      if (filters.skillCategory && worker.skillCategory !== filters.skillCategory) return false;
      if (filters.software && !worker.software.includes(filters.software)) return false;
      if (filters.socialMedia && !worker.socialMedia.includes(filters.socialMedia)) return false;
      if (filters.paymentMethod && !worker.paymentMethods.includes(filters.paymentMethod)) return false;
      if (filters.country && worker.country !== filters.country) return false;
      if (filters.language && !worker.languages.includes(filters.language)) return false;
      if (filters.gender && worker.gender !== filters.gender) return false;
      if (searchText && !worker.name.toLowerCase().includes(searchText) && !worker.topSkill.toLowerCase().includes(searchText)) return false;
      if (searchCountry && !worker.country.toLowerCase().includes(searchCountry) && !worker.city.toLowerCase().includes(searchCountry)) return false;
      return true;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "recent") return a.joinedHoursAgo - b.joinedHoursAgo;
      if (sort === "response") return a.joinedHoursAgo - b.joinedHoursAgo;
      return b.experienceYears - a.experienceYears;
    });
  }, [filters, sort]);

  const totalPages = Math.max(1, Math.ceil(filteredWorkers.length / PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [filters, sort]);

  const pageWorkers = filteredWorkers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <WorkerUnlockProvider>
      <LandingPageWrapper>
        <PageHero
          title="Build your dream team"
          subtitle="Skip the guesswork. Meet who's actually available."
          videoSrc={FIND_WORKERS_HERO_VIDEO}
          textValue={filters.searchText}
          onTextChange={(v) => handleFilterChange("searchText", v)}
          textPlaceholder="Search by name or skill"
          locationValue={filters.searchCountry}
          onLocationChange={(v) => handleFilterChange("searchCountry", v)}
          locationPlaceholder="Search by country"
        />

        <Container className="mt-4">
          <DemoUnlockToggle />
        </Container>

        <Container>
          <FilterBar filters={filters} onChange={handleFilterChange} />
        </Container>

        <section className="py-[88px] section">
          <Container>
            <ResultsBar
              count={filteredWorkers.length}
              itemLabel="worker"
              sort={sort}
              sortOptions={WORKER_SORT_OPTIONS}
              onSortChange={(v) => setSort(v as SortOrder)}
              showViewToggle={false}
            />

            {pageWorkers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 worker-grid">
                {pageWorkers.map((worker) => (
                  <WorkerCard key={worker.id} worker={worker} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 px-5 text-neutral-500 text-sm bg-neutral-0 border border-solid border-neutral-200 rounded-lg">
                No workers match your filters right now — try clearing a few and searching again.
              </div>
            )}

            <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
          </Container>
        </section>
      </LandingPageWrapper>
    </WorkerUnlockProvider>
  );
}
