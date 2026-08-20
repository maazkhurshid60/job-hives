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

        {/* Flow Panel — layered accent panel behind a white card, number badge riding the left edge */}
        <div className="relative max-w-[1020px] mx-auto hiw-flow">
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-11 md:gap-10 pl-[22px] hiw-cards">
            {steps.map((step, index) => (
              <div key={index} className="relative h-full group hiw-step">
                <div className="relative h-full step-card-wrap">
                  {/* Offset accent panel peeking out behind the card */}
                  <div className="absolute -top-1 -right-1 bottom-3 left-3 bg-primary-500 rounded-lg rounded-br-[70px] z-0 transition-transform duration-200 group-hover:translate-x-[2px] step-card-bg" />

                  {/* Number badge riding the card's left edge */}
                  <div className="absolute -left-[22px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-primary-500 text-neutral-0 flex items-center justify-center font-heading font-extrabold text-[14.5px] shadow-[0_8px_18px_-4px_rgba(20,25,28,0.28)] border-[3px] border-solid border-neutral-0 step-num">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Content card */}
                  <div className="relative z-10 h-full flex flex-col bg-neutral-0 border border-solid border-neutral-100 rounded-lg rounded-br-[70px] pt-[34px] pb-[26px] px-5 text-center shadow-sm transition-all duration-200 group-hover:shadow-md step-card">
                    <div className="w-[46px] h-[46px] rounded-md bg-neutral-50 mx-auto mb-4 flex items-center justify-center step-icon">
                      <step.icon className="w-[28px] h-[28px] text-primary-600" />
                    </div>
                    <CardHeading className="text-[15.5px] mb-2">{step.title}</CardHeading>
                    <CardDesc className="text-[13.5px] leading-relaxed text-neutral-600">{step.desc}</CardDesc>
                  </div>
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
