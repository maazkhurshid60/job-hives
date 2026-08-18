import React from "react";
import Image from "next/image";
import CardDesc from "@/components/pages/typography/CardDesc";
import type { Testimonial } from "@/constant/testimonialsData";

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

export default TestimonialCard;
