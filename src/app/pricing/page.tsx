"use client";

import React, { useState } from "react";
import LandingPageWrapper from "@/components/wrappers/LandingPageWrapper";
import Container from "@/components/common-layout/Container";
import PricingHero from "@/components/pages/pricing/PricingHero";
import TrustRow from "@/components/pages/pricing/TrustRow";
import PriceCard from "@/components/pages/landing-page/PriceCard";
import ComparisonTable from "@/components/pages/pricing/ComparisonTable";
import FaqSection from "@/components/pages/landing-page/FaqSection";
import FinalCTA from "@/components/pages/landing-page/FinalCTA";
import { PRICING_PLANS, type BillingPeriod } from "@/constant/pricingData";
import { PRICING_FAQ_ITEMS } from "@/constant/pricingFaqData";

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  return (
    <LandingPageWrapper>
      <PricingHero billing={billing} onBillingChange={setBilling} />

      <section className="py-[88px] section" id="pricing-cards">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1040px] mx-auto items-start pricing-grid">
            {PRICING_PLANS.map((plan, index) => (
              <PriceCard key={index} plan={plan} billing={billing} />
            ))}
          </div>

          <TrustRow />
        </Container>
      </section>

      <ComparisonTable />

      <FaqSection
        kicker="FAQ"
        title="Questions about pricing"
        description="Can't find what you're looking for? Reach out to our support team anytime."
        items={PRICING_FAQ_ITEMS}
        stacked
      />

      <FinalCTA />
    </LandingPageWrapper>
  );
}
