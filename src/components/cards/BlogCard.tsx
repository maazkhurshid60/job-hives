import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { type BlogPost, getCategoryLabel } from "@/constant/blogData";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const href = `/blog/${post.id}`;

  return (
    <Link
      href={href}
      aria-label={`Read: ${post.title}`}
      className="group relative h-full flex flex-col rounded-2xl overflow-hidden border border-solid border-neutral-200 bg-neutral-0 transition-all duration-200 hover:shadow-lg blog-card"
    >
      <div className="h-[180px] relative z-0 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 text-[11.5px] font-bold text-neutral-0 bg-[rgba(255,255,255,0.18)] backdrop-blur-md border border-solid border-[rgba(255,255,255,0.4)] rounded-full px-3 py-1.5 shadow-sm">
          {getCategoryLabel(post.categoryKey)}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-center gap-3 text-[12px] text-neutral-500">
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-[17px] font-bold text-neutral-900 leading-snug line-clamp-2 group-hover:text-primary-600 transition-colors duration-150">
          {post.title}
        </h3>
        <p className="text-[13.5px] text-neutral-600 leading-relaxed line-clamp-2 flex-1">{post.excerpt}</p>

        <div className="text-[12.5px] font-semibold text-neutral-700 pt-3 border-t border-solid border-neutral-100">
          {post.author}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
