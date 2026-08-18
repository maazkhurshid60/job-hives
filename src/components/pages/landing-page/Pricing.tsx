"use client";

import React, { useState } from "react";
import Container from "@/components/common-layout/Container";
import SubHeading from "@/components/pages/typography/SubHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import BillingToggle from "@/components/pages/landing-page/BillingToggle";
import PriceCard from "@/components/pages/landing-page/PriceCard";
import clsx from "clsx";
import { useReveal } from "@/hooks/useReveal";
import { PRICING_PLANS, type BillingPeriod } from "@/constant/pricingData";

const Pricing: React.FC = () => {
  const sectionHeadReveal = useReveal<HTMLDivElement>();
  const gridReveal = useReveal<HTMLDivElement>();
  const [billing, setBilling] = useState<BillingPeriod>("yearly");

  return (
    <section className="py-[88px] bg-neutral-0 section" id="pricing">
      <Container>
        <div
          ref={sectionHeadReveal.ref}
          className={clsx("text-center max-w-[640px] mx-auto mb-10 section-head", sectionHeadReveal.className)}
        >
          <span className="text-primary-600 font-bold text-xs uppercase tracking-wider mb-3 block kicker">
            Pricing
          </span>
          <SubHeading className="mb-3">Simple plans for every stage</SubHeading>
          <Paragraph className="text-neutral-600 text-base">
            Free to post, upgrade to unlock contacts and reach more talent.
          </Paragraph>
        </div>

        <BillingToggle billing={billing} onChange={setBilling} />

        <div
          ref={gridReveal.ref}
          className={clsx("grid grid-cols-1 min-[901px]:grid-cols-3 gap-6 max-w-[1040px] mx-auto items-stretch pricing-grid", gridReveal.className)}
        >
          {PRICING_PLANS.map((plan, index) => (
            <PriceCard key={index} plan={plan} billing={billing} />
          ))}
        </div>

        <div className="text-center mt-9 view-all-wrap">
          <button className="font-body font-semibold text-sm cursor-pointer select-none inline-flex items-center justify-center gap-2 transition duration-150 px-5 py-3 border border-solid border-primary-500 text-primary-600 hover:bg-primary-50 rounded-full bg-neutral-0">
            View All Pricing
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
