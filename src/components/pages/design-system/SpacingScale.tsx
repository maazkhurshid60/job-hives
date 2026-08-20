import React from "react";

const STEPS: { token: string; px: string; className: string }[] = [
  { token: "xs", px: "8px", className: "w-xs" },
  { token: "sm", px: "12px", className: "w-sm" },
  { token: "md", px: "16px", className: "w-md" },
  { token: "lg", px: "24px", className: "w-lg" },
  { token: "xl", px: "32px", className: "w-xl" },
  { token: "2xl", px: "44px", className: "w-2xl" },
  { token: "3xl", px: "64px", className: "w-3xl" },
  { token: "4xl", px: "88px", className: "w-4xl" },
];

const SpacingScale: React.FC = () => (
  <div className="flex flex-col gap-sm">
    {STEPS.map((step) => (
      <div key={step.token} className="flex items-center gap-md">
        <span className="w-20 flex-shrink-0 font-body font-semibold text-body-sm text-neutral-700">{step.token}</span>
        <span className="w-14 flex-shrink-0 font-body text-caption text-neutral-400">{step.px}</span>
        <div className={`h-3 rounded-sm bg-primary-500 ${step.className}`} />
      </div>
    ))}
    <p className="text-body-sm text-neutral-500 mt-sm">
      Use as <code className="bg-neutral-100 rounded px-1">p-md</code>, <code className="bg-neutral-100 rounded px-1">gap-lg</code>,{" "}
      <code className="bg-neutral-100 rounded px-1">mt-4xl</code>, etc. — layered on top of Tailwind&apos;s default numeric spacing scale.
    </p>
  </div>
);

export default SpacingScale;
