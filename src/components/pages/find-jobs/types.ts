export interface FindJobsFilters {
  searchText: string;
  searchLocation: string;
  employmentType: string;
  socialMedia: string;
  software: string;
  language: string;
  category: string;
}

export type FindJobsFilterChange = <K extends keyof FindJobsFilters>(key: K, value: FindJobsFilters[K]) => void;
