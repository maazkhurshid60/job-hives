import React from "react";

/** One icon per FeaturedJobs category (Recruitment reuses TalentSearchIcon from CommonIcons). */

interface IconProps {
  className?: string;
}

export const ChatManagementIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.25 8.51c.88.28 1.5 1.13 1.5 2.1v4.29c0 1.13-.85 2.1-1.98 2.19-.34.03-.68.05-1.02.07v3.09l-3-3c-1.35 0-2.69-.06-4.02-.17a2.1 2.1 0 01-.82-.24m9.34-8.33a2.1 2.1 0 00-.47-.1 48.6 48.6 0 00-8.05 0c-1.13.1-1.98 1.06-1.98 2.2v4.29c0 .84.46 1.58 1.16 1.95m9.34-8.34V6.64c0-1.62-1.15-3.03-2.76-3.24A48.5 48.5 0 0011.25 3c-2.12 0-4.2.14-6.24.4-1.61.21-2.76 1.61-2.76 3.24v6.23c0 1.62 1.15 3.03 2.76 3.23.58.08 1.16.14 1.74.2V21l4.16-4.16"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MarketingIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2.5" width="14" height="10" rx="1.3" stroke="currentColor" strokeWidth="1.5" />
    <rect x="0.5" y="12.9" width="17" height="1.8" rx="0.9" fill="currentColor" />
    <circle cx="6.2" cy="6.1" r="1.6" fill="currentColor" />
    <path d="M3.3 11c0-2.2 1.3-3.6 2.9-3.6s2.9 1.4 2.9 3.6" fill="currentColor" />
    <path d="M12.8 5l4.4-2.3v6.9l-4.4-2.1z" fill="currentColor" />
    <rect x="16.9" y="3.9" width="1.3" height="2.9" rx="0.4" fill="currentColor" />
    <path d="M17.3 6.8l-1 3.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M11.2 4.4c-.9.8-.9 1.9 0 2.7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

export const VideoEditingIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3.5" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M7 6.3v4.9l4.2-2.45L7 6.3z" fill="currentColor" />
    <circle cx="16.6" cy="18.2" r="1.7" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="21" cy="18.2" r="1.7" stroke="currentColor" strokeWidth="1.5" />
    <path d="M17.8 17L22 9.3M19.8 17L15.6 9.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const DevelopmentIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2.5" width="14" height="9.5" rx="1.3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="3.7" cy="4.3" r="0.35" fill="currentColor" />
    <circle cx="5" cy="4.3" r="0.35" fill="currentColor" />
    <circle cx="6.3" cy="4.3" r="0.35" fill="currentColor" />
    <path d="M5.3 8.8l-1.6 1.4 1.6 1.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.7 8.8l1.6 1.4-1.6 1.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.2 8.9h3.3M11.2 10.5h3.3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M4 12.7h8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M7.5 12v1.3M6 13.3h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <circle cx="17.3" cy="16" r="2.5" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="17.3" cy="16" r="0.7" fill="currentColor" />
    <path
      d="M17.3 12.3v1.2M17.3 18.5v1.2M13.6 16h1.2M19.8 16h1.2M14.7 13.4l.85.85M19.05 17.75l.85.85M14.7 18.6l.85-.85M19.05 14.25l.85-.85"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);

export const CopywritingIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.5" cy="4.3" r="2.3" fill="currentColor" />
    <path d="M3 14.5c0-3.6 2-6 4.5-6s4.5 2.4 4.5 6" fill="currentColor" />
    <path
      d="M9 9.3h6.2l2.8 2.8v9.4a1 1 0 01-1 1H9a1 1 0 01-1-1V10.3a1 1 0 011-1z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path d="M15.2 9.3v2.8h2.8" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M10.5 14.8h5M10.5 17h5M10.5 19.2h3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    <path d="M17 6.6l1.9 1.9-6.3 6.3-2.15.25.25-2.15z" fill="currentColor" />
    <path d="M19.4 5.1a1.15 1.15 0 010 1.6l-1 1-1.9-1.9 1-1a1.15 1.15 0 011.6 0z" fill="currentColor" />
  </svg>
);

export const GrowthIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="15" width="3" height="6" rx="1" fill="currentColor" />
    <rect x="7.5" y="11.5" width="3" height="9.5" rx="1" fill="currentColor" />
    <rect x="13" y="8" width="3" height="13" rx="1" fill="currentColor" />
    <rect x="18.5" y="4" width="3" height="17" rx="1" fill="currentColor" />
    <path d="M2.5 12.5l4.5-3.5 3.5 2.3L19 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="3.2" r="1.3" fill="currentColor" />
  </svg>
);
