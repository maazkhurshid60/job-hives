import React from "react";

/** Step icons for the How It Works flow (3 worker steps + 3 employer steps). */

interface IconProps {
  className?: string;
}

export const ProfileDocIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M7 3h8l4 4v14H7V3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M15 3v4h4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9.5 12h5M9.5 15h5M9.5 9h2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HeadsetIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M4 13a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <rect x="3" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    <rect x="17" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

export const PlusIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const ClipboardIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M9 8V6a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <rect x="4" y="8" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 13h16" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

export const LockDotIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 10V7a4 4 0 018 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="15" r="1.4" fill="currentColor" />
  </svg>
);
