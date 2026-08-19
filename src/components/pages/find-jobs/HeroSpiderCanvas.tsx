"use client";

import React, { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

const PRIMARY_300: [number, number, number] = [92, 207, 255];
const PRIMARY_400: [number, number, number] = [38, 190, 251];
const PRIMARY_500: [number, number, number] = [0, 174, 239];
const LINK_DIST = 130;

/**
 * "Spider effect" hero background — a scattered dot field with a single point drifting
 * through it, drawing fading connector lines to nearby dots, easing toward the cursor
 * while it hovers the hero. Rebuilt from scratch on canvas; no external animation deps.
 */
const HeroSpiderCanvas: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;
    let dots: Dot[] = [];
    let rafId = 0;

    function sizeCanvas() {
      if (!wrap || !canvas) return;
      const rect = wrap.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = Math.round(W * DPR);
      canvas.height = Math.round(H * DPR);
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function seedDots() {
      const isMobile = W < 720;
      const count = Math.round((W * H) / (isMobile ? 16000 : 9000));
      dots = [];
      for (let i = 0; i < count; i++) {
        dots.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          r: 1.1 + Math.random() * 1.3,
        });
      }
    }

    const spider = { x: 0, y: 0, tx: 0, ty: 0 };
    let cursor: { x: number; y: number } | null = null;
    let wanderT = 0;

    function pickWanderTarget() {
      spider.tx = W * (0.15 + Math.random() * 0.7);
      spider.ty = H * (0.15 + Math.random() * 0.7);
    }

    function onMove(e: MouseEvent) {
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      cursor = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    function onLeave() {
      cursor = null;
    }
    function onTouchMove(e: TouchEvent) {
      if (!wrap || !e.touches[0]) return;
      const rect = wrap.getBoundingClientRect();
      cursor = { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
    }

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    wrap.addEventListener("touchmove", onTouchMove, { passive: true });
    wrap.addEventListener("touchend", onLeave);

    function frame() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = W;
        if (d.x > W) d.x = 0;
        if (d.y < 0) d.y = H;
        if (d.y > H) d.y = 0;
      }

      if (!cursor) {
        wanderT -= 1;
        if (wanderT <= 0) {
          pickWanderTarget();
          wanderT = 90 + Math.random() * 90;
        }
      }
      const tx = cursor ? cursor.x : spider.tx;
      const ty = cursor ? cursor.y : spider.ty;
      spider.x += (tx - spider.x) * (cursor ? 0.08 : 0.02);
      spider.y += (ty - spider.y) * (cursor ? 0.08 : 0.02);

      ctx.fillStyle = `rgba(${PRIMARY_300.join(",")},0.55)`;
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const d of dots) {
        const dx = d.x - spider.x;
        const dy = d.y - spider.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          const alpha = (1 - dist / LINK_DIST) * 0.5;
          ctx.strokeStyle = `rgba(${PRIMARY_400.join(",")},${alpha.toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(spider.x, spider.y);
          ctx.lineTo(d.x, d.y);
          ctx.stroke();
        }
      }

      ctx.save();
      ctx.shadowColor = `rgba(${PRIMARY_500.join(",")},0.9)`;
      ctx.shadowBlur = 10;
      ctx.fillStyle = `rgb(${PRIMARY_500.join(",")})`;
      ctx.beginPath();
      ctx.arc(spider.x, spider.y, 3.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      rafId = requestAnimationFrame(frame);
    }

    function start() {
      sizeCanvas();
      seedDots();
      spider.x = W / 2;
      spider.y = H / 2;
      pickWanderTarget();
      if (rafId) cancelAnimationFrame(rafId);
      frame();
    }

    start();
    const onResize = () => start();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      wrap.removeEventListener("touchmove", onTouchMove);
      wrap.removeEventListener("touchend", onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0 z-[1] pointer-events-none motion-reduce:hidden">
      <canvas ref={canvasRef} className="block" />
    </div>
  );
};

export default HeroSpiderCanvas;
