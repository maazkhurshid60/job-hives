"use client";

import React from "react";
import clsx from "clsx";

interface BlogCategoryListProps {
  categories: { key: string; label: string }[];
  activeCategory: string;
  onSelect: (key: string) => void;
}

const BlogCategoryList: React.FC<BlogCategoryListProps> = ({ categories, activeCategory, onSelect }) => {
  return (
    <aside className="w-full bg-neutral-0 border border-solid border-neutral-200 rounded-lg py-5 px-4 shadow-sm">
      <h3 className="text-sm font-extrabold mb-3.5 px-1.5 uppercase tracking-wider text-neutral-900">Categories</h3>
      <div className="flex flex-col gap-1">
        {categories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => onSelect(cat.key)}
            className={clsx(
              "px-3 py-2.5 rounded-md text-left text-[13.5px] font-semibold transition-colors duration-150 cursor-pointer border-none w-full",
              activeCategory === cat.key ? "bg-primary-500 text-neutral-0" : "bg-transparent text-neutral-700 hover:bg-neutral-100"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default BlogCategoryList;
