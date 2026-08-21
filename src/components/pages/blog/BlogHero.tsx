import React from "react";
import { Search } from "lucide-react";

interface BlogHeroProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const BlogHero: React.FC<BlogHeroProps> = ({ searchValue, onSearchChange }) => {
  return (
    <section
      className="relative text-center pt-16 pb-16 px-6 min-h-[380px] flex flex-col items-center justify-center overflow-hidden page-hero"
      style={{ background: "linear-gradient(180deg, #fff 0%, var(--primary-50) 100%)" }}
    >
      <div className="hero-clouds">
        <span className="cloud cloud-1" />
        <span className="cloud cloud-2" />
        <span className="cloud cloud-3" />
        <span className="cloud cloud-4" />
        <span className="cloud cloud-5" />
        <span className="cloud cloud-6" />
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_50%_50%,var(--primary-200)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30 [mask-image:radial-gradient(700px_380px_at_50%_20%,black,transparent)]" />

      <h1 className="relative z-[2] font-heading font-extrabold text-[clamp(30px,4.8vw,48px)] leading-[1.15] tracking-[-0.02em] text-neutral-900">
        The JobHive <span className="text-primary-500">Blog</span>
      </h1>
      <p className="relative z-[2] text-[clamp(15px,1.7vw,17px)] text-neutral-600 mt-4 max-w-[560px] mx-auto px-4">
        Guides, hiring tips, and platform updates to help you find work faster and hire smarter.
      </p>

      <div className="relative z-[2] mt-8 w-full max-w-[520px] mx-auto px-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search articles..."
            aria-label="Search articles"
            className="w-full bg-neutral-0 border border-solid border-neutral-200 rounded-full py-3.5 pl-11 pr-5 text-sm text-neutral-800 shadow-sm outline-none transition-colors duration-150 focus:border-primary-400"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
