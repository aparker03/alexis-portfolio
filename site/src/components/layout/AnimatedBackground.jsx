// src/components/AnimatedBackground.jsx

import React, { useRef, useEffect } from "react";

function AnimatedBackground({ count = 70, targetFps = 24, maxDpr = 1 }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;
    const state = { width: 0, height: 0, stars: [] };
    let animationFrameId = 0;
    let frameTimerId = 0;
    let resizeFrameId = 0;
    let isVisible = document.visibilityState !== "hidden";
    let isOnscreen = true;
    let observer;

    const getDpr = () =>
      Math.min(Math.max(window.devicePixelRatio || 1, 1), maxDpr);

    const makeStar = () => ({
      x: Math.random() * state.width,
      y: Math.random() * state.height,
      r: Math.random() * 1.1 + 0.35,
      dx: (Math.random() - 0.5) * 0.12,
      dy: (Math.random() - 0.5) * 0.12,
    });

    const resizeCanvas = () => {
      const dpr = getDpr();
      state.width = Math.max(
        1,
        canvas.parentElement?.clientWidth || window.innerWidth
      );
      state.height = Math.max(
        1,
        canvas.parentElement?.clientHeight || window.innerHeight
      );
      canvas.width = Math.floor(state.width * dpr);
      canvas.height = Math.floor(state.height * dpr);
      canvas.style.width = `${state.width}px`;
      canvas.style.height = `${state.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      state.stars = Array(count).fill().map(makeStar);
    };

    const scheduleResize = () => {
      if (resizeFrameId) return;
      resizeFrameId = requestAnimationFrame(() => {
        resizeFrameId = 0;
        resizeCanvas();
        draw();
      });
    };

    const draw = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, state.width, state.height);

      ctx.fillStyle = "white";
      ctx.shadowBlur = 0;

      state.stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();

        if (prefersReduced) return;

        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0 || star.x > state.width) star.dx *= -1;
        if (star.y < 0 || star.y > state.height) star.dy *= -1;
      });
    };

    const scheduleFrame = (delay = 0) => {
      if (frameTimerId) clearTimeout(frameTimerId);
      frameTimerId = window.setTimeout(() => {
        animationFrameId = requestAnimationFrame(animate);
      }, delay);
    };

    const animate = () => {
      if (!isVisible || !isOnscreen) {
        scheduleFrame(300);
        return;
      }

      draw();
      scheduleFrame(targetFps && targetFps > 0 ? 1000 / targetFps : 0);
    };

    resizeCanvas();
    draw();
    if (!prefersReduced) scheduleFrame();
    window.addEventListener("resize", scheduleResize);

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState !== "hidden";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          isOnscreen = Boolean(entry?.isIntersecting);
        },
        { threshold: 0.05 }
      );
      observer.observe(canvas);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (frameTimerId) clearTimeout(frameTimerId);
      if (resizeFrameId) cancelAnimationFrame(resizeFrameId);
      window.removeEventListener("resize", scheduleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (observer) observer.disconnect();
    };
  }, [count, maxDpr, targetFps]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
}

export default AnimatedBackground;
