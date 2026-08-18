"use client";

import React, { useEffect, useState, useRef } from "react";
import Container from "@/components/common-layout/Container";

interface StatItemProps {
  target: number;
  label: string;
  suffix?: string;
  hasLiveDot?: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ target, label, suffix = "", hasLiveDot = false }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            let startTimestamp: number | null = null;
            const duration = 1400;

            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              // Cubic ease-out
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(eased * target));
              if (progress < 1) {
                requestAnimationFrame(step);
              }
            };
            requestAnimationFrame(step);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={elementRef} className="text-center stat">
      <div className="font-heading font-extrabold text-[clamp(26px,3.6vw,38px)] text-neutral-0 flex items-center justify-center gap-1.5 num">
        {hasLiveDot && (
          <span className="w-2 h-2 rounded-full bg-success-500 [animation:pulseDot_2s_infinite] live-dot" />
        )}
        <span>
          {count.toLocaleString()}
          {suffix}
        </span>
      </div>
      <div className="text-neutral-400 text-xs font-semibold mt-1.5 uppercase tracking-wider label">
        {label}
      </div>
    </div>
  );
};

const LiveStatsBar: React.FC = () => {
  return (
    <section className="py-11 bg-neutral-900 stats">
      <Container className="grid grid-cols-2 md:grid-cols-4 gap-6 stats-grid">
        <StatItem target={12480} label="Active Workers" hasLiveDot={true} />
        <StatItem target={3150} label="Employers Hiring" />
        <StatItem target={8900} label="Contacts Unlocked" />
        <StatItem target={98} label="Response Rate" suffix="%" />
      </Container>
    </section>
  );
};

export default LiveStatsBar;
