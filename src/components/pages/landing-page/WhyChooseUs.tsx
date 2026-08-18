"use client";

import React from "react";
import Container from "@/components/common-layout/Container";
import SubHeading from "@/components/pages/typography/SubHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import ComparePanel from "@/components/pages/landing-page/ComparePanel";
import clsx from "clsx";
import { useReveal } from "@/hooks/useReveal";
import { COMPARE_OLD, COMPARE_NEW } from "@/constant/compareData";

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
          <ComparePanel data={COMPARE_OLD} />
          <ComparePanel data={COMPARE_NEW} />
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
