import React from "react";
import Link from "next/link";

const BlogSidebarCTA: React.FC = () => {
  return (
    <div className="bg-primary-800 rounded-lg p-6 text-center blog-cta">
      <h4 className="text-neutral-0 font-heading text-[16.5px] mb-2">Ready to hire?</h4>
      <p className="text-primary-100 text-[13px] mb-4 leading-relaxed">
        Post a job free and start getting applicants today.
      </p>
      <Link
        href="/#signup-employer"
        className="block bg-neutral-0 text-primary-800 font-bold text-sm rounded-full py-3 px-5 hover:bg-primary-50 transition-colors duration-150"
      >
        Post a Job
      </Link>
    </div>
  );
};

export default BlogSidebarCTA;
