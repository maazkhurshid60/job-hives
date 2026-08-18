export type BillingPeriod = "monthly" | "yearly";

export interface PricingPlan {
  name: string;
  desc: string;
  isFree?: boolean;
  monthlyPrice: string;
  yearlyPrice: string;
  featuresHeading: string;
  features: string[];
  ctaText: string;
  ctaUrl: string;
  disabled?: boolean;
  featured?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Free",
    desc: "Perfect for first-time users looking to try JobHive.",
    isFree: true,
    monthlyPrice: "FREE",
    yearlyPrice: "FREE",
    featuresHeading: "FREE Includes:",
    features: ["Create 1 job post per month", "View and save job applications", "Hiring Pipeline"],
    ctaText: "Sign Up for FREE",
    ctaUrl: "#",
    disabled: true,
  },
  {
    name: "Plus",
    desc: "For growing teams ready to scale their hiring efforts.",
    monthlyPrice: "$69",
    yearlyPrice: "$25",
    featuresHeading: "Everything in Free, plus:",
    features: [
      "Create 2 job posts per month",
      "Contact up to 400 workers",
      "AI help with job descriptions",
      "Smart filters for top applicants",
      "Message candidates directly",
      "VIP priority support",
      "Verified employer badge",
      "Posts shared to Telegram group",
      "Hiring Pipeline",
    ],
    ctaText: "Get Plus",
    ctaUrl: "#",
  },
  {
    name: "Enterprise",
    desc: "Designed specifically for robust hiring operations.",
    monthlyPrice: "$149",
    yearlyPrice: "$44",
    featuresHeading: "Everything in Plus, plus:",
    features: [
      "Create 10 job posts per month",
      "Contact up to 7,000 workers",
      "Advanced applicant filtering",
      "Direct chat with candidates",
      "Dedicated VIP support",
      "Verified employer badge",
      "Posts shared to Telegram group",
      "Applicant testing tools",
      "Hiring Pipeline",
    ],
    ctaText: "Get Enterprise",
    ctaUrl: "#",
    featured: true,
  },
];
