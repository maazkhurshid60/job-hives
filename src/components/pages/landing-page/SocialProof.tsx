"use client";

import React from "react";
import Container from "@/components/common-layout/Container";
import SubHeading from "@/components/pages/typography/SubHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import TestimonialCard from "@/components/pages/landing-page/TestimonialCard";
import clsx from "clsx";
import { useReveal } from "@/hooks/useReveal";
import { TESTIMONIALS_DATA } from "@/constant/testimonialsData";

const SocialProof: React.FC = () => {
  const col1 = [TESTIMONIALS_DATA[0], TESTIMONIALS_DATA[3], TESTIMONIALS_DATA[6], TESTIMONIALS_DATA[9]];
  const col2 = [TESTIMONIALS_DATA[1], TESTIMONIALS_DATA[4], TESTIMONIALS_DATA[7], TESTIMONIALS_DATA[10]];
  const col3 = [TESTIMONIALS_DATA[2], TESTIMONIALS_DATA[5], TESTIMONIALS_DATA[8], TESTIMONIALS_DATA[11]];
  const sectionHeadReveal = useReveal<HTMLDivElement>();
  const logosReveal = useReveal<HTMLDivElement>();

  return (
    <section className="py-[88px] bg-neutral-50 relative overflow-hidden social-proof" id="social-proof">
      {/* Top & Bottom Fades for visual scrolling layout */}
      <div className="absolute left-0 right-0 h-[110px] z-30 pointer-events-none top-0 bg-gradient-to-b from-neutral-50 to-transparent tw-fade tw-fade-top" />
      <div className="absolute left-0 right-0 h-[110px] z-30 pointer-events-none bottom-0 bg-gradient-to-t from-neutral-50 to-transparent tw-fade tw-fade-bottom" />

      <Container>
        <div
          ref={sectionHeadReveal.ref}
          className={clsx("text-center max-w-[640px] mx-auto mb-12 section-head", sectionHeadReveal.className)}
        >
          <span className="text-primary-600 font-bold text-xs uppercase tracking-wider mb-3 block kicker">
            Real results
          </span>
          <SubHeading className="mb-3">Loved by both sides of the marketplace</SubHeading>
          <Paragraph className="text-neutral-600 text-base">
            Real workers, real employers — no actors, no stock photos.
          </Paragraph>
        </div>

        {/* Brand Logos Row */}
        <div
          ref={logosReveal.ref}
          className={clsx("flex justify-center items-center gap-12 flex-wrap opacity-55 mb-14 grayscale logos-row", logosReveal.className)}
        >
          <span className="font-heading font-extrabold text-xl text-neutral-500 brand-mark">Nova Agency</span>
          <span className="font-heading font-extrabold text-xl text-neutral-500 brand-mark">Bright Creators</span>
          <span className="font-heading font-extrabold text-xl text-neutral-500 brand-mark">Studio Nine</span>
          <span className="font-heading font-extrabold text-xl text-neutral-500 brand-mark">Peak Social</span>
        </div>

        {/* Desktop / Tablet Vertical Auto-Scrolling columns */}
        <div className="hidden min-[641px]:grid relative grid-cols-2 min-[980px]:grid-cols-3 gap-5 max-h-[560px] min-[980px]:max-h-[640px] overflow-hidden tw-columns">
          {/* Column 1 */}
          <div className="overflow-hidden tw-col group/col">
            <div className="flex flex-col gap-5 animate-[twScrollUp_34s_linear_infinite] group-hover/col:[animation-play-state:paused] tw-col-inner">
              {[...col1, ...col1].map((t, idx) => (
                <TestimonialCard key={`c1-${idx}`} testimonial={t} />
              ))}
            </div>
          </div>
          {/* Column 2 */}
          <div className="overflow-hidden tw-col group/col">
            <div className="flex flex-col gap-5 animate-[twScrollUp_26s_linear_infinite] group-hover/col:[animation-play-state:paused] tw-col-inner">
              {[...col2, ...col2].map((t, idx) => (
                <TestimonialCard key={`c2-${idx}`} testimonial={t} />
              ))}
            </div>
          </div>
          {/* Column 3 (Hidden on medium tablet sizes) */}
          <div className="overflow-hidden hidden min-[980px]:block tw-col group/col">
            <div className="flex flex-col gap-5 animate-[twScrollUp_40s_linear_infinite] group-hover/col:[animation-play-state:paused] tw-col-inner">
              {[...col3, ...col3].map((t, idx) => (
                <TestimonialCard key={`c3-${idx}`} testimonial={t} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Horizontal Auto-Scrolling row */}
        <div className="block min-[641px]:hidden overflow-hidden relative mt-2 tw-mobile-row">
          <div className="absolute top-0 bottom-0 left-0 w-9 z-30 pointer-events-none bg-gradient-to-r from-neutral-50 to-transparent tw-fade-side tw-fade-left" />
          <div className="absolute top-0 bottom-0 right-0 w-9 z-30 pointer-events-none bg-gradient-to-l from-neutral-50 to-transparent tw-fade-side tw-fade-right" />
          <div className="flex gap-4 w-max animate-[twScrollLeft_45s_linear_infinite] hover:[animation-play-state:paused] tw-mobile-track">
            {[...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA].map((t, idx) => (
              <div key={`m-${idx}`} className="w-[270px] flex-shrink-0">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SocialProof;
