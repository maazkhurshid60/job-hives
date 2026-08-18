"use client";

import React, { useState } from "react";
import Container from "@/components/common-layout/Container";
import SubHeading from "@/components/pages/typography/SubHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import CardHeading from "@/components/pages/typography/CardHeading";
import CardDesc from "@/components/pages/typography/CardDesc";
import clsx from "clsx";
import { useReveal } from "@/hooks/useReveal";
import { WORKER_STEPS, EMPLOYER_STEPS } from "@/constant/howItWorksData";
import SegmentedTabs from "@/components/tabs/SegmentedTabs";

const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"worker" | "employer">("worker");
  const sectionHeadReveal = useReveal<HTMLDivElement>();
  const tabsReveal = useReveal<HTMLDivElement>();

  const steps = activeTab === "worker" ? WORKER_STEPS : EMPLOYER_STEPS;

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
        <div ref={tabsReveal.ref} className={clsx("flex justify-center mb-16 hiw-tabs", tabsReveal.className)}>
          <SegmentedTabs
            options={[
              { value: "worker", label: "For Workers" },
              { value: "employer", label: "For Employers" },
            ]}
            value={activeTab}
            onChange={setActiveTab}
          />
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
                    <step.icon className="w-6 h-6" />
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
