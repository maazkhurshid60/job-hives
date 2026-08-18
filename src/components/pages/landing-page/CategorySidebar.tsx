import React from "react";
import clsx from "clsx";
import type { Category } from "@/constant/featuredJobsData";

interface CategorySidebarProps {
  categories: Category[];
  activeCategory: string;
  onSelect: (name: string) => void;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({ categories, activeCategory, onSelect }) => {
  return (
    <aside className="w-full bg-neutral-0 border border-solid border-neutral-200 rounded-lg py-5 px-4 shadow-sm cat-sidebar">
      <h3 className="text-sm font-extrabold mb-3.5 px-1.5 uppercase tracking-wider text-neutral-900">
        Jobs Categories
      </h3>

      {/* Desktop Vertical List */}
      <div className="hidden min-[861px]:flex flex-col gap-1 cat-list">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => onSelect(cat.name)}
            className={clsx(
              "flex items-center gap-3 p-2.5 rounded-md text-left transition duration-150 cursor-pointer border-none bg-transparent w-full text-inherit cat-row",
              activeCategory === cat.name && "bg-primary-50 active"
            )}
          >
            <span className={clsx("w-11 h-11 rounded-md flex items-center justify-center flex-shrink-0 text-base cat-ic", cat.bgClass, cat.textClass)}>
              <cat.icon className="w-6 h-6" />
            </span>
            <span className={clsx("flex-1 text-[13.5px] font-semibold cat-name", activeCategory === cat.name ? "text-primary-700 font-bold" : "text-neutral-800")}>
              {cat.name}
            </span>
            <span className={clsx("text-[11.5px] font-bold px-[9px] py-[3px] rounded-full whitespace-nowrap cat-count", activeCategory === cat.name ? "bg-primary-100 text-primary-700" : "bg-neutral-100 text-neutral-500")}>
              {cat.count} Openings
            </span>
          </button>
        ))}
      </div>

      {/* Mobile/Tablet Horizontal Scrolling Marquee */}
      <div className="block min-[861px]:hidden overflow-hidden relative -mx-4 px-4 cat-marquee">
        <div className="flex gap-[10px] w-max [animation:catMarqueeScroll_26s_linear_infinite] hover:[animation-play-state:paused] cat-track">
          {[...categories, ...categories].map((cat, i) => (
            <button
              key={`m-${i}`}
              onClick={() => onSelect(cat.name)}
              className={clsx(
                "flex items-center gap-[9px] px-4 py-[9px] rounded-full border border-solid border-neutral-200 bg-neutral-0 shadow-sm whitespace-nowrap flex-shrink-0 cursor-pointer text-inherit cat-chip-m",
                activeCategory === cat.name && "bg-primary-50 border-primary-300 active"
              )}
            >
              <span className={clsx("w-9 h-9 text-[12.5px] rounded-md flex items-center justify-center flex-shrink-0", cat.bgClass, cat.textClass)}>
                <cat.icon className="w-6 h-6" />
              </span>
              <span className="text-[12.5px] font-bold text-neutral-800 cat-name">{cat.name}</span>
              <span className="text-[10.5px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-full cat-count">
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default CategorySidebar;
