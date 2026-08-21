import React from "react";
import { Check } from "lucide-react";
import clsx from "clsx";
import Container from "@/components/common-layout/Container";
import SubHeading from "@/components/pages/typography/SubHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import { PRICING_PLANS } from "@/constant/pricingData";
import { COMPARISON_GROUPS, type ComparisonValue } from "@/constant/comparisonData";

const ComparisonCell: React.FC<{ value: ComparisonValue }> = ({ value }) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check strokeWidth={3} className="w-5 h-5 text-primary-600 mx-auto" />
    ) : (
      <span className="text-neutral-300 text-base leading-none">—</span>
    );
  }
  return <span className="text-neutral-700 text-[13.5px]">{value}</span>;
};

const ComparisonTable: React.FC = () => {
  return (
    <section className="pb-16 bg-neutral-0 section" id="compare-plans">
      <Container>
        <div className="text-center max-w-[640px] mx-auto mb-8 section-head">
          <span className="text-primary-600 font-bold text-xs uppercase tracking-wider mb-3 block kicker">
            Compare Plans
          </span>
          <SubHeading className="mb-3">Everything you get</SubHeading>
          <Paragraph className="text-neutral-600 text-base">
            Compare what&apos;s included at each tier. Higher tiers unlock more power.
          </Paragraph>
        </div>

        <div className="border border-solid border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-solid border-neutral-200">
                  <th className="sticky left-0 z-10 bg-neutral-0 py-5 px-6 text-[15px] font-bold text-neutral-900 border-r border-solid border-neutral-100">
                    Feature
                  </th>
                  {PRICING_PLANS.map((plan) => (
                    <th
                      key={plan.name}
                      className="bg-neutral-0 py-5 px-5 text-[15px] text-center whitespace-nowrap"
                    >
                      <span className={clsx("font-bold", plan.featured ? "text-primary-600" : "text-neutral-900")}>
                        {plan.name}
                      </span>{" "}
                      <span className="text-[13px] font-medium text-neutral-400">
                        {plan.isFree ? plan.monthlyPrice : `${plan.monthlyPrice}/mo`}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_GROUPS.map((group) => (
                  <React.Fragment key={group.label}>
                    <tr className="bg-neutral-50">
                      <td className="sticky left-0 z-10 bg-neutral-50 py-2.5 px-6 text-[13px] font-extrabold uppercase tracking-wider text-danger-500 whitespace-nowrap">
                        {group.label}
                      </td>
                      {PRICING_PLANS.map((plan) => (
                        <td key={plan.name} className="py-2.5 px-5" />
                      ))}
                    </tr>
                    {group.features.map((feature) => (
                      <tr key={feature.name} className="border-b border-solid border-neutral-100 last:border-b-0 hover:bg-neutral-50/60 group">
                        <td className="sticky left-0 z-10 bg-neutral-0 group-hover:bg-neutral-50 py-4 px-6 text-[13.5px] text-neutral-700 border-r border-solid border-neutral-100">
                          {feature.name}
                        </td>
                        {feature.values.map((value, idx) => (
                          <td key={idx} className="py-4 px-5 text-center">
                            <ComparisonCell value={value} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default ComparisonTable;
