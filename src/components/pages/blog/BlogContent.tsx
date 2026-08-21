import React from "react";
import Image from "next/image";
import clsx from "clsx";
import type { BlogPost } from "@/constant/blogData";

interface BlogContentProps {
  post: BlogPost;
  className?: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ post, className }) => {
  return (
    <div className={clsx("blog-content", className)}>
      <div className="relative w-full h-[260px] sm:h-[340px] rounded-lg overflow-hidden mb-7">
        <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover" priority />
      </div>

      <h2 className="font-heading text-[17px] text-neutral-900 mb-3">Overview</h2>
      <p className="text-neutral-600 text-[14.5px] mb-2.5">{post.overview}</p>

      {post.sections.map((section) => (
        <div key={section.id} id={section.id} className="mt-7 scroll-mt-24">
          <h2 className="font-heading text-[17px] text-neutral-900 mb-3">{section.heading}</h2>
          {section.body.map((paragraph, idx) => (
            <p key={idx} className="text-neutral-600 text-[14.5px] mb-2.5">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BlogContent;
