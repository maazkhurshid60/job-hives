import React from "react";
import BillingToggle from "@/components/pages/landing-page/BillingToggle";
import type { BillingPeriod } from "@/constant/pricingData";

interface PricingHeroProps {
  billing: BillingPeriod;
  onBillingChange: (billing: BillingPeriod) => void;
}

const PricingHero: React.FC<PricingHeroProps> = ({ billing, onBillingChange }) => {
  return (
    <section
      className="relative text-center pt-16 pb-16 px-6 min-h-[380px] flex flex-col items-center justify-center overflow-hidden page-hero"
      style={{ background: "linear-gradient(180deg, #fff 0%, var(--primary-50) 100%)" }}
    >
      {/* Drifting cloud puffs — same reusable primary-100 puffs as the homepage hero. */}
      <div className="hero-clouds">
        <span className="cloud cloud-1" />
        <span className="cloud cloud-2" />
        <span className="cloud cloud-3" />
        <span className="cloud cloud-4" />
        <span className="cloud cloud-5" />
        <span className="cloud cloud-6" />
      </div>

      {/* Decorative dot grid, faded toward the hero's edges */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_50%_50%,var(--primary-200)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30 [mask-image:radial-gradient(700px_380px_at_50%_20%,black,transparent)]" />

      <span className="relative z-[2] inline-flex items-center gap-2 bg-neutral-0 text-primary-700 text-[13px] font-bold py-[7px] px-4 rounded-full mb-[22px] shadow-sm hero-eyebrow">
        <span className="relative w-2 h-2 rounded-full bg-success-500 [animation:pulseDot_2s_infinite] pulse" />
        No hidden fees, cancel anytime
      </span>
      <h1 className="relative z-[2] font-heading font-extrabold text-[clamp(30px,4.8vw,48px)] leading-[1.15] tracking-[-0.02em] text-neutral-900">
        Simple pricing, <span className="text-primary-500">built to scale with you</span>
      </h1>
      <p className="relative z-[2] text-[clamp(15px,1.7vw,17px)] text-neutral-600 mt-4 max-w-[560px] mx-auto px-4">
        Free to post a job and start hiring. Upgrade whenever you need to unlock more contacts and reach more talent.
      </p>
      <div className="relative z-[2] mt-8">
        <BillingToggle billing={billing} onChange={onBillingChange} />
      </div>
    </section>
  );
};

export default PricingHero;
