// src/components/layout/AnimatedBackgroundResume.jsx
// Concentric rings + orbiters. Palette: #25445C / #E39C2C. GPU transforms, respects prefers-reduced-motion.

import React, { useMemo } from "react";

export default function AnimatedBackgroundResume({ zIndex = 1 }) {
  // Read the CSS variable from the computed styles at runtime (with fallback),
  // so the component stays stable even if the CSS hasn't been updated yet.
  const ringsTranslateY = useMemo(() => {
    if (typeof window === "undefined") return "-28%"; // SSR safeguard
    const root = document.querySelector(".resume-hero") || document.documentElement;
    const val = getComputedStyle(root).getPropertyValue("--rings-ty")?.trim();
    return val && val !== "" ? val : "-28%";
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex,
        pointerEvents: "none",
        overflow: "hidden",
        display: "grid",
        placeItems: "center",
      }}
    >
      <style>{`
        /* Stable square that scales with layout */
        .rings-frame {
          width: min(82vw, 920px);
          height: auto;
          aspect-ratio: 1 / 1;
          margin: 0 auto;
        }
        @media (min-width: 1400px) { .rings-frame { width: min(70vw, 920px); } }
        @media (max-width: 900px)   { .rings-frame { width: min(88vmin, 620px); } }
        @media (max-width: 600px)   { .rings-frame { width: 84vmin; } }

        .rings-offset {
          width: 100%;
          height: 100%;
          will-change: transform;
          margin: 0 auto;
        }

        .resume-rings { display: block; width: 100%; height: 100%; }
        .ring { fill: none; }
        .ring-blue  { stroke: #25445C; opacity: .30; }
        .ring-gold  { stroke: #E39C2C; opacity: .28; }
        .tick-blue  { stroke: #25445C; opacity: .35; }
        .tick-gold  { stroke: #E39C2C; opacity: .33; }
        .orb { fill: #E39C2C; }
        .glow { filter: url(#resume-glow); }

        .ring-group { transform-box: fill-box; transform-origin: center; will-change: transform; }
        .spin-1 { animation: resume-spin 42s linear infinite; }
        .spin-2 { animation: resume-spin 34s linear infinite reverse; }
        .spin-3 { animation: resume-spin 26s linear infinite; }
        .spin-4 { animation: resume-spin 22s linear infinite reverse; }
        .spin-5 { animation: resume-spin 18s linear infinite; }

        @keyframes resume-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        @media (prefers-reduced-motion: reduce) {
          .spin-1,.spin-2,.spin-3,.spin-4,.spin-5 { animation: none !important; }
        }
      `}</style>

      <div className="rings-frame">
        {/* IMPORTANT: transform is injected inline using the CSS var to avoid touching other styles */}
        <div
          className="rings-offset"
          style={{ transform: `translateY(${ringsTranslateY}) translateZ(0)` }}
        >
          <svg className="resume-rings" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet">
            <defs>
              <radialGradient id="resume-halo" cx="50%" cy="45%" r="40%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </radialGradient>
              <filter id="resume-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect x="0" y="0" width="1000" height="1000" fill="url(#resume-halo)" />

            <g transform="translate(500 500)">
              {[
                { r: 290, cls: "ring-blue",  sw: 2.7, spin: "spin-1", ticks: "tick-blue" },
                { r: 255, cls: "ring-gold",  sw: 2.4, spin: "spin-2", ticks: "tick-gold" },
                { r: 220, cls: "ring-blue",  sw: 2.2, spin: "spin-3", ticks: "tick-blue" },
                { r: 185, cls: "ring-gold",  sw: 2.0, spin: "spin-4", ticks: "tick-gold" },
                { r: 150, cls: "ring-blue",  sw: 1.9, spin: "spin-5", ticks: "tick-blue" },
              ].map((cfg, i) => (
                <g key={i} className={`ring-group ${cfg.spin}`}>
                  <circle className={`ring ${cfg.cls}`} r={cfg.r} strokeWidth={cfg.sw} />
                  {Array.from({ length: 12 }).map((_, k) => (
                    <line
                      key={k}
                      className={cfg.ticks}
                      x1={cfg.r - 8}
                      y1="0"
                      x2={cfg.r}
                      y2="0"
                      strokeWidth="1.4"
                      transform={`rotate(${(k * 360) / 12})`}
                    />
                  ))}
                  {[0, 120, 240].map((deg, j) => (
                    <g key={j} transform={`rotate(${deg}) translate(${cfg.r} 0)`}>
                      <circle className="orb glow" r={Math.max(3.2, 5 - i * 0.4)} />
                      <circle fill="#fff" r={Math.max(1.2, 2 - i * 0.2)} />
                    </g>
                  ))}
                </g>
              ))}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
