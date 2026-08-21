export type ComparisonValue = boolean | string;

export interface ComparisonFeature {
  name: string;
  values: [ComparisonValue, ComparisonValue, ComparisonValue];
}

export interface ComparisonGroup {
  label: string;
  features: ComparisonFeature[];
}

// One column per PRICING_PLANS entry: [Free, Plus, Enterprise]
export const COMPARISON_GROUPS: ComparisonGroup[] = [
  {
    label: "Platform Features",
    features: [
      { name: "Job posts per month", values: ["1", "2", "10"] },
      { name: "View & track applications", values: [true, true, true] },
      { name: "Basic profile & messaging", values: [true, true, true] },
      { name: "Direct messaging & unlocks", values: [false, true, true] },
      { name: "Featured job placement", values: [false, true, true] },
    ],
  },
  {
    label: "Limits & Contacts",
    features: [
      { name: "Worker contact unlocks", values: ["—", "400 / month", "7,000 / month"] },
      { name: "Monthly email summary", values: [true, true, true] },
    ],
  },
  {
    label: "Support",
    features: [
      { name: "Priority support", values: [false, true, true] },
      { name: "Dedicated account manager", values: [false, false, true] },
      { name: "24/7 priority support", values: [false, false, true] },
    ],
  },
];
