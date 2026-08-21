"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import Container from "@/components/common-layout/Container";
import { useReveal } from "@/hooks/useReveal";
import { FAQ_ITEMS, type FaqItem } from "@/constant/faqData";

interface FaqSectionProps {
  kicker?: string;
  title?: React.ReactNode;
  description?: string;
  items?: FaqItem[];
  stacked?: boolean;
}

const FaqSection: React.FC<FaqSectionProps> = ({
  kicker,
  title = (
    <>
      Frequently Asked
      <br />
      Question
    </>
  ),
  description = "Trusted by workers and employers finding each other every day on JobHive.",
  items = FAQ_ITEMS,
  stacked = false,
}) => {
  const [openIndex, setOpenIndex] = useState(0);
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section className="py-[88px] bg-neutral-50 section" id="faq">
      <Container>
        <div
          ref={reveal.ref}
          className={clsx(
            "min-w-0 faq-grid",
            stacked ? "flex flex-col gap-10" : "flex flex-col lg:flex-row gap-12 items-start",
            reveal.className
          )}
        >
          <div
            className={clsx(
              "min-w-0 w-full faq-head",
              stacked ? "text-center max-w-[640px] mx-auto" : "lg:w-[38%]"
            )}
          >
            {kicker && (
              <span className="text-primary-600 font-bold text-xs uppercase tracking-wider mb-3 block kicker">{kicker}</span>
            )}
            <h2 className="text-neutral-900 font-heading font-extrabold text-[clamp(28px,3.6vw,38px)] leading-[1.15] mb-4">
              {title}
            </h2>
            <p className={clsx("text-neutral-600 text-base leading-relaxed", stacked ? "" : "max-w-[300px]")}>{description}</p>
          </div>

          <div
            className={clsx(
              "min-w-0 w-full bg-neutral-0 border border-solid border-neutral-200 rounded-2xl px-6 sm:px-7 shadow-sm faq-list",
              stacked ? "max-w-[760px] mx-auto" : "lg:w-[62%]"
            )}
          >
            {items.map((item, index) => {
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
                    <span className="min-w-0">{item.question}</span>
                    <ChevronDown
                      className={clsx(
                        "w-4 h-4 flex-shrink-0 transition-transform duration-200",
                        isOpen ? "text-primary-600 rotate-180" : "text-neutral-400"
                      )}
                    />
                  </button>
                  <div
                    className={clsx(
                      "grid transition-[grid-template-rows] duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <p className="text-neutral-600 text-[13.5px] leading-relaxed pr-6 overflow-hidden faq-answer">
                      <span className="block pt-3">{item.answer}</span>
                    </p>
                  </div>
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
