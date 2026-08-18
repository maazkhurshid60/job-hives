"use client";

import React, { useState } from "react";
import Container from "@/components/common-layout/Container";
import SubHeading from "@/components/pages/typography/SubHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import CardHeading from "@/components/pages/typography/CardHeading";
import CardDesc from "@/components/pages/typography/CardDesc";
import clsx from "clsx";
import { useReveal } from "@/hooks/useReveal";

interface StepItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  isDip?: boolean;
}

const workerSteps: StepItem[] = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M7 3h8l4 4v14H7V3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M15 3v4h4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9.5 12h5M9.5 15h5M9.5 9h2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Create Your Profile",
    desc: "Build a living profile with your skills, languages and experience — no CV needed.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Apply in One Click",
    desc: "Browse filtered listings and apply instantly — no repeated forms, no waiting.",
    isDip: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M4 13a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="3" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="17" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: "Get Hired",
    desc: "Message directly with employers and start working — no bidding wars.",
  },
];

const employerSteps: StepItem[] = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Post a Job Free",
    desc: "Publish a listing in minutes with pay, platform and skill requirements.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M9 8V6a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="4" y="8" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 13h16" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: "Get Matched Fast",
    desc: "Smart filters surface qualified applicants within minutes of posting.",
    isDip: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 10V7a4 4 0 018 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="15" r="1.4" fill="currentColor" />
      </svg>
    ),
    title: "Unlock & Hire",
    desc: "Upgrade to unlock contact details and message your shortlist directly.",
  },
];

const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"worker" | "employer">("worker");
  const sectionHeadReveal = useReveal<HTMLDivElement>();
  const tabsReveal = useReveal<HTMLDivElement>();

  const steps = activeTab === "worker" ? workerSteps : employerSteps;

  return (
    <section className="py-[88px] bg-neutral-0 section" id="how-it-works">
      <Container>
        <div
          ref={sectionHeadReveal.ref}
          className={clsx("text-center max-w-[640px] mx-auto mb-12 section-head", sectionHeadReveal.className)}
        >
          <span className="text-primary-600 font-bold text-xs uppercase tracking-wider mb-3 block kicker">
            How it works
          </span>
          <SubHeading className="mb-3">Two sides, one simple process</SubHeading>
          <Paragraph className="text-neutral-600 text-base">
            A quick look — full breakdown on the dedicated How It Works page.
          </Paragraph>
        </div>

        {/* Tab Controls */}
        <div ref={tabsReveal.ref} className={clsx("flex justify-center gap-2 mb-16 hiw-tabs", tabsReveal.className)}>
          <button
            onClick={() => setActiveTab("worker")}
            className={clsx(
              "px-[26px] py-2.5 rounded-full border-[1.5px] border-solid font-bold text-sm cursor-pointer transition-all duration-200",
              activeTab === "worker"
                ? "bg-primary-500 border-primary-500 text-neutral-0 shadow-sm"
                : "border-neutral-200 bg-neutral-0 text-neutral-600 hover:border-neutral-300"
            )}
          >
            For Workers
          </button>
          <button
            onClick={() => setActiveTab("employer")}
            className={clsx(
              "px-[26px] py-2.5 rounded-full border-[1.5px] border-solid font-bold text-sm cursor-pointer transition-all duration-200",
              activeTab === "employer"
                ? "bg-primary-500 border-primary-500 text-neutral-0 shadow-sm"
                : "border-neutral-200 bg-neutral-0 text-neutral-600 hover:border-neutral-300"
            )}
          >
            For Employers
          </button>
        </div>

        {/* Flow Panel */}
        <div className="relative max-w-[980px] mx-auto hiw-flow">
          {/* Grey Dashed Wave Connector (hidden on mobile) */}
          <svg className="absolute top-[-50px] left-0 w-full h-[150px] z-0 overflow-visible hidden min-[861px]:block hiw-connector" viewBox="0 -50 1000 150" preserveAspectRatio="none" aria-hidden="true">
            <path d="M 157 15 L 300 -45 L 500 70 L 700 -45 L 843 15" fill="none" stroke="var(--neutral-300)" strokeWidth="2" strokeDasharray="6 7" strokeLinejoin="round" />
          </svg>

          <div className="relative grid grid-cols-1 min-[861px]:grid-cols-3 items-start gap-7 z-10 hiw-cards">
            {steps.map((step, index) => (
              <div
                key={index}
                className={clsx(
                  "relative pt-[34px] group hiw-step",
                  step.isDip && "min-[861px]:pt-[92px] dip"
                )}
              >
                {/* Icon Wrapper */}
                <div
                  className={clsx(
                    "absolute top-0 left-1/2 -translate-x-1/2 z-20 hiw-icon-wrap",
                    step.isDip && "min-[861px]:top-[58px]"
                  )}
                >
                  <div
                    className={clsx(
                      "w-[58px] h-[58px] rounded-full text-neutral-0 flex items-center justify-center border-4 border-solid border-neutral-0 shadow-[0_10px_22px_rgba(0,174,239,0.32)] transition-transform duration-250 group-hover:scale-108 hiw-icon",
                      step.isDip ? "bg-primary-500 min-[861px]:bg-primary-600" : "bg-primary-500"
                    )}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-neutral-0 border border-solid border-neutral-200 rounded-lg p-[34px_22px_26px] text-center shadow-sm hover:translate-y-[-4px] hover:shadow-md transition-all duration-200 step-card">
                  <CardHeading className="text-base mb-2">{step.title}</CardHeading>
                  <CardDesc className="text-[13.5px] leading-relaxed text-neutral-600">
                    {step.desc}
                  </CardDesc>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
