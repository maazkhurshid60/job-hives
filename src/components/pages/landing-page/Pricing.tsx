"use client";

import React from "react";
import Container from "@/components/common-layout/Container";
import SubHeading from "@/components/pages/typography/SubHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import Link from "next/link";
import clsx from "clsx";
import { useReveal } from "@/hooks/useReveal";

interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  desc: string;
  features: string[];
  ctaText: string;
  ctaUrl: string;
  featured?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    desc: "Perfect for solo workers and small agencies just getting started on the platform.",
    features: [
      "1 job post / month",
      "View & track applications",
      "Basic profile & messaging",
      "Monthly email summary",
    ],
    ctaText: "Get Started Free",
    ctaUrl: "#",
  },
  {
    name: "Plus",
    price: "$39",
    period: "/month",
    desc: "For growing agencies ready to reach more talent, faster.",
    features: [
      "Everything in Free, plus:",
      "2 job posts / month",
      "Contact up to 400 workers",
      "Direct messaging & unlocks",
      "Featured job placement",
      "Priority support",
    ],
    ctaText: "Start Free Trial",
    ctaUrl: "#",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$149",
    period: "/month",
    desc: "For established agencies scaling hiring across multiple teams.",
    features: [
      "Everything in Plus, plus:",
      "10 job posts / month",
      "Contact up to 7,000 workers",
      "Dedicated account manager",
      "24/7 priority support",
    ],
    ctaText: "Contact Sales",
    ctaUrl: "#",
  },
];

const Pricing: React.FC = () => {
  const sectionHeadReveal = useReveal<HTMLDivElement>();
  const gridReveal = useReveal<HTMLDivElement>();

  return (
    <section className="py-[88px] bg-neutral-0 section" id="pricing">
      <Container>
        <div
          ref={sectionHeadReveal.ref}
          className={clsx("text-center max-w-[640px] mx-auto mb-12 section-head", sectionHeadReveal.className)}
        >
          <span className="text-primary-600 font-bold text-xs uppercase tracking-wider mb-3 block kicker">
            Pricing
          </span>
          <SubHeading className="mb-3">Simple plans for every stage</SubHeading>
          <Paragraph className="text-neutral-600 text-base">
            Free to post, upgrade to unlock contacts and reach more talent.
          </Paragraph>
        </div>

        <div
          ref={gridReveal.ref}
          className={clsx("grid grid-cols-1 min-[901px]:grid-cols-3 gap-6 max-w-[1040px] mx-auto items-stretch pricing-grid", gridReveal.className)}
        >
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={clsx(
                "bg-neutral-0 border border-solid border-neutral-200 rounded-lg py-8 px-7 flex flex-col justify-between relative transition duration-200 hover:shadow-md price-card",
                plan.featured
                  ? "bg-primary-800 border-primary-800 pt-11 min-[901px]:-translate-y-3 shadow-lg hover:-translate-y-1 min-[901px]:hover:-translate-y-4 featured"
                  : "hover:-translate-y-1"
              )}
            >
              {plan.featured && (
                <span className="absolute top-[-16px] left-[50%] -translate-x-[50%] bg-primary-500 text-neutral-0 text-[11.5px] font-extrabold tracking-wider uppercase px-[18px] py-[7px] rounded-full shadow-md whitespace-nowrap popular-badge">
                  Most Popular
                </span>
              )}

              <div>
                <div
                  className={clsx(
                    "text-xs font-extrabold uppercase tracking-wider mb-4 plan-name",
                    plan.featured ? "text-primary-100" : "text-neutral-500"
                  )}
                >
                  {plan.name}
                </div>

                <div className="flex items-baseline gap-1.5 mb-4 price-row">
                  <span
                    className={clsx(
                      "font-heading font-extrabold text-[38px] price",
                      plan.featured ? "text-neutral-0" : "text-neutral-900"
                    )}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={clsx(
                        "text-sm font-medium price-period",
                        plan.featured ? "text-primary-200" : "text-neutral-500"
                      )}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>

                <p
                  className={clsx(
                    "text-[13.5px] leading-[1.6] mb-5 desc",
                    plan.featured ? "text-primary-100" : "text-neutral-600"
                  )}
                >
                  {plan.desc}
                </p>

                <div
                  className={clsx(
                    "border-t border-solid mb-5 divider",
                    plan.featured ? "border-primary-600" : "border-neutral-200"
                  )}
                />

                <ul className="mb-7 p-0 flex flex-col gap-3 flex-1 list-none text-left">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={clsx(
                        "flex gap-2.5 items-start text-[13.5px] leading-normal",
                        plan.featured ? "text-neutral-0" : "text-neutral-700"
                      )}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={clsx(
                          "w-4 h-4 flex-shrink-0 mt-0.5",
                          plan.featured ? "text-neutral-0" : "text-primary-500"
                        )}
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={plan.ctaUrl}
                className={clsx(
                  "block text-center text-sm font-bold py-3 px-5 rounded-full border-[1.5px] border-solid transition duration-150 no-underline price-cta",
                  plan.featured
                    ? "bg-neutral-0 border-neutral-0 text-primary-800 hover:bg-primary-50"
                    : "border-primary-500 text-primary-700 bg-neutral-0 hover:bg-primary-50"
                )}
              >
                {plan.ctaText}
              </Link>
            </div>
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
