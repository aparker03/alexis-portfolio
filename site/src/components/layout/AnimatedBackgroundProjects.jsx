// Projects-page star-like background (hero-scoped) with throttled resize & ref-based visibility.
import React, { useRef, useEffect } from "react";

function AnimatedBackgroundProjects({
  colors = [
    "rgba(224, 222, 153, 1.0)",  // #E0DE99
    "rgba(159, 195, 173, 0.95)", // #9FC3AD
    "rgba(126, 173, 179, 0.95)", // #7EADB3
  ],
  backgroundTint = "rgba(129, 175, 180, 0.08)",
  count = 180,
  fixed = true,
  zIndex = 0,
  pauseWhenOffscreen = false,
  pauseWhenHidden = false,
  maxDpr = 1.5,
  targetFps = 0,
  onscreenThreshold = 0.6,
  onscreenRootMargin = "0px 0px -30% 0px",
  shadowBlurLow = 4,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const roRef = useRef(null);
  const ioRef = useRef(null);
  const lastFrameRef = useRef(0);

  // Refs instead of state to avoid re-renders/re-inits
  const onscreenRef = useRef(true);
  const docVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const state = { w: 0, h: 0, items: [] };

    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
    const rand = (min, max) => Math.random() * (max - min) + min;
    const TAU = Math.PI * 2;

    const getDpr = () => {
      const raw = Math.max(1, window.devicePixelRatio || 1);
      return clamp(raw, 1, maxDpr || 1);
    };

    const sizeToContainer = () => {
      const dpr = getDpr();
      let w, h;
      if (fixed) {
        w = window.innerWidth;
        h = window.innerHeight;
      } else {
        const parent = canvas.parentElement;
        const rect = parent
          ? parent.getBoundingClientRect()
          : { width: window.innerWidth, height: window.innerHeight };
        w = Math.max(1, Math.floor(rect.width));
        h = Math.max(1, Math.floor(rect.height));
      }
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      state.w = w;
      state.h = h;
    };

    const shapes = ["dot", "diamond", "star"];

    const makeItem = () => {
      const size = rand(1.0, 2.6);
      const depth = rand(0.55, 1);
      const speedBase = 0.05 + size * 0.045;
      let vx = rand(-speedBase, speedBase);
      let vy = rand(-speedBase, speedBase);
      if (Math.abs(vx) < 0.02) vx = vx < 0 ? -0.02 : 0.02;
      if (Math.abs(vy) < 0.02) vy = vy < 0 ? -0.02 : 0.02;

      return {
        x: rand(0, state.w),
        y: rand(0, state.h),
        r: size,
        rot: rand(0, TAU),
        rotSpeed: rand(-0.01, 0.01),
        color: colors[Math.floor(Math.random() * colors.length)],
        alphaBase: rand(0.55, 0.9),
        twinkleAmp: rand(0.10, 0.25),
        twinkleSpeed: rand(0.006, 0.014),
        phase: rand(0, TAU),
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        vx: vx * depth,
        vy: vy * depth,
      };
    };

    const drawDot = (p) => {
      const inner = Math.max(0.5, p.r * 0.55);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, TAU);
      ctx.fill();

      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, inner, 0, TAU);
      ctx.fill();
    };

    const drawDiamond = (p) => {
      const s = p.r * 2.0;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.lineTo(s, 0);
      ctx.lineTo(0, s);
      ctx.lineTo(-s, 0);
      ctx.closePath();
      ctx.fill();
      ctx.lineWidth = Math.max(0.6, p.r * 0.5);
      ctx.strokeStyle = "rgba(255,255,255,0.85)";
      ctx.stroke();
      ctx.restore();
    };

    const drawStar = (p) => {
      const len = p.r * 3.2;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.lineWidth = Math.max(0.7, p.r * 0.8);
      ctx.strokeStyle = "rgba(255,255,255,0.9)";
      ctx.beginPath();
      ctx.moveTo(0, -len);
      ctx.lineTo(0, len);
      ctx.moveTo(-len, 0);
      ctx.lineTo(len, 0);
      ctx.stroke();
      ctx.restore();
    };

    const computeCountForArea = () => {
      const baseArea = 1440 * 720;
      const area = Math.max(1, state.w * state.h);
      const density = count / baseArea;
      const scaled = Math.round(density * area);
      return clamp(scaled, 80, 280);
    };

    const init = () => {
      sizeToContainer();
      const n = computeCountForArea();
      state.items = Array(n).fill(0).map(makeItem);

      if (prefersReduced) {
        ctx.clearRect(0, 0, state.w, state.h);
        if (backgroundTint) {
          ctx.fillStyle = backgroundTint;
          ctx.fillRect(0, 0, state.w, state.h);
        }
        state.items.forEach((p) => {
          ctx.globalAlpha = p.alphaBase;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = shadowBlurLow;
          if (p.shape === "dot") drawDot(p);
          else if (p.shape === "diamond") drawDiamond(p);
          else drawStar(p);
        });
      }
    };

    const wrap = (p) => {
      const pad = 8;
      if (p.x < -pad) p.x = state.w + pad;
      if (p.x > state.w + pad) p.x = -pad;
      if (p.y < -pad) p.y = state.h + pad;
      if (p.y > state.h + pad) p.y = -pad;
    };

    const shouldAnimateNow = (now) => {
      if ((pauseWhenOffscreen && !onscreenRef.current) || (pauseWhenHidden && !docVisibleRef.current)) {
        return false;
      }
      if (!targetFps || targetFps <= 0) return true;
      const minDelta = 1000 / targetFps;
      if (!lastFrameRef.current) {
        lastFrameRef.current = now;
        return true;
      }
      if (now - lastFrameRef.current >= minDelta) {
        lastFrameRef.current = now;
        return true;
      }
      return false;
    };

    const render = (now = performance.now()) => {
      rafRef.current = requestAnimationFrame(render);
      if (!shouldAnimateNow(now) || prefersReduced) return;

      ctx.clearRect(0, 0, state.w, state.h);
      if (backgroundTint) {
        ctx.fillStyle = backgroundTint;
        ctx.fillRect(0, 0, state.w, state.h);
      }

      for (let i = 0; i < state.items.length; i++) {
        const p = state.items[i];
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.rotSpeed;
        p.phase += p.twinkleSpeed;
        wrap(p);

        const twinkle = p.alphaBase + Math.sin(p.phase) * p.twinkleAmp;
        const a = clamp(twinkle, 0.12, 1);
        const rStore = p.r;
        p.r = rStore * (1 + Math.sin(p.phase * 0.8) * 0.06);

        ctx.globalAlpha = a * 0.9;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = shadowBlurLow;

        if (p.shape === "dot") drawDot(p);
        else if (p.shape === "diamond") drawDiamond(p);
        else drawStar(p);

        p.r = rStore;
      }
    };

    init();

    // Throttled resize (rAF)
    let resizeRaf = 0;
    const scheduleResize = () => {
      if (resizeRaf) return;
      resizeRaf = requestAnimationFrame(() => {
        resizeRaf = 0;
        const before = state.items.length;
        sizeToContainer();
        const n = computeCountForArea();
        const diff = n - before;
        if (diff > 0) state.items.push(...Array(diff).fill(0).map(makeItem));
        else if (diff < 0) state.items.splice(n);

        if (prefersReduced) {
          ctx.clearRect(0, 0, state.w, state.h);
          if (backgroundTint) {
            ctx.fillStyle = backgroundTint;
            ctx.fillRect(0, 0, state.w, state.h);
          }
          state.items.forEach((p) => {
            ctx.globalAlpha = p.alphaBase;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = shadowBlurLow;
            if (p.shape === "dot") drawDot(p);
            else if (p.shape === "diamond") drawDiamond(p);
            else drawStar(p);
          });
        }
      });
    };

    // Start animation
    rafRef.current = requestAnimationFrame(render);

    // Resize listeners
    if (fixed) {
      window.addEventListener("resize", scheduleResize);
    } else {
      const parent = canvas.parentElement;
      if (parent && "ResizeObserver" in window) {
        roRef.current = new ResizeObserver(scheduleResize);
        roRef.current.observe(parent);
      } else {
        window.addEventListener("resize", scheduleResize);
      }
    }

    // IntersectionObserver: pause when <60% visible (earlier)
    if (pauseWhenOffscreen && "IntersectionObserver" in window) {
      ioRef.current = new IntersectionObserver(
        (entries) => {
          const e = entries[0];
          onscreenRef.current = !!e && e.isIntersecting && e.intersectionRatio >= onscreenThreshold;
        },
        { root: null, threshold: [0, onscreenThreshold], rootMargin: onscreenRootMargin }
      );
      ioRef.current.observe(canvas);
    }

    // Page visibility
    const visHandler = () => {
      docVisibleRef.current = document.visibilityState !== "hidden";
    };
    if (pauseWhenHidden && typeof document !== "undefined") {
      document.addEventListener("visibilitychange", visHandler);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      if (fixed) {
        window.removeEventListener("resize", scheduleResize);
      } else {
        if (roRef.current) {
          roRef.current.disconnect();
          roRef.current = null;
        } else {
          window.removeEventListener("resize", scheduleResize);
        }
      }
      if (ioRef.current) {
        ioRef.current.disconnect();
        ioRef.current = null;
      }
      if (pauseWhenHidden) {
        document.removeEventListener("visibilitychange", visHandler);
      }
    };
  }, [
    backgroundTint,
    colors,
    count,
    fixed,
    zIndex,
    pauseWhenOffscreen,
    pauseWhenHidden,
    maxDpr,
    targetFps,
    onscreenThreshold,
    onscreenRootMargin,
    shadowBlurLow,
  ]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: fixed ? "fixed" : "absolute",
        inset: 0,
        zIndex,
        pointerEvents: "none",
      }}
    />
  );
}

export default AnimatedBackgroundProjects;
