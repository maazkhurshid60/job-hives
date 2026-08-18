"use client";

import React, { useState } from "react";
import Container from "@/components/common-layout/Container";
import SubHeading from "@/components/pages/typography/SubHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import JobCard, { JobCardProps } from "@/components/cards/JobCard";
import clsx from "clsx";
import { useReveal } from "@/hooks/useReveal";

interface Category {
  icon: React.ReactNode;
  name: string;
  count: number;
  bgClass: string;
  textClass: string;
}

const ChatManagementIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.25 8.51c.88.28 1.5 1.13 1.5 2.1v4.29c0 1.13-.85 2.1-1.98 2.19-.34.03-.68.05-1.02.07v3.09l-3-3c-1.35 0-2.69-.06-4.02-.17a2.1 2.1 0 01-.82-.24m9.34-8.33a2.1 2.1 0 00-.47-.1 48.6 48.6 0 00-8.05 0c-1.13.1-1.98 1.06-1.98 2.2v4.29c0 .84.46 1.58 1.16 1.95m9.34-8.34V6.64c0-1.62-1.15-3.03-2.76-3.24A48.5 48.5 0 0011.25 3c-2.12 0-4.2.14-6.24.4-1.61.21-2.76 1.61-2.76 3.24v6.23c0 1.62 1.15 3.03 2.76 3.23.58.08 1.16.14 1.74.2V21l4.16-4.16"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const VideoEditingIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3.5" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M7 6.3v4.9l4.2-2.45L7 6.3z" fill="currentColor" />
    <circle cx="16.6" cy="18.2" r="1.7" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="21" cy="18.2" r="1.7" stroke="currentColor" strokeWidth="1.5" />
    <path d="M17.8 17L22 9.3M19.8 17L15.6 9.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const DevelopmentIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

const CopywritingIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <path
      d="M19.4 5.1a1.15 1.15 0 010 1.6l-1 1-1.9-1.9 1-1a1.15 1.15 0 011.6 0z"
      fill="currentColor"
    />
  </svg>
);

const GrowthIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="15" width="3" height="6" rx="1" fill="currentColor" />
    <rect x="7.5" y="11.5" width="3" height="9.5" rx="1" fill="currentColor" />
    <rect x="13" y="8" width="3" height="13" rx="1" fill="currentColor" />
    <rect x="18.5" y="4" width="3" height="17" rx="1" fill="currentColor" />
    <path d="M2.5 12.5l4.5-3.5 3.5 2.3L19 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="3.2" r="1.3" fill="currentColor" />
  </svg>
);

const RecruitmentIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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

const MarketingIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

const categoriesData: Category[] = [
  { icon: <ChatManagementIcon />, name: "Chat Management", count: 128, bgClass: "bg-primary-50", textClass: "text-primary-600" },
  { icon: <MarketingIcon />, name: "Marketing", count: 64, bgClass: "bg-warning-50", textClass: "text-warning-600" },
  { icon: <VideoEditingIcon />, name: "Video Editing", count: 47, bgClass: "bg-danger-50", textClass: "text-danger-600" },
  { icon: <DevelopmentIcon />, name: "Development", count: 31, bgClass: "bg-success-50", textClass: "text-success-600" },
  { icon: <CopywritingIcon />, name: "Copywriting", count: 22, bgClass: "bg-neutral-100", textClass: "text-neutral-600" },
  { icon: <GrowthIcon />, name: "Sales & Growth", count: 18, bgClass: "bg-primary-50", textClass: "text-primary-600" },
  { icon: <RecruitmentIcon />, name: "Recruitment", count: 9, bgClass: "bg-warning-50", textClass: "text-warning-600" },
];

const initialJobs: (Omit<JobCardProps, "onSaveToggle" | "onApply"> & { id: string; isPremium: boolean })[] = [
  // Chat Management
  {
    id: "job-1",
    title: "Chat Manager — OnlyFans Agency",
    type: "Full-time",
    timeAgo: "4 hrs ago",
    pay: "$6–9",
    paySuffix: "/hr",
    location: "Remote · Philippines",
    category: "Chat Management",
    isPremium: true,
    accentVariant: "primary",
  },
  {
    id: "job-2",
    title: "Fan Engagement Chatter",
    type: "Part-time",
    timeAgo: "6 hrs ago",
    pay: "$5–7",
    paySuffix: "/hr",
    location: "Remote · Worldwide",
    category: "Chat Management",
    isPremium: false,
    accentVariant: "primary",
  },
  {
    id: "job-3",
    title: "Senior Chat Team Lead",
    type: "Full-time",
    timeAgo: "3 days ago",
    pay: "$1,000",
    paySuffix: "/mo",
    location: "Remote · United States",
    category: "Chat Management",
    isPremium: true,
    accentVariant: "primary",
  },
  // Marketing
  {
    id: "job-4",
    title: "Social Media & Growth Manager",
    type: "Part-time",
    timeAgo: "2 days ago",
    pay: "$1,200",
    paySuffix: "/mo",
    location: "Remote · United States",
    category: "Marketing",
    isPremium: true,
    accentVariant: "warning",
  },
  {
    id: "job-5",
    title: "Content Marketing Specialist",
    type: "Contract",
    timeAgo: "5 hrs ago",
    pay: "$18–25",
    paySuffix: "/hr",
    location: "Remote · United Kingdom",
    category: "Marketing",
    isPremium: false,
    accentVariant: "warning",
  },
  // Video Editing
  {
    id: "job-6",
    title: "Reel & Short-Form Video Editor",
    type: "Contract",
    timeAgo: "1 day ago",
    pay: "10%",
    paySuffix: " commission",
    location: "Remote · Canada",
    category: "Video Editing",
    isPremium: false,
    accentVariant: "danger",
  },
  {
    id: "job-7",
    title: "Long-Form YouTube Editor",
    type: "Part-time",
    timeAgo: "8 hrs ago",
    pay: "$15–20",
    paySuffix: "/hr",
    location: "Remote · Worldwide",
    category: "Video Editing",
    isPremium: false,
    accentVariant: "danger",
  },
  {
    id: "job-8",
    title: "Motion Graphics Designer",
    type: "Full-time",
    timeAgo: "2 days ago",
    pay: "$2,000",
    paySuffix: "/mo",
    location: "Remote · Germany",
    category: "Video Editing",
    isPremium: true,
    accentVariant: "danger",
  },
  // Development
  {
    id: "job-9",
    title: "Full-Stack Developer",
    type: "Full-time",
    timeAgo: "12 hrs ago",
    pay: "$40–60",
    paySuffix: "/hr",
    location: "Remote · Worldwide",
    category: "Development",
    isPremium: true,
    accentVariant: "success",
  },
  {
    id: "job-10",
    title: "WordPress Developer",
    type: "Contract",
    timeAgo: "3 days ago",
    pay: "$20–30",
    paySuffix: "/hr",
    location: "Remote · India",
    category: "Development",
    isPremium: false,
    accentVariant: "success",
  },
  // Copywriting
  {
    id: "job-11",
    title: "SEO Copywriter",
    type: "Contract",
    timeAgo: "5 hrs ago",
    pay: "$0.10",
    paySuffix: "/word",
    location: "Remote · Worldwide",
    category: "Copywriting",
    isPremium: false,
    accentVariant: "primary",
  },
  {
    id: "job-12",
    title: "Email & Sales Copywriter",
    type: "Part-time",
    timeAgo: "1 day ago",
    pay: "$800",
    paySuffix: "/mo",
    location: "Remote · Australia",
    category: "Copywriting",
    isPremium: true,
    accentVariant: "primary",
  },
  // Sales & Growth
  {
    id: "job-13",
    title: "Outbound Sales Rep",
    type: "Full-time",
    timeAgo: "9 hrs ago",
    pay: "$15",
    paySuffix: "/hr + commission",
    location: "Remote · United States",
    category: "Sales & Growth",
    isPremium: true,
    accentVariant: "warning",
  },
  {
    id: "job-14",
    title: "Affiliate & Partnerships Manager",
    type: "Contract",
    timeAgo: "2 days ago",
    pay: "15%",
    paySuffix: " commission",
    location: "Remote · Worldwide",
    category: "Sales & Growth",
    isPremium: false,
    accentVariant: "warning",
  },
  // Recruitment
  {
    id: "job-15",
    title: "Talent Sourcer",
    type: "Part-time",
    timeAgo: "4 hrs ago",
    pay: "$10–14",
    paySuffix: "/hr",
    location: "Remote · Philippines",
    category: "Recruitment",
    isPremium: false,
    accentVariant: "danger",
  },
  {
    id: "job-16",
    title: "Senior Recruiter",
    type: "Full-time",
    timeAgo: "1 day ago",
    pay: "$1,800",
    paySuffix: "/mo",
    location: "Remote · United States",
    category: "Recruitment",
    isPremium: true,
    accentVariant: "danger",
  },
];

const FeaturedJobs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Chat Management");
  const [activeFilter, setActiveFilter] = useState<"latest" | "premium">("latest");
  const [savedJobs, setSavedJobs] = useState<Record<string, boolean>>({ "job-3": true });
  const sectionHeadReveal = useReveal<HTMLDivElement>();
  const jobsLayoutReveal = useReveal<HTMLDivElement>();

  const toggleSaveJob = (id: string) => {
    setSavedJobs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredJobs = initialJobs.filter(
    (job) =>
      job.category === activeCategory &&
      (activeFilter === "latest" || (activeFilter === "premium" && job.isPremium))
  );

  return (
    <section className="py-[88px] bg-neutral-50 section" id="find-jobs">
      <Container>
        <div
          ref={sectionHeadReveal.ref}
          className={clsx("text-center max-w-[640px] mx-auto mb-12 section-head", sectionHeadReveal.className)}
        >
          <span className="text-primary-600 font-bold text-xs uppercase tracking-wider mb-3 block kicker">
            Featured roles
          </span>
          <SubHeading className="mb-3">Fresh jobs, updated daily</SubHeading>
          <Paragraph className="text-neutral-600 text-base">
            Browse by category, platform or pay type — a sample of what&apos;s live right now.
          </Paragraph>
        </div>

        <div
          ref={jobsLayoutReveal.ref}
          className={clsx(
            "grid grid-cols-1 min-[861px]:grid-cols-[4fr_8fr] gap-7 items-start jobs-layout",
            jobsLayoutReveal.className
          )}
        >
          {/* Categories Sidebar */}
          <aside className="w-full bg-neutral-0 border border-solid border-neutral-200 rounded-lg py-5 px-4 shadow-sm cat-sidebar">
            <h3 className="text-sm font-extrabold mb-3.5 px-1.5 uppercase tracking-wider text-neutral-900">
              Jobs Categories
            </h3>

            {/* Desktop Vertical List */}
            <div className="hidden min-[861px]:flex flex-col gap-1 cat-list">
              {categoriesData.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(cat.name)}
                  className={clsx(
                    "flex items-center gap-3 p-2.5 rounded-md text-left transition duration-150 cursor-pointer border-none bg-transparent w-full text-inherit cat-row",
                    activeCategory === cat.name && "bg-primary-50 active"
                  )}
                >
                  <span className={clsx("w-11 h-11 rounded-md flex items-center justify-center flex-shrink-0 text-base cat-ic", cat.bgClass, cat.textClass)}>
                    {cat.icon}
                  </span>
                  <span className={clsx("flex-1 text-[13.5px] font-semibold cat-name", activeCategory === cat.name ? "text-primary-700 font-bold" : "text-neutral-800")}>
                    {cat.name}
                  </span>
                  <span className={clsx("text-[11.5px] font-bold px-[9px] py-[3px] rounded-full whitespace-nowrap cat-count", activeCategory === cat.name ? "bg-primary-100 text-primary-700" : "bg-neutral-100 text-neutral-500")}>
                    {cat.count} Openings
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile/Tablet Horizontal Scrolling Marquee */}
            <div className="block min-[861px]:hidden overflow-hidden relative -mx-4 px-4 cat-marquee">
              <div className="flex gap-[10px] w-max [animation:catMarqueeScroll_26s_linear_infinite] hover:[animation-play-state:paused] cat-track">
                {[...categoriesData, ...categoriesData].map((cat, i) => (
                  <button
                    key={`m-${i}`}
                    onClick={() => setActiveCategory(cat.name)}
                    className={clsx(
                      "flex items-center gap-[9px] px-4 py-[9px] rounded-full border border-solid border-neutral-200 bg-neutral-0 shadow-sm whitespace-nowrap flex-shrink-0 cursor-pointer text-inherit cat-chip-m",
                      activeCategory === cat.name && "bg-primary-50 border-primary-300 active"
                    )}
                  >
                    <span className={clsx("w-9 h-9 text-[12.5px] rounded-md flex items-center justify-center flex-shrink-0", cat.bgClass, cat.textClass)}>
                      {cat.icon}
                    </span>
                    <span className="text-[12.5px] font-bold text-neutral-800 cat-name">{cat.name}</span>
                    <span className="text-[10.5px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-full cat-count">
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Job Section */}
          <div className="w-full jobs-main">
            <div className="flex items-center max-[520px]:items-start justify-between gap-4 mb-5 flex-wrap jobs-main-head">
              <h3 className="text-lg font-extrabold text-neutral-900">Recommended Jobs</h3>
              <div className="flex gap-2 filter-pills">
                <button
                  onClick={() => setActiveFilter("latest")}
                  className={clsx(
                    "text-xs font-bold px-5 py-[9px] rounded-full cursor-pointer transition duration-150 border border-solid select-none filter-pill",
                    activeFilter === "latest"
                      ? "bg-primary-500 border-primary-500 text-neutral-0 shadow-sm is-active"
                      : "bg-neutral-0 border-neutral-200 text-neutral-700 hover:border-primary-300 hover:text-primary-700 is-outline"
                  )}
                >
                  Latest Job
                </button>
                <button
                  onClick={() => setActiveFilter("premium")}
                  className={clsx(
                    "text-xs font-bold px-5 py-[9px] rounded-full cursor-pointer transition duration-150 border border-solid select-none filter-pill",
                    activeFilter === "premium"
                      ? "bg-primary-500 border-primary-500 text-neutral-0 shadow-sm is-active"
                      : "bg-neutral-0 border-neutral-200 text-neutral-700 hover:border-primary-300 hover:text-primary-700 is-outline"
                  )}
                >
                  Premium Jobs
                </button>
              </div>
            </div>

            {/* Jobs list container */}
            <div className="flex flex-col gap-3.5 job-list">
              {filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  {...job}
                  isSaved={!!savedJobs[job.id]}
                  onSaveToggle={() => toggleSaveJob(job.id)}
                />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-10 px-5 text-neutral-500 text-sm jobs-empty-state">
                No {activeFilter === "premium" ? "premium " : ""}roles in this category right now — check back soon.
              </div>
            )}

            <div className="text-center mt-9 view-all-wrap">
              <button className="font-body font-semibold text-sm cursor-pointer select-none inline-flex items-center justify-center gap-2 transition duration-150 px-5 py-3 border border-solid border-primary-500 text-primary-600 hover:bg-primary-50 rounded-full bg-neutral-0">
                View All Jobs
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedJobs;
