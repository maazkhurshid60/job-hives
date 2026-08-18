"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mirrors the original HTML's [data-reveal] IntersectionObserver fade-up:
 * hidden + translated until the element scrolls into view, then reveals once.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return {
    ref,
    className: `transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"
    }`,
  };
}
