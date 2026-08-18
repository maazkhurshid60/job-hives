"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/common-layout/Container";
import SubHeading from "@/components/pages/typography/SubHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import CardDesc from "@/components/pages/typography/CardDesc";
import clsx from "clsx";
import { useReveal } from "@/hooks/useReveal";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const AVATAR_PARAMS = "w=100&h=100&fit=crop&crop=faces&auto=format&q=70";

const testimonialsData: Testimonial[] = [
  { quote: "Without hesitation the best platform we've used for finding reliable chatters. We've hired three people through it already.", name: "Nova Agency", role: "Agency Owner", avatar: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?${AVATAR_PARAMS}` },
  { quote: "I could filter applicants exactly on the criteria that mattered to us — language, platform experience, availability.", name: "Sunny Peak Agency", role: "Hiring Manager", avatar: `https://images.unsplash.com/photo-1494790108377-be9c29b29330?${AVATAR_PARAMS}` },
  { quote: "Finally a job platform that moves fast. Everything from posting to first applicant took under ten minutes.", name: "Bright Creators", role: "Founder", avatar: `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?${AVATAR_PARAMS}` },
  { quote: "It's helped me find reliable, consistent workers — something I struggled with everywhere else in this space.", name: "Studio Nine", role: "Operations Lead", avatar: `https://images.unsplash.com/photo-1544005313-94ddf0286df2?${AVATAR_PARAMS}` },
  { quote: "A completely different experience from bidding-war freelance sites. No other platform has done matching this well.", name: "Peak Social", role: "Talent Lead", avatar: `https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?${AVATAR_PARAMS}` },
  { quote: "We scaled from two to six chatters in a month, sourced almost entirely through the platform.", name: "Nightshade Media", role: "Agency Owner", avatar: `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?${AVATAR_PARAMS}` },
  { quote: "I use it to find virtual assistants for our whole partner network — quality has been consistently high.", name: "Halcyon Group", role: "Ops Manager", avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?${AVATAR_PARAMS}` },
  { quote: "Got hired within a week for reel editing — no bidding wars, just a direct message from the employer.", name: "Jamie M.", role: "Content Editor", avatar: `https://images.unsplash.com/photo-1552058544-f2b08422138a?${AVATAR_PARAMS}` },
  { quote: "The filters saved me hours — I could find chatters by language and platform instantly.", name: "Alicia R.", role: "Agency Owner", avatar: `https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?${AVATAR_PARAMS}` },
  { quote: "Flexible remote work that actually respects my time zone and gave me the confidence to grow.", name: "Dara K.", role: "Virtual Assistant", avatar: `https://images.unsplash.com/photo-1601412436009-d964bd02edbc?${AVATAR_PARAMS}` },
  { quote: "As a first-time hirer, the onboarding made it easy to know exactly what 'verified' actually meant.", name: "Wren & Co.", role: "Founder", avatar: `https://images.unsplash.com/photo-1607746882042-944635dfe10e?${AVATAR_PARAMS}` },
  { quote: "My leads only come through the platform now — it's saved me an enormous amount of time.", name: "Fanfloww", role: "Agency Owner", avatar: `https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?${AVATAR_PARAMS}` },
];

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-neutral-0 border border-solid border-neutral-200 rounded-lg p-[26px] shadow-sm w-full break-inside-avoid tw-card">
      <div className="text-primary-500 text-sm mb-3.5 tracking-[2px] tw-stars">★★★★★</div>
      <CardDesc className="text-[14.5px] leading-relaxed text-neutral-700 mb-[18px] tw-quote">
        &ldquo;{testimonial.quote}&rdquo;
      </CardDesc>
      <div className="border-t border-solid border-neutral-100 mb-3.5 tw-divider" />
      <div className="flex items-center gap-3 tw-author">
        <div className="relative w-[38px] h-[38px] rounded-full overflow-hidden flex-shrink-0 tw-avatar">
          <Image src={testimonial.avatar} alt={testimonial.name} fill sizes="38px" className="object-cover" />
        </div>
        <div>
          <b className="text-[13.5px] block text-neutral-900">{testimonial.name}</b>
          <span className="text-[12px] text-neutral-500">{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
};

const SocialProof: React.FC = () => {
  const col1 = [testimonialsData[0], testimonialsData[3], testimonialsData[6], testimonialsData[9]];
  const col2 = [testimonialsData[1], testimonialsData[4], testimonialsData[7], testimonialsData[10]];
  const col3 = [testimonialsData[2], testimonialsData[5], testimonialsData[8], testimonialsData[11]];
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
            {[...testimonialsData, ...testimonialsData].map((t, idx) => (
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
