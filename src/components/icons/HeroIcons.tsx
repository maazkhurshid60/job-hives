import React from "react";

interface IconProps {
  className?: string;
}

/** Small magnifying glass used inside the hero search bar. */
export const SearchGlassIcon: React.FC<IconProps> = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/** Four-point sparkle that animates next to the hero heading. */
export const SparkleIcon: React.FC<IconProps> = ({ className = "w-[26px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 0l1.7 7.3L21 9l-7.3 1.7L12 18l-1.7-7.3L3 9l7.3-1.7L12 0z" fill="currentColor" />
  </svg>
);

/** Magnifying glass over a briefcase — the "I'm looking for work" entry card. */
export const JobSearchIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="4" />
    <path d="M31 31l9 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    <path d="M16 16v-2a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="11" y="16" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2.5" />
    <path d="M11 21h18" stroke="currentColor" strokeWidth="2.5" />
    <rect x="18.5" y="19.5" width="3" height="3" rx="0.5" fill="currentColor" />
  </svg>
);
