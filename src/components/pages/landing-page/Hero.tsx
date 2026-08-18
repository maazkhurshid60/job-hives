import React from "react";
import Image from "next/image";
import Container from "@/components/common-layout/Container";
import Link from "next/link";
import ButtonSm from "@/components/button/ButtonSm";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-24 pb-16 px-6 bg-[radial-gradient(900px_480px_at_50%_-10%,var(--primary-50)_0%,transparent_60%)] bg-neutral-0 hero">
      {/* Decorative Dot Grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,var(--primary-200)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30 [mask-image:radial-gradient(700px_380px_at_50%_20%,black,transparent)]" />

      {/* Floating Avatars */}
      <div className="absolute w-[60px] h-[60px] rounded-full overflow-hidden border-[3px] border-solid border-neutral-0 shadow-md hidden min-[901px]:flex items-center justify-center z-10 [animation:floatY_7s_ease-in-out_infinite] top-[10%] left-[6%] float-avatar fa-1">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces&auto=format&q=70"
          alt="Remote worker"
          fill
          sizes="60px"
          className="object-cover"
        />
      </div>
      <div className="absolute w-[60px] h-[60px] rounded-full overflow-hidden border-[3px] border-solid border-neutral-0 shadow-md hidden min-[901px]:flex items-center justify-center z-10 [animation:floatY_6.4s_ease-in-out_infinite] [animation-delay:.4s] top-[8%] right-[8%] float-avatar fa-2">
        <Image
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces&auto=format&q=70"
          alt="Remote worker"
          fill
          sizes="60px"
          className="object-cover"
        />
      </div>
      <div className="absolute w-[60px] h-[60px] rounded-full overflow-hidden border-[3px] border-solid border-neutral-0 shadow-md hidden min-[901px]:flex items-center justify-center z-10 [animation:floatY_6.8s_ease-in-out_infinite] [animation-delay:.2s] bottom-[10%] left-[12%] float-avatar fa-3">
        <Image
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces&auto=format&q=70"
          alt="Remote worker"
          fill
          sizes="60px"
          className="object-cover"
        />
      </div>
      <div className="absolute w-[60px] h-[60px] rounded-full bg-primary-50 border-[3px] border-solid border-neutral-0 shadow-md hidden min-[901px]:flex items-center justify-center font-heading font-bold text-[15px] text-primary-700 z-10 [animation:floatY_7.4s_ease-in-out_infinite] [animation-delay:.6s] bottom-[8%] right-[10%] float-avatar fa-4">
        ✓
      </div>

      <Container className="relative flex flex-col items-center justify-center z-10 max-w-[820px] text-center mx-auto hero-inner">
        <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-[13px] font-bold px-4 py-[7px] rounded-full mb-6 hero-eyebrow">
          <span className="w-2 h-2 rounded-full bg-success-500 relative flex pulse">
            <span className="absolute inset-0 rounded-full bg-success-500 [animation:ping_1.6s_cubic-bezier(0,0,.2,1)_infinite]" />
          </span>
          2,400+ jobs posted this month
        </span>

        <h1 className="font-heading font-extrabold text-[clamp(32px,5.6vw,58px)] leading-[1.08] tracking-[-0.02em] text-neutral-900 relative inline-block">
          Hire remote talent, <span className="text-primary-500">the right way</span>
          <svg className="absolute top-[-16px] right-[-32px] w-[26px] text-primary-400 [animation:sparkle_3.2s_ease-in-out_infinite] sparkle" viewBox="0 0 24 24" fill="none">
            <path d="M12 0l1.7 7.3L21 9l-7.3 1.7L12 18l-1.7-7.3L3 9l7.3-1.7L12 0z" fill="currentColor"/>
          </svg>
        </h1>

        <p className="text-[clamp(16px,2vw,18px)] text-neutral-600 max-w-[560px] mx-auto mt-5 mb-9 lead">
          The job marketplace built for fan-platform creators and agencies — find vetted chatters, VAs, editors and managers, or find your next remote role.
        </p>

        {/* Search Bar */}
        <div className="bg-neutral-0 border border-solid border-neutral-200 rounded-md sm:rounded-md shadow-lg p-3.5 sm:p-2 sm:pl-5 max-w-[620px] mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2 hero-search">
          <span className="text-neutral-400 flex-shrink-0 hidden sm:flex items-center icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
          <input
            type="text"
            placeholder="Job title, keyword or company"
            className="flex-1 border-none outline-none text-sm py-3.5 px-1.5 text-neutral-800 bg-transparent min-w-0"
          />
          <div className="hidden sm:block w-[1px] h-[26px] bg-neutral-200 flex-shrink-0 divider" />
          <input
            type="text"
            placeholder="Any location"
            className="flex-1 border-none outline-none text-sm py-3.5 px-1.5 text-neutral-800 bg-transparent min-w-0"
          />
          <ButtonSm text="Search Jobs" className="py-3 px-6 shrink-0" />
        </div>

        {/* Dual CTA cards */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 dual-entry">
          <Link
            href="#signup-worker"
            className="flex items-center gap-3.5 bg-neutral-0 border-[1.5px] border-solid border-neutral-200 rounded-lg p-[16px_22px] text-left hover:border-primary-400 hover:shadow-md hover:-translate-y-0.5 transition duration-200 min-w-[250px] entry-card"
          >
            <span className="w-11 h-11 rounded-md bg-primary-50 flex items-center justify-center text-primary-600 flex-shrink-0 emoji-badge">
              <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="4" />
                <path d="M31 31l9 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <path d="M16 16v-2a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                <rect x="11" y="16" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2.5" />
                <path d="M11 21h18" stroke="currentColor" strokeWidth="2.5" />
                <rect x="18.5" y="19.5" width="3" height="3" rx="0.5" fill="currentColor" />
              </svg>
            </span>
            <span>
              <b className="block text-[15px] text-neutral-900">I&apos;m looking for work</b>
              <span className="text-[13px] text-neutral-500">Create a profile, apply free</span>
            </span>
          </Link>
          <Link
            href="#signup-employer"
            className="flex items-center gap-3.5 bg-neutral-0 border-[1.5px] border-solid border-neutral-200 rounded-lg p-[16px_22px] text-left hover:border-primary-400 hover:shadow-md hover:-translate-y-0.5 transition duration-200 min-w-[250px] entry-card"
          >
            <span className="w-11 h-11 rounded-md bg-primary-50 flex items-center justify-center text-primary-600 flex-shrink-0 emoji-badge">
              <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="5" fill="currentColor" />
                <path d="M2 30c0-6.6 3.6-11 8-11s8 4.4 8 11" fill="currentColor" />
                <circle cx="38" cy="10" r="5" fill="currentColor" />
                <path d="M30 30c0-6.6 3.6-11 8-11s8 4.4 8 11" fill="currentColor" />
                <circle cx="24" cy="22" r="10" stroke="currentColor" strokeWidth="3.5" />
                <circle cx="24" cy="19" r="3" fill="currentColor" />
                <path d="M18 27c0-3.6 2.7-6 6-6s6 2.4 6 6" fill="currentColor" />
                <line x1="31.5" y1="29.5" x2="40" y2="38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
            <span>
              <b className="block text-[15px] text-neutral-900">I&apos;m hiring</b>
              <span className="text-[13px] text-neutral-500">Post a job in minutes</span>
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
