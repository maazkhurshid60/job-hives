import React from "react";

// Tailwind only generates classes it can find as literal strings in source — so every
// swatch class below is spelled out in full rather than built with template interpolation.
const RAMPS: { name: string; swatches: { label: string; className: string }[] }[] = [
  {
    name: "primary",
    swatches: [
      { label: "primary-50", className: "bg-primary-50" },
      { label: "primary-100", className: "bg-primary-100" },
      { label: "primary-200", className: "bg-primary-200" },
      { label: "primary-300", className: "bg-primary-300" },
      { label: "primary-400", className: "bg-primary-400" },
      { label: "primary-500", className: "bg-primary-500" },
      { label: "primary-600", className: "bg-primary-600" },
      { label: "primary-700", className: "bg-primary-700" },
      { label: "primary-800", className: "bg-primary-800" },
      { label: "primary-900", className: "bg-primary-900" },
    ],
  },
  {
    name: "neutral",
    swatches: [
      { label: "neutral-0", className: "bg-neutral-0" },
      { label: "neutral-50", className: "bg-neutral-50" },
      { label: "neutral-100", className: "bg-neutral-100" },
      { label: "neutral-200", className: "bg-neutral-200" },
      { label: "neutral-300", className: "bg-neutral-300" },
      { label: "neutral-400", className: "bg-neutral-400" },
      { label: "neutral-500", className: "bg-neutral-500" },
      { label: "neutral-600", className: "bg-neutral-600" },
      { label: "neutral-700", className: "bg-neutral-700" },
      { label: "neutral-800", className: "bg-neutral-800" },
      { label: "neutral-900", className: "bg-neutral-900" },
    ],
  },
  {
    name: "success",
    swatches: [
      { label: "success-50", className: "bg-success-50" },
      { label: "success-500", className: "bg-success-500" },
      { label: "success-600", className: "bg-success-600" },
    ],
  },
  {
    name: "warning",
    swatches: [
      { label: "warning-50", className: "bg-warning-50" },
      { label: "warning-500", className: "bg-warning-500" },
      { label: "warning-600", className: "bg-warning-600" },
    ],
  },
  {
    name: "danger",
    swatches: [
      { label: "danger-50", className: "bg-danger-50" },
      { label: "danger-500", className: "bg-danger-500" },
      { label: "danger-600", className: "bg-danger-600" },
    ],
  },
];

const ColorPalette: React.FC = () => (
  <div className="flex flex-col gap-lg">
    {RAMPS.map((ramp) => (
      <div key={ramp.name}>
        <h4 className="font-body font-bold text-body-sm text-neutral-700 uppercase tracking-wider mb-sm">{ramp.name}</h4>
        <div className="flex flex-wrap gap-3">
          {ramp.swatches.map((swatch) => (
            <div key={swatch.label} className="flex flex-col items-center gap-1.5">
              <div className={`w-16 h-16 rounded-md border border-solid border-neutral-200 ${swatch.className}`} />
              <span className="font-body text-caption text-neutral-500">{swatch.label}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default ColorPalette;
