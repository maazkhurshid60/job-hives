"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import Container from "@/components/common-layout/Container";
import { useReveal } from "@/hooks/useReveal";
import { FAQ_ITEMS } from "@/constant/faqData";

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section className="py-[88px] bg-neutral-50 section" id="faq">
      <Container>
        <div
          ref={reveal.ref}
          className={clsx("grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-start faq-grid", reveal.className)}
        >
          <div className="faq-head">
            <h2 className="text-neutral-900 font-heading font-extrabold text-[clamp(28px,3.6vw,38px)] leading-[1.15] mb-4">
              Frequently Asked
              <br />
              Question
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed max-w-[300px]">
              Trusted by workers and employers finding each other every day on JobHive.
            </p>
          </div>

          <div className="bg-neutral-0 border border-solid border-neutral-200 rounded-2xl px-6 sm:px-7 shadow-sm faq-list">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = index === openIndex;
              return (
                <div
                  key={item.question}
                  className={clsx(
                    "py-5 faq-item",
                    index !== FAQ_ITEMS.length - 1 && "border-b border-solid border-neutral-100"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className={clsx(
                      "w-full flex items-center justify-between gap-4 text-left bg-none border-none cursor-pointer font-body font-semibold text-[14.5px] transition-colors duration-150",
                      isOpen ? "text-primary-600" : "text-neutral-700 hover:text-neutral-900"
                    )}
                  >
                    {item.question}
                    <ChevronDown
                      className={clsx(
                        "w-4 h-4 flex-shrink-0 transition-transform duration-200",
                        isOpen ? "text-primary-600 rotate-180" : "text-neutral-400"
                      )}
                    />
                  </button>
                  {isOpen && (
                    <p className="text-neutral-600 text-[13.5px] leading-relaxed mt-3 pr-6 faq-answer">{item.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
