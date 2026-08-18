import React from "react";

interface IconProps {
  className?: string;
  filled?: boolean;
}

/** Save/favorite heart used on the job card save button. */
export const HeartIcon: React.FC<IconProps> = ({ className = "w-4 h-4", filled = false }) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke={filled ? "none" : "currentColor"}
    strokeWidth="2"
    className={className}
  >
    <path d="M12 21s-7.5-4.6-10-9.3C.5 8.4 2.2 5 5.6 5c2 0 3.4 1 6.4 4 3-3 4.4-4 6.4-4 3.4 0 5.1 3.4 3.6 6.7C19.5 16.4 12 21 12 21z" />
  </svg>
);

export const LocationPinIcon: React.FC<IconProps> = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

/** Small list/category icon used on the job card's category tag. */
export const ListIcon: React.FC<IconProps> = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
  </svg>
);
