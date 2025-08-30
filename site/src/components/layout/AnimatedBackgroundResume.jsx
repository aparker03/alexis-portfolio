// src/components/layout/AnimatedBackgroundResume.jsx
// Concentric rings (5) + 3 orbiters per ring (15 total).
// Colors: #25445C (blue) and #E39C2C (gold).
// Pure CSS transforms => fast. Respects prefers-reduced-motion.

import React from "react";

export default function AnimatedBackgroundResume({ zIndex = 1 }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <style>{`
        .resume-rings { width: 100%; height: 100%; display:block; }
        .ring { fill: none; }
        .ring-blue  { stroke: #25445C; opacity: .30; }
        .ring-gold  { stroke: #E39C2C; opacity: .28; }
        .tick-blue  { stroke: #25445C; opacity: .35; }
        .tick-gold  { stroke: #E39C2C; opacity: .33; }
        .orb { fill: #E39C2C; }
        .glow { filter: url(#resume-glow); }

        /* Ensure CSS rotation uses the element's own box center */
        .ring-group { transform-box: fill-box; transform-origin: center; }
        .spin-1 { animation: resume-spin 42s linear infinite; }
        .spin-2 { animation: resume-spin 34s linear infinite reverse; }
        .spin-3 { animation: resume-spin 26s linear infinite; }
        .spin-4 { animation: resume-spin 22s linear infinite reverse; }
        .spin-5 { animation: resume-spin 18s linear infinite; }

        @keyframes resume-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        @media (prefers-reduced-motion: reduce) {
          .spin-1,.spin-2,.spin-3,.spin-4,.spin-5 { animation: none; }
        }
      `}</style>

      {/* ViewBox: center at (500,215) to sit behind avatar */}
      <svg className="resume-rings" viewBox="0 0 1000 500" preserveAspectRatio="none">
        <defs>
          <radialGradient id="resume-halo" cx="50%" cy="43%" r="36%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <filter id="resume-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <rect x="0" y="0" width="100%" height="100%" fill="url(#resume-halo)" />

        {/* Rings stack */}
        <g transform="translate(500 215)">
          {[
            { r: 210, cls: "ring-blue",  sw: 2.6, spin: "spin-1", ticks: "tick-blue" },
            { r: 180, cls: "ring-gold",  sw: 2.2, spin: "spin-2", ticks: "tick-gold" },
            { r: 150, cls: "ring-blue",  sw: 2.0, spin: "spin-3", ticks: "tick-blue" },
            { r: 120, cls: "ring-gold",  sw: 1.9, spin: "spin-4", ticks: "tick-gold" },
            { r:  92, cls: "ring-blue",  sw: 1.8, spin: "spin-5", ticks: "tick-blue" },
          ].map((cfg, i) => (
            <g key={i} className={`ring-group ${cfg.spin}`}>
              {/* ring stroke */}
              <circle className={`ring ${cfg.cls}`} r={cfg.r} strokeWidth={cfg.sw} />

              {/* subtle ticks (12 around) */}
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

              {/* orbiters: 3 per ring at 0°, 120°, 240° (group rotation animates them) */}
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
  );
}
