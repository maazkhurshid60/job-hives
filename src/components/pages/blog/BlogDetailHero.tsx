import React from "react";
import { getCategoryLabel, type BlogPost } from "@/constant/blogData";

interface BlogDetailHeroProps {
  post: BlogPost;
}

const BlogDetailHero: React.FC<BlogDetailHeroProps> = ({ post }) => {
  return (
    <section
      className="relative text-center pt-16 pb-16 px-6 overflow-hidden page-hero"
      style={{ background: "linear-gradient(180deg, #fff 0%, var(--primary-50) 100%)" }}
    >
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_50%_50%,var(--primary-200)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30 [mask-image:radial-gradient(700px_380px_at_50%_20%,black,transparent)]" />

      <span className="relative z-[2] inline-flex items-center bg-neutral-0 text-primary-700 text-[13px] font-bold py-[7px] px-4 rounded-full mb-5 shadow-sm">
        {getCategoryLabel(post.categoryKey)}
      </span>
      <h1 className="relative z-[2] font-heading font-extrabold text-[clamp(26px,4.2vw,42px)] leading-[1.2] tracking-[-0.02em] text-neutral-900 max-w-[820px] mx-auto">
        {post.title}
      </h1>
      <div className="relative z-[2] flex items-center justify-center gap-2.5 text-[13.5px] text-neutral-500 mt-4 flex-wrap">
        <span className="font-semibold text-neutral-700">{post.author}</span>
        <span className="w-[3px] h-[3px] rounded-full bg-neutral-400" />
        <span>{post.date}</span>
        <span className="w-[3px] h-[3px] rounded-full bg-neutral-400" />
        <span>{post.readTime}</span>
      </div>
    </section>
  );
};

export default BlogDetailHero;
