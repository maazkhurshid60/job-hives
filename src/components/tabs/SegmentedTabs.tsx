import React from "react";
import clsx from "clsx";

export interface SegmentedTabOption<T extends string> {
  value: T;
  label: string;
}

interface SegmentedTabsProps<T extends string> {
  options: SegmentedTabOption<T>[];
  value: T;
  onChange: (value: T) => void;
  size?: "sm" | "md";
  className?: string;
}

/** White pill-track segmented control — active option fills with the brand primary color. */
function SegmentedTabs<T extends string>({ options, value, onChange, size = "md", className }: SegmentedTabsProps<T>) {
  return (
    <div
      className={clsx(
        "inline-flex items-center bg-neutral-0 border border-solid border-neutral-200 rounded-full p-1 gap-1 shadow-sm",
        className
      )}
    >
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={clsx(
            "rounded-full font-bold cursor-pointer transition-all duration-200",
            size === "sm" ? "text-xs px-4 py-2" : "text-sm px-[22px] py-2.5",
            value === option.value
              ? "bg-primary-500 text-neutral-0 shadow-sm"
              : "bg-transparent text-neutral-600 hover:text-neutral-900"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default SegmentedTabs;
