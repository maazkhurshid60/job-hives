import React from "react";
import LandingPageWrapper from "@/components/wrappers/LandingPageWrapper";
import Hero from "@/components/pages/landing-page/Hero";
import LiveStatsBar from "@/components/pages/landing-page/LiveStatsBar";
import HowItWorks from "@/components/pages/landing-page/HowItWorks";
import FeaturedJobs from "@/components/pages/landing-page/FeaturedJobs";
import WhyChooseUs from "@/components/pages/landing-page/WhyChooseUs";
import SocialProof from "@/components/pages/landing-page/SocialProof";
import Pricing from "@/components/pages/landing-page/Pricing";
import FinalCTA from "@/components/pages/landing-page/FinalCTA";

export default function Home() {
  return (
    <LandingPageWrapper>
      <Hero />
      <LiveStatsBar />
      <HowItWorks />
      <FeaturedJobs />
      <WhyChooseUs />
      <SocialProof />
      <Pricing />
      <FinalCTA />
    </LandingPageWrapper>
  );
}
