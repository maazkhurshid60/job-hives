export interface FindWorkersFilters {
  searchText: string;
  searchCountry: string;
  employmentType: string;
  skillCategory: string;
  software: string;
  socialMedia: string;
  paymentMethod: string;
  country: string;
  language: string;
  gender: string;
}

export type FindWorkersFilterChange = <K extends keyof FindWorkersFilters>(key: K, value: FindWorkersFilters[K]) => void;
