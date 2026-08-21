"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import type { BlogSection } from "@/constant/blogData";

interface BlogTocSidebarProps {
  sections: BlogSection[];
  className?: string;
}

const BlogTocSidebar: React.FC<BlogTocSidebarProps> = ({ sections, className }) => {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className={clsx("lg:sticky lg:top-[92px] toc-sidebar", className)}>
      <div className="bg-neutral-0 border border-solid border-neutral-200 rounded-lg p-5 toc-card">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-neutral-500 mb-3">On this page</h4>
        <nav className="flex flex-col gap-1 text-[13.5px]">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={clsx(
                "px-3 py-2.5 rounded-md text-left font-semibold transition-colors duration-150 block no-underline",
                activeId === section.id ? "bg-primary-500 text-neutral-0" : "bg-transparent text-neutral-700 hover:bg-neutral-100"
              )}
            >
              {section.heading}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default BlogTocSidebar;
