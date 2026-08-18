"use client";

import React from "react";
import Container from "@/components/common-layout/Container";
import SubHeading from "@/components/pages/typography/SubHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import CardHeading from "@/components/pages/typography/CardHeading";
import CardDesc from "@/components/pages/typography/CardDesc";
import clsx from "clsx";
import { useReveal } from "@/hooks/useReveal";

const WhyChooseUs: React.FC = () => {
  const sectionHeadReveal = useReveal<HTMLDivElement>();
  const compareReveal = useReveal<HTMLDivElement>();

  return (
    <section className="py-[88px] bg-neutral-0 section" id="why-us">
      <Container>
        <div
          ref={sectionHeadReveal.ref}
          className={clsx("text-center max-w-[640px] mx-auto mb-12 section-head", sectionHeadReveal.className)}
        >
          <span className="text-primary-600 font-bold text-xs uppercase tracking-wider mb-3 block kicker">
            Why choose us
          </span>
          <SubHeading className="mb-3">Built for trust, not just transactions</SubHeading>
          <Paragraph className="text-neutral-600 text-base">
            See the difference between the old way of hiring and how it works on our platform.
          </Paragraph>
        </div>

        <div
          ref={compareReveal.ref}
          className={clsx("grid grid-cols-1 min-[861px]:grid-cols-2 gap-6 items-stretch compare-wrap", compareReveal.className)}
        >
          {/* Old way */}
          <div className="bg-neutral-50 border border-solid border-neutral-200 rounded-xl py-9 px-8 max-[520px]:py-7 max-[520px]:px-[22px] flex flex-col justify-between compare-panel old">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-neutral-200 mb-6 compare-head">
                <div className="flex items-center gap-3 text-[19px] font-extrabold text-neutral-900 compare-title">
                  <span className="w-[34px] h-[34px] rounded-full border-[1.5px] border-solid border-neutral-300 text-neutral-400 flex items-center justify-center flex-shrink-0 badge-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]">
                      <circle cx="12" cy="12" r="9"/>
                      <path d="M9 9l6 6M15 9l-6 6"/>
                    </svg>
                  </span>
                  Hiring the old way
                </div>
              </div>
              
              <div className="flex flex-col gap-5 mb-6 compare-list">
                <div className="flex gap-3 compare-item">
                  <svg className="w-5 h-5 mt-0.5 text-neutral-400 flex-shrink-0 ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M9 9l6 6M15 9l-6 6"/>
                  </svg>
                  <div>
                    <CardHeading className="text-[15px] font-bold mb-1">Unverified profiles</CardHeading>
                    <CardDesc className="text-[13px] text-neutral-400">
                      No ID or portfolio checks — you&apos;re guessing who you&apos;re actually hiring.
                    </CardDesc>
                  </div>
                </div>

                <div className="flex gap-3 compare-item">
                  <svg className="w-5 h-5 mt-0.5 text-neutral-400 flex-shrink-0 ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M9 9l6 6M15 9l-6 6"/>
                  </svg>
                  <div>
                    <CardHeading className="text-[15px] font-bold mb-1">Scattered across DMs</CardHeading>
                    <CardDesc className="text-[13px] text-neutral-400">
                      Deals lost across Telegram, Discord, and email threads.
                    </CardDesc>
                  </div>
                </div>

                <div className="flex gap-3 compare-item">
                  <svg className="w-5 h-5 mt-0.5 text-neutral-400 flex-shrink-0 ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M9 9l6 6M15 9l-6 6"/>
                  </svg>
                  <div>
                    <CardHeading className="text-[15px] font-bold mb-1">Manual screening</CardHeading>
                    <CardDesc className="text-[13px] text-neutral-400">
                      Hours of interviews before you land on one decent fit.
                    </CardDesc>
                  </div>
                </div>

                <div className="flex gap-3 compare-item">
                  <svg className="w-5 h-5 mt-0.5 text-neutral-400 flex-shrink-0 ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M9 9l6 6M15 9l-6 6"/>
                  </svg>
                  <div>
                    <CardHeading className="text-[15px] font-bold mb-1">No safety net</CardHeading>
                    <CardDesc className="text-[13px] text-neutral-400">
                      No dispute support if a hire disappears mid-project.
                    </CardDesc>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col min-[521px]:flex-row gap-4 min-[521px]:gap-8 pt-5 border-t border-solid border-neutral-200 compare-stats">
              <div className="compare-stat">
                <div className="text-[11px] font-bold tracking-wider uppercase text-neutral-400 mb-1.5 label">
                  Avg. time to hire
                </div>
                <div className="text-[17px] font-extrabold text-neutral-600 leading-tight value">
                  3–5 weeks
                </div>
              </div>
              <div className="compare-stat">
                <div className="text-[11px] font-bold tracking-wider uppercase text-neutral-400 mb-1.5 label">
                  The real cost
                </div>
                <div className="text-[17px] font-extrabold text-neutral-600 leading-tight value">
                  Missed deadlines, wasted budget.
                </div>
              </div>
            </div>
          </div>

          {/* With us */}
          <div className="bg-neutral-0 border-2 border-solid border-primary-300 rounded-xl py-9 px-8 max-[520px]:py-7 max-[520px]:px-[22px] shadow-lg flex flex-col justify-between compare-panel new relative">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-primary-100 mb-6 compare-head">
                <div className="flex items-center gap-3 text-[19px] font-extrabold text-neutral-900 compare-title">
                  <span className="w-[34px] h-[34px] rounded-full border-[1.5px] border-solid border-primary-400 text-primary-500 flex items-center justify-center flex-shrink-0 badge-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                  With JobHive
                </div>
                <span className="bg-primary-50 text-primary-700 text-xs font-bold px-3.5 py-1.5 rounded-full whitespace-nowrap speed-badge">
                  5x faster
                </span>
              </div>
              
              <div className="flex flex-col gap-5 mb-6 compare-list">
                <div className="flex gap-3 compare-item">
                  <svg className="w-5 h-5 mt-0.5 text-primary-500 flex-shrink-0 ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                  <div>
                    <CardHeading className="text-[15px] font-bold mb-1">Verified &amp; tested talent</CardHeading>
                    <CardDesc className="text-[13px] text-neutral-600">
                      ID checks plus skill assessments, completed before a profile ever reaches you.
                    </CardDesc>
                  </div>
                </div>

                <div className="flex gap-3 compare-item">
                  <svg className="w-5 h-5 mt-0.5 text-primary-500 flex-shrink-0 ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                  <div>
                    <CardHeading className="text-[15px] font-bold mb-1">One dashboard, every hire</CardHeading>
                    <CardDesc className="text-[13px] text-neutral-600">
                      Post, message, track and pay — nothing scattered across five different apps.
                    </CardDesc>
                  </div>
                </div>

                <div className="flex gap-3 compare-item">
                  <svg className="w-5 h-5 mt-0.5 text-primary-500 flex-shrink-0 ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                  <div>
                    <CardHeading className="text-[15px] font-bold mb-1">Built-in payment protection</CardHeading>
                    <CardDesc className="text-[13px] text-neutral-600">
                      Funds held safely until milestones are approved on both sides.
                    </CardDesc>
                  </div>
                </div>

                <div className="flex gap-3 compare-item">
                  <svg className="w-5 h-5 mt-0.5 text-primary-500 flex-shrink-0 ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                  <div>
                    <CardHeading className="text-[15px] font-bold mb-1">A pipeline that never runs dry</CardHeading>
                    <CardDesc className="text-[13px] text-neutral-600">
                      Thousands of vetted workers and new signups join daily.
                    </CardDesc>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col min-[521px]:flex-row gap-4 min-[521px]:gap-8 pt-5 border-t border-solid border-primary-100 compare-stats">
              <div className="compare-stat">
                <div className="text-[11px] font-bold tracking-wider uppercase text-neutral-400 mb-1.5 label">
                  Avg. time to hire
                </div>
                <div className="text-[17px] font-extrabold text-neutral-900 leading-tight value">
                  3–5 days
                </div>
              </div>
              <div className="compare-stat">
                <div className="text-[11px] font-bold tracking-wider uppercase text-neutral-400 mb-1.5 label">
                  The result
                </div>
                <div className="text-[17px] font-extrabold text-neutral-900 leading-tight value">
                  Faster hires, lower turnover.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
