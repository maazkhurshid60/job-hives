"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Container from "@/components/common-layout/Container";
import { useReveal } from "@/hooks/useReveal";

const FinalCTA: React.FC = () => {
  const reveal = useReveal<HTMLElement>();

  return (
    <section
      ref={reveal.ref}
      className={clsx(
        "bg-gradient-to-br from-primary-800 to-neutral-900 text-center relative overflow-hidden py-14 sm:py-[88px] final-cta",
        reveal.className
      )}
      id="cta"
    >
      {/* Top light reflection overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(600px_320px_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)] pointer-events-none" />

      <Container as="div" className="relative z-10">
        <div className="max-w-[640px] mx-auto inner">
          <h2 className="text-neutral-0 font-heading font-extrabold text-[clamp(24px,4vw,34px)] leading-tight mb-3">
            Ready to get started?
          </h2>
          <p className="text-primary-100 font-body text-base mb-8 leading-relaxed">
            Join thousands of workers and employers already using the platform.
          </p>
          <div className="flex gap-4 justify-center flex-wrap actions">
            <Link
              href="#signup-worker"
              className="font-body font-semibold text-base cursor-pointer select-none inline-flex items-center justify-center gap-2 transition duration-150 px-[30px] py-[15px] rounded-full bg-neutral-0 border-none text-primary-800 hover:bg-primary-50"
            >
              Find Your Next Gig
            </Link>
            <Link
              href="#signup-employer"
              className="font-body font-semibold text-base cursor-pointer select-none inline-flex items-center justify-center gap-2 transition duration-150 px-[30px] py-[15px] rounded-full bg-transparent border-[1.5px] border-solid border-white/50 text-neutral-0 hover:bg-neutral-0/12 hover:border-neutral-0"
            >
              Start Hiring Today
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalCTA;
