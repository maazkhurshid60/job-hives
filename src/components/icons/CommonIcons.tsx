import React from "react";

/**
 * Icons reused across more than one section (Hero, FeaturedJobs, WhyChooseUs, Pricing).
 * Keeping these in one place avoids re-declaring the same SVG markup per section.
 */

interface IconProps {
  className?: string;
}

export const CheckIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M5 13l4 4L19 7" />
  </svg>
);

export const XCircleIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 9l6 6M15 9l-6 6" />
  </svg>
);

/** Two flanking person silhouettes + magnifying glass over a center figure. Used for
 * both the Hero "I'm hiring" entry card and the FeaturedJobs "Recruitment" category. */
export const TalentSearchIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="5" fill="currentColor" />
    <path d="M2 30c0-6.6 3.6-11 8-11s8 4.4 8 11" fill="currentColor" />
    <circle cx="38" cy="10" r="5" fill="currentColor" />
    <path d="M30 30c0-6.6 3.6-11 8-11s8 4.4 8 11" fill="currentColor" />
    <circle cx="24" cy="22" r="10" stroke="currentColor" strokeWidth="3.5" />
    <circle cx="24" cy="19" r="3" fill="currentColor" />
    <path d="M18 27c0-3.6 2.7-6 6-6s6 2.4 6 6" fill="currentColor" />
    <line x1="31.5" y1="29.5" x2="40" y2="38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);
