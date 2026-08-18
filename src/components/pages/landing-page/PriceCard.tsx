import React from "react";
import clsx from "clsx";
import { Check } from "lucide-react";
import type { BillingPeriod, PricingPlan } from "@/constant/pricingData";

interface PriceCardProps {
  plan: PricingPlan;
  billing: BillingPeriod;
}

const PriceCard: React.FC<PriceCardProps> = ({ plan, billing }) => {
  const featured = !!plan.featured;

  return (
    <div
      className={clsx(
        "rounded-lg py-8 px-7 flex flex-col relative transition duration-200 price-card",
        featured ? "bg-primary-800 shadow-lg featured" : "bg-neutral-0 border border-solid border-neutral-200 hover:shadow-md"
      )}
    >
      {featured && (
        <span className="absolute top-[-14px] left-1/2 -translate-x-1/2 bg-primary-500 text-neutral-0 text-[11px] font-extrabold tracking-wider uppercase px-4 py-[6px] rounded-full shadow-md whitespace-nowrap popular-badge">
          Most Popular
        </span>
      )}

      <div className={clsx("text-xs font-extrabold uppercase tracking-wider mb-4 plan-name", featured ? "text-neutral-0" : "text-neutral-500")}>
        {plan.name}
      </div>

      <div className="flex items-baseline gap-2 flex-wrap mb-1.5 price-row">
        {plan.isFree ? (
          <span className={clsx("font-heading font-extrabold text-[38px] leading-none price", featured ? "text-neutral-0" : "text-neutral-900")}>
            FREE
          </span>
        ) : (
          <>
            <span className={clsx("font-heading font-extrabold text-[38px] leading-none price", featured ? "text-neutral-0" : "text-neutral-900")}>
              {billing === "yearly" ? plan.yearlyPrice : plan.monthlyPrice}
            </span>
            <span className={clsx("text-sm font-medium", featured ? "text-neutral-0" : "text-neutral-500")}>/month</span>
            {billing === "yearly" && (
              <span className={clsx("text-sm line-through", featured ? "text-primary-300" : "text-neutral-400")}>
                {plan.monthlyPrice}
              </span>
            )}
          </>
        )}
      </div>

      {!plan.isFree && (
        <div className={clsx("text-[12.5px] font-bold mb-4", featured ? "text-neutral-0" : "text-neutral-500")}>
          {billing === "yearly" ? "Billed Yearly" : "Billed Monthly"}
        </div>
      )}
      {plan.isFree && <div className="mb-4" />}

      <p className={clsx("text-[13.5px] leading-[1.6] mb-5 desc", featured ? "text-primary-100" : "text-neutral-600")}>
        {plan.desc}
      </p>

      <div className={clsx("border-t border-solid mb-5 divider", featured ? "border-primary-600" : "border-neutral-200")} />

      <div className={clsx("text-[13px] font-extrabold mb-4 features-heading", featured ? "text-neutral-0" : "text-neutral-900")}>
        {plan.featuresHeading}
      </div>

      <ul className="p-0 mb-7 flex flex-col gap-3 flex-1 list-none text-left">
        {plan.features.map((feature, idx) => (
          <li key={idx} className={clsx("flex gap-2.5 items-start text-[13.5px] leading-normal", featured ? "text-neutral-0" : "text-neutral-700")}>
            <Check className={clsx("w-4 h-4 flex-shrink-0 mt-0.5", featured ? "text-neutral-0" : "text-primary-600")} />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={plan.ctaUrl}
        aria-disabled={plan.disabled}
        onClick={(e) => plan.disabled && e.preventDefault()}
        className={clsx(
          "block text-center text-sm font-bold py-3 px-5 rounded-full border-[1.5px] border-solid transition duration-150 no-underline price-cta",
          plan.disabled
            ? "bg-neutral-100 border-neutral-200 text-neutral-400 cursor-not-allowed"
            : featured
              ? "bg-primary-500 border-primary-500 text-neutral-0 hover:bg-primary-400"
              : "border-primary-800 text-primary-800 bg-neutral-0 hover:bg-primary-50"
        )}
      >
        {plan.ctaText}
      </a>
    </div>
  );
};

export default PriceCard;
