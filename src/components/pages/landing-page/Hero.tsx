"use client";

import React, { useEffect, useRef } from "react";
import Container from "@/components/common-layout/Container";
import Link from "next/link";
import ButtonSm from "@/components/button/ButtonSm";
import { Search, Briefcase, Building2, User, MessageCircle } from "lucide-react";

// Fixed starting point on the ring for each badge — 0=right, 90=bottom, 180=left, 270=top
// (standard screen-coordinate angles, clockwise). The whole ring then spins continuously
// (see .orbit-track), carrying every badge around the hub together.
const ORBIT_RADIUS = 170;
const ORBIT_BADGES = [
  { Icon: Briefcase, angle: 270, label: "Jobs" },
  { Icon: MessageCircle, angle: 0, label: "Messaging" },
  { Icon: Search, angle: 90, label: "Search jobs" },
  { Icon: Building2, angle: 180, label: "Hiring" },
].map(({ angle, ...rest }) => ({
  ...rest,
  x: ORBIT_RADIUS * Math.cos((angle * Math.PI) / 180),
  y: ORBIT_RADIUS * Math.sin((angle * Math.PI) / 180),
}));

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroInnerRef = useRef<HTMLDivElement>(null);
  const heroVisualRef = useRef<HTMLDivElement>(null);

  // "Atomic Globe"-style particle entrance sequence (entrance only — no drag/hover/comet-paths,
  // per scope). A lightweight canvas particle system, no WebGL/three.js: a scattered starfield
  // converges into a sphere of glowing dots (Design System A blue tones, not literal continents),
  // the sphere glides to the hero-visual box on the right, then this hub/icon badges fade in
  // together with the hero text on the left. Skipped entirely on mobile/tablet (no right-side
  // visual there) and reduced instantly to the settled state under prefers-reduced-motion.
  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    const heroInner = heroInnerRef.current;
    const heroVisual = heroVisualRef.current;
    if (!canvas || !hero || !heroInner || !heroVisual) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (!isDesktop) {
      heroInner.classList.remove("pending");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const N = 360;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    type Particle = {
      ux: number; uy: number; uz: number;
      scatterX: number; scatterY: number;
      delay: number; twinkle: number; shade: number;
    };
    const particles: Particle[] = [];
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;
      particles.push({
        ux: Math.cos(theta) * radiusAtY,
        uy: y,
        uz: Math.sin(theta) * radiusAtY,
        scatterX: Math.random(),
        scatterY: Math.random(),
        delay: Math.random() * 0.55,
        twinkle: Math.random() * Math.PI * 2,
        shade: Math.random(),
      });
    }

    const dims = { heroW: 0, heroH: 0, dockX: 0, dockY: 0, R: 0, assembleX: 0 };

    function measure() {
      if (!canvas || !hero || !heroVisual || !ctx) return;
      const heroRect = hero.getBoundingClientRect();
      const visRect = heroVisual.getBoundingClientRect();
      dims.heroW = heroRect.width;
      dims.heroH = heroRect.height;
      dims.dockX = visRect.left - heroRect.left + visRect.width / 2;
      dims.dockY = visRect.top - heroRect.top + visRect.height / 2;
      dims.R = (Math.min(visRect.width, visRect.height) / 2) * 0.82;
      dims.assembleX = heroRect.width / 2;
      canvas.width = heroRect.width * DPR;
      canvas.height = heroRect.height * DPR;
      canvas.style.width = heroRect.width + "px";
      canvas.style.height = heroRect.height + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    measure();
    window.addEventListener("resize", measure);

    const COLORS = ["#94E1FF", "#5CCFFF", "#26BEFB", "#00AEEF"];
    const easeOutCubic = (p: number) => 1 - Math.pow(1 - p, 3);
    const easeInOutCubic = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const T_SCATTER_END = 1100;
    const T_ASSEMBLE_END = 2900;
    const T_DOCK_END = 3600;
    let revealed = false;
    let start: number | null = null;
    let rafId = 0;

    function projectSphere(p: Particle, angle: number, cx: number, cy: number, R: number) {
      const rx = p.ux * Math.cos(angle) + p.uz * Math.sin(angle);
      const rz = -p.ux * Math.sin(angle) + p.uz * Math.cos(angle);
      const depth = (rz + 1) / 2;
      const scale = 0.82 + depth * 0.28;
      return { x: cx + rx * R * scale, y: cy + p.uy * R * scale, depth };
    }

    function frame(ts: number) {
      if (!ctx || !heroInner || !heroVisual) return;
      if (start === null) start = ts;
      const t = ts - start;
      ctx.clearRect(0, 0, dims.heroW, dims.heroH);

      let angle: number, cx: number, cy: number, R: number;
      if (t < T_SCATTER_END) {
        angle = 0; cx = dims.assembleX; cy = dims.dockY; R = dims.R;
      } else if (t < T_ASSEMBLE_END) {
        angle = ((t - T_SCATTER_END) / (T_ASSEMBLE_END - T_SCATTER_END)) * 0.9;
        cx = dims.assembleX; cy = dims.dockY; R = dims.R;
      } else if (t < T_DOCK_END) {
        const dt = (t - T_ASSEMBLE_END) / (T_DOCK_END - T_ASSEMBLE_END);
        angle = 0.9 + dt * 0.4;
        cx = lerp(dims.assembleX, dims.dockX, easeInOutCubic(dt));
        cy = dims.dockY; R = dims.R;
      } else {
        angle = 1.3 + (t - T_DOCK_END) * 0.00022;
        cx = dims.dockX; cy = dims.dockY; R = dims.R;
        if (!revealed) {
          revealed = true;
          heroInner.classList.remove("pending");
          heroVisual.classList.add("revealed");
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const sx = p.scatterX * dims.heroW;
        const sy = p.scatterY * dims.heroH;
        const target = projectSphere(p, angle, cx, cy, R);
        let x: number, y: number, depth: number, alphaBoost = 1;

        if (t < T_SCATTER_END) {
          x = sx; y = sy;
          alphaBoost = 0.55 + 0.35 * Math.sin(t * 0.004 + p.twinkle);
          depth = 0.5;
        } else if (t < T_ASSEMBLE_END) {
          const localT = (t - T_SCATTER_END) / (T_ASSEMBLE_END - T_SCATTER_END);
          let lp = (localT * 1.35 - p.delay) / (1 - p.delay);
          lp = Math.max(0, Math.min(1, lp));
          const e = easeOutCubic(lp);
          x = lerp(sx, target.x, e);
          y = lerp(sy, target.y, e);
          depth = target.depth;
        } else {
          x = target.x; y = target.y; depth = target.depth;
        }

        const size = 1.1 + depth * 1.7;
        const color = COLORS[Math.min(3, Math.floor(p.shade * 4))];
        const alpha = (0.25 + depth * 0.65) * alphaBoost;

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
        ctx.shadowColor = color;
        ctx.shadowBlur = 5;
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      rafId = requestAnimationFrame(frame);
    }

    if (reduceMotion) {
      const angleStatic = 1.3;
      ctx.clearRect(0, 0, dims.heroW, dims.heroH);
      for (const p of particles) {
        const tp = projectSphere(p, angleStatic, dims.dockX, dims.dockY, dims.R);
        const sizeS = 1.1 + tp.depth * 1.7;
        ctx.beginPath();
        ctx.fillStyle = COLORS[Math.min(3, Math.floor(p.shade * 4))];
        ctx.globalAlpha = 0.25 + tp.depth * 0.65;
        ctx.arc(tp.x, tp.y, sizeS, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      heroInner.classList.remove("pending");
      heroVisual.classList.add("revealed");
    } else {
      rafId = requestAnimationFrame(frame);
    }

    return () => {
      window.removeEventListener("resize", measure);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[600px] overflow-hidden pt-24 pb-16 hero"
      style={{ background: "linear-gradient(180deg, #fff 0%, var(--primary-50) 100%)" }}
    >
      {/* Small drifting clouds — inspired by the "ShaderHero" WebGL nebula shader's organic looping
          motion, rebuilt as lightweight pure-CSS puffs (classic 3-circle cloud shape) instead of a
          WebGL shader, and as several SMALL clouds rather than one big nebula blob. Design System A's
          primary-100 only. */}
      <div className="hero-clouds">
        <span className="cloud cloud-1" />
        <span className="cloud cloud-2" />
        <span className="cloud cloud-3" />
        <span className="cloud cloud-4" />
        <span className="cloud cloud-5" />
        <span className="cloud cloud-6" />
      </div>

      {/* "Atomic Globe"-style particle entrance sequence — see the useEffect above. */}
      <canvas ref={canvasRef} className="hero-globe-canvas" />

      {/* Decorative Dot Grid */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_50%_50%,var(--primary-200)_1px,transparent_1px)] bg-[size:30px_30px] opacity-25 [mask-image:radial-gradient(700px_380px_at_30%_20%,black,transparent)]" />

      <Container className="relative z-10 hero-grid grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
        <div ref={heroInnerRef} className="max-w-[820px] lg:max-w-none text-center lg:text-left mx-auto lg:mx-0 hero-inner pending">
          <h1 className="font-heading font-extrabold text-[32px] sm:text-[44px] md:text-[52px] lg:text-[54px] leading-[1.08] tracking-tight text-neutral-900 relative inline-block">
            Hire remote talent, <span className="text-primary-500">the right way</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-[560px] mx-auto lg:mx-0 mt-5 mb-9 lead">
            The job marketplace built for fan-platform creators and agencies — find vetted chatters, VAs, editors and managers, or find your next remote role.
          </p>

          {/* Search Bar */}
          <div className="bg-neutral-0 border border-solid border-neutral-200 rounded-lg sm:rounded-lg shadow-lg p-3.5 sm:p-2 sm:pl-5 max-w-[620px] mx-auto lg:mx-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 hero-search">
            <span className="text-neutral-400 flex-shrink-0 hidden sm:flex items-center icon">
              <Search className="w-[18px] h-[18px]" />
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8 dual-entry">
            <Link
              href="#signup-worker"
              className="flex items-center gap-3.5 bg-neutral-0 border-[1.5px] border-solid border-neutral-200 rounded-lg p-[16px_22px] text-left hover:border-primary-400 hover:shadow-md hover:-translate-y-0.5 transition duration-200 min-w-[250px] entry-card"
            >
              <span className="w-11 h-11 rounded-md bg-primary-50 flex items-center justify-center text-primary-600 flex-shrink-0 emoji-badge">
                <Briefcase className="w-6 h-6" />
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
                <Building2 className="w-6 h-6" />
              </span>
              <span>
                <b className="block text-[15px] text-neutral-900">I&apos;m hiring</b>
                <span className="text-[13px] text-neutral-500">Post a job in minutes</span>
              </span>
            </Link>
          </div>
        </div>

        {/* Right-side visual: hub + 5 floating platform-icon badges. Hidden (opacity: 0) until the
            particle-globe entrance sequence above finishes docking here, then fades in together with
            the hero text on the left — see the "revealed" class toggled in the useEffect. */}
        <div ref={heroVisualRef} className="relative hidden lg:flex items-center justify-center h-[480px] hero-visual">
          {/* Central hub — stands in for the platform itself */}
          <div className="relative w-[132px] h-[132px] rounded-full flex items-center justify-center shadow-lg z-[2] hub" style={{ background: "linear-gradient(160deg, var(--primary-400), var(--primary-600))" }}>
            <span className="hub-ring hub-ring-1 motion-reduce:animate-none" />
            <span className="hub-ring hub-ring-2 motion-reduce:animate-none" />
            <span className="hub-ring hub-ring-3 motion-reduce:animate-none" />
            <User className="relative z-[1] w-[52px] h-[52px] text-white" strokeWidth={1.8} />
          </div>

          {/* Orbit ring — the circular path the 4 badges travel along, concentric with the hub */}
          <div
            className="orbit-ring top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: ORBIT_RADIUS * 2, height: ORBIT_RADIUS * 2 }}
          />

          {/* Centering wrapper — static positioning only. A CSS animation on `transform` always
              replaces any other transform on the same element, so the spin (.orbit-track below)
              has to live on a separate, purely-rotating child rather than sharing this element. */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3]"
            style={{ width: ORBIT_RADIUS * 2, height: ORBIT_RADIUS * 2 }}
          >
            {/* Rotating carrier — sweeps the 4 badges clockwise around the hub; each badge
                counter-rotates (.orbit-counter) so its icon glyph stays upright throughout. */}
            <div className="orbit-track absolute inset-0">
              {ORBIT_BADGES.map(({ Icon, x, y, label }, i) => (
                <div
                  key={label}
                  className="absolute"
                  style={{ top: `calc(50% + ${y}px)`, left: `calc(50% + ${x}px)`, transform: "translate(-50%, -50%)" }}
                >
                  <div
                    className={`w-14 h-14 rounded-lg bg-neutral-0 border border-primary-100 shadow-md flex items-center justify-center text-primary-600 orbit-counter icon-badge badge-${i + 1}`}
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6" strokeWidth={1.8} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
