import React from "react";

const SIZES: { className: string; label: string; sample: string }[] = [
  { className: "text-heading-xl font-heading font-extrabold", label: "heading-xl / 34px", sample: "Build your dream team" },
  { className: "text-heading-lg font-heading font-extrabold", label: "heading-lg / 28px", sample: "Two sides, one simple process" },
  { className: "text-heading-md font-heading font-bold", label: "heading-md / 22px", sample: "Maricel" },
  { className: "text-heading-sm font-heading font-bold", label: "heading-sm / 17px", sample: "About the role" },
  { className: "text-body-lg font-body", label: "body-lg / 16px", sample: "Real jobs. Real pay. No fluff." },
  { className: "text-body-md font-body", label: "body-md / 14.5px", sample: "Skip the guesswork. Meet who's actually available." },
  { className: "text-body-sm font-body", label: "body-sm / 13px", sample: "Requires an active subscription with unused unlock credits." },
  { className: "text-caption font-body", label: "caption / 11.5px", sample: "3 hours ago" },
];

const TypeScale: React.FC = () => (
  <div className="flex flex-col gap-md">
    {SIZES.map((size) => (
      <div key={size.label} className="flex items-baseline gap-md py-sm border-b border-solid border-neutral-100 last:border-b-0">
        <span className="w-[170px] flex-shrink-0 font-body text-caption text-neutral-400">{size.label}</span>
        <span className={`${size.className} text-neutral-900`}>{size.sample}</span>
      </div>
    ))}
    <p className="text-body-sm text-neutral-500 mt-sm">
      Tailwind&apos;s default <code className="bg-neutral-100 rounded px-1">text-xs</code>&ndash;
      <code className="bg-neutral-100 rounded px-1">text-9xl</code> utilities are still available for anything this scale doesn&apos;t cover.
    </p>
  </div>
);

export default TypeScale;
