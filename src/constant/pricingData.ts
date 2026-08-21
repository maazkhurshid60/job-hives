export type BillingPeriod = "monthly" | "yearly";

export interface PricingPlan {
  name: string;
  desc: string;
  isFree?: boolean;
  monthlyPrice: string;
  yearlyPrice: string;
  yearlyBilledNote?: string;
  featuresHeading?: string;
  features: string[];
  ctaText: string;
  ctaUrl: string;
  disabled?: boolean;
  featured?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Free",
    desc: "Perfect for solo workers and small agencies just getting started on the platform.",
    isFree: true,
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    features: ["1 job post / month", "View & track applications", "Basic profile & messaging", "Monthly email summary"],
    ctaText: "Get Started Free",
    ctaUrl: "#",
  },
  {
    name: "Plus",
    desc: "For growing agencies ready to reach more talent, faster.",
    monthlyPrice: "$39",
    yearlyPrice: "$31",
    yearlyBilledNote: "Billed $374 annually",
    featuresHeading: "Everything in Free, plus:",
    features: [
      "2 job posts / month",
      "Contact up to 400 workers",
      "Direct messaging & unlocks",
      "Featured job placement",
      "Priority support",
    ],
    ctaText: "Start Free Trial",
    ctaUrl: "#",
    featured: true,
  },
  {
    name: "Enterprise",
    desc: "For established agencies scaling hiring across multiple teams.",
    monthlyPrice: "$149",
    yearlyPrice: "$119",
    yearlyBilledNote: "Billed $1,430 annually",
    featuresHeading: "Everything in Plus, plus:",
    features: ["10 job posts / month", "Contact up to 7,000 workers", "Dedicated account manager", "24/7 priority support"],
    ctaText: "Contact Sales",
    ctaUrl: "#",
  },
];
